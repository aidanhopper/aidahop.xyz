import Navbar from './navbar'
import Landing from './landing'
import About from './about'
import Background from './background'
import Footer from './footer'

const Home = () => {
  return (
    <div className="bg-pink-100 text-green-600 overflow-hidden">
      <Background/>
      <Navbar/>
      <Landing/>
      <About/>
      <Footer/>
    </div>
  );
}

export default Home;
