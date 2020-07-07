import React from 'react';
import {ThemeContextConsumer} from './themeContext'

const Main = () => {
  return (
    <ThemeContextConsumer>
            {context => (
                <div className={`${context.theme}-theme main`} >
                    <h2>Click the button to toggle the {context.theme} Theme</h2>
                    <button onClick={context.toggleTheme} className={`${context.theme === "Light" ? "Dark" : "Light"}-theme`}>Switch Theme</button>
                </div>
                
            )}
        </ThemeContextConsumer>
  );
}

export default Main;