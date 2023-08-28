import { useState } from "react";
import { Link } from "react-router-dom";
import DownArrow from "../assets/down.png";
import SearchIcon from "../assets/search-interface-symbol.png";

const countryData = [
  {
    id: 2,
    name: "USA",
  },
  {
    id: 3,
    name: "UK",
  },
  {
    id: 4,
    name: "AUS",
  },
];

const CountrySelection = () => {
  const [showCountries, setShowCountries] = useState(false);

  const [countryName, setCountryName] = useState("India");

  const filterCountries = (name) => {
    // Filter countryArray map using filter method
  };

  const showOptions = () => {
    setShowCountries(!showCountries);
  };
  return (
    <div className="m-auto text-center mt-32">
      <h1 className="text-4xl font-semibold mb-4">
        Where are you focusing your job search?
      </h1>
      <p className="text-xl mb-10">
        We'll recommend the right templates for your target country.
      </p>

      <div className="flex flex-col justify-center items-center">
        {/* <label htmlFor="selectCountry" className="font-semibold">
          Select a Country
        </label>
        <br />
        <select
          onClick={showOptions}
          className="w-80 px-2 py-1 border-2 border-black"
          name="country"
          id="country">
          {
            <option key={1} value={"INDIA"} defaultValue={"INDIA"}>
              INDIA
            </option>
          }
        </select> */}
        <div
          className="flex justify-between w-96 border-2 rounded-md px-3 py-2 hover:cursor-pointer border-gray-800"
          onClick={showOptions}>
          <p>{countryName}</p>
          <img className="w-5" src={DownArrow} alt="" />
        </div>
        {showCountries && (
          <div className="pt-3 rounded-md border-1 w-96 shadow-slate-400 shadow-sm">
            <div className="flex mb-2">
              <img
                className="w-4 object-contain ml-3 mr-4"
                src={SearchIcon}
                alt="searchIcon"
              />
              <input
                onChange={(e) => filterCountries(e.target.value)}
                className="border-0 focus:outline-0"
                placeholder="Type Country Name"
                type="text"
              />
            </div>
            <hr />
            <div className="text-left ml-6 py-2 h-56 overflow-auto">
              <p className="py-3" onClick={() => setCountryName("Afghanistan")}>
                Afghanistan
              </p>
              <p className="py-3">Albania</p>
              <p className="py-3">ALgeria</p>
              <p className="py-3">ALgeria</p>
              <p className="py-3">ALgeria</p>
              <p className="py-3">ALgeria</p>
              <p className="py-3">ALgeria</p>
              <p className="py-3">ALgeria</p>
              <p className="py-3">ALgeria</p>
              <p className="py-3">ALgeria</p>
            </div>
          </div>
        )}
      </div>
      {!showCountries && (
        <Link
          className=" bg-orange-300 px-10 py-3 rounded-3xl hover:bg-orange-400"
          to="/resume/choose-tempelate">
          <button className="mt-16 w-56 text-xl text-black font-semibold ">
            See Tempelates
          </button>
        </Link>
      )}
    </div>
  );
};

export default CountrySelection;
