
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import VideoDetails from "./components/VideoDetails";
import { AppContext } from "./context/contextApi";
import HomeScreen from "./components/HomeScreen";
const App = () => {
    return (
        <AppContext>
            <BrowserRouter>
                <div className="flex flex-col h-full">
                    <Header />
                    <Routes>
                        <Route path="/" exact element= {<HomeScreen />} />
                      
                        <Route path="/watch/:id" element={<VideoDetails />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </AppContext>
    );
};

export default App;
