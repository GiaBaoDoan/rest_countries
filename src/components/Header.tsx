import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../store/Context";

const Header = () => {
  const theme = useContext(ThemeContext);

  return (
    <header
      className={`py-5 shadow transition-all ${
        !theme?.mode ? "bg-veryDarkTheme text-white" : "bg-white"
      }`}
    >
      <nav className="max-width flex justify-between items-center">
        <Link to={"/"}>
          <h1 className="text-xl font-bold max-sm:text-lg">
            Where is the word?
          </h1>
        </Link>
        <button
          onClick={() => theme?.setMode(!theme.mode)}
          className="flex gap-3 max-sm:gap-1 max-sm:text-sm items-center"
        >
          {theme?.mode ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-moon"
            >
              <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-sun"
            >
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2" />
              <path d="M12 20v2" />
              <path d="m4.93 4.93 1.41 1.41" />
              <path d="m17.66 17.66 1.41 1.41" />
              <path d="M2 12h2" />
              <path d="M20 12h2" />
              <path d="m6.34 17.66-1.41 1.41" />
              <path d="m19.07 4.93-1.41 1.41" />
            </svg>
          )}

          {theme?.mode ? <span>Dark mode</span> : <span>Light mode</span>}
        </button>
      </nav>
    </header>
  );
};

export default Header;
