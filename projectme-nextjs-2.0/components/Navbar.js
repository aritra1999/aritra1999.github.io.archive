import { IoMdMail } from "react-icons/io";
import { FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaGithub} from "react-icons/fa";


function Navbar(){
    return (
        <nav role="navigation">
            
            <div id="menuToggle">
                
                <input type="checkbox" />
                <span></span>
                <span></span>
                <span></span> 


                <div id="menu" className="grid place-content-between">
                    <div className="space-y-8 sm:space-y-16 font-bold lg:text-5xl md:text-4xl text-3xl">
                        <a className="block" href="/">Home</a>
                        <a className="block" href="/projects">Projects</a>
                        <a className="block" href="/articles">Articles</a>
                        <a className="block" href="/about">About</a>
                        <a className="block" href="resume/Resume.pdf" target="_blank">Resume</a>
                    </div>
                    <div className="flex space-x-8 flex-row text-2xl sm:text-2xl">
                        <a target="_blank" href="mailto:1806290@kiit.ac.in">
                            <IoMdMail />
                        </a>
                        <a target="_blank" href="https://twitter.com/aritramondal199">
                            <FaTwitter />
                        </a>
                        <a target="_blank" href="#">
                            <FaGithub />
                        </a>
                        <a target="_blank" href="https://www.instagram.com/__aritra_mondal__/">
                            <FaInstagram />
                        </a>
                        <a target="_blank" href="https://www.linkedin.com/in/aritra1999/">
                            <FaLinkedin />
                        </a>
                        <a target="_blank" href="https://www.youtube.com/channel/UCaOZb2OH84nCezEt9gnKy-Q">
                            <FaYoutube />    
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}
export default Navbar;