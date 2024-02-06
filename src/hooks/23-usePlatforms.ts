import platforms from "../data/36-platforms";
import { useQuery } from "@tanstack/react-query";
import { Platform } from "./10-useGames";
import { FetchResponse } from "./18-useData";
import apiClient from "../services/9-api-client";

/** Advanced - 25-Exercise-Fetching Platforms */
// const usePlatforms = () => useData<Platform>("/platforms/lists/parents");
const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Platform>>("/platforms/lists/parents")
        .then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, //24 hours
    initialData: { count: platforms.length, results: platforms },
  });

export default usePlatforms;
