import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

const mount = (el) => {
    console.log('mounting to ', el);
    
    ReactDOM.render(
        <App/>,
        el
    );
};

// console.log('process.env.NODE_ENV', process.env.NODE_ENV);
// running standalone

if (process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#_marketing-dev-root');
    
    if (devRoot) {
        mount(devRoot);
    }
}


// running through container
export { mount };