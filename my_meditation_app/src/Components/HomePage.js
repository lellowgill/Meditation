import React from 'react';
import { Cards } from './Cards';
import Header from './Header';
import { Navbar } from './Navbar';
import { Motto } from './Motto';
import Footer from './Footer';
import About from './About';
import Background from './Background';


export default function Affirmations() {

        return (
            <div>
                <Header/>
                <Navbar/>
                <Cards/>
                <Motto/>
                <Footer/> 
                <Background/>
            </div>
        )
    }

