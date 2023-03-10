import { BsTwitter, BsInstagram, BsGithub, BsLinkedin, BsYoutube } from "react-icons/bs";
import { SiGmail } from 'react-icons/si';

function Social(){
    return (
        <div className="h-screen pt-28 bg-slate-50 border-l border-slate-200 z-30 px-2 space-y-6 text-slate-600">
            <div className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-slate-200"><BsTwitter className="w-5 h-5" /></div>
            <div className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-slate-200"><BsInstagram className="w-5 h-5" /></div>
            <div className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-slate-200"><BsGithub className="w-5 h-5" /></div>
            <div className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-slate-200"><BsLinkedin className="w-5 h-5" /></div>
            <div className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-slate-200"><BsYoutube className="w-5 h-5" /></div>
            <div className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-slate-200"><SiGmail className="w-5 h-5" /></div>
        </div>
    );
}

export default Social