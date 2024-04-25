import { Link } from "react-router-dom";
import { LogoutBtn, Container } from "../index.js";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaBlog } from "react-icons/fa";

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ];

  return (
    <header className="w-full shadow bg-gray-500 ">
      <Container>
        <nav className="px-4 py-2 lg:py-3 flex lg:justify-between items-center  justify-evenly">
          <div className="">
            <Link to="/">
              <FaBlog className="hidden lg:flex text-white" />
            </Link>
          </div>
          <ul className="flex items-center gap-2 lg:gap-4 justify-evenly">
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.slug)}
                    className="btn btn-sm btn-outline"
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
