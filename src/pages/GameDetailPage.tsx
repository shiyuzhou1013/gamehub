import { useParams } from "react-router-dom";
import useGame from "../hooks/15(Part3)-useGams";
import { GridItem, Heading, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import ExpandableText from "../components/17(Part3)-ExpandableText";
import DefinitionItem from "../components/18(Part3)-DefinitionItem";
import CriticScore from "../components/13-CriticScore";
import GameAttributes from "../components/18(Part3)-GameAttributes";
import GameTrailer from "../components/19(Part3)-GameTrailer";
import GameScreenshots from "../components/20(Part3)-GameScreenshots";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;

  if (error || !game) throw error;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
      <GridItem>
        <Heading>{game.name}</Heading>
        <ExpandableText>{game.description_raw}</ExpandableText>
        <GameAttributes game={game} />
      </GridItem>
      <GridItem>
        <GameTrailer gameId={game.id} />
        <GameScreenshots gameId={game.id} />
      </GridItem>
    </SimpleGrid>
  );
};

export default GameDetailPage;
