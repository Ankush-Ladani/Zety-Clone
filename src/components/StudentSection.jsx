import React from "react";
import ExperienceOption from "./ExperienceOption";
import { Link } from "react-router-dom";

const StudentSection = () => {
  const selectCountry = () => {};
  return (
    <div className="mt-16">
      <h1 className="text-5xl font-semibold">Are you a student?</h1>
      <div onClick={selectCountry} className="flex justify-around mt-5">
        <Link to="/resume/selectcountry">
          <ExperienceOption description="Yes" />
        </Link>
        <Link to="/resume/selectcountry">
          <ExperienceOption description="No" />
        </Link>
      </div>
    </div>
  );
};

export default StudentSection;
