import { useSelector } from "react-redux";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;

  return (
    <div className=" p-8 w-48 shadow-md">
      <h1 className="font-bold">Subscription</h1>
      <ul>
        <li>Home</li>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
      </ul>

      <h1 className="font-bold pt-5">You</h1>
      <ul>
        <li>History</li>
        <li>PlayList</li>
        <li>Watch Later</li>
        <li>Downloads</li>
      </ul>
      <h1 className="font-bold pt-5">Explore</h1>
      <ul>
        <li>Trending</li>
        <li>Fashion</li>
        <li>Podcast</li>
        <li>Youtube Kids</li>
      </ul>
    </div>
  );
};

export default SideBar;
