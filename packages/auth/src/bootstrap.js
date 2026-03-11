import React from 'react';
import ReactDOM from 'react-dom';
import { createMemoryHistory, createBrowserHistory } from 'history';

import App from './App';

const mount = (el, { onNavigate, defaultHistory, initialPath }) => {
    const history = defaultHistory || createMemoryHistory({
        initialEntries: [initialPath]
    });

    if(onNavigate) {
        history.listen(onNavigate);
    }
    
    ReactDOM.render(<App history={history}/>, el);

    return {
        onParentNavigate({ pathname: nextPathname }) {
            if(history.location !== nextPathname) {
                history.push(nextPathname)
            }
        }
    }
};

// console.log('process.env.NODE_ENV', process.env.NODE_ENV);
// running standalone
if (process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#_auth-dev-root');
    
    if (devRoot) {
        mount(devRoot, { defaultHistory: createBrowserHistory() });
    }
}


// running through container
export { mount };