import * as logo from "../img/climbing-svgrepo-com-revert.svg";

export const Navbar = () => {
  return (
    <nav className="bg-primary shadow-xl py-5 px-32 ">
      <div className="px-8 mx-auto flex justify-center p-1 [&>*]:text-white">
        <div className="absolute left-10">
          <a href="/" className="flex ">
            <img className="h-8" src={logo.default} ></img>
            <h3 className="pl-2 text-3xl text-white font-logo
            ">Zendit</h3>
          </a>
        </div>
        <div className="flex [&>*]:px-8">
          <div>
            <a href="/stats">Stats</a>
          </div>
          <div>
            <a href="/converter">Grade Converter</a>
          </div>
          <div>
          <a href="/info">Bibelen</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
