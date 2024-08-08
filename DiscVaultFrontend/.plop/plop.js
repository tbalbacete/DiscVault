import { componentGenerator } from "./plop-generator/index.js";

export default function generate(plop) {
  plop.setGenerator("component", componentGenerator);
}
