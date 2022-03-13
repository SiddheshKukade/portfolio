import react from 'react';
import Navbar from './components/Navbar/Navbar';
import {About , Header , Footer , Skills , Testimonial , Work} from './container'
import './app.scss'
 const App = () => {
    return(
         <div className="app">
        <Navbar/>
        <About/>
        <Header/>
        <Footer/>
        <Skills/>
        <Testimonial/>
        <Work/>

    </div>);

}
export default App;
 