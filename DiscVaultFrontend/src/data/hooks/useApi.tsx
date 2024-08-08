// import { BaseAPI, Configuration } from "@/api";
// import { useAuth } from "react-oidc-context";

// type ApiConstructor<T extends BaseAPI> = new (config: Configuration) => T;

// export function useApi<T extends BaseAPI>(api: ApiConstructor<T>) {
//   const auth = useAuth();
//   const token = auth.user?.access_token;
//   const apiDomain = window.env?.REACT_APP_API_DOMAIN || process.env.REACT_APP_API_DOMAIN || "not set";

//   // const errorHandlingMiddleware: Middleware = {
//   //   post: async (context: ResponseContext): Promise<Response | void> => {
//   //     const { response } = context;
//   //     if (
//   //       (response?.status && response.status === 401) ||
//   //       Boolean(response.status === 500 && response?.statusText.includes(filtered500Response))
//   //     ) {
//   //       openModal(<SessionExpiredModal />);
//   //       return response;
//   //     }
//   //     return response;
//   //   },
//   //   onError: async (context: ErrorContext): Promise<Response | void> => {
//   //     const { error } = context;
//   //     const responseError = error as Error;
//   //     if (responseError && responseError.message.includes(filtered500Response)) {
//   //       openModal(<SessionExpiredModal />);
//   //     }
//   //     throw responseError;
//   //   },
//   // };

//   const basePath = apiDomain;

//   return new api(
//     new Configuration({
//       basePath: basePath,
//       // TODO: Add token auth in next PR with implementation
//       headers: {
//         ...(token
//           ? {
//               ["Authorization"]: `Bearer ${token}`,
//             }
//           : {}),
//         /* TODO: configure headers */
//       },
//       middleware: [],
//     }),
//   );
// }
