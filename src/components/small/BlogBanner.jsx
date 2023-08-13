import fausto from "../../resources/profiles/fausto.jpeg"

const BlogBanner = () => {
  return (
<div className="relative">
      <div className="relative border-r border-l border-gray-600 bg-white h-[35vh] max-h[20vh] p-2">
        <img className="h-[100px] w-[100px] ml-10 brightness-50 rounded-full border-4 border-gray-600" src={fausto} alt="" />

        <div className=" max-h-[8vh] font-bold absolute min-w-0 ml-12 p-2">
          <p className="text-sm">
            Disarmato
          </p>
          <p className="text-sm font-semibold ">Di Fausto Zanella</p>
        </div>
      </div>
    </div>
  );
};

export default BlogBanner;
