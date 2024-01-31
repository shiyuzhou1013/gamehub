import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  /** Logic
   * 1st -- render Games
   * 2nd -- if user selected a genre, we render {genre} Games
   * 2nd -- if user selected a platform, we render {platform} Games
   * 3rd -- if user selected both genre and platform, we render {platform} {genre} Games
   */
  const heading = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  } Games`;

  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
