import Typical from 'react-typical'
import Socials from './Socials'
import Stack from './Stack'
import Profileimage from '/images/profile.webp'

const Profile = () => {
  const tools = [
    'HTML',
    'CSS',
    'SASS',
    'Tailwind',
    'Bootstrap',
    'Figma',
    'JavaScript',
    'Nodejs',
    'npm',
    'Reactjs',
    'Nextjs',
    'Git',
    'ViteJs',
    'Python',
    'Django',
    'PostgreSQL',
    'MongoDB',
    'Mysql',
    'SQLserver',
    'Firebase',
    'Docker',
    'Nginx',
    'Github',
    'Gitlab',
    'Heroku',
    'Vercel',
    'Netlify',
  ]
  return (
    <div className=' flex flex-col pt-8 lg:mt-8'>
      <div className='flex pb-6 flex-col-reverse md:flex md:flex-row md:justify-center md:items-center md:gap-5 md:pb-8'>
        <div className='md:flex-1'>
          <img
            src={Profileimage}
            className='rounded-3xl w-fit h-fit transition hover:-translate-y-1 hover:-rotate-6 duration-300'
            alt=''
          />
        </div>
        <div className='md:flex-1'>
          <div className='flex flex-col text-xl font-bold py-4'>
            <span className='font-extrabold text-4xl text-brand pb-4'>
              <Typical wrapper='b' steps={['> I am Aimade ANOUAR', 5000]} />
            </span>
            <div className='text-brandLight'>Nice to meet you,</div>
          </div>
          <div className='flex text-base md:flex-col text-justify font-bold pb-8 md:pr-3'>
            <div className='pb-8 dark:text-white transition duration-500'>
              I am a full-stack engineer, creative coder and self-proclaimed
              designer who specializes in front-end development. I make it my
              mission to translate user-focused designs into pixel-perfect
              websites or applications that run blazing fast.
            </div>
            <div className='hidden md:block'>
              <Socials />
            </div>
          </div>
        </div>
      </div>
      <div className='md:hidden'>
        <Socials />
      </div>
      <div className='py-8'>
        <div className='flex flex-col justify-center items-center gap-5 md:px-20 dark:text-white transition duration-500'>
          <div className='text-xl font-bold px-16 text-center'>
            My experience includes but not limited
          </div>
          <div className='flex gap-2 flex-wrap items-center justify-center'>
            {tools.map((item, i) => {
              return <Stack key={i}>{item}</Stack>
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
