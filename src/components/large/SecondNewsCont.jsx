import NewsCard from "../small/NewsCard";
import BlogBanner from "../small/BlogBanner";
import roccella from "../../resources/backgrounds/roccella.jpg";

const SecondNewsCont = () => {
  return (
    <div className=" grid grid-cols-6 gap-1 mt-20 p-3">
      <div className=" bg-red-500 max-h-[60vh] col-span-2 ">
        <NewsCard sizes="h-[60vh] w-[100vw]" image={roccella}></NewsCard>
      </div>
      <div className=" bg-red-500 max-h-[60vh] col-span-2 ">
        <NewsCard sizes="h-[60vh] w-[100vw]" image={roccella}></NewsCard>
      </div>
      <div className=" bg-red-500 max-h-[60vh] col-span-2 ">
        <NewsCard sizes="h-[60vh] w-[100vw]" image={roccella}></NewsCard>
      </div>
      <div className=" bg-red-500 max-h-[50vh] col-span-2">
        <NewsCard sizes="h-[50vh] w-[100vw]" image={roccella}></NewsCard>
      </div>
      <div className=" bg-red-500 max-h-[50vh] col-span-4">
        <NewsCard sizes="h-[50vh] w-[100vw]" image={roccella}></NewsCard>
      </div>
      <div className=" bg-red-500 max-h-[40vh] col-span-6">
        <NewsCard sizes="h-[40vh] w-[100vw]" image={roccella}></NewsCard>
      </div>
      <div className=" bg-red-500 max-h-[40vh] col-span-1">
        <BlogBanner></BlogBanner>
      </div>
      <div className=" bg-red-500 max-h-[40vh] col-span-1">
        <BlogBanner></BlogBanner>
      </div>
      <div className=" bg-red-500 max-h-[40vh] col-span-1">
        <BlogBanner></BlogBanner>
      </div>
      <div className=" bg-red-500 max-h-[40vh] col-span-1">
        <BlogBanner></BlogBanner>
      </div>
      <div className=" bg-red-500 max-h-[40vh] col-span-1">
        <BlogBanner></BlogBanner>
      </div>
      <div className=" bg-red-500 max-h-[40vh] col-span-1">
        <BlogBanner></BlogBanner>
      </div>
    </div>
  );
};

export default SecondNewsCont;
