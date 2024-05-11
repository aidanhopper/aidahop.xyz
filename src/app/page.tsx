const Home = () => {

  const navbar_button_style = 
    "transition duration-100 hover:text-green-800 text-2xl p-2 mx-3";
  const name_button_style = "font-bold hover:text-green-900 hover:animate-spin";

  return (
    <div className="bg-gray-100 text-green-700">
      <div>
        <span className="fixed left-0 text-5xl font-extrabold p-3 mx-3 animate-slideintop"> {/* left side of navbar */}
          &lt;/&gt;
        </span>
        <span className="fixed right-0 text-right font-bold p-3 animate-slideintop"> {/* right side of navbar */}
          <a className={navbar_button_style} href="http://github.com/aidanhopper" target="_blank">github</a>
          <a className={navbar_button_style} href="http://linkedin.com/in/aidanhopper" target="_blank">linkedin</a>
          <a className={navbar_button_style} href="resume.pdf" target="_blank">resume</a>
        </span>
      </div>
      <div className="h-screen flex flex-col">
        <div className="flex-auto"/> {/* need dummy boxes to center on screen */}
        <div className="flex-auto"/>
        <div className="animate-slidein m-auto text-center flex-auto text-7xl">
          <span className="italic">who&apos;s</span>
          <br/>
          <span className={name_button_style}>a</span>
          <span className={name_button_style}>i</span>
          <span className={name_button_style}>d</span>
          <span className={name_button_style}>a</span>
          <span className={name_button_style}>n</span>
          <span className={name_button_style}> </span>
          <span className={name_button_style}>?</span>
        </div>
        <div className="m-auto flex-auto animate-bounce text-5xl">
          V
        </div>
      </div>
      <div className="h-screen container m-auto flex">
        <div className="flex-auto m-auto w-60 p-10 justify-center border border-black text-2xl">
          Im currently a student in university learning webdev other things.<br/>
          Check out some of my projects! ---> 
        </div>
        <div className="flex-auto m-auto p-10 justify-center border border-black text-7xl">
          PROJECTS STUFF
        </div>
      </div>
    </div>
  );
}

export default Home;
