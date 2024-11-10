import env from "@/constants/env";
import { BaseHttpClient } from "./base-http-client";
import constants from "@/constants/constants";
import { addTokenInterceptor } from "./interceptors/tokenInterceptor";

class HttpClient extends BaseHttpClient {
  constructor() {
    const urlMapper: { [key in typeof env.EXPO_APP_ENV]: string } = {
      development: constants.REACT_APP_API_DEV,
      production: constants.REACT_APP_API_PROD,
    };
    super(urlMapper[env.EXPO_APP_ENV]);
    addTokenInterceptor(this.apiInstance);
  }
}

const httpClient = new HttpClient();
export { httpClient };
