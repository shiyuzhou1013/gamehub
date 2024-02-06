/** Game Data
 * website: rawg.io
 * API key: 6f825012d6464a42bf9354143a89fd09
 * npm i axios
 */

import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "6f825012d6464a42bf9354143a89fd09",
  },
});

export interface FetchResponse<T> {
  count: number;
  results: T[];
}
