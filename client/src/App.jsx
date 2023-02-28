import React from "react"
import { logo } from "./assets/index"
import { Loader } from "./Components"
import { BrowserRouter, Link, Routes, Route } from "react-router-dom"
import {Home , CreatePost} from './Pages'




const App = () => {
    return (
        <BrowserRouter>
            <header className="w-full items-center px-4 sm:px-8 border-b border-b-lightgrey flex h-[76px] justify-between">
                <Link to='/'>
                <img
                    className="w-[7rem] h-[5rem]"
                    src={logo}
                    alt="OpenAI logo"
                />
                </Link>

                <Link to="/create_post" className=" bg-indigo-500  text-white font-bold px-4 py-2 font-inter rounded-md">
                    Create
                </Link>
            </header>

            <main className="px-4 sm:px-8 py-8 bg-slate-50">
              <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/create_post" element={<CreatePost/>}/>
              </Routes>
            </main>

        </BrowserRouter>
    )
}

export default App
