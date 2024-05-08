export default function Navbar() {
  return (
    <div>
      <span className="fixed text-4xl font-extrabold mx-3 p-1"> &lt;/&gt; </span>
      <span className="fixed inset-0 text-right bg-grey-900 text-green-700 font-bold mx-3 p-3 text-xl">
        <a className="m-3" href="https://github.com/aidanhopper/" target="_blank" rel="noopener noreferrer">github</a>
        <a className="m-3" href="https://linkedin.com/in/aidanhopper/" target="_blank" rel="noopener noreferrer">linkedin</a>
        <a className="m-3" href="/resume.pdf" target="_blank" rel="noopener noreferrer">resume</a>
      </span>
    </div>
  );
}
