import TopBar from "../components/large/TopBar";
import NewsFilter from "../components/large/NewsFilter";
import NewsContainer from "../components/large/NewsContainer";
import SupportBanner from "../components/small/SupportBanner";

const Main = () => {
  return (
    <>
      <TopBar></TopBar>
      <NewsFilter></NewsFilter>
      <NewsContainer></NewsContainer>
      <SupportBanner></SupportBanner>   
    </>
  );
};

export default Main;
