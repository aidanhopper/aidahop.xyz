import Body from "./body"
import Navbar from "./navbar"

export default function Home() {
  return (
    <div className="relative bg-gray-100 isolate overflow-hidden min-h-screen ">
      <Navbar/>
      <Body/> 
    </div>
  );
}
