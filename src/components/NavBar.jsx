import {useContext} from 'react'
import { Button, Navbar } from "flowbite-react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import jwt_decode from "jwt-decode"
import DarkModeSwitcher from './DarkModeSwitcher';


const NavBar = () => {
  const { logoutUser } = useContext(AuthContext);
  const token = localStorage.getItem("authTokens");

  if (token) {
    const decoded = jwt_decode(token);
    var user_id = decoded.user_id;
  }

  return (
    <>
      <Navbar fluid rounded className="p-6">
        <Navbar.Brand>
          <Link
            to="/"
            className="self-center whitespace-nowrap text-xl font-semibold dark:text-white"
          >
            WANDERBLOG
          </Link>
        </Navbar.Brand>
        {token === null && (
          <div className="flex md:order-2">
            <Link to={"/Login"}>
              <Button>Login</Button>
            </Link>
            <Navbar.Toggle />
          </div>
        )}
        {token !== null && 
        <div className="flex md:order-2">
          <Link onClick={logoutUser}>
            <Button color="failure">Logout</Button>
          </Link>
          <Navbar.Toggle />
        </div>
}
        <Navbar.Collapse>
          <Link to={"/"}>
            <Navbar.Link className="cursor-pointer">
              <p>Home</p>
            </Navbar.Link>
          </Link>
          <Link to={"/blog-list"}>
            <Navbar.Link className="cursor-pointer">Blogs</Navbar.Link>
          </Link>
          <Link to={"/about"}>
            <Navbar.Link className="cursor-pointer">About</Navbar.Link>
            </Link>
          <a href="https://muminbhat.com" target='blank'>
            <Navbar.Link className="cursor-pointer">Services</Navbar.Link>
            </a>
          <a href="mailto:mumin.fayaz05@gmail.com">
            <Navbar.Link className="cursor-pointer">
              Contact
            </Navbar.Link>
          </a>
          <Navbar.Link>
          <DarkModeSwitcher/>
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
      <hr className="w-90 h-0.5 mx-auto my-4 bg-gray-100 border-0 rounded md:my-2 dark:hidden" />
    </>
  );
};

export default NavBar;
