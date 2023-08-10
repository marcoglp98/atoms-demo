import NewsCard from "../small/NewsCard";
import roccella from "../../resources/backgrounds/roccella.jpg";

const NewsContainer = () => {
  const fullWidth = "object-cover w-[100vw] h-[100vh] opacity-80";
  const halfWidth = "object-cover w-[50vw] h-[100vh] opacity-80";

  return (
    <div className="flex flex-row h-full w-full border border-red-600 mt-20 p-1">
      <div className="">
        <NewsCard
          cardWidth={fullWidth}
          image={roccella}
          title="test"
        ></NewsCard>
        <div className="flex">
          <NewsCard
            cardWidth={halfWidth}
            image={roccella}
            title="test"
          ></NewsCard>
          <NewsCard
            cardWidth={halfWidth}
            image={roccella}
            title="test"
          ></NewsCard>
        </div>
      </div>
    </div>
  );
};

export default NewsContainer;
