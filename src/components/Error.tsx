import { Link } from "react-router-dom";
const Error = () => {
  return (
    <div className="flex flex-col pl-12 mt-20">
      <h1 className="text-2xl py-4">Error 404</h1>
      <p className="text-xl pb-4">
        The page you are looking for does not exist on this website
      </p>
      <Link
        to={"/"}
        className="w-28 border text-center rounded-full px-4 py-2 hover:bg-red-600 hover:border-none transition duration-200"
      >
        Go back
      </Link>
    </div>
  );
};

export default Error;
