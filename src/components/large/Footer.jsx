const Footer = () => {
  return (
    <div className="flex flex-row justify-between mt-6">
      <div className="flex sm:flex-row flex-col font-semibold">
        <p className="m-4">Il Gruppo</p>
        <p className="m-4">Note Legali</p>
        <p className="m-4">Chi Siamo</p>
        <p className="m-4">Condizioni d'uso</p>
        <p className="m-4">Privacy</p>
        <p className="m-4">Scrivici</p>
        <p className="m-4">Pubblicità</p>
      </div>
      <div className="mt-4 mr-4 text-sm">
        <p>© 1994-2022 Vita Società Editoriale S.p.A.</p>
      </div>
    </div>
  );
};

export default Footer;
