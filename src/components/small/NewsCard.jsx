const NewsCard = (props) => {
  return (
    <div className="relative">
      <div className="border border-gray-600">
        <img
          className={`${props.sizes} brightness-50`}
          src={props.image}
          alt=""
        />

        <div className={`${props.position} font-bold absolute`}>
          <div className="flex min-w-0 text-[8px] mb-3">
            <p className="uppercase rounded-xl border-4 bg-white p-1">{props.subject}</p>
          </div>
          <p className="text-4xl text-white">{props.title}</p>
          <div className="p-5">
            {" "}
            <img
              className="h-[50px] w-[50px] border rounded-full"
              src={props.authPic}
              alt=""
            />
            <p className="p-4 text-white">Di {props.authName}</p>
            <p className="ml-10 text-white text-xs">{props.date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
