import Navbar from '../components/Navbar';
import { IoMdMail } from "react-icons/io";
import { FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaGithub} from "react-icons/fa";



export default function Home() {
  return (
      <main>
        <div className="absolute w-screen bg-green-100 py-4 text-green-600 font-medium text-center">
                Under Construction!
        </div>
        <Navbar /> 
        <div className="container mx-auto">
                <div className="flex md:flex-row flex-col-reverse">
                    <div className="flex items-center justify-center sm:h-screen h-1/2 sm:w-1/2 w-full">
                        <div className="section px-6">
                            <div className="mb-2">Hi, I'm Aritra Mondal.</div>
                            <div className="sm:text-8xl text-5xl text-gray-800 font-bold space-y-4 mt-auto">
                                <span className="magical-underline">Developer. </span>
                                <span className="magical-underline">Designer. </span>
                                <span className="magical-underline">Gamer. </span>
                            </div>
                            <div className="mt-12 text-gray-800 ml-2 flex sm:space-x-10 space-x-8 flex-row text-2xl sm:text-3xl mb-auto">
                                <a target="_blank" href="mailto:1806290@kiit.ac.in">
                                    <IoMdMail />
                                </a>
                                <a target="_blank" href="#">
                                    <FaGithub />
                                </a>
                                <a target="_blank" href="https://twitter.com/aritramondal199">
                                    <FaTwitter />
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
                    <div className="sm:w-1/2 sm:p-0 sm:mt-auto sm:mb-auto mt-10 p-10 w-full">
                        <img src="images/me2.png" className="w-4/5 mx-auto" style={{ borderRadius: "50px 50px 0 50px" }} />
                    </div>
                </div>
            </div>
      </main>
  )
}