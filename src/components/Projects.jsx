import Stack from "./Stack";
import { BsCode } from 'react-icons/bs';
import { TbScreenShare } from 'react-icons/tb';


const Projects = () => {
    const projects = [
        {
            id: 1,
            title: 'i2i-infogerance',
            content: 'Pwa for i2i company',
            image: '/images/infoi.jpg',
            code: 'https://github.com/youssra-ghninou/i2i-infogerance',
            demo: 'https://www.info2i.com/',
            tools: ["HTML", "Tailwind", "Reactjs", "Vercel"],
        },
        {
            id: 2,
            title: 'AMAROQ',
            content: 'Portfolio for a photographer, artist and Filmmaker',
            image: '/images/amarok.png',
            code: 'https://github.com/aimdexter/AMAROQ',
            demo: 'https://aimdexter.github.io/AMAROQ/',
            tools: ["HTML", "Css", "Tailwind", "Reactjs", "Vercel", "github"],
        },
        {
            id: 3,
            title: 'i2i-infogerance',
            content: 'Pwa for i2i company',
            image: '/images/infoi.jpg',
            code: 'https://github.com/youssra-ghninou/i2i-infogerance',
            demo: 'https://www.info2i.com/',
            tools: ["CSS", "Tailwind", "Reactjs", "Vercel", "github"],
        },
        {
            id: 4,
            title: 'AMAROQ',
            content: 'Portfolio for a photographer, artist and Filmmaker',
            image: '/images/amarok.png',
            code: 'https://github.com/aimdexter/AMAROQ',
            demo: 'https://aimdexter.github.io/AMAROQ/',
            tools: ["CSS", "Tailwind", "Reactjs", "Vercel", "github", "Figma", "Heroku", "Nodejs"],
        },
        {
            id: 5,
            title: 'AMAROQ',
            content: 'Portfolio for a photographer, artist and Filmmaker',
            image: '/images/amarok.png',
            code: 'https://github.com/aimdexter/AMAROQ',
            demo: 'https://aimdexter.github.io/AMAROQ/',
            tools: ["HTML", "CSS", "Tailwind", "Reactjs", "Vercel", "github"],
        },
        {
            id: 6,
            title: 'i2i-infogerance',
            content: 'Pwa for i2i company',
            image: '/images/infoi.jpg',
            code: 'https://github.com/youssra-ghninou/i2i-infogerance',
            demo: 'https://www.info2i.com/',
            tools: ["HTML", "CSS", "Tailwind", "Reactjs", "Vercel", "github"],
        },
    ];
    return (
        <>
            <div className="font-extrabold text-4xl text-brand pt-8 ">Latest Projects</div>
            <div className="py-7 flex flex-col gap-5 justify-around items-start md:flex-row md:flex-wrap">
                {projects.map(({ id, title, content, image, code, demo, tools }) => {
                    return (
                        <div key={id} className="shadow-lg shadow-dark dark:shadow-white dark:shadow-sm transition duration-500 rounded-2xl md:max-w-[300px] h-fit">
                            <div className="">
                                <img className="rounded-3xl py-2 transition ease-in-out delay-150 bg-gray-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300" src={image} alt={title} />
                            </div>
                            <div className="px-4 pb-4">
                                <div className="text-2xl text-brand font-bold py-2">
                                    {title}
                                </div>
                                <div className="flex flex-wrap gap-2 dark:text-white transition duration-500">
                                    {tools.map((item, i) => {
                                        return (
                                            <Stack key={i} content={item} />
                                        );
                                    })}
                                </div>
                                <div className="text-sm py-4 dark:text-white transition duration-500">
                                    {content}
                                </div>
                                <div className="flex gap-6 text-base font-bold dark:text-white">
                                    <a href={code} target='_blank' className='pb-1 transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110 px-2 flex items-center gap-2 border-b-2 border-brand'>
                                        <BsCode />
                                        <div className="">code</div>
                                    </a>
                                    <a href={demo} target='_blank' className='pb-1 transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110 px-2 flex items-center gap-2 border-b-2 border-brand'>
                                        <TbScreenShare />
                                        <div className="">demo</div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default Projects;