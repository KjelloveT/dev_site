import { Link, useHistory } from "react-router-dom";

const Navbar = () => {
  const history = useHistory();

  const token = localStorage.getItem("jwt");

  const handleLogout = () => {
    localStorage.removeItem("jwt");
    localStorage.removeItem("user");
    history.push("/login");
  };

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        marginBottom: 40,
      }}
    >
      <Link to="/">Blog</Link>
      <ul style={{ display: "flex", listStyleType: "none" }}>
        {token ? (
          <>
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          </>
        ) : (
          <>
            <li style={{ marginRight: 20 }}>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
