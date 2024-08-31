import { useQuery } from "@tanstack/react-query";
import genres from "../data/36-genres";
import ms from "ms";
import APIClient from "../services/9-api-client";
import Genre from "../entities/Genre";

const apiClient = new APIClient<Genre>("/genres");

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,

    staleTime: ms("24h"),
    initialData: genres,
  });

export default useGenres;











