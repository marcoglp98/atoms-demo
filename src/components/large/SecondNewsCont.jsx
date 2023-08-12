import NewsCard from "../small/NewsCard";
import BlogBanner from "../small/BlogBanner";
import PhraseBanner from "../small/PhraseBanner";
import odessa from "../../resources/backgrounds/odessa.jpg"
import violence from "../../resources/backgrounds/violence.jpg"
import meeting from "../../resources/backgrounds/meeting.jpg"
import abuse from "../../resources/backgrounds/abuse.jpg"
import woman from "../../resources/backgrounds/woman.jpg"
import food from "../../resources/backgrounds/food.jpg"
import old from "../../resources/backgrounds/old.jpg"
import life from "../../resources/backgrounds/life.jpg"
import fruit from "../../resources/backgrounds/fruit.jpg"
import sicily from "../../resources/backgrounds/sicily.jpg"
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
      <div className=" max-h-[40vh] col-span-1">
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
        <NewsCard position="top-12 right-2 p-5 max-h-[50vh]" subject="Impresa Sociale" authName="Giovanni Gavardi" date="3 Luglio 2022" title="La Kasbah mazarese nella quale si gusta la cultura araba" sizes="h-[80vh] w-[100vw]" image={food} ></NewsCard>
      </div>
      <div className="  max-h-[60vh] col-span-2 ">
        <NewsCard position="bottom-1 left-2 p-5 max-h-[100vh]" subject="Progetto Arca" authName="Redazione" date="13 Luglio 2022" title="“Qui Odessa”, fotografie, progetti e solidarietà" sizes="h-[60vh] w-[100vw]" image={odessa} ></NewsCard>
      </div>
      
      <div className="  max-h-[60vh] col-span-2 ">
        <NewsCard position="bottom-1 left-2 p-1 max-h-[100vh]" subject="Economia Civile" authName="Emiliano Moccia" date="12 Luglio 2022" title="“Co-agitiamo”, Tiggiano una cooperativa di comunità contro lo spopolamento" sizes="h-[60vh] w-[100vw]" image={meeting} ></NewsCard>
      </div>
      <div className="  max-h-[60vh] w-[vw] col-span-2 ">
        <NewsCard position="bottom-1 left-2 p-1 max-h-[100vh]" subject="Adolescenti" authName="Luca Cereda" date="13 Luglio 2022" title="Storie fra ragazzi permeate di violenza. A Napoli 12enne sfregiata da 17enne" sizes="h-[60vh] w-[100vw]" image={violence} ></NewsCard>
      </div>
      <div className="  max-h-[0vh] w-[vw] col-start-4 col-span-3 ">
        <NewsCard position="bottom-1 left-2 p-5 max-h-[50vh]" subject="Ucraina" authName="Anna Spena" date="14 Luglio 2022" title="Leopoli, andata + ritorno" sizes="h-[102vh] w-[100vw]" image={odessa} ></NewsCard>
      </div>
      <div className="  max-h-[25vh] col-start-1 col-end-4 ">
        <NewsCard position="top-1 p-1 max-h-[100vh]" subject="Innovazione" authName="Luca Cereda" date="13 Luglio 2022" title="Gli anziani del Sicomoro spopolano su TikTok" sizes="h-[25vh] w-[100vw]" image={old}  ></NewsCard>
      </div>
     
      <div className="  max-h-[25vh] w-[vw] col-start-1 col-end-4">
        <NewsCard  position="top-1 p-1 max-h-[100vh]" subject="Disabilità" authName="Luca Cereda" date="13 Luglio 2022" title="Emergenza sordi: quando un'app ti salva la vita" sizes="h-[25vh] w-[100vw]" image={life}   ></NewsCard>
      </div>
      <div className=" max-h-[25vh] w-[vw] col-start-1 col-end-4 ">
        <NewsCard position="top-1 p-1 max-h-[100vh]" subject="Traiettorie" authName="Luca Cereda" date="13 Luglio 2022" title="Diego, il fruttivendolo che ha scelto la cooperazione sociale" sizes="h-[25vh] w-[100vw]" image={fruit} ></NewsCard>
      </div>
      
      <div className=" max-h-[25vh] w-[vw] col-start-1 col-end-4 ">
        <NewsCard position="top-1 p-1 max-h-[100vh]" subject="Sociale" authName="Luca Cereda" date="13 Luglio 2022" title="Pedalare Sicily Coast to Coast per essere più inclusivi" sizes="h-[25vh] w-[100vw]" image={sicily} ></NewsCard>
      </div>
     
    </div>
  );
};

export default SecondNewsCont;
