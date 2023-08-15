// import { Navbar, Nav } from "react-bootstrap";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Button} from "@nextui-org/react";
import {Link} from 'react-router-dom'
import Login from "./Login";
import Register from "./Register";
import {useDisclosure} from "@nextui-org/react";

const HeaderMP = () => {
    const { isOpen: isLoginOpen, onOpen: onLoginOpen, onOpenChange: onLoginOpenChange } = useDisclosure();
    const { isOpen: isRegisterOpen, onOpen: onRegisterOpen, onOpenChange: onRegisterOpenChange } = useDisclosure();

  return (
    <Navbar shouldHideOnScroll>
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
    </NavbarContent>
  </Navbar>
  );
};

export default HeaderMP;