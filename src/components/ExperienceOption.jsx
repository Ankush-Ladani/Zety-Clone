import { useState } from "react";

const ExperienceOption = ({ description, show }) => {
  const [Click, setClick] = useState(false);

  console.log(show);

  return (
    <div>
      <button
        onClick={(() => setClick(true), () => show(true))}
        className={`experienceText mr-4 text-center rounded-xl px-12 py-4 ${
          Click ? "bg-blue-200" : ""
        }`}>
        {description}
      </button>
    </div>
  );
};

export default ExperienceOption;
