import Navbar from './navbar'
import Landing from './landing'
import About from './about'
import Background from './background'

const Home = () => {
  return (
    <div className="bg-pink-100 text-green-600 overflow-hidden">
      <Background/>
      <Navbar/>
      <Landing/>
      <About/>
    </div>
  );
}

export default Home;
