import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import useGames from "../hooks/10-useGames";
import GameCard from "./11-GameCard";
import GameCardSkeleton from "./15-GameCardSkeleton";
import GameCardContainer from "./16-GameCardContainer";

/** Part One */
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
// interface Props {
//   // selectedGenre: Genre | null;
//   /** 24-Filtering Games by Platform */
//   // selectedPlatform: Platform | null;

//   /** 25-Refactoring - Extracting a Query Object */
//   gameQuery: GameQuery;
// }

// const GameGrid = ({ gameQuery }: Props) => {
//   /** 10- Moved to custom hook */
//   //   const [games, setGames] = useState<Game[]>([]);
//   //   const [error, setError] = useState("");

//   //   useEffect(() => {
//   //     apiClient
//   //       .get<FetchGamesResponse>("/games")
//   //       .then((res) => setGames(res.data.results))
//   //       .catch((err) => setError(err.message));
//   //   });
//   const {
//     data,
//     error,
//     isLoading,
//     isFetchingNextPage,
//     fetchNextPage,
//     hasNextPage,
//   } = useGames(gameQuery);
//   const skeletons = [1, 2, 3, 4, 5, 6];

//   if (error) return <Text>{error.message}</Text>;

//   /**  Advanced 30-Exercise-Implementing Infinite Scroll*/
//   const fetchedGamesCount =
//     data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

//   return (
//     <>
//       {/* Advanced 30-Exercise-Implementing Infinite Scroll
//       npm i react-infinite-scroll-component@6.1 */}
//       <InfiniteScroll
//         dataLength={fetchedGamesCount}
//         hasMore={!!hasNextPage}
//         next={() => fetchNextPage()}
//         loader={<Spinner />}
//       >
//         <SimpleGrid
//           columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
//           spacing={6}
//           padding="10px"
//         >
//           {isLoading &&
//             skeletons.map((skeleton) => (
//               <GameCardContainer key={skeleton}>
//                 <GameCardSkeleton />
//               </GameCardContainer>
//             ))}
//           {/* Advanced - 29-Exercise-Implementing Infinite Queries */}
//           {data?.pages.map((page, index) => (
//             <React.Fragment key={index}>
//               {page.results.map((game) => (
//                 <GameCardContainer key={game.id}>
//                   <GameCard game={game}></GameCard>
//                 </GameCardContainer>
//               ))}
//             </React.Fragment>
//           ))}

//           {/* Removed
//       {data?.results.map((game) => (
//         <GameCardContainer key={game.id}>
//           <GameCard game={game}></GameCard>
//         </GameCardContainer>
//       ))} */}
//         </SimpleGrid>
//       </InfiniteScroll>

//       {/* With infinite scroll, we no longer need the load button

//       {hasNextPage && (
//         <Button onClick={() => fetchNextPage()} marginY={5}>
//           {isFetchingNextPage ? "Loading..." : "Load More"}
//         </Button>
//       )} */}
//     </>
//   );
// };

// export default GameGrid;

/** Part Two */
const GameGrid = () => {
  const {
    data,
    error,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];

  if (error) return <Text>{error.message}</Text>;

  /**  Advanced 30-Exercise-Implementing Infinite Scroll*/
  const fetchedGamesCount =
    data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

  return (
    <>
      {/* Advanced 30-Exercise-Implementing Infinite Scroll
      npm i react-infinite-scroll-component@6.1 */}
      <InfiniteScroll
        dataLength={fetchedGamesCount}
        hasMore={!!hasNextPage}
        next={() => fetchNextPage()}
        loader={<Spinner />}
      >
        <SimpleGrid
          columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
          spacing={6}
          padding="10px"
        >
          {isLoading &&
            skeletons.map((skeleton) => (
              <GameCardContainer key={skeleton}>
                <GameCardSkeleton />
              </GameCardContainer>
            ))}
          {/* Advanced - 29-Exercise-Implementing Infinite Queries */}
          {data?.pages.map((page, index) => (
            <React.Fragment key={index}>
              {page.results.map((game) => (
                <GameCardContainer key={game.id}>
                  <GameCard game={game}></GameCard>
                </GameCardContainer>
              ))}
            </React.Fragment>
          ))}

          {/* Removed
      {data?.results.map((game) => (
        <GameCardContainer key={game.id}>
          <GameCard game={game}></GameCard>
        </GameCardContainer>
      ))} */}
        </SimpleGrid>
      </InfiniteScroll>

      {/* With infinite scroll, we no longer need the load button

      {hasNextPage && (
        <Button onClick={() => fetchNextPage()} marginY={5}>
          {isFetchingNextPage ? "Loading..." : "Load More"}
        </Button>
      )} */}
    </>
  );
};

export default GameGrid;
