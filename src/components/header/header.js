import React , { Component } from 'react'
import Header from './header.css';
import { ReactComponent as Logog } from './logog.svg';
const header=()=>{ 
  
        return (
           <div>
               <header>
             <Logog className="logo"/>
        <nav>
            <ul id="menu">
                <li className="menu-item active">About</li>
                <li className="menu-item">career</li>
                <li className="menu-item drop">Departments
                    <ul className="drop-menu">
                        <li className="drop-item">marketing</li>
                        <li className="drop-item">customerggds</li>
                        <li className="drop-item">it,producsggst</li>
                        <li className="drop-item">financesds</li>
                        <li className="drop-item">hr more</li>
                    </ul>
                </li>
            </ul>
        </nav>
    </header>


            </div>
        )
}


export default header
