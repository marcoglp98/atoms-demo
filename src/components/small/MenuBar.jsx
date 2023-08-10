const MenuBar = () => {
  return (
    <div className="flex flex-row border-b border-b-gray-600 justify-between">
      <div className="border-r border-r-black">
        <p className="ml-6 mt-4 mb-3 pr-4">Menu</p>
      </div>
      <div className="border-l border-l-black">
        <p className="ml-6 mt-4 mb-3 pr-4">Search</p>
      </div>
    </div>
  );
};

export default MenuBar;
