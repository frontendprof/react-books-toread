
import React,{createContext,useState} from 'react';



export const BookContext=createContext();


const BookContextProvider = (props) => {
    const [books,setBooks]=useState([
        {title:"Road To Mecca",id:1},
        {title:"Islam and Secularism",id:2},
        {title:"Weapons of mass instruction",id:3},
        {title:"The Divine Reality",id:4}
        ])
    return (
        <BookContext.Provider value={{ books }}>
            {props.children}
        </BookContext.Provider>
    )
}

export default BookContextProvider;
