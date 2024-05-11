const Navbar = () => {

  const navbar_button_style = 
    "transition duration-100 hover:text-green-800 text-2xl p-2 mx-3";

 return (
    <>
      <span className="fixed left-0 text-5xl font-extrabold p-3 mx-3 animate-slideintop"> {/* left side of navbar */}
        &lt;/&gt;
      </span>
      <span className="fixed right-0 text-right font-bold p-3 animate-slideintop"> {/* right side of navbar */}
        <a className={navbar_button_style} href="http://github.com/aidanhopper" target="_blank">github</a>
        <a className={navbar_button_style} href="http://linkedin.com/in/aidanhopper" target="_blank">linkedin</a>
        <a className={navbar_button_style} href="resume.pdf" target="_blank">resume</a>
      </span>
    </>
 );
}

export default Navbar;
