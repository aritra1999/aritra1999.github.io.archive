import React, { useState } from "react";

import { MdLabelImportantOutline } from "react-icons/md";
import { IoMdAttach } from "react-icons/io";
import { GrDocumentPdf } from "react-icons/gr";

import Home from './Body/Home';
import Project from './Body/Project';
import Article from "./Body/Articles";
import Resume from "./Body/Resume";
import About from "./Body/About";

import mixpanel from 'mixpanel-browser';
mixpanel.init('2507d1aafd0d7404a0d276ca8d2de58e');

export default function Body({device}) {    
    mixpanel.track('Mobile List');
    function EmailList(){   
        return (
            <div className="h-full">
                <div className="border-b border-slate-200 px-5 py-4 text-slate-700 hover:shadow-md hover:bg-slate-50" onClick={showHome}>
                    <div className="flex justify-between mb-1">
                        <div className="flex items-center">
                            <MdLabelImportantOutline className="mr-4 h-5 w-5"/>
                            Home
                        </div>
                        <div className="flex items-center text-slate-500 text-xs">
                            <IoMdAttach className="h-5 w-5 transform rotate-90 mr-4"/>
                            Nov 19
                        </div>
                    </div>
                    <div className="text-sm font-semibold">
                        This is the Home page.
                    </div>
                    <div className="text-slate-400 text-sm"> 
                        Hi, my name is Aritra Mondal. Developer, Designer Gamer ...
                    </div>
                </div>
                <div className="border-b border-slate-200 px-5 py-4 text-slate-700 hover:shadow-md hover:bg-slate-50" onClick={showProject}>
                    <div className="flex justify-between mb-1">
                        <div className="flex items-center">
                            <MdLabelImportantOutline className="mr-4 h-5 w-5"/>
                            Projects
                        </div>
                        <div className="flex items-center text-slate-500 text-xs">
                            <IoMdAttach className="h-5 w-5 transform rotate-90 mr-4"/>
                            Nov 19
                        </div>
                    </div>
                    <div className="text-sm font-semibold">
                        This is the Projects page.
                    </div>
                    <div className="text-slate-400 text-sm"> 
                        A list of all the projects that I've developed/developing ...
                    </div>
                    <div className="flex">
                        <div className="border border-slate-300 flex px-4 py-2 flex items-center justify-center rounded-full mt-2 mr-2 hover:bg-slate-200 text-sm text-slate-500">
                            <GrDocumentPdf className="mr-2 h-4 w-4 fill-current text-red-400"/>    
                            Project 1.pdf
                        </div>
                        <div className="border border-slate-300 flex px-3 py-2 flex items-center justify-center rounded-full mt-2 mr-2 hover:bg-slate-200 text-sm text-slate-500">
                            <GrDocumentPdf  className="mr-2 h-4 w-4 fill-current text-red-400"/>
                            + 11
                        </div>
                    </div>
                </div>
    
                <div className="border-b border-slate-200 px-5 py-4 text-slate-700 hover:shadow-md hover:bg-slate-50"  onClick={showArticle}>
                    <div className="flex justify-between mb-1">
                        <div className="flex items-center">
                            <MdLabelImportantOutline className="mr-4 h-5 w-5"/>
                            Articles and Papers
                        </div>
                        <div className="flex items-center text-slate-500 text-xs">
                            <IoMdAttach className="h-5 w-5 transform rotate-90 mr-4"/>
                            Nov 19
                        </div>
                    </div>
                    <div className="text-sm font-semibold">
                        This is the Articles and paers page.
                    </div>
                    <div className="text-slate-400 text-sm"> 
                        A list of all the Articles/Papers I've writter so far ...
                    </div>
                    <div className="flex">
                        <div className="border border-slate-300 flex px-4 py-2 flex items-center justify-center rounded-full mt-2 mr-2 hover:bg-slate-200 text-sm text-slate-500">
                            <GrDocumentPdf className="mr-2 h-4 w-4 fill-current text-red-400"/>    
                            Paper 1.pdf
                        </div>
                        <div className="border border-slate-300 flex px-4 py-2 flex items-center justify-center rounded-full mt-2 mr-2 hover:bg-slate-200 text-sm text-slate-500">
                            <GrDocumentPdf  className="mr-2 h-4 w-4 fill-current text-red-400"/>
                            Article 1.pdf
                        </div>
                        <div className="border border-slate-300 flex px-3 py-2 flex items-center justify-center rounded-full mt-2 mr-2 hover:bg-slate-200 text-sm text-slate-500">
                            <GrDocumentPdf  className="mr-2 h-4 w-4 fill-current text-red-400"/>
                            + 3
                        </div>
                    </div>
                </div>
    
                <div className="border-b border-slate-200 px-5 py-4 text-slate-700 hover:shadow-md hover:bg-slate-50" onClick={showResume}>
                    <div className="flex justify-between mb-1">
                        <div className="flex items-center">
                            <MdLabelImportantOutline className="mr-4 h-5 w-5"/>
                            Resume
                        </div>
                        <div className="flex items-center text-slate-500 text-xs">
                            <IoMdAttach className="h-5 w-5 transform rotate-90 mr-4"/>
                            Nov 19
                        </div>
                    </div>
                    <div className="text-sm font-semibold">
                        This is my resume.
                    </div>
                    <div className="text-slate-400 text-sm"> 
                        Here's my resume. 
                    </div>
                    <div className="flex">
                        <div className="border border-slate-300 flex px-4 py-2 flex items-center justify-center rounded-full mt-2 mr-2 hover:bg-slate-200 text-sm text-slate-500">
                            <GrDocumentPdf className="mr-2 h-4 w-4 fill-current text-red-400"/>    
                            Resume.pdf
                        </div>
                    </div>
                </div>
    
                <div className="border-b border-slate-200 px-5 py-4 text-slate-700 hover:shadow-md hover:bg-slate-50" onClick={showAbout}>
                    <div className="flex justify-between mb-1">
                        <div className="flex items-center">
                            <MdLabelImportantOutline className="mr-4 h-5 w-5"/>
                            About Me
                        </div>
                        <div className="flex items-center text-slate-500 text-xs">
                            <IoMdAttach className="h-5 w-5 transform rotate-90 mr-4"/>
                            Nov 19
                        </div>
                    </div>
                    <div className="text-sm font-semibold">
                        This is the About Me page.
                    </div>
                    <div className="text-slate-400 text-sm"> 
                        A brief about my education, work experience, achievements and skills ...
                    </div>
                </div>
            </div>
        );
    }
    const [page, setPage] = useState(<EmailList />);

    function showBack(){
        setPage(<EmailList />);
    }

    function showHome(){
        setPage(<Home device={device} showBack={showBack} />);
    }

    function showProject(){
        setPage(<Project device={device} showBack={showBack} />);
    }

    function showArticle(){
        setPage(<Article device={device} showBack={showBack} />);
    }

    function showResume(){
        setPage(<Resume device={device} showBack={showBack} />);
    }
    
    function showAbout(){
        setPage(<About device={device} showBack={showBack} />);
    }

    return (
        <div className="pt-20 w-full">
            <div className="overflow-y-auto max-w-screen absolute h-screen w-full z-30 bg-white">
                {page}
            </div>
        </div>
    )
}
