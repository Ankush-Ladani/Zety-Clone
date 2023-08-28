import { Link, Outlet } from "react-router-dom";
import ListItem from "./ListItem";
import FooterListItem from "./FooterListItem";
const HomePage = () => {
  return (
    <>
      <div className="mx-10 my-10 flex gap-10">
        <div className="leftSection w-96 pb-10 mr-96 ml-40">
          <Link to="/resume/experience-level">
            <h1 className="text-6xl font-bold mb-10 mt-16">
              Just three simple steps
            </h1>
          </Link>
          <ul>
            <li>
              <ListItem
                index={"1"}
                content={
                  "Select a template from our library of professional designs"
                }
              />
            </li>
            <li>
              <ListItem
                index={"2"}
                content={
                  "Build your resume with our industry-specific bullet points"
                }
              />
            </li>
            <li>
              <ListItem
                index={"3"}
                content={
                  "Download your resume , print it out and get it ready to send!"
                }
              />
            </li>
          </ul>
        </div>
        <div className="rightSection">
          <div className="my-3 h-96">Resume Photo</div>
          <Link
            className=" bg-orange-300 px-10 py-3 rounded-3xl mx-20 hover:bg-orange-400"
            to="/resume/experience-level">
            <button className=" text-black font-semibold ">
              Create My Resume
            </button>
          </Link>
        </div>
      </div>
      <footer className="mt-20 mx-28">
        <ul className="font-semibold text-xs flex px-20">
          <FooterListItem content={"TERMS AND CONDITIONS"} />
          <FooterListItem content={"PRIVACY POLICY"} />
          <FooterListItem content={"ACCESSIBILITY"} />
          <FooterListItem content={"CONTACT US"} />
          {/* <li>TERMS AND CONDITIONS | </li>
          <li>PRIVACY POLICY | </li>
          <li>ACCESSIBILITY | </li>
          <li>CONTACT US | </li> */}
        </ul>
      </footer>
    </>
  );
};

export default HomePage;
