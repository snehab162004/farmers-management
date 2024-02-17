import React from "react";
import Section  from "../Section/Section";
import Contact from "../ContactUs/Contact";
import Hero from  '../Hero/Hero';
import AboutUsCard from "../AboutUs/AboutCard.jsx"
export default function Home() {
    return (
       <div>
        <Hero />
        <AboutUsCard />
        <Section />
        <Contact />
       </div>
    )
}