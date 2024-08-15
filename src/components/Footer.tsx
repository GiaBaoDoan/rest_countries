import { useContext } from "react";
import { ThemeContext } from "../store/Context";

const Footer = () => {
  const theme = useContext(ThemeContext);
  return (
    <footer>
      <h1
        className={`text-white text-center ${
          !theme?.mode ? "text-white" : "text-modeBlackTheme"
        }`}
      >
        Coding by GiaBaoDoan VietNam ©copyright 2024
      </h1>
    </footer>
  );
};

export default Footer;
