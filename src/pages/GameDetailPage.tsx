import { useParams } from "react-router-dom";
import useGame from "../hooks/15(Part3)-useGams";
import { Heading, Spinner, Text } from "@chakra-ui/react";
import ExpandableText from "../components/17(Part3)-ExpandableText";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;

  if (error || !game) throw error;

  return (
    <>
      <Heading>{game.name}</Heading>
      <ExpandableText>{game.description_raw}</ExpandableText>
    </>
  );
};

export default GameDetailPage;
