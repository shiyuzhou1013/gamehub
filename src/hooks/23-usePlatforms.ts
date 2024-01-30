import { Platform } from "./10-useGames";
import useData from "./18-useData";

const usePlatforms = () => useData<Platform>("/platforms/lists/parents");

export default usePlatforms;
