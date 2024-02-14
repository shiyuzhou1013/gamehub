import { useInfiniteQuery } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "../services/9-api-client";
import ms from "ms";
import useGameQueryStore from "../services/22-store";
import Game from "../entities/Game";

/** Advanced - 28-Exercise-Creating a Reusable API Client */
const apiClient = new APIClient<Game>("/games");

/** Part One */
/** Advanced - 26-Exercise-Fetching Games */
// const useGames = (gameQuery: GameQuery) =>
//   /** Advanced - 29-Exercise-Implementing Infinite Queries */
//   useInfiniteQuery<FetchResponse<Game>, Error>({
//     queryKey: ["games", gameQuery],
//     queryFn: ({ pageParam = 1 }) =>
//       apiClient.getAll({
//         params: {
//           genres: gameQuery.genreId,
//           parent_platforms: gameQuery.platformId,
//           ordering: gameQuery.sortOrder,
//           search: gameQuery.searchText,
//           page: pageParam,
//         },
//       }),
//     getNextPageParam: (lastPage, allPages) => {
//       return lastPage.next ? allPages.length + 1 : undefined;
//     },

//     /** Advanced 33-Exercise-Simplifying Time Caculations */
//     // staleTime: 24 * 60 * 60 * 1000, //24 hours
//     staleTime: ms("24h"),
//     //   () =>
//     //     apiClient
//     //       .get<FetchResponse<Game>>("/games", {
//     //         params: {
//     //           genres: gameQuery.genre?.id,
//     //           parent_platforms: gameQuery.platform?.id,
//     //           ordering: gameQuery.sortOrder,
//     //           search: gameQuery.searchText,
//     //         },
//     //       })
//     //       .then((res) => res.data),
//   });

// export default useGames;

/** Replaced the bollowing code with Generic Hook */

// /** 12-Platform Icons */
// export interface Platform {
//   id: number;
//   name: string;
//   slug: string;
// }

// export interface Game {
//   id: number;
//   name: string;
//   background_image: string;
//   parent_platforms: { platform: Platform }[];
//   metacritic: number;
// }

// interface FetchGamesResponse {
//   count: number;
//   results: Game[];
// }

// const useGames = () => {
//   const [games, setGames] = useState<Game[]>([]);
//   const [error, setError] = useState("");

//   //15-Loading
//   const [isLoading, setLoading] = useState(false);

//   useEffect(() => {
//     //handle cancellations
//     const controller = new AbortController();

//     setLoading(true);

//     apiClient
//       .get<FetchGamesResponse>("/games", { signal: controller.signal })
//       .then((res) => {
//         setGames(res.data.results);
//         setLoading(false);
//       })
//       .catch((err) => {
//         if (err instanceof CanceledError) return;
//         setError(err.message);
//         setLoading(false);
//       });

//     return () => controller.abort();
//   }, []);

//   return { games, error, isLoading };
// };

// export default useGames;

/** Part Two */
const useGames = () => {
  const gameQuery = useGameQueryStore((s) => s.gameQuery);

  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam,
        },
      }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    staleTime: ms("24h"),
  });
};

export default useGames;
