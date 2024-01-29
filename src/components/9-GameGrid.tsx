import { Text } from "@chakra-ui/react";
import useGames from "../hooks/10-useGames";

/** 10- Moved to custom hook */
// interface Game {
//   id: number;
//   name: string;
// }

// interface FetchGamesResponse {
//   count: number;
//   results: Game[];
// }

const GameGrid = () => {
  /** 10- Moved to custom hook */
  //   const [games, setGames] = useState<Game[]>([]);
  //   const [error, setError] = useState("");

  //   useEffect(() => {
  //     apiClient
  //       .get<FetchGamesResponse>("/games")
  //       .then((res) => setGames(res.data.results))
  //       .catch((err) => setError(err.message));
  //   });
  const { games, error } = useGames();

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
