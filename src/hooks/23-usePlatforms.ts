import platforms from "../data/36-platforms";
import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/9-api-client";
import ms from "ms";
import { Platform } from "../entities/Platform";

/** Advanced - 28-Exercise-Creating a Reusable API Client */
const apiClient = new APIClient<Platform>("/platforms/lists/parents");

/** Advanced - 25-Exercise-Fetching Platforms */
// const usePlatforms = () => useData<Platform>("/platforms/lists/parents");
const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    /** Advanced - 28-Exercise-Creating a Reusable API Client */
    queryFn: apiClient.getAll,
    // () =>
    //   apiClient
    //     .get<FetchResponse<Platform>>("/platforms/lists/parents")
    //     .then((res) => res.data),

    /** Advanced 33-Exercise-Simplifying Time Caculations */
    // staleTime: 24 * 60 * 60 * 1000, //24 hours
    staleTime: ms("24h"),
    initialData: platforms,
  });

export default usePlatforms;
