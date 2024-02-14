import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./8-ColorModeSwitch";
import SearchInput from "./30-SearchInput";
import { Link } from "react-router-dom";

/** Part One */
// interface Props {
//   onSearch: (searchText: string) => void;
// }

// const NavBar = ({ onSearch }: Props) => {
//   return (
//     <HStack padding="10px">
//       <Image src={logo} boxSize="60px" />
//       <SearchInput onSearch={onSearch} />
//       <ColorModeSwitch />
//     </HStack>
//   );
// };

// export default NavBar;

/** Part Two */
const NavBar = () => {
  return (
    <HStack padding="10px">
      <Link to="/">
        <Image src={logo} boxSize="60px" objectFit="cover" />
      </Link>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
