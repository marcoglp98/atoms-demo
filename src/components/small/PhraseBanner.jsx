import africa from "../../resources/backgrounds/africa.jpg";

const PhraseBanner = () => {
  return (
    <div className="relative">
      <div className="border border-gray-600">
        <img className="h-[40vh] w-[100vw] brightness-50" src={africa} alt="" />

        <div className="p-10 bottom-1 top-2 left-2 max-h-[50vh] font-bold absolute min-w-0">
          <p className="text-4xl text-white">
            Essere troppo seri non è cosa molto seria
          </p>
          <p className="text-xl p-5 text-white">[Detto Africano]</p>
        </div>
      </div>
    </div>
  );
};

export default PhraseBanner;
