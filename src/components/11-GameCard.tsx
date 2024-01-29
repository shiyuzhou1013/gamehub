import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";
import { Game } from "../hooks/10-useGames";
import PlatformIconList from "./12-PlatformIconList";
import CriticScore from "./13-CriticScore";

interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <HStack justifyContent="space-between">
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
