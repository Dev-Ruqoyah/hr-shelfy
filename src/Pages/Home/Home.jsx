import CategoryBook from "./CategoryBook";
import Footer from "./Footer";
import Hero from "./Hero";
import PopularBook from "./PopularBook";
import SubHero from "./SubHero";

const Home = () => {
  return ( 
    <>
      <Hero/>
      <PopularBook/>
      <SubHero/>
      <CategoryBook/>
      <Footer/>
    </>
   );
}
 
export default Home;