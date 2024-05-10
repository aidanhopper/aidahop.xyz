import Body from "./body"
import Navbar from "./navbar"
import About from "./about"

export default function Home() {

  const navbar_button_style = "text-2xl p-2";
  const name_button_style = "font-bold hover:text-green-900 hover:animate-spin";

  return (
    <div className="bg-gray-100 text-green-700">
      <div>
        <span className="fixed left-0 text-5xl font-extrabold p-3 mx-3"> {/* left side of navbar */}
          &lt;/&gt;
        </span>
        <span className="fixed right-0 text-right font-bold p-3"> {/* right side of navbar */}
          <a className={navbar_button_style} href="http://github.com/aidanhopper" target="_blank">github</a>
          <a className={navbar_button_style} href="http://linkedin.com/in/aidanhopper" target="_blank">linkedin</a>
          <a className={navbar_button_style} href="resume.pdf" target="_blank">resume</a>
        </span>
      </div>
      <div className="animate-slidein h-screen flex justify-center items-center text-7xl">
        <span className="flex-col text-center">
          <span className="italic">who's</span>
          <br/>
          <span className={name_button_style}>a</span>
          <span className={name_button_style}>i</span>
          <span className={name_button_style}>d</span>
          <span className={name_button_style}>a</span>
          <span className={name_button_style}>n</span>
          <span className={name_button_style}> </span>
          <span className={name_button_style}>?</span>
        </span>
      </div>
      <div className="h-screen">
      </div>
    </div>
  );
}
