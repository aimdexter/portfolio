import Stack from "./Stack";
import { BsCode } from 'react-icons/bs';
import { GrDeploy } from 'react-icons/gr';


const Projects = () => {
    const projects = [{
        id: 1,
        title: 'eCommerce Mobile App',
        content: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        image: '/images/project1.svg',
        code: 'https://github.com/youssra-ghninou/i2i-infogerance',
        demo: 'https://www.info2i.com/',
    },
    {
        id: 2,
        title: 'eCommerce Mobile App',
        content: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        image: '/images/project1.svg',
        code: 'https://github.com/youssra-ghninou/i2i-infogerance',
        demo: 'https://www.info2i.com/',
    },
    ];
    return (
        <div className="py-7 flex flex-col gap-5">
            {projects.map(({ id, title, content, image, code, demo }) => {
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
                            <div className="flex gap-6 text-base font-bold">
                                <a href={code} className='pb-1 px-2 flex items-center gap-2 border-b-2 border-brand'>
                                    <BsCode />
                                    <div className="l">code</div>
                                </a>
                                <a href={demo} className='pb-1 px-2 flex items-center gap-2 border-b-2 border-brand'>
                                    <GrDeploy />
                                    <div className="l">demo</div>
                                </a>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default Projects;