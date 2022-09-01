const Projects = () => {
    const projects = [{
        id: 1,
        title: 'eCommerce Mobile App',
        content: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        image: '/images/project1.svg',
    },
    ];
    return (
        <div className="">
            {projects.map(({ id, title, content, image }) => {
                return (
                    <div key={id} className="">
                        <div className="">
                            <img className="w-[358px] h-[299px] rounded-lg" src={image} alt={title} />
                        </div>
                        <div className="text">
                            {title}
                        </div>
                        <div className="">
                            {content}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default Projects;