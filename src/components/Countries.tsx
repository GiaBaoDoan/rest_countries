import Filter from "./Filter";
import { useContext, useEffect, useState } from "react";
import countries from "../data/data.json";
import { useRegion } from "../hook";
import CardCountry from "./CardCountry";
import { ThemeContext } from "../store/Context";
const Countries = () => {
  const [filterName, setFilterName] = useState<string>("");
  const [filterData, setFilterData] = useState<any>(countries);
  const filterRegion = useRegion();
  console.log(filterRegion);
  const theme = useContext(ThemeContext);
  const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterName(e.target.value);
  };
  const handelData = () => {
    const newData = countries?.filter((item: any) => {
      const regionMatch = filterRegion
        ? item.region.toLowerCase().includes(filterRegion.toLowerCase())
        : true;
      const nameMatch = filterName
        ? item.name.toLowerCase().includes(filterName.toLowerCase())
        : true;

      return regionMatch && nameMatch;
    });
    setFilterData(newData);
  };
  useEffect(() => {
    handelData();
  }, [filterName, filterRegion]);
  return (
    <div className="my-10 max-width">
      {filterRegion && (
        <p
          className={`text-2xl font-bold mb-5 ${
            theme?.mode ? "" : "text-white"
          }`}
        >
          Search on "{filterRegion}"
        </p>
      )}
      <Filter handleOnchange={handleOnchange} />
      <div className="mt-10 grid lg:grid-cols-3 xl:grid-cols-4 grid-cols-2 gap-14 max-lg:gap-6 max-[550px]:grid-cols-1">
        {filterData?.map((country: any) => {
          return <CardCountry country={country} />;
        })}
      </div>
    </div>
  );
};

export default Countries;
