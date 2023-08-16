import TopBar from "../components/large/TopBar";
import NewsFilter from "../components/large/NewsFilter";
import NewsContainer from "../components/large/NewsContainer";
import SupportBanner from "../components/small/SupportBanner";
import SecondNewsContainer from "../components/large/SecondNewsCont";
import Footer from "../components/large/Footer";

const Main = () => {
  return (
    <>
      <TopBar></TopBar>
      <NewsFilter></NewsFilter>
      <NewsContainer></NewsContainer>
      <SupportBanner></SupportBanner>
      <SecondNewsContainer></SecondNewsContainer>
      <Footer></Footer>
    </>
  );
};

export default Main;
