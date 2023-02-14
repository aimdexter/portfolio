import { FaHome } from 'react-icons/fa'
import { HashLink } from 'react-router-hash-link'
import { ImProfile } from 'react-icons/im'
import { AiFillContacts, AiOutlineAppstore } from 'react-icons/ai'
import DarkModeToggle from './DarkModeToggle'

const Menu = () => {
  return (
    <div className=''>
      <section
        id='bottom-navigation'
        className='block fixed inset-x-0 lg:top-0 lg:h-fit bottom-0 z-10 bg-dark text-white dark:bg-white transition duration-500 dark:text-dark'
      >
        <div id='tabs' className='flex justify-between font-bold'>
          <HashLink
            smooth
            to='/#projects'
            className='flex flex-col gap-1 justify-center items-center w-full focus:text-brand hover:text-brand pt-2 pb-1'
          >
            <div className='text-xl'>
              <AiOutlineAppstore />
            </div>
            <span className='text-xs'>Projects</span>
          </HashLink>
          <HashLink
            smooth
            to='/#about'
            className='flex flex-col gap-1 justify-center items-center w-full focus:text-brand hover:text-brand pt-2 pb-1'
          >
            <div className='text-xl'>
              <ImProfile />
            </div>
            <span className='text-xs'>About me</span>
          </HashLink>
          <HashLink
            smooth
            to='/#home'
            className='flex flex-col gap-1 justify-center items-center w-full focus:text-brand hover:text-brand pt-2 pb-1'
          >
            <div className='text-xl'>
              <FaHome />
            </div>
            <span className='text-xs'>Home</span>
          </HashLink>
          <HashLink
            smooth
            to='/#contact'
            className='flex flex-col gap-1 justify-center items-center w-full focus:text-brand hover:text-brand pt-2 pb-1'
          >
            <div className='text-xl'>
              <AiFillContacts />
            </div>
            <span className='text-xs'>Contact</span>
          </HashLink>
          <div className='flex flex-col gap-1 justify-center items-center w-full focus:text-brand hover:text-brand pt-2 pb-1'>
            <div className='text-xl'>
              <DarkModeToggle />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Menu
