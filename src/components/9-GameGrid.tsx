import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/10-useGames";
import GameCard from "./11-GameCard";

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
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding="10px"
        spacing={10}
      >
        {games.map((game) => (
          <GameCard key={game.id} game={game}></GameCard>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
