import Stack from "./Stack";

const Projects = () => {
    const projects = [{
        id: 1,
        title: 'eCommerce Mobile App',
        content: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        image: '/images/project1.svg',
    },
    {
        id: 2,
        title: 'eCommerce Mobile App',
        content: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        image: '/images/project1.svg',
    },
    ];
    return (
        <div className="py-7 flex flex-col gap-5">
            {projects.map(({ id, title, content, image, stack }) => {
                return (
                    <div key={id} className="w-[358px] shadow-2xl rounded-lg">
                        <div className="">
                            <img className="rounded-lg py-2" src={image} alt={title} />
                        </div>
                        <div className="px-4 pb-4">
                            <div className="text-2xl text-brand font-bold py-2">
                                {title}
                            </div>
                            <div className="flex gap-2">
                                <Stack content='HTML' />
                                <Stack content='JavaScript' />
                                <Stack content='Git' />
                                <Stack content='ViteJs' />
                            </div>
                            <div className="text-base py-2 font-semibold">
                                {content}
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default Projects;