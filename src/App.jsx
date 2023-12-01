import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import LoadingAnimation from './components/LoadingAnimation'
import { useEffect, useState } from "react";

const App = () => {
  const [loading,setLoading] = useState(false);

  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },1000)
  },[])


  return (
    <>
    {
      loading ? <LoadingAnimation/>  :
      <div className=" bg-white">
      <NavBar />
      <Banner />
      <Services/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
    }
    </>
  );
};

export default App;
