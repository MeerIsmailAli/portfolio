"use client";

// import { Button } from "@/components/ui/button";
// import { Github, Mail } from "lucide-react";


import React, { useState } from 'react';
import Profilepic from './profilepic';
import {  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle, 

 } from "@/components/ui/card"

import { Button } from "@/components/ui/button"

const ToggleSections = () => {
  const [activeSection, setActiveSection] = useState('Bio');

  return (
    <div className="flex flex-col items-center w-full max-w-4xl mx-auto">
      {/* Buttons */}
      <div className="flex space-x-4 mb-6">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={() => setActiveSection('Bio')}
        >
          Bio
        </button>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={() => setActiveSection('Projects')}
        >
          Projects
        </button>
      </div>

      {/* Sections */}
      {activeSection === 'Bio' && (
        <section id="Bio">
          <Profilepic />
          {/* brief about */}
          <p className="m-4 text-justify w-140 text-xl">
            Hi, this is my attempt at creating a portfolio page.
            Here's a brief about me:<br/> I did my engineering at national institute of technology Karnataka, Surathkal .
            I have experience in building and deploying full stack web apps and setting up local LLMs.
            You can scroll down to find out more about my projects or check out my github.
          </p>
        </section>
      )}


      {activeSection === 'Projects' && (
        <section id ="Projects" className="grid grid-cols-1 mb-6 md:grid-cols-2 gap-6 mt-6 w-full max-w-4xl">
          <Card className="flex flex-col justify-between h-64">
            <CardHeader>
              <CardTitle className="text-center">Stock Analyser</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center">
                Basically input stock symbols and search for your stock prices history over the past 6 months
              </p>
            </CardContent>
            <CardFooter className="justify-center">
              <Button asChild>
                <a href="https://meerismailali.github.io/stock-finder/" target="_blank" rel="noopener noreferrer">
                  Visit Page
                </a>
              </Button>
            </CardFooter>
          </Card>

          <Card className="flex flex-col justify-between h-64">
            <CardHeader>
              <CardTitle className="text-center">RAG Application</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center">
                Built a RAG application using Ollama and LangChain, using MilvusDB for vector storage which is also set up locally.
              </p>
            </CardContent>
            <CardFooter className="justify-center">
              <Button asChild>
                <a href="https://meerismailali.github.io/stock-finder/" target="_blank" rel="noopener noreferrer">
                  Visit Page
                </a>
              </Button>
            </CardFooter>
          </Card>

          <Card className="flex flex-col justify-between h-64">
            <CardHeader>
              <CardTitle className="text-center">PEDES 2024</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center">
                Web application for international conference for the EEE Dept of National Institute of Technology.
              </p>
            </CardContent>
            <CardFooter className="justify-center">
              <Button asChild>
                <a href="https://github.com/anirudhprabhakaran3/pedes-website" target="_blank" rel="noopener noreferrer">
                  Visit Page
                </a>
              </Button>
            </CardFooter>
          </Card>

          <Card className="flex flex-col justify-between h-64">
            <CardHeader>
              <CardTitle className="text-center">New Project</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center">
                Description for the fourth project to fill the 2x2 grid layout.
              </p>
            </CardContent>
            <CardFooter className="justify-center">
              <Button asChild>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  Visit Page
                </a>
              </Button>
            </CardFooter>
          </Card>
        </section>
      )}
    </div>
  );
};

export default ToggleSections;
