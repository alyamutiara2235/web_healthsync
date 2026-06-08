import { Link, NavLink, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("healthsync_isLoggedIn") === "true";

  const handleLogout = () => {
    localStorage.removeItem("healthsync_isLoggedIn");
    navigate("/login");
  };

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "font-semibold text-emerald-600"
      : "text-slate-600 hover:text-emerald-600";

  return (
    <header className="border-b border-slate-200 bg-white">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="text-xl font-bold text-emerald-600">
          HealthSync
        </Link>

        <div className="flex items-center gap-5 text-sm">
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>

          <NavLink to="/articles" className={navLinkClass}>
            Article
          </NavLink>

          <NavLink to="/calculator" className={navLinkClass}>
            Calculator
          </NavLink>

          <NavLink to="/personalization" className={navLinkClass}>
            Personalization
          </NavLink>

          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="rounded-lg bg-slate-900 px-4 py-2 text-white hover:bg-slate-700"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="rounded-lg bg-emerald-600 px-4 py-2 text-white hover:bg-emerald-700"
            >
              Login
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
