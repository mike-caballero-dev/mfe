import {createApp } from 'vue';
import Dashboard from './components/Dashboard';

const mount = (el) => {
    const app = createApp(Dashboard);
    app.mount(el);
};

// console.log('process.env.NODE_ENV', process.env.NODE_ENV);
// running standalone
if (process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#_dashboard-dev-root');
    
    if (devRoot) {
        mount(devRoot);
    }
}


// running through container
export { mount };