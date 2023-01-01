export const StatNavBar = () => {
    return (
      <nav className="bg-secondary shadow-xl py-6 pl-14 w-screen transform -translate-y-1">
        <div className="flex">
           <StatNavElement link="/stats" name="Stats"/>
           <StatNavElement link="/charts" name="Charts"/>
        </div>
      </nav>
    );
  };

const StatNavElement = (props) => {
    return (
        <div className="pr-10 text-white">
            <a href={props.link}>{props.name}</a>
        </div>
    )
}

export default StatNavBar;