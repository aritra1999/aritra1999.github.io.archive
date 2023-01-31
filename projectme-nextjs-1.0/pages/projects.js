import ProjectArticleCard from '../components/ProjectArticleCard';
import projects from '../public/data/projects.json';
import Navbar from '../components/Navbar';


function Projects(){
    
    return (
        
        <main>
            <div className="absolute w-screen bg-green-100 py-4 text-green-600 font-medium text-center">
                Under Construction!
            </div>
            <Navbar />  
            <div className="container px-5 py-24 mx-auto max-w-screen">
                <span className="text-6xl font-bold magical-underline text-gray-800">Projects</span>
                <div className="mt-10 grid lg:grid-cols-4 md:grid-cols-2 sm:col-span-1 gap-10">
                    {
                        projects.map((project, i) => <ProjectArticleCard 
                            key={i}
                            thumbnail={project.thumbnail}
                            title={project.title}
                            description={project.description}
                            links={project.links}
                            tags={project.tags}
                            ongoing={project.ongoing}
                        />)
                    }
                </div>
            </div>
        </main>
    );
}

export default Projects;