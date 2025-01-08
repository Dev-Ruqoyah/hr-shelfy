import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Search from "./Pages/Books/Search";
import EachBook from "./Pages/Books/EachBook";
import Download from "./Pages/Books/Download";

const App = () => {
  return ( 
    <>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/search" element={<Search/>}/>
          <Route path="/book/:id" element={<EachBook/>}/>
          <Route path="/download/:id" element={<Download/>}/>
      </Routes>
    </>
   );
}
 
export default App;