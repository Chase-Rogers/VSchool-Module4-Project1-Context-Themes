import React, {Component} from 'react';
import {ThemeContextConsumer} from './themeContext'

const Header = (props) => {
    return (
        <ThemeContextConsumer>
            {context => (
                <header className={`${context.theme}-theme`}>
                    <a className={`${context.theme}-theme`} href='localhost:3002'>Home</a>
                    <a className={`${context.theme}-theme`} href='localhost:3002'>About</a>
                    <a className={`${context.theme}-theme`} href='localhost:3002'>Contact</a>
                </header>
                
            )}
        </ThemeContextConsumer>
    );
}

export default Header;