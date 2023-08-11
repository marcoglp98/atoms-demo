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
      <div className=" bg-red-500 max-h-[80vh] col-span-6">
        <NewsCard sizes="h-[80vh] w-[100vw]" image={roccella}></NewsCard>
      </div>
      <div className=" bg-red-500 max-h-[60vh] col-span-1 ">
        <NewsCard sizes="h-[60vh] w-[100vw]" image={roccella}></NewsCard>
      </div>
      <div className=" bg-red-500 max-h-[60vh] col-span-1 ">
        <NewsCard sizes="h-[60vh] w-[100vw]" image={roccella}></NewsCard>
      </div>
      <div className=" bg-red-500 max-h-[60vh] col-span-2 ">
        <NewsCard sizes="h-[60vh] w-[100vw]" image={roccella}></NewsCard>
      </div>
      <div className=" bg-red-500 max-h-[60vh] w-[vw] col-span-2 ">
        <NewsCard sizes="h-[60vh] w-[100vw]" image={roccella}></NewsCard>
      </div>
      <div className=" bg-red-500 max-h-[0vh] w-[vw] col-start-4 col-span-3 ">
        <NewsCard sizes="h-[102vh] w-[100vw]" image={roccella}></NewsCard>
      </div>
      <div className=" bg-red-500 max-h-[25vh] col-start-1 col-end-4 ">
        <NewsCard sizes="h-[25vh] w-[100vw]" image={roccella}></NewsCard>
      </div>
     
      <div className=" bg-red-500 max-h-[25vh] w-[vw] col-start-1 col-end-4">
        <NewsCard sizes="h-[25vh] w-[100vw]" image={roccella}></NewsCard>
      </div>
      <div className=" bg-red-500 max-h-[25vh] w-[vw] col-start-1 col-end-4 ">
        <NewsCard sizes="h-[25vh] w-[100vw]" image={roccella}></NewsCard>
      </div>
      
      <div className=" bg-red-500 max-h-[25vh] w-[vw] col-start-1 col-end-4 ">
        <NewsCard sizes="h-[25vh] w-[100vw]" image={roccella}></NewsCard>
      </div>
     
    </div>
  );
};

export default SecondNewsCont;
