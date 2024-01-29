import useData from "./18-useData";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGames = () => useData<Game>("/games");

export default useGames;

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
