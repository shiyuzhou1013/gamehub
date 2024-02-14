import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/23-usePlatforms";
import Platform from "../entities/Platform";
import usePlatform from "../hooks/32-usePlatform";
import useGameQueryStore from "../services/22-store";

/** Part One */
// interface Props {
//   onSelectedPlatform: (platform: Platform) => void;
//   selectedPlatformId?: number;
// }

// const PlatformSelector = ({
//   onSelectedPlatform,
//   selectedPlatformId,
// }: Props) => {
//   const { data, error } = usePlatforms();
//   const selectedPlatform = usePlatform(selectedPlatformId);

//   if (error) return null;

//   return (
//     <Menu>
//       <MenuButton as={Button} rightIcon={<BsChevronDown />}>
//         {selectedPlatform?.name || "Platforms"}
//       </MenuButton>
//       <MenuList>
//         {data?.results.map((platform) => (
//           <MenuItem
//             onClick={() => onSelectedPlatform(platform)}
//             key={platform.id}
//           >
//             {platform.name}
//           </MenuItem>
//         ))}
//       </MenuList>
//     </Menu>
//   );
// };

// export default PlatformSelector;

/** Part Two*/
const PlatformSelector = () => {
  const { data, error } = usePlatforms();

  const selectedPlatFormId = useGameQueryStore((s) => s.gameQuery.platformId);
  const selectedPlatform = usePlatform(selectedPlatFormId);

  const setSelectedPlatformId = useGameQueryStore((s) => s.setPlatformId);

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform) => (
          <MenuItem
            onClick={() => setSelectedPlatformId(platform.id)}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
