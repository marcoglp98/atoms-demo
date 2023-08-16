import Hamburger from "../large/Hamburger";
const MenuBar = () => {
  return (
    <div className="flex flex-row border-b border-b-gray-600 justify-between">
      <div className="border-r border-r-black">
        <Hamburger></Hamburger>
      </div>
      <div className="border-l border-l-black">
        <p className="ml-6 mt-4 mb-3 pr-4 hover:text-red-400">Cerca</p>
      </div>
    </div>
  );
};

export default MenuBar;
