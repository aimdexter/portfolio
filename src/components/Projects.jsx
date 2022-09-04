import Stack from "./Stack";
import { BsCode } from 'react-icons/bs';
import { TbScreenShare } from 'react-icons/tb';


const Projects = () => {
    const projects = [{
        id: 1,
        title: 'i2i-infogerance',
        content: 'Pwa for i2i company',
        image: '/images/infoi.jpg',
        code: 'https://github.com/youssra-ghninou/i2i-infogerance',
        demo: 'https://www.info2i.com/',
    },
    {
        id: 2,
        title: 'AMAROQ',
        content: 'Portfolio for a photographer, artist and Filmmaker',
        image: '/images/amarok.png',
        code: 'https://aimdexter.github.io/AMAROQ/',
        demo: 'https://github.com/aimdexter/AMAROQ',
    },
    {
        id: 3,
        title: 'AMAROQ',
        content: 'Portfolio for a photographer, artist and Filmmaker',
        image: '/images/amarok.png',
        code: 'https://aimdexter.github.io/AMAROQ/',
        demo: 'https://github.com/aimdexter/AMAROQ',
    },
    {
        id: 3,
        title: 'i2i-infogerance',
        content: 'Pwa for i2i company',
        image: '/images/infoi.jpg',
        code: 'https://github.com/youssra-ghninou/i2i-infogerance',
        demo: 'https://www.info2i.com/',
    },
    {
        id: 4,
        title: 'AMAROQ',
        content: 'Portfolio for a photographer, artist and Filmmaker',
        image: '/images/amarok.png',
        code: 'https://aimdexter.github.io/AMAROQ/',
        demo: 'https://github.com/aimdexter/AMAROQ',
    },
    {
        id: 5,
        title: 'i2i-infogerance',
        content: 'Pwa for i2i company',
        image: '/images/infoi.jpg',
        code: 'https://github.com/youssra-ghninou/i2i-infogerance',
        demo: 'https://www.info2i.com/',
    },
    ];
    return (
        <>
            <div className="font-extrabold text-4xl text-brand pt-8 ">Latest Projects</div>
            <div className="py-7 flex flex-col gap-5 justify-around items-center md:flex-row md:flex-wrap">
                {projects.map(({ id, title, content, image, code, demo }) => {
                    return (
                        <div key={id} className="shadow-lg shadow-dark dark:shadow-white dark:shadow-sm transition duration-500 rounded-2xl md:max-w-[300px]">
                            <div className="">
                                <img className="rounded-3xl py-2" src={image} alt={title} />
                            </div>
                            <div className="px-4 pb-4">
                                <div className="text-2xl text-brand font-bold py-2">
                                    {title}
                                </div>
                                <div className="flex gap-2 dark:text-white transition duration-500">
                                    <Stack content='HTML' />
                                    <Stack content='JavaScript' />
                                    <Stack content='Git' />
                                    <Stack content='ViteJs' />
                                </div>
                                <div className="text-base py-4 font-semibold dark:text-white transition duration-500">
                                    {content}
                                </div>
                                <div className="flex gap-6 text-base font-bold dark:text-white transition duration-500">
                                    <a href={code} className='pb-1  px-2 flex items-center gap-2 border-b-2 border-brand'>
                                        <BsCode />
                                        <div className="l">code</div>
                                    </a>
                                    <a href={demo} className='pb-1 px-2 flex items-center gap-2 border-b-2 border-brand'>
                                        <TbScreenShare />
                                        <div className="l">demo</div>
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