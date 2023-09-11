import {useContext} from 'react'
import { Button, Navbar } from "flowbite-react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import jwt_decode from "jwt-decode"


const NavBar = () => {
  const { user, logoutUser } = useContext(AuthContext);
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
            <Navbar.Link active className="cursor-pointer">
              <p>Home</p>
            </Navbar.Link>
          </Link>
          <Link to={"/maintenance"}>
            <Navbar.Link className="cursor-pointer">About</Navbar.Link>
          </Link>
          <Link to={"/maintenance"}>
            <Navbar.Link className="cursor-pointer">Services</Navbar.Link>
          </Link>
          <Link to={"/maintenance"}>
            <Navbar.Link className="cursor-pointer">Pricing</Navbar.Link>
          </Link>
          <Link to={"/maintenance"}>
            <Navbar.Link to="/" className="cursor-pointer">
              Contact
            </Navbar.Link>
          </Link>
        </Navbar.Collapse>
      </Navbar>
      <hr className="w-90 h-0.5 mx-auto my-4 bg-gray-100 border-0 rounded md:my-2 dark:bg-gray-700" />
    </>
  );
};

export default NavBar;
