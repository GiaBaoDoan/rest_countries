import { useContext, useEffect, useState } from "react";
import { useId } from "../hook";
import countries from "../data/data.json";
import { Link } from "react-router-dom";
import { ThemeContext } from "../store/Context";
const Detail = () => {
  const id = useId();
  const theme = useContext(ThemeContext);
  const [country, setCountry] = useState<any>();
  const getSingleCountry = () => {
    const country = countries.filter((item) => item.alpha3Code === id);
    setCountry(country[0]);
  };
  useEffect(() => {
    getSingleCountry();
  }, [id]);
  return (
    <div className="max-width my-10 min-h-screen">
      <Link
        className={`flex gap-3 w-[120px] justify-center  shadow-lg p-3 rounded ${
          !theme?.mode ? "bg-veryDarkTheme text-white" : ""
        }`}
        to={"/"}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-move-left"
        >
          <path d="M6 8L2 12L6 16" />
          <path d="M2 12H22" />
        </svg>
        <span>Back</span>
      </Link>
      <div className="mt-14 max-sm:mt-10 flex max-lg:flex-col gap-10 sm:gap-20 items-start sm:items-center">
        <img
          className="xl:max-w-[600px] max-w-[400px] max-sm:max-w-[300px]"
          src={country?.flag}
          alt=""
        />
        <div>
          <h2
            className={`font-extrabold text-xl ${
              !theme?.mode ? "text-white" : ""
            }`}
          >
            {country?.name}
          </h2>
          <div className="grid mt-10 grid-cols-2 max-sm:grid-cols-1 gap-10 sm:gap-20">
            <div
              className={`flex flex-col gap-5 ${
                !theme?.mode ? "text-white" : ""
              }`}
            >
              <p>
                <span className="font-bold">NativeName</span>:{" "}
                {country?.nativeName}
              </p>
              <p>
                <span className="font-bold">Population</span>:{" "}
                {country?.population}
              </p>
              <p>
                <span className="font-bold">region</span>: {country?.region}
              </p>
              <p>
                <span className="font-bold">Sub Region</span>:{" "}
                {country?.subregion}
              </p>
              <p>
                <span className="font-bold">Capital</span>: {country?.capital}
              </p>
            </div>
            <div
              className={`flex flex-col gap-5 ${
                !theme?.mode ? "text-white" : ""
              }`}
            >
              <p>
                <span className="font-bold">TopLevelDomain</span>:{" "}
                {country?.topLevelDomain}
              </p>
              <p>
                <span className="font-bold">Currencies</span>:{" "}
                {country?.currencies?.map((item: any) => item.name)}
              </p>
              <p>
                <span className="font-bold">Languages</span>:{" "}
                {country?.languages.map((item: any) => item.name).join(",")}
              </p>
            </div>
          </div>
          <div className="mt-14 flex max-sm:flex-col max-sm:items-start items-center gap-5">
            <p className={`font-bold ${!theme?.mode ? "text-white" : ""}`}>
              Border countries:{" "}
            </p>
            <div className="flex flex-wrap gap-5">
              {country?.borders?.map((item: any) => {
                return (
                  <Link
                    to={`/detail/${item}`}
                    className={`shadow cursor-pointer px-5 py-1 ${
                      !theme?.mode ? "bg-veryDarkTheme text-white" : ""
                    }`}
                  >
                    {item}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
