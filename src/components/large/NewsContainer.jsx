import NewsCard from "../small/NewsCard";
import roccella from "../../resources/backgrounds/roccella.jpg";

const NewsContainer = () => {
  return (
    <div className=" grid grid-cols-2 gap-1 mt-20 p-3">
      <div className=" bg-red-500 max-h-[80vh] col-span-2 ">
        <NewsCard sizes="h-[80vh] w-[100vw]" image={roccella}></NewsCard>
      </div>
      <div className=" bg-red-500 max-h-[68vh] col-span-1 ">
        <NewsCard sizes="h-[119vh] w-[100vw]" image={roccella}></NewsCard>
      </div>
      <div className=" bg-red-500 max-h-[68vh] col-span-1 ">
        <NewsCard sizes="h-[68vh] w-[100vw]" image={roccella}></NewsCard>
      </div>
      <div className=" bg-red-500 max-h-[50vh] col-start-2">
        <NewsCard sizes="h-[50vh] w-[100vw]" image={roccella}></NewsCard>
      </div>
    </div>
  );
};

export default NewsContainer;
