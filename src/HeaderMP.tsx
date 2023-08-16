import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Button, useDisclosure, Switch} from "@nextui-org/react";
import {MoonIcon} from "./IconComponents/MoonIcon";
import {SunIcon} from "./IconComponents/SunIcon";
import {Link} from 'react-router-dom'
import Login from "./Login";
import Register from "./Register";
import { ThemeProps } from "./types";

const HeaderMP = ({onThemeChange}:ThemeProps) => {
    const { isOpen: isLoginOpen, onOpen: onLoginOpen, onOpenChange: onLoginOpenChange } = useDisclosure();
    const { isOpen: isRegisterOpen, onOpen: onRegisterOpen, onOpenChange: onRegisterOpenChange } = useDisclosure();

  return (
    <Navbar shouldHideOnScroll height="10vh">
    <NavbarBrand>
      <p className="font-bold text-inherit">Tortoise</p>
    </NavbarBrand>
    <NavbarContent className="sm:flex gap-4" justify="center">
      <NavbarItem isActive>
      <Link to="#">
          Home
        </Link>
      </NavbarItem>
      <NavbarItem>
        <Link to="">
          Customers
        </Link>
      </NavbarItem>
      <NavbarItem>
      <Link to="">
          Team
        </Link>
      </NavbarItem>
    </NavbarContent>
    <NavbarContent justify="end">
      <NavbarItem className="lg:flex">
      <Button onPress={onLoginOpen} color="primary">Login</Button>
          <Login isOpen={isLoginOpen} onOpenChange={onLoginOpenChange} />
        </NavbarItem>
        <NavbarItem>
          <Button onPress={onRegisterOpen} color="primary">Register</Button>
          <Register isOpen={isRegisterOpen} onOpenChange={onRegisterOpenChange} />
      </NavbarItem>
      <NavbarItem>    <Switch
      defaultSelected
      onChange={onThemeChange}
      size="lg"
      color="primary"
      thumbIcon={({ isSelected}) =>
        isSelected ? (
          <SunIcon/>
        ) : (
          <MoonIcon/>
        )
      }
    >
    </Switch></NavbarItem>
    </NavbarContent>
  </Navbar>
  );
};

export default HeaderMP;