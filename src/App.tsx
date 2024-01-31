import { Box, Flex, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/6-NavBar";
import GameGrid from "./components/9-GameGrid";
import GenreList from "./components/17-GenreList";
import { useState } from "react";
import { Genre } from "./hooks/17-useGenres";
import PlatformSelector from "./components/23-PlatformSelector";
import { Platform } from "./hooks/10-useGames";
import SortSelector from "./components/26-SortSelector";
import GameHeading from "./components/32-GameHeading";

/** 25-Refactoring - Extracting a Query Object */
export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  /** 27-Sorting Games */
  sortOrder: string;
  /** 31-Dearching Games */
  searchText: string;
}

function App() {
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
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" " aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar
          onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })}
        />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList
            selectedGenre={gameQuery.genre}
            onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={2}>
          <GameHeading gameQuery={gameQuery} />
          <Flex marginBottom={5}>
            <Box marginRight={5}>
              <PlatformSelector
                selectedPlatform={gameQuery.platform}
                onSelectedPlatform={(platform) =>
                  setGameQuery({ ...gameQuery, platform })
                }
              />
            </Box>

            <SortSelector
              sortOrder={gameQuery.sortOrder}
              onSelectSortOrder={(sortOrder) =>
                setGameQuery({ ...gameQuery, sortOrder })
              }
            />
          </Flex>
        </Box>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
