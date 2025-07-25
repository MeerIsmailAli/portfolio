import { Link } from "next/link"
import { Button } from "@/components/ui/button"
import {  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle, 

 } from "@/components/ui/card"
import  Profilepic  from "@/mycomponents/profilepic"


export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Profilepic />

      <p className="text-center mt-4">
        Hi, this is my attempt at creating a portfolio page.<br />
        Here's a brief about me: I did my engineering at national institute of technology.<br />
        I have experience in building and deploying full stack web apps and setting up local LLMs.<br />
        You can scroll down to find out more about my projects.<br />
      </p>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 w-full max-w-4xl">
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
      </div>
    </div>

  );
}
