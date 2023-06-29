import React from "react";
import { Routes, Route } from 'react-router-dom';
import DestinationList from "../DestinationList/DestinationList";
import HooksUseState from "../HooksUseState/HooksUseState";
import HooksUseStateObject from "../HooksUseStateObject/HooksUseStateObject";
import Home from '../Home';
import About from '../About';
import Staff from '../Staff';
import SummerCourse from '../SummerCourse';
import Topic from '../Topic';



const Main = () => {
  return <main>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/staff" element={<Staff />} />
      <Route path="/destinations" element={<DestinationList />} />
      <Route path="/contact" element={<HooksUseStateObject />} />
      <Route path="/rating" element={<HooksUseState />} />
      <Route path="/summercourse" element={<SummerCourse/>} />
      <Route path="/topic" element={<Topic/>} />

    </Routes>


  </main>;
};

export default Main;
