

import React from 'react';
import Header from "./components/UI_Sections/Header";
import About from "./components/UI_Sections/About";
import Pricing from "./components/UI_Sections/Pricing";
import Shop from "./components/UI_Sections/Shop";
import MainNavbar from "./components/UI_Sections/MainNavbar";
import Footer from "./components/UI_Sections/Footer";
// import BookNow from "./components/BookNow";
import Contact from "./components/UI_Sections/Contact";
import HorizontalRule from "./components/UI_Components/HorizontalRule";
import { Provider } from "./components/context";

import Construction from "./components/UI_Sections/Construction";

class App extends React.Component {

    render() {
        //need to comment out this line once we are production ready
        let isUnderConstruction = true;
        return (
            <Provider value={{}}>
                <div className="App">
                    {/*//need to comment out these line once we are production ready*/}
                    {isUnderConstruction ?
                         <Construction />
                     :
                        <div>
                            <Header/>
                            <MainNavbar />
                            <About />
                            <HorizontalRule/>
                            <Pricing/>
                            <HorizontalRule/>
                            <Shop/>
                            <Contact/>
                            <Footer/>
                        </div>
                    }
                </div>
            </Provider>
        );
    }
}

export default App;
