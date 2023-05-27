import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";

import { AiOutlineLike } from "react-icons/ai";
import { abbreviateNumber } from "js-abbreviation-number";

import '../App.css'
import { Context } from "../context/contextApi";


const VideoDetails = () => {
    const [video, setVideo] = useState();
 
    const { id } = useParams();
    const { data,mobileMenu } = useContext(Context);
    // console.log("id",id)
    
    useEffect(() => {
        document.getElementById("root").classList.add("custom-h");
        window.addEventListener("load", fetchVideoDetails);
        return () => {
          window.removeEventListener("load", fetchVideoDetails);
        };
      }, [id]);
    
      useEffect(() => {
        fetchVideoDetails();
      }, [data]);
   
    const fetchVideoDetails = () => {
        
        const res = data.find((post) => post.postId === id);
       
            setVideo(res);
           
    };
    // console.log(video)



    // if(video)
    //  console.log(video?.submission.mediaUrl,video.creator.pic)

  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const renderDescription = () => {
    const words = video? video.submission.description.split(" "):"";
    const showMoreText = showFullDescription ? "Show Less" : "Show More";

    if ( video && (showFullDescription || words.length <= 6)) {
        // const truncatedDescription = words.slice(0, 20).join(" ");

        return (
          <div className="text-white">
            {video.submission.description} 
            <div 
              className="text-blue-500 cursor-pointer pt-4"
              onClick={toggleDescription}
            >
              {showMoreText}
            </div>
            
          </div>
        );
    } else if(video) {
      const truncatedDescription = words.slice(0, 20).join(" ");

      return (
        <div className="text-white">
  
          {truncatedDescription}
           <span 
            className="text-blue-500 cursor-pointer "
            onClick={toggleDescription}
          >
            {showMoreText}
          </span>
        
        </div>
      );
    }
  };
  const [playing, setPlaying] = useState(true);

  const handleVideoClick = () => {
    setPlaying(!playing);
  };


//   const [isUploading, setIsUploading] = useState(false);

//   useEffect(() => {
//     // Simulating video upload process
//     setIsUploading(true);

//     // Example: Setting a timeout to mimic the upload process
//     setTimeout(() => {
//       setIsUploading(false);
//     }, 5000); // Set the desired duration for the upload process
//   }, []);

    return (
       
        <div className="flex justify-center flex-row h-[calc(100%-56px)] bg-black">
            <div className="w-full max-w-[1280px] flex flex-col justify-center  lg:flex-row">
                <div className="flex flex-col  lg:w-[calc(100%-350px)] xl:w-[calc(100%-400px)] px-4 py-3 lg:py-6 overflow-y-auto custom-overflow">
                    <div className="h-[200px] md:h-[400px] lg:h-[400px] xl:h-[550px] ml-[-16px] lg:ml-0 mr-[-16px] lg:mr-0 justify-center">
                        <ReactPlayer
                            url={video ? video.submission.mediaUrl:null}
                            controls
                            width="100%"
                            height="100%"
                            style={{ backgroundColor: "#000000" }}
                            onClick={handleVideoClick}
                            playing={true}
                            // className={isUploading ? "cursor-not-allowed" : ""}
                        />
                    </div>
                    <div className="text-white overflow-visible font-bold text-sm md:text-xl mt-4 line-clamp-2">
                        {video ? video?.submission.title : null}
                    </div>
                    <div className="flex justify-between flex-col md:flex-row mt-4">
                        <div className="flex">
                            <div className="flex items-start">
                                <div className="flex h-11 w-11 rounded-full overflow-hidden">
                                    <img
                                        className="h-full w-full object-cover"
                                        src={video ? video?.creator?.pic :null}
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col ml-3">
                                <div className="text-white text-md font-semibold flex items-center">
                                    { video?.creator.name }
                                   
                                </div>
                                {/* <div className="text-white/[0.7] text-sm">
                                    600k
                                </div> */}
                            </div>
                        </div>
                        <div className={`flex text-white ${mobileMenu ? 'mt-4' : ''}`}>
                            <div className="flex items-center justify-center h-11 px-6 rounded-3xl bg-white/[0.15]">
                                <AiOutlineLike className="text-xl text-white mr-2" />
                                {`${abbreviateNumber(
                                    video?.reaction.count,
                                    2
                                )} Likes`}
                            </div>
                    
                        </div>
                    </div>
                        <div onClick={ toggleDescription} className="flex  px-6 py-6 rounded-3xl bg-white/[0.15] mt-4">
                             {renderDescription()}
                             </div>
                </div>
                
            </div>
        </div>
    
    );
};

export default VideoDetails;
