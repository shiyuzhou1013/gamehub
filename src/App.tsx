import { Box, Flex, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/6-NavBar";
import GameGrid from "./components/9-GameGrid";
import GenreList from "./components/17-GenreList";
import PlatformSelector from "./components/23-PlatformSelector";
import SortSelector from "./components/26-SortSelector";
import GameHeading from "./components/32-GameHeading";
import useGameQueryStore from "./services/22-store";

// function App() {
/** 5-Creating a Responsive Layout*/

// Default breakpoints:
// const breakpoints = {
//   base: "0em", // 0px
//   sm: "30em", // ~480px. em is a relative unit and is dependant on the font size.
//   md: "48em", // ~768px
//   lg: "62em", // ~992px
//   xl: "80em", // ~1280px
//   "2xl": "96em", // ~1536px
// };

/** 21-Filtering Games by Genre
 * How we share state between two components? E.g. Genres and games --- We should lift it up to the closest parent
 * The Genres component should notify the app component to set the selected genre, as the component that holds some state should be the one updating it*/

// const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

/** 24 - Filtering Games by Platform*/

// const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null);

/** 25-Refactoring - Extracting a Query Object -- code below 21 and 24 will become : */
// const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

/** Part Two - 22-Exercise-Setting Up a Zustand Store */
// const { gameQuery, setSearchText, setGenreId, setPlatformId, setSortOrder } =
//   useGameQueryStore();

// return (
/** Part One */
// <Grid
//   templateAreas={{
//     base: `"nav" "main"`,
//     lg: `"nav nav" " aside main"`,
//   }}
//   templateColumns={{
//     base: "1fr",
//     lg: "200px 1fr",
//   }}
// >
//   <GridItem area="nav">
//     <NavBar
//       onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })}
//     />
//   </GridItem>
//   <Show above="lg">
//     <GridItem area="aside" paddingX={5}>
//       <GenreList
//         selectedGenreId={gameQuery.genreId}
//         onSelectGenre={(genre) =>
//           setGameQuery({ ...gameQuery, genreId: genre.id })
//         }
//       />
//     </GridItem>
//   </Show>
//   <GridItem area="main">
//     <Box paddingLeft={2}>
//       <GameHeading gameQuery={gameQuery} />
//       <Flex marginBottom={5}>
//         <Box marginRight={5}>
//           <PlatformSelector
//             selectedPlatformId={gameQuery.platformId}
//             onSelectedPlatform={(platform) =>
//               setGameQuery({ ...gameQuery, platformId: platform.id })
//             }
//           />
//         </Box>

//         <SortSelector
//           sortOrder={gameQuery.sortOrder}
//           onSelectSortOrder={(sortOrder) =>
//             setGameQuery({ ...gameQuery, sortOrder })
//           }
//         />
//       </Flex>
//     </Box>
//     <GameGrid gameQuery={gameQuery} />
//   </GridItem>
// </Grid>

/** Part Two*/
//     <Grid
//       templateAreas={{
//         base: `"nav" "main"`,
//         lg: `"nav nav" " aside main"`,
//       }}
//       templateColumns={{
//         base: "1fr",
//         lg: "200px 1fr",
//       }}
//     >
//       <GridItem area="nav">
//         <NavBar />
//       </GridItem>
//       <Show above="lg">
//         <GridItem area="aside" paddingX={5}>
//           <GenreList />
//         </GridItem>
//       </Show>
//       <GridItem area="main">
//         <Box paddingLeft={2}>
//           <GameHeading />
//           <Flex marginBottom={5}>
//             <Box marginRight={5}>
//               <PlatformSelector />
//             </Box>
//             <SortSelector />
//           </Flex>
//         </Box>
//         <GameGrid />
//       </GridItem>
//     </Grid>
//   );
// }

// export default App;

/** Part Three -- all moved to HomePage.tsx*/
//     <Grid
//       templateAreas={{
//         base: `"main"`,
//         lg: `" aside main"`,
//       }}
//       templateColumns={{
//         base: "1fr",
//         lg: "200px 1fr",
//       }}
//     >
//       <Show above="lg">
//         <GridItem area="aside" paddingX={5}>
//           <GenreList />
//         </GridItem>
//       </Show>
//       <GridItem area="main">
//         <Box paddingLeft={2}>
//           <GameHeading />
//           <Flex marginBottom={5}>
//             <Box marginRight={5}>
//               <PlatformSelector />
//             </Box>
//             <SortSelector />
//           </Flex>
//         </Box>
//         <GameGrid />
//       </GridItem>
//     </Grid>
//   );
// }

// export default App;
