const axios = require("axios");
const cheerio = require("cheerio");
const supabase = require("@supabase/supabase-js");

exports.handler = async (event) => {
  const url = "https://www.marshallstreetdiscgolf.com/flightguide";
  const client = supabase.createClient(
    "https://cwphgooaylbrttdmyktg.supabase.co",
    process.env.db_api_key
  );

  try {
    const response = await axios.get(url);
    const html = response.data;
    var statusCode = 200;

    // Load the HTML into cheerio
    const $ = cheerio.load(html);

    const discs = [];
    $("div.disc-item").each((index, element) => {
      discs.push({
        name: $(element).text(),
        brand: $(element).attr("data-brand"),
        speed: $(element).attr("data-speed"),
        turn: $(element).attr("data-turn"),
        fade: $(element).attr("data-fade"),
        glide: $(element).attr("data-glide"),
        category: $(element).attr("data-category"),
      });
    });

    const { error, status } = await client.from("discs").upsert(discs, {
      ignoreDuplicates: false,
      onConflict: "name, brand",
    });

    statusCode = status;

    if (error) {
      throw new Error(error.message);
    }

    return {
      statusCode: statusCode,
      body: JSON.stringify({
        message: `${discs.length} discs uploaded successfully!`,
        discs: discs,
      }),
    };
  } catch (error) {
    console.error("Unable to upload discs: ", error);

    return {
      statusCode: 500,
      body: JSON.stringify({
        message: "Unable to upload discs: ",
        error: error.message,
      }),
    };
  }
};
