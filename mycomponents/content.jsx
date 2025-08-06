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

const ToggleSections = ({activeSection}) => {

  return (
    <div className="flex flex-col items-center w-full px-4 sm:px-6 md:px-8 max-w-5xl mx-auto">
  {activeSection === 'Bio' && (
    <section id="Bio" className="w-full flex flex-col items-center text-center">
      <Profilepic />
      <p className="mt-4 text-base sm:text-lg md:text-xl text-justify max-w-3xl">
        Hi, this is my attempt at creating a portfolio page.<br />
        Here's a brief about me:<br />
        I did my engineering at National Institute of Technology Karnataka, Surathkal.
        I have experience in building and deploying full stack web apps and setting up local LLMs.
        You can scroll down to find out more about my projects or check out my GitHub.
      </p>
    </section>
  )}

  {activeSection === 'Projects' && (
    <section
      id="Projects"
      className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6 w-full"
    >
      {/* Card 1 */}
      <Card className="flex flex-col justify-between h-64">
        <CardHeader>
          <CardTitle className="text-center">Stock Analyser</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center">
            Input stock symbols and search for historical price data over the past 6 months.
          </p>
        </CardContent>
        <CardFooter className="justify-center">
          <Button asChild>
            <a
              href="https://meerismailali.github.io/stock-finder/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Page
            </a>
          </Button>
        </CardFooter>
      </Card>

      {/* Card 2 */}
      <Card className="flex flex-col justify-between h-64">
        <CardHeader>
          <CardTitle className="text-center">RAG Application</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center">
            Built with Ollama + LangChain and MilvusDB for local vector storage.
          </p>
        </CardContent>
        <CardFooter className="justify-center">
          <Button asChild>
            <a
              href="https://meerismailali.github.io/stock-finder/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Page
            </a>
          </Button>
        </CardFooter>
      </Card>

      {/* Card 3 */}
      <Card className="flex flex-col justify-between h-64">
        <CardHeader>
          <CardTitle className="text-center">PEDES 2024</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center">
            Web application for an international conference at NITK EEE Dept.
          </p>
        </CardContent>
        <CardFooter className="justify-center">
          <Button asChild>
            <a
              href="https://github.com/anirudhprabhakaran3/pedes-website"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Page
            </a>
          </Button>
        </CardFooter>
      </Card>

      {/* Card 4 */}
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
