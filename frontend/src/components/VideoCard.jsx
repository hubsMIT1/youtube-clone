import React from "react";

import { Link } from "react-router-dom";
import '../index.css'

const VideoCard = ({ video }) => {
    return (
        <Link to={`/watch/${video?.postId}`}  style={{ textDecoration: "none" }}>
            <div className="flex flex-col ">
                <div className="relative h-48 md:h-40 md:rounded-xl overflow-hidden">
                    <img
                        className="h-full w-full object-cover"
                        src={video?.submission?.thumbnail  }
                    />
        
                </div>
                <div className="flex text-white mt-3">
                    <div className="flex items-start">
                        <div className="flex h-9 w-9 rounded-full overflow-hidden">
                            <img
                                className="h-full w-full object-cover"
                                src={video?.creator?.pic}
                            />
                        </div>
                    </div>
                    <div className="flex flex-col ml-3 overflow-hidden">
                        <span className="text-sm font-bold line-clamp-2 " >
                            {video?.submission.title}
                        </span>
                        <span className="text-[12px] font-semibold mt-2 text-white/[0.7] flex items-center">
                            {video?.creator?.name}
                            
                        </span>
                       
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default VideoCard;
