import { SiGmail } from 'react-icons/si';
import { IoApps, IoSearch } from 'react-icons/io5';
import { FiSettings } from "react-icons/fi";
import { BsQuestionCircle } from "react-icons/bs";

function Navbar(){
    return (
        <div className="z-40 flex h-20 justify-between items-center px-8 border-b border-slate-200 fixed w-full bg-white">
            <div className="flex items-center text-slate-800 font-semibold">  
                <SiGmail className="h-7 w-7 mr-2 text-red-600" /> MyMail
            </div>
            <div className="bg-slate-100 py-3 px-4 w-1/3 rounded-lg text-slate-600 text-sm flex justify-between items-center"> 
                <input type="search" name="name" placeholder="Search all conversations" className="bg-slate-100 w-full p-1 mx-2" />
                <IoSearch className="h-5 w-5 text-slate-400" />
            </div>
            <div className="flex space-x-6 items-center"> 
                <div className="flex h-10 px-6 rounded-full border border-slate-200 text-slate-800 text-sm hover:bg-slate-100 justify-center items-center"> 
                    <div className="h-3 w-3 rounded-full bg-green-500 mr-3"></div>
                    Active
                </div>

                <div className="p-2 hover:bg-slate-100 rounded-full"> 
                    <FiSettings className="h-5 w-5 text-slate-500"/>
                </div>
                <div className="p-2 hover:bg-slate-100 rounded-full"> 
                    <BsQuestionCircle className="h-5 w-5 text-slate-500"/>
                </div>
                <div className="p-2 hover:bg-slate-100 rounded-full"> 
                    <IoApps className="h-5 w-5 text-slate-500"/>
                </div>
                <div>
                    <img src={process.env.PUBLIC_URL + '/images/navbar-user.jpg'} className="h-12 w-12 object-cover rounded-full" alt="User" /> 
                </div> 
            </div>
        </div>
    );
}

export default Navbar;