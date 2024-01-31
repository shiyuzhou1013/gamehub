import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/10-useGames";
import GameCard from "./11-GameCard";
import GameCardSkeleton from "./15-GameCardSkeleton";
import GameCardContainer from "./16-GameCardContainer";
import { GameQuery } from "../App";

/** 10- Moved to custom hook */
// interface Game {
//   id: number;
//   name: string;
// }

// interface FetchGamesResponse {
//   count: number;
//   results: Game[];
// }

/** 21-Filtering Games by Genre */
interface Props {
  // selectedGenre: Genre | null;
  /** 24-Filtering Games by Platform */
  // selectedPlatform: Platform | null;

  /** 25-Refactoring - Extracting a Query Object */
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  /** 10- Moved to custom hook */
  //   const [games, setGames] = useState<Game[]>([]);
  //   const [error, setError] = useState("");

  //   useEffect(() => {
  //     apiClient
  //       .get<FetchGamesResponse>("/games")
  //       .then((res) => setGames(res.data.results))
  //       .catch((err) => setError(err.message));
  //   });
  const { data, error, isLoading } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 3 }}
        padding="10px"
        spacing={3}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {data.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game}></GameCard>
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
