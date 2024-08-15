import { Link } from "react-router-dom";
import { Country } from "..";
import { useContext } from "react";
import { ThemeContext } from "../store/Context";

const CardCountry = ({ country }: { country: Country }) => {
  const theme = useContext(ThemeContext);
  const { name, region, capital, population, flags } = country;
  return (
    <Link className="" to={`/detail/${country.alpha3Code}`}>
      <img
        className="rounded-tl-lg rounded-tr-lg h-[200px] w-full object-cover"
        src={flags.svg}
        alt=""
      />
      <div
        className={`p-5 rounded-bl-lg rounded-br-lg shadow-lg flex-1 ${
          !theme?.mode ? "bg-veryDarkTheme text-white" : "bg-white"
        }`}
      >
        <p className="font-bold text-lg mb-3">{name}</p>
        <p>
          <span className="font-bold">Population</span>:{" "}
          {new Intl.NumberFormat("en-US").format(population)}
        </p>
        <p>
          <span className="font-bold">Region</span>: {region}
        </p>
        <p>
          <span className="font-bold">Capital</span>: {capital}
        </p>
      </div>
    </Link>
  );
};

export default CardCountry;
