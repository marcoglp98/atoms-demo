import LoginBar from "../small/LoginBar";
import MenuBar from "../small/MenuBar";
import NewsBar from "../small/NewsBar";

const TopBar = () => {
  return (
    <>
      <div className="bg-white">
        <LoginBar></LoginBar>
        <MenuBar></MenuBar>
        <NewsBar></NewsBar>
      </div>
    </>
  );
};

export default TopBar;
