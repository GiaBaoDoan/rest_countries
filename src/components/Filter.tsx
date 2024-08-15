import { useContext, useState } from "react";
import { Region } from "..";
import { useNavigate } from "react-router-dom";
import { useRegion } from "../hook";
import { ThemeContext } from "../store/Context";

const Filter = ({
  handleOnchange,
}: {
  handleOnchange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  const navigate = useNavigate();
  const value = useRegion();
  const regions: Region[] = [
    Region.Africa,
    Region.Americas,
    Region.Antarctic,
    Region.AntarcticOcean,
    Region.Asia,
    Region.Europe,
    Region.Oceania,
    Region.Polar,
  ];
  const [active, setActive] = useState<boolean>(false);
  const theme = useContext(ThemeContext);
  return (
    <div className="flex justify-between  items-center max-sm:flex-col max-sm:items-start gap-5">
      <div
        className={`flex items-center gap-3 max-sm:w-full sm:w-96 p-5 rounded overflow-hidden  shadow ${
          !theme?.mode ? "bg-veryDarkTheme text-white" : "bg-white"
        }`}
      >
        <img src="./search.svg" alt="" />
        <input
          onChange={handleOnchange}
          type="text"
          className="h-full w-full bg-transparent outline-none "
          placeholder="Search for a country ..."
        />
      </div>
      <div className="relative">
        <button
          onClick={() => setActive(!active)}
          className={`flex items-start shadow p-5 gap-3 rounded  ${
            !theme?.mode ? "bg-veryDarkTheme text-white" : "bg-white"
          }`}
        >
          <span>Filter by region</span>
          <img src="./arrowdown.svg" alt="" />
        </button>
        {active && (
          <div
            className={`absolute flex flex-col items-start space-y-2 shadow-lg mt-2 w-full p-5 ${
              !theme?.mode ? "bg-veryDarkTheme text-white" : "bg-white"
            }`}
          >
            <button
              className={`${value === "" ? "text-red-500" : ""}`}
              onClick={() => navigate("/")}
            >
              All
            </button>
            {regions.map((region) => {
              return (
                <button onClick={() => navigate(`/?region=${region}`)}>
                  <span className={`${region === value ? "text-red-500" : ""}`}>
                    {region}
                  </span>
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Filter;
