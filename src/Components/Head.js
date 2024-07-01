import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useState, useEffect } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constants";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      getSearchSuggestions();
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    // console.log("API Call- " + searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    // console.log("searchResult", json

    setSuggestion(json[1]);
  };

  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className=" sticky top-0 grid grid-flow-col p-2 m-2 z-40 shadow-lg bg-white">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-10 cursor-pointer"
          src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-5.png"
          alt="menu"
        />
        <a href="/">
          <img
            className="h-10"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/1024px-Logo_of_YouTube_%282015-2017%29.svg.png"
            alt="youtube-logo"
          />
        </a>
      </div>
      <div className=" col-span-10">
        <div>
          <input
            className=" w-1/2 px-5 py-2 rounded-l-full border border-gray-300"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestion(true)}
            onBlur={() => setShowSuggestion(false)}
          />
          <button className="px-4 py-2 w- rounded-r-full border bg-slate-200 border-gray-300">
            🔍
          </button>
        </div>
        {suggestion.length == 0 ? null : (
          <div className="fixed opacity-95 bg-white py-2 px-5 shadow-lg rounded-lg border border-gray-100 w-[32rem]">
            <ul>
              {suggestion.map((s) => (
                <li key={s} className="py-2 px-3 shadow-sm hover:bg-gray-100">
                  {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1">
        <img
          className="h-14"
          src="data:image/png;base64,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"
          alt="userLogo"
        />
      </div>
    </div>
  );
};

export default Head;
