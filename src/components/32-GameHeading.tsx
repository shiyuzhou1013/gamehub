import { Heading } from "@chakra-ui/react";
import usePlatform from "../hooks/32-usePlatform";
import useGenre from "../hooks/32-useGenre";
import useGameQueryStore from "../services/22-store";

/** Part One */
// interface Props {
//   gameQuery: GameQuery;
// }

// const GameHeading = ({ gameQuery }: Props) => {
//   /**  Advanced - 32-Creating Lookup Hooks*/
//   const genre = useGenre(gameQuery.genreId);

//   const platform = usePlatform(gameQuery.platformId);

//   /** Logic
//    * 1st -- render Games
//    * 2nd -- if user selected a genre, we render {genre} Games
//    * 2nd -- if user selected a platform, we render {platform} Games
//    * 3rd -- if user selected both genre and platform, we render {platform} {genre} Games
//    */
//   const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;

//   return (
//     <Heading as="h1" marginY={5} fontSize="5xl">
//       {heading}
//     </Heading>
//   );
// };

// export default GameHeading;

/** Part Two */
const GameHeading = () => {
  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const genre = useGenre(genreId);

  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const platform = usePlatform(platformId);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;

  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
