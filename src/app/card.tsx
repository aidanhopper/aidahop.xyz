interface CardProps {
  name: string;
  url: string;
}

const Card = ({ name, url } : { string, string }) => {


  const classes = `
    w-[250px] h-[250px] transition duration-1 hover:-translate-y-2
    hover:translate-x-2 bg-blue-200 rounded-lg m-3 text-left p-6
    shadow-[7px_7px_3px_rgba(0,0,0,0.2)] flex flex-col
  `;

  if (url === undefined)
    url = "";

  const link = "https://github.com/aidanhopper/" + url;

  return (
    <a className={classes} href={link} target="_blank">
      <div className="text-xl font-bold pb-3">
        {name}
      </div>
      <div className="">
        Here is the descirption of the project.
      </div>
    </a>
  );

}

export default Card;
