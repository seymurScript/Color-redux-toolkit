import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {Route,Routes} from 'react-router-dom'
import Color from "./components/Color";
import Result from "./components/Result";
// import { useDispatch } from "react-redux";
import Header from "./components/Header";
function App() {

  // console.log(haveUser);
  // const dispatch = useDispatch();
  return (
    <>
      <Header/>
      <h1 className="text-center">Color Collection</h1>
      <Routes>
        <Route path='/Color' element={<Color/>}/>
        <Route path='/Result' element={<Result/>}/>
      </Routes>
    </>
  );
}
export default App;
