'use client';
import Footer from "@/mycomponents/footer";
import Subheader from "@/mycomponents/content";
import Header from "@/mycomponents/header";
import { useState } from 'react';
import Content from "@/mycomponents/content";

export default function Home() {
  const [activeSection, setActiveSection] = useState('Bio');

  return (
    <div className="min-h-screen flex flex-col justify-between" style={{backgroundColor: "#FFFFE3"}}>
      <Header setActiveSection={setActiveSection}/>
      <div>
        <Content activeSection={activeSection}/>
      </div>
      <Footer/>
  </div>
  );

}

