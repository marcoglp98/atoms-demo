import NewsCard from "../small/NewsCard";
import roccella from "../../resources/backgrounds/roccella.jpg";
import fausto from "../../resources/profiles/fausto.jpeg"
import marta from "../../resources/profiles/marta.jpg"
import ice from "../../resources/backgrounds/ice.jpg"
import startup from "../../resources/backgrounds/startup.jpg"
import ukraine from "../../resources/backgrounds/ukraine.jpg"

const NewsContainer = () => {
  return (
    <div className=" flex flex-col sm:grid grid-cols-2 gap-1 mt-20 p-3 mob:gap-y-10 mob:text-2xl">
      <div className="max-h-[100vh] col-span-2 ">
        <NewsCard position="bottom-1 left-2 p-5 max-h-[100vh]" subject="Migranti" authPic= {fausto} authName="Alessandro Puglia" date="29 Giugno 2022" title="Roccella Jonica, la Lampedusa che l'Italia ignora" sizes="h-[80vh] mob:h-[50vh] w-[100vw]" image={roccella}></NewsCard>
      </div>
      <div className=" max-h-[68vh]  col-span-1 ">
        <NewsCard position="bottom-1 left-2 p-5 max-h-[100vh]" subject="Allarmi" authPic= {fausto} authName="Ugo Lombi" date="14 Luglio 2022" title="Il collasso dei ghiacciai negli scatti del fotografo ambientale Fabiano Ventura" sizes="h-[119vh] mob:h-[50vh] w-[100vw]" image={ice}></NewsCard>
      </div>
      <div className="  max-h-[68vh] col-span-1 ">
        <NewsCard position="bottom-1 left-2 p-5 max-h-[68vh]" subject="Esperimenti" authPic= {marta} authName="Diletta Grella" date="14 Luglio 2022" title="Gli startupper? Li trovi al bistrot. Così il DumBo incuba relazioni" sizes="mob:h-[50vh] h-[68vh] w-[100vw]" image={startup}></NewsCard>
      </div>
      <div className=" max-h-[50vh] col-start-2">
        <NewsCard position="bottom-1 left-2 p-5 max-h-[50vh]" subject="Ucraina" authPic= {marta} authName="Anna Spena" date="14 Luglio 2022" title="Nelle città italiane tutti in piazza per e con Kiev" sizes="mob:h-[50vh] h-[50vh] w-[100vw]" image={ukraine}></NewsCard>
      </div>
    </div>
  );
};

export default NewsContainer;
