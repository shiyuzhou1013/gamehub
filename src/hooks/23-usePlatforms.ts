import platforms from "../data/36-platforms";
import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/9-api-client";
import ms from "ms";
import Platform from "../entities/Platform";

const apiClient = new APIClient<Platform>("/platforms/lists/parents");

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,

    staleTime: ms("24h"),
    initialData: platforms,
  });

export default usePlatforms;
