/** Game Data
 * website: rawg.io
 * API key: 6f825012d6464a42bf9354143a89fd09
 * npm i axios
 */

import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}

/** Advanced - 28-Exercise-Creating a Reusable API Client */
const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "6f825012d6464a42bf9354143a89fd09",
  },
});

class ApiClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  };
}

export default ApiClient;
