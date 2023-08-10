const NewsCard = (props) => {
  return (
    <div>
      <div className="border border-gray-600">
        <img className={props.sizes} src={props.image} alt="" />
        <div className="absolute bottom-40 left-0 px-6 py-4 bg-white h-max w-max m-5 border rounded-xl text-center">
          <p className="text-xs">MIGRANTI</p>
        </div>
        <div className="absolute bottom-20 left-0 px-6 py-4">
          <p className="text-white text-4xl font-bold">{props.title}</p>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
