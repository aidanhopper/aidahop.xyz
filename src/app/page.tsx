import Body from "./body"
import Navbar from "./navbar"
import About from "./about"

export default function Home() {
  return (
    <div className="relative bg-gray-100 isolate overflow-hidden text-green-700">
      <div className="min-h-screen">
        <Navbar/>
        <Body/> 
      </div>
      <div className="min-h-screen">
        <About/>
      </div>
    </div>
  );
}
