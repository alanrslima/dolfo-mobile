// import {sessionStorage} from '@src/storage/sessionStorage';
import { AxiosError, AxiosInstance } from "axios";
// import {getSession} from 'next-auth/react';

export function addTokenInterceptor(api: AxiosInstance): AxiosInstance {
  // console.log(ctx);
  //   api.interceptors.request.use(value => {
  //     return {
  //       ...value,
  //       auth: {
  //         username: 'Navega4133_00',
  //         password: 'Naveg@',
  //       },
  //     };
  //   });

  api.interceptors.request.use(
    async (config) => {
      try {
        // /** @param {import("types/session").Session} Session */
        // const session = await getSession(ctx);

        // if (!session) {
        //   return {...config};
        // }

        // const credentials = await sessionStorage().get();
        const credentials = `bearer token`;
        config.headers.set("Authorization", credentials);
        return {
          ...config,
          // ...(credentials && { headers: { Authorization: credentials } }),
        };
      } catch {
        return { ...config };
      }
    },
    (error: AxiosError) => {
      return Promise.reject(error);
    }
  );

  return api;
}
