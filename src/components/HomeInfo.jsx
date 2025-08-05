import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const HomeInfo = ({ currentStage }) => {
  return (
    <div className="mx-4 sm:mx-8 mt-[-50px]"> {/* Added margin-top to move the box higher */}
      <div className="p-8 bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-lg shadow-lg mx-auto max-w-md bg-opacity-80">
        {currentStage === 1 && (
          <>
            <h1 className="text-3xl sm:text-4xl font-bold mb-2">
              Hi, I'm
              <span className="font-semibold mx-2 text-yellow-200">Tarun</span>
              👋
            </h1>
            <p className="text-xl sm:text-2xl font-light">
              A Student at VIT Chennai
            </p>
          </>
        )}

        {currentStage === 2 && (
          <>
            <p className="font-medium text-lg mb-6 text-gray-700">
              Worked on many projects <br /> and picked up many skills along the way
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-full shadow-lg hover:from-blue-500 hover:to-blue-700 transition"
            >
              Learn more
              <img src={arrow} alt="arrow" className="w-5 h-5 object-contain" />
            </Link>
          </>
        )}

        {currentStage === 3 && (
          <>
            <p className="font-medium text-lg mb-6 text-gray-700">
              Led multiple projects to success over the years. <br /> Curious about
              the impact?
            </p>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-full shadow-lg hover:from-blue-500 hover:to-blue-700 transition"
            >
              Visit my portfolio
              <img src={arrow} alt="arrow" className="w-5 h-5 object-contain" />
            </Link>
          </>
        )}

        {currentStage === 4 && (
          <>
            <p className="font-medium text-lg mb-6 text-gray-700">
              Need a project done or looking for a dev? <br /> I'm just a few
              keystrokes away
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-full shadow-lg hover:from-blue-500 hover:to-blue-700 transition"
            >
              Let's talk
              <img src={arrow} alt="arrow" className="w-5 h-5 object-contain" />
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default HomeInfo;
