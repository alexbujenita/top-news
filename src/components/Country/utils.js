import { countries } from "../CountryList/mapping";

export const countryName = ({ country }) => {
  const countryObj = countries.find(
    countryMap => countryMap.code === country
  );
  if (countryObj) {
    return countryObj.name.split(" ").length > 1
      ? `the ${countryObj.name}`
      : countryObj.name;
  }
};