import React from 'react';
import {ThemeContextConsumer} from './themeContext'

const Footer = () => {
  return (
    <ThemeContextConsumer>
            {context => (
                <footer className={`${context.theme}-theme`}>
                    <h2>The amazing Footer</h2>
                </footer>
                
            )}
        </ThemeContextConsumer>
  );
}

export default Footer;