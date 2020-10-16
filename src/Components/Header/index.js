import React, { Component } from 'react';
import "./styles.css"

export default class Header extends Component{
    render(){
        return (
            <div className="header__container">
                <div>
                    <a href="#Home" className="header__links">
                        <h2 className="header__name">M4Mathematics</h2>
                    </a>
                </div>
                <div>
                    <a href="#Contact" className="header__links header__contact_btn">Contact</a>
                </div>
            </div>
        )
    }
}