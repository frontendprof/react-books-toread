
import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';



const BookList = () => {

    const {isLightTheme,light,dark}=useContext(ThemeContext);
    const theme=isLightTheme?light:dark;

    return (
        <div>
            <div className="book-list" style={{ color:theme.syntax, background:theme.bg }}>

                <ul>
                    <li style={{ background:theme.ui }}>Road To Mecca</li>
                    <li style={{ background:theme.ui }}>The Divine Reality</li>
                    <li style={{ background:theme.ui }}>On  Being Human</li>
                </ul>

            </div>  
        </div>
    )
}



export default BookList
