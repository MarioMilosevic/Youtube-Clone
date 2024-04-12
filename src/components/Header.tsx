import { useState } from "react";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";

type HeaderTypes = {
  updateUrl: (input: string) => void;
};

const Header = ({ updateUrl }: HeaderTypes) => {
  const [search, setSearch] = useState("");

  const searchHandler = (e: React.MouseEvent<SVGSVGElement, MouseEvent> | React.FormEvent) => {
    e.preventDefault();
    updateUrl(search);
    setSearch("");
  };

  const goToYoutubeExplorer = () => {
    updateUrl("New")
  }

  return (
    <>
      <nav className="flex justify-between text-xl pl-4 pb-12">
        <Link to={"/"}>
          <div
            className="flex items-center cursor-pointer"
            onClick={goToYoutubeExplorer}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              viewBox="0 0 256 180"
            >
              <path
                fill="#f00"
                d="M250.346 28.075A32.18 32.18 0 0 0 227.69 5.418C207.824 0 127.87 0 127.87 0S47.912.164 28.046 5.582A32.18 32.18 0 0 0 5.39 28.24c-6.009 35.298-8.34 89.084.165 122.97a32.18 32.18 0 0 0 22.656 22.657c19.866 5.418 99.822 5.418 99.822 5.418s79.955 0 99.82-5.418a32.18 32.18 0 0 0 22.657-22.657c6.338-35.348 8.291-89.1-.164-123.134"
              ></path>
              <path
                fill="#000"
                d="m102.421 128.06l66.328-38.418l-66.328-38.418z"
              ></path>
            </svg>
            <span className="text-2xl">YouTube</span>
          </div>
        </Link>

        <form
          className="w-[20%] flex relative items-center bg-white rounded-full"
          onSubmit={(e) => searchHandler(e)}
        >
          <input
            type="search"
            className="w-[90%] rounded-full text-base px-4 py-1 text-black outline-none"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="black"
              className="w-6 h-6 cursor-pointer"
              onClick={(e) => searchHandler(e)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </div>
        </form>
      </nav>
      <Outlet />
    </>
  );
};

export default Header;


// const Header = () => {
//   return (
//     <div>
//       <h1>Hello</h1>
//       <Outlet />
//     </div>
//   );
// };

// export default Header;
