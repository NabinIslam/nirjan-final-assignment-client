import {
  Avatar,
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
  Navbar,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const navigate = useNavigate();

  const { pathname } = useLocation();

  const handleLogout = () => {
    logOut()
      .then(() => {
        navigate("/login");
        toast.success("Logout successful");
      })
      .catch((err) => {
        toast.error("Couldn't log out");
      });
  };

  return (
    <header className="sticky top-0 shadow">
      <nav className="container">
        <Navbar fluid rounded>
          <Link
            href="/"
            className="rounded-lg px-2 py-1 hover:bg-black hover:bg-opacity-5"
          >
            <h3 className="text-xl font-bold">ScholarshipMania</h3>
          </Link>
          <div className="flex md:order-2">
            {user ? (
              <Dropdown
                arrowIcon={false}
                inline
                label={
                  <Avatar
                    alt={user?.displayName}
                    img={user?.photoURL}
                    rounded
                  />
                }
              >
                <Dropdown.Header>
                  <span className="block text-sm">{user?.displayName}</span>
                  <span className="block truncate text-sm font-medium">
                    {user.email}
                  </span>
                </Dropdown.Header>
                <Link to="/add-artifact">
                  <Dropdown.Item>Add Artifact</Dropdown.Item>
                </Link>

                <Link to="/my-artifacts">
                  <Dropdown.Item>My Artifacts</Dropdown.Item>
                </Link>

                <Dropdown.Divider />
                <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
              </Dropdown>
            ) : (
              <Link to="/login">
                <Button>Login</Button>
              </Link>
            )}
            <NavbarToggle />
          </div>
          <NavbarCollapse>
            <NavbarLink href="#" active>
              Home
            </NavbarLink>
            <NavbarLink href="#">About</NavbarLink>
            <NavbarLink href="#">Services</NavbarLink>
            <NavbarLink href="#">Pricing</NavbarLink>
            <NavbarLink href="#">Contact</NavbarLink>
          </NavbarCollapse>
        </Navbar>
      </nav>
    </header>
  );
};

export default Header;
