import NewsCard from "../small/NewsCard";
import BlogBanner from "../small/BlogBanner";
import PhraseBanner from "../small/PhraseBanner";
import odessa from "../../resources/backgrounds/odessa.jpg"
import violence from "../../resources/backgrounds/violence.jpg"
import meeting from "../../resources/backgrounds/meeting.jpg"
import abuse from "../../resources/backgrounds/abuse.jpg"
import woman from "../../resources/backgrounds/woman.jpg"
const SecondNewsCont = () => {
  return (
    <div className=" grid grid-cols-6 gap-1 mt-20 p-3">
      <div className="  max-h-[60vh] col-span-2 ">
        <NewsCard position="bottom-1 left-2 p-5 max-h-[100vh]" subject="Progetto Arca" authName="Redazione" date="13 Luglio 2022" title="“Qui Odessa”, fotografie, progetti e solidarietà" sizes="h-[60vh] w-[100vw]" image={odessa}></NewsCard>
      </div>
      <div className="  max-h-[60vh] col-span-2 ">
        <NewsCard position="bottom-1 left-2 p-1 max-h-[100vh]" subject="Adolescenti" authName="Luca Cereda" date="13 Luglio 2022" title="Storie fra ragazzi permeate di violenza. A Napoli 12enne sfregiata da 17enne" sizes="h-[60vh] w-[100vw]" image={violence} ></NewsCard>
      </div>
      <div className=" max-h-[60vh] col-span-2 ">
        <NewsCard position="bottom-1 left-2 p-1 max-h-[100vh]" subject="Economia Civile" authName="Emiliano Moccia" date="12 Luglio 2022" title="“Co-agitiamo”, Tiggiano una cooperativa di comunità contro lo spopolamento" sizes="h-[60vh] w-[100vw]" image={meeting} ></NewsCard>
      </div>
      <div className=" max-h-[50vh] col-span-2">
        <NewsCard position="bottom-1 top-2 left-2 max-h-[50vh]" subject="Sport" authName="Diletta Grella" date="7 Luglio 2022" title="Troppi abusi nello sport minorile, il governo interviene" sizes="h-[50vh] w-[100vw]" image={abuse} ></NewsCard>
      </div>
      <div className="  max-h-[50vh] col-span-4">
        <NewsCard position="bottom-1 left-2 p-5 max-h-[50vh]" subject="Società" authName="Anna Spena" date="7 Luglio 2022" title="Donne e nuove generazioni: con loro riparte l’Italia" sizes="h-[50vh] w-[100vw]" image={woman}  ></NewsCard>
      </div>
      <div className="max-h-[40vh] col-span-6">
        <PhraseBanner></PhraseBanner>
      </div>
      <div className="  max-h-[40vh] col-span-1">
        <BlogBanner></BlogBanner>
      </div>
      <div className="  max-h-[40vh] col-span-1">
        <BlogBanner></BlogBanner>
      </div>
      <div className="  max-h-[40vh] col-span-1">
        <BlogBanner></BlogBanner>
      </div>
      <div className="  max-h-[40vh] col-span-1">
        <BlogBanner></BlogBanner>
      </div>
      <div className="  max-h-[40vh] col-span-1">
        <BlogBanner></BlogBanner>
      </div>
      <div className="  max-h-[40vh] col-span-1">
        <BlogBanner></BlogBanner>
      </div>
      <div className="  max-h-[80vh] col-span-6">
        <NewsCard sizes="h-[80vh] w-[100vw]" ></NewsCard>
      </div>
      <div className="  max-h-[60vh] col-span-2 ">
        <NewsCard sizes="h-[60vh] w-[100vw]" ></NewsCard>
      </div>
      
      <div className="  max-h-[60vh] col-span-2 ">
        <NewsCard sizes="h-[60vh] w-[100vw]" ></NewsCard>
      </div>
      <div className="  max-h-[60vh] w-[vw] col-span-2 ">
        <NewsCard sizes="h-[60vh] w-[100vw]" ></NewsCard>
      </div>
      <div className="  max-h-[0vh] w-[vw] col-start-4 col-span-3 ">
        <NewsCard sizes="h-[102vh] w-[100vw]" ></NewsCard>
      </div>
      <div className="  max-h-[25vh] col-start-1 col-end-4 ">
        <NewsCard sizes="h-[25vh] w-[100vw]" ></NewsCard>
      </div>
     
      <div className="  max-h-[25vh] w-[vw] col-start-1 col-end-4">
        <NewsCard sizes="h-[25vh] w-[100vw]" ></NewsCard>
      </div>
      <div className=" max-h-[25vh] w-[vw] col-start-1 col-end-4 ">
        <NewsCard sizes="h-[25vh] w-[100vw]" ></NewsCard>
      </div>
      
      <div className=" max-h-[25vh] w-[vw] col-start-1 col-end-4 ">
        <NewsCard sizes="h-[25vh] w-[100vw]" i></NewsCard>
      </div>
     
    </div>
  );
};

export default SecondNewsCont;
