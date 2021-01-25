
import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';



class BookList extends Component {

    

    render() {
        
        return (
            <ThemeContext.Consumer>{context=>{
                const {isLightTheme,light,dark}=context;
                const theme=isLightTheme?light:dark;

                return(
                    <div className="book-list" style={{ color:theme.syntax, background:theme.bg }}>

                        <ul>
                            <li style={{ background:theme.ui }}>Road To Mecca</li>
                            <li style={{ background:theme.ui }}>The Divine Reality</li>
                            <li style={{ background:theme.ui }}>On  Being Human</li>
                        </ul>
                
                    </div>
                )

                
            }}
             
            </ThemeContext.Consumer>
           
        )
    }
}

export default BookList
