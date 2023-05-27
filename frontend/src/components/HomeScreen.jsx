import React, { useContext, useEffect } from "react";

import { Context } from "../context/contextApi";
import VideoCard from "./VideoCard";
import { useNavigate } from "react-router-dom";

const HomeScreen = () => {
    const { selectedPage,setSelectedPage, data } = useContext(Context);
    const navigate = useNavigate();
    // useEffect(() => {
    //     document.getElementById("root").classList.remove("custom-h");
    // }, []);

    const  handlePage = (num)  =>{
        setSelectedPage(num)
        // console.log(selectedPage)
        navigate("/");
    }
    const totalPages = 10; // Assuming there are 5 total pages

    // Calculate the range of pagination numbers
    const startPage = Math.max(0, selectedPage - 1);
    const endPage = Math.min(totalPages - 1, selectedPage + 1);
    return (
      <>
      {
        data ?
      
        (<div className="flex flex-row h-[calc(100%-56px)]">
            {/* <LeftNav /> */}
            <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto bg-black">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5">
                    {
                        data.map((item) => {
                            {/* console.log(item.postId) */}
                            {/* if (item.type !== "video") return false; */}
                            return (
                                <VideoCard
                                    key={item?.postId}
                                    video={item}
                                />
                            );
                        })}
                        
                </div>
                <div className="flex justify-center mt-4">
          <button
            className="px-3 py-2 mr-2 rounded-lg bg-gray-200 text-gray-600 disabled:bg-gray-300 disabled:text-gray-400"
            onClick={() => handlePage(selectedPage - 1)}
            disabled={selectedPage === 0}
          >
            {"<"}
          </button>
          {Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i).map((page) => (
            <button
              key={page}
              className={`px-3 py-2 mr-2 rounded-lg ${
                page === selectedPage ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-600"
              }`}
              onClick={() => handlePage(page)}
            >
              {page + 1}
            </button>
          ))}
          <button
            className="px-3 py-2 ml-2 rounded-lg bg-gray-200 text-gray-600 disabled:bg-gray-300 disabled:text-gray-400"
            onClick={() => handlePage(selectedPage + 1)}
            disabled={selectedPage === totalPages - 1}
          >
            {">"}
          </button>
        </div>
            </div>
        </div>) : (<h1 className="flex justify-center">No Internet</h1>)
        }
        </> 
    );
};

export default HomeScreen;
