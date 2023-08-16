import { slide as Menu } from "react-burger-menu";
import "../../hamburger.css";

const Hamburger = () => {
  return (
    <Menu>
      <div>
        <div className="border-b">
          <h2 className="text-xl font-bold">Articoli</h2>
          <p>Trend, dati e novità del Terzo settore</p>
        </div>
        <div className="border-b mt-5">
          <h2 className="text-xl font-bold ">Storie</h2>
          <p>Letture ed approfondimenti dei fenomeni complessi.</p>
        </div>
        <div className="border-b mt-5">
          <h2 className="text-xl font-bold">Opinioni</h2>
          <p>Riflessioni e confronti dei nostri opinionisti.</p>
        </div>
        <div className="border-b mt-5">
          <h2 className="text-xl font-bold">Podcast</h2>
          <p>Un luogo per dare voce ai protagonisti della sostenibilità.</p>
        </div>
        <div className="border-b mt-5">
          <h2 className="text-xl font-bold">Bookazine</h2>
          Una rivista da leggere e un libro da conservare.
        </div>
      </div>
    </Menu>
  );
};

export default Hamburger;
