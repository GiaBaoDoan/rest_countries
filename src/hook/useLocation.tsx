import { useLocation } from "react-router-dom";
const useRegion = () => {
  const { search } = useLocation();
  const textURL = search.split("=")[1];
  if (search.includes("%20")) {
    return textURL.replace("%20", " ");
  }
  return textURL;
};
export default useRegion;
