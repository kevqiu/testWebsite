import Home from './components/Home';
import Overview from './components/Overview';
import Resume from './components/Resume';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Error404 from './components/Error404';

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <Overview />
    },
    {
        path: '/overview',
        main: () => <Overview />
    },
    {
        path: '/resume',
        main: () => <Resume />
    },
    {
        path: '/skills',
        main: () => <Skills />
    },
    {
        path: '/portfolio',
        main: () => <Portfolio />
    },
    {
        path: '/contact',
        main: () => <Contact />
    },
    {
        main: () => <Error404 />
    }
];

export default routes;