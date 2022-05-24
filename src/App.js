
import Index from "./pages";
import {Routes, Route} from "react-router-dom";
import Cab from "./pages/Cab";
import Reg from "./pages/Reg";
import SearchAnn from "./pages/SearchAnn";
import AddObj from "./pages/AddObj";
import Auth from "./pages/Auth";
import EditPet from "./pages/EditPet";
import Pet from "./pages/Pet";
import React, {useEffect, useState} from 'react';



import ReactDOM from 'react-dom/client';


function App() {
  return (
      <div >

        <Routes>
            <Route path={'/'} element={<Index/>}/>
            <Route path={'/profile'} element={<Cab/>}/>
            <Route path={'/login'} element={<Reg/>}/>
            <Route path={'/search'} element={<SearchAnn/>}/>
            <Route path={'/add'} element={<AddObj/>}/>
            <Route path={'/auth'} element={<Auth/>}/>
            <Route path={'/edit'} element={<EditPet/>}/>
            <Route path={'/pet'} element={<Pet/>}/>
        </Routes>
      </div>)



}

export default App;
