import { BsCode } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { TbScreenShare } from 'react-icons/tb'
import { uid } from 'react-uid'
import Stack from './Stack'

const Projects = () => {
  const projects = [
    {
      id: uid,
      title: 'HUMAN ART',
      content:
        'Human art is a non profit organization for making mental health more valuable',
      image: '/images/human.png',
      code: 'https://github.com/aimdexter/human_art_v2',
      demo: 'https://human-art-v2-aaxprqa9z-aimdexter.vercel.app/',
      tools: [
        'Html',
        'Css',
        'Javascript',
        'Tailwind',
        'Vercel',
        'Github',
        'Github Pages',
      ],
    },
    {
      id: uid,
      title: 'Clipboard',
      content:
        'Clipboard landing page with single section challenge on Frontend Mentor',
      image: '/images/clipboard.png',
      code: 'https://github.com/aimdexter/clipboard_landing_page',
      demo: 'https://aimdexter.github.io/clipboard_landing_page/',
      tools: ['Html', 'Css', 'Javascript', 'Github', 'Github Pages'],
    },
    {
      id: uid,
      title: 'Huddle',
      content:
        'Huddle landing page with curved sections challenge on Frontend Mentor',
      image: '/images/huddle.png',
      code: 'https://github.com/aimdexter/social_proof',
      demo: 'https://aimdexter.github.io/social_proof/',
      tools: ['HTML', 'CSS', 'Javascript', 'github pages', 'github'],
    },
    {
      id: uid,
      title: 'SPACE TRAVEL',
      content:
        'Presentation of space travel crew, destination and technologies',
      image: '/images/space.png',
      code: 'https://github.com/aimdexter/Space-Travel',
      demo: 'https://aimdexter.github.io/Space-Travel/index.html',
      tools: [
        'Html',
        'Tailwind',
        'Css',
        'Javascript',
        'Github',
        'Github Pages',
      ],
    },
    {
      id: uid,
      title: 'AMAROQ',
      content: 'Portfolio for a photographer, artist and Filmmaker',
      image: '/images/amarok.png',
      code: 'https://github.com/aimdexter/AMAROQ',
      demo: 'https://aimdexter.github.io/AMAROQ/',
      tools: [
        'HTML',
        'Css',
        'Javascript',
        'Tailwind',
        'Reactjs',
        'Vercel',
        'Github',
      ],
    },
    {
      id: uid,
      title: 'i2i infogerance',
      content:
        'I2i is a company that blend design, engineering, and analytics expertise',
      image: '/images/infoi.jpg',
      code: 'https://github.com/youssra-ghninou/i2i-infogerance',
      demo: 'https://www.info2i.com/',
      tools: ['HTML', 'Tailwind', 'Reactjs', 'Vercel', 'Github'],
    },
    {
      id: uid,
      title: 'i2i infogerance',
      content:
        'I2i is a company that blend design, engineering, and analytics expertise',
      image: '/images/infoi.jpg',
      code: 'https://github.com/youssra-ghninou/i2i-infogerance',
      demo: 'https://www.info2i.com/',
      tools: ['HTML', 'Tailwind', 'Reactjs', 'Vercel', 'Github'],
    },
  ]
  return (
    <div className='lg:pt-8'>
      <div className='lg:flex lg:items-center lg:justify-between'>
        <div className='font-extrabold text-4xl text-brand pt-8 '>
          Latest Projects
        </div>
        <a
          href='https://github.com/aimdexter'
          className='flex bg-dark dark:bg-white transition duration-500 dark:text-dark lg:mt-8  mt-2 p-2 rounded-full text-white items-center gap-2 w-fit'
          target='_blank'
        >
          <span className='font-bold text-xs'>More Projects</span>
          <div className='text-xl'>
            <FaGithub />
          </div>
        </a>
      </div>
      <div className='py-7 flex flex-col gap-5 justify-around items-start md:flex-row md:flex-wrap'>
        {projects
          .reverse()
          .map(({ id, title, content, image, code, demo, tools }) => {
            return (
              <div
                key={id}
                className='shadow-lg w-fit shadow-dark dark:shadow-white dark:shadow-sm transition duration-500 rounded-2xl md:max-w-[300px] h-fit'
              >
                <div className=''>
                  <img
                    className='rounded-3xl py-2 transition ease-in-out delay-150 bg-gray-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300'
                    src={image}
                    alt={title}
                  />
                </div>
                <div className='px-4 pb-4'>
                  <div className='text-2xl uppercase text-brand font-bold py-2'>
                    {title}
                  </div>
                  <div className='flex flex-wrap gap-2 dark:text-white transition duration-500'>
                    {tools.map((item, i) => {
                      return <Stack key={i}>{item}</Stack>
                    })}
                  </div>
                  <div className='text-sm py-4 dark:text-white transition duration-500 text-justify'>
                    {content}
                  </div>
                  <div className='flex gap-6 text-base font-bold dark:text-white'>
                    <a
                      href={code}
                      target='_blank'
                      className='pb-1 transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110 px-2 flex items-center gap-2 border-b-2 border-brand'
                    >
                      <BsCode />
                      <div className=''>code</div>
                    </a>
                    <a
                      href={demo}
                      target='_blank'
                      className='pb-1 transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110 px-2 flex items-center gap-2 border-b-2 border-brand'
                    >
                      <TbScreenShare />
                      <div className=''>demo</div>
                    </a>
                  </div>
                </div>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default Projects
