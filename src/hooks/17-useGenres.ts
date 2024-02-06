import { FetchResponse } from "./18-useData";
import genres from "../data/36-genres";
import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/9-api-client";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

/** 36-Shipping Static Data -- can also be applied to Platform drop down list*/
// const useGenres = () => useData<Genre>("/genres"); -- change to:

/** Advanced - 24-Fetching Query */
// const useGenres = () => ({ data: genres, isLoading: false, error: null });
const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: () =>
      apiClient.get<FetchResponse<Genre>>("/genres").then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, //24 hours
    initialData: { count: genres.length, results: genres },
  });

export default useGenres;

/** Replaced the bollowing code with Generic Hook */

// import { useEffect, useState } from "react";
// import apiClient from "../services/9-api-client";
// import { CanceledError } from "axios";

// interface Genre {
//   id: number;
//   name: string;
// }

// interface FetchGenresResponse {
//   count: number;
//   results: Genre[];
// }

// const useGenres = () => {
//   const [genres, setGenres] = useState<Genre[]>([]);
//   const [error, setError] = useState("");
//   const [isLoading, setLoading] = useState(false);

//   useEffect(() => {
//     //handle cancellations
//     const controller = new AbortController();

//     setLoading(true);

//     apiClient
//       .get<FetchGenresResponse>("/genres", { signal: controller.signal })
//       .then((res) => {
//         setGenres(res.data.results);
//         setLoading(false);
//       })
//       .catch((err) => {
//         if (err instanceof CanceledError) return;
//         setError(err.message);
//         setLoading(false);
//       });

//     return () => controller.abort();
//   }, []);

//   return { genres, error, isLoading };
// };

// export default useGenres;
