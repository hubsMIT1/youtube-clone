import React, { createContext, useState, useEffect } from "react";

import { fetchDataFromApi } from "../utilis/api";

export const Context = createContext();

export const AppContext = (props) => {

    const [data, setData] = useState([]);
    const [selectedPage, setSelectedPage] = useState(0);
    const [mobileMenu, setMobileMenu] = useState(false);

    useEffect(() => {
        fetchSelectedPageData(selectedPage);
    }, [selectedPage]);

    const fetchSelectedPageData = (query) => {
       
        fetchDataFromApi(query).then(( contents ) => {
            // console.log(contents);
            if(!contents){
                return(<h1>NO INTERNET</h1>)
            }
            setData(contents.posts);
           
        });
    };

    return (
        <Context.Provider
            value={{
                data,
                selectedPage,
                setSelectedPage,
                mobileMenu,
                setMobileMenu,
            }}
        >
            {props.children}
        </Context.Provider>
    );
};
