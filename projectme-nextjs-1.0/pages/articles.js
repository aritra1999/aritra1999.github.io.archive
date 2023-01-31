import ProjectArticleCard from '../components/ProjectArticleCard';
import articles from '../public/data/articles.json';

function Articles(){
    return (
        <div className="container px-5 py-24 mx-auto">
            <span className="text-6xl font-bold magical-underline text-gray-800">Articles</span>
            <div className="mt-10 grid lg:grid-cols-4 md:grid-cols-2 sm:col-span-1 gap-10">
                {
                    articles.map((article, i) => <ProjectArticleCard
                        key={i}
                        thumbnail={article.thumbnail}
                        title={article.title}
                        description={article.description}
                        links={article.links}
                        tags={article.tags}
                        ongoing={article.ongoing}
                    />)
                }
            </div>
        </div>
    );
}


export default Articles;