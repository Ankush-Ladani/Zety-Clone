import { useState } from "react";
import i from "../assets/letter-i.png";
import ExperienceOption from "./ExperienceOption";
import ExperienceOptionAdvance from "./ExperienceOptionAdvance";
import StudentSection from "./StudentSection";

const Experience = () => {
  const [showText, setShowText] = useState(false);

  const [showStudent, setshowStudent] = useState(false);

  // const Click = () => {
  //   console.log("Hello...");
  // };
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="text-center mt-40">
        <h1 className="text-5xl font-semibold">
          How long have you been working?
        </h1>
        <div className="flex">
          <div className="bg-blue-300 relative -top-14 -right-full rounded-full w-6">
            <img
              src={i}
              className="w-6"
              alt=""
              onMouseEnter={() => setShowText(true)}
              onMouseLeave={() => setShowText(false)}
            />
          </div>
          {showText && (
            <p className="ml-auto bg-green-500 px-2">
              Include internships, unpaid jobs, and volunteer work.
            </p>
          )}
        </div>
      </div>
      <div className="">
        <p className="text-center pb-5 text-xl">
          We'll find the best templates for your experience level.
        </p>
        <div className="flex items-center justify-center">
          <ExperienceOption show={setshowStudent} description="No Experience" />
          <ExperienceOption
            show={setshowStudent}
            description="Less Than 3 Years"
          />
          <ExperienceOptionAdvance description="3-5 Years" />
          <ExperienceOptionAdvance description="5-10 Years" />
          <ExperienceOptionAdvance description="10+ Years" />
        </div>
      </div>
      {showStudent && <StudentSection />}
    </div>
  );
};

export default Experience;
