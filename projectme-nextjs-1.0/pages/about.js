import Navbar from '../components/Navbar';

function About(){
    return (
        <main>
            <div className="absolute w-screen bg-green-100 py-4 text-green-600 font-medium text-center">
                Under Construction!
            </div>
            <Navbar />  
        
            <div className="container px-5 py-24 mx-auto">
                <div>
                    <span className="text-6xl font-bold text-gray-800 magical-underline" >Skills</span>
                    <div className="py-10">
                        
                    </div>
                </div>
                <div>
                    <span className="text-6xl font-bold text-gray-800 magical-underline" >Edication</span>
                    <div className="py-10">
                        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:col-span-1 gap-10">
                            <div className="bg-white px-6 py-4 shadow-md rounded-lg">
                                lorem ipsum
                            </div>
                            <div className="bg-white px-6 py-4 shadow-md rounded-lg">
                                lorem ipsum
                            </div>
                            <div className="bg-white px-6 py-4 shadow-md rounded-lg">
                                lorem ipsum
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <span className="text-6xl font-bold text-gray-800 magical-underline" >Experience</span>
                    <div className="py-10">

                    </div>
                </div>
                <div>
                    <span className="text-6xl font-bold text-gray-800 magical-underline" >Certificates</span>
                    <div className="py-10">

                    </div>
                </div>
            </div>
        </main>
    );

}

export default About;