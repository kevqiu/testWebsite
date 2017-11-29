import Home from './components/Home';
import About from './components/About';
import Resume from './components/Resume';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Error404 from './components/Error404';

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <Home />
    },
    {
        path: '/about',
        main: () => <About />
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
        main: () => <Error404 />
    }
];

export default routes;