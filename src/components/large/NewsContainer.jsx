import NewsCard from "../small/NewsCard";
import roccella from "../../resources/backgrounds/roccella.jpg";
import fausto from "../../resources/profiles/fausto.jpeg"
import ice from "../../resources/backgrounds/ice.jpg"
import startup from "../../resources/backgrounds/startup.jpg"
import ukraine from "../../resources/backgrounds/ukraine.jpg"

const NewsContainer = () => {
  return (
    <div className=" grid grid-cols-2 gap-1 mt-20 p-3">
      <div className="  max-h-[80vh] col-span-2 ">
        <NewsCard subject="Migranti" authPic= {fausto} authName="Alessandro Puglia" date="29 Giugno 2022" title="Roccella Jonica, la Lampedusa che l'Italia ignora" sizes="h-[80vh] w-[100vw]" image={roccella}></NewsCard>
      </div>
      <div className=" max-h-[68vh] col-span-1 ">
        <NewsCard subject="Allarmi" authName="Ugo Lombi" date="14 Luglio 2022" title="Il collasso dei ghiacciai negli scatti del fotografo ambientale Fabiano Ventura" sizes="h-[119vh] w-[100vw]" image={ice}></NewsCard>
      </div>
      <div className="  max-h-[68vh] col-span-1 ">
        <NewsCard subject="Esperimenti" authName="Diletta Grella" date="14 Luglio 2022" title="Gli startupper? Li trovi al bistrot. Così il DumBo incuba relazioni" sizes="h-[68vh] w-[100vw]" image={startup}></NewsCard>
      </div>
      <div className=" max-h-[50vh] col-start-2">
        <NewsCard subject="Ucraina" authName="Anna Spena" date="14 Luglio 2022" title="Nelle città italiane tutti in piazza per e con Kiev" sizes="h-[50vh] w-[100vw]" image={ukraine}></NewsCard>
      </div>
    </div>
  );
};

export default NewsContainer;
