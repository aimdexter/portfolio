import { FaHome } from 'react-icons/fa';
import { HashLink } from 'react-router-hash-link';
import { ImProfile } from 'react-icons/im';
import { AiFillContacts, AiOutlineAppstore } from 'react-icons/ai';
import DarkModeToggle from './DarkModeToggle';

const Menu = () => {
    return (
        <div class="">
            <section id="bottom-navigation" class="block fixed inset-x-0 lg:top-0 lg:h-fit bottom-0 z-10 bg-dark text-white dark:bg-white transition duration-500 dark:text-dark">
                <div id="tabs" class="flex justify-between font-bold">
                    <HashLink smooth to="/#projects" class="flex flex-col gap-1 justify-center items-center w-full focus:text-brand hover:text-brand pt-2 pb-1">
                        <div className="text-xl">
                            <AiOutlineAppstore />
                        </div>
                        <span class="text-xs">Projects</span>
                    </HashLink>
                    <HashLink smooth to="/#about" class="flex flex-col gap-1 justify-center items-center w-full focus:text-brand hover:text-brand pt-2 pb-1">
                        <div className="text-xl">
                            <ImProfile />
                        </div>
                        <span class="text-xs">About me</span>
                    </HashLink>
                    <HashLink smooth to="/#home" class="flex flex-col gap-1 justify-center items-center w-full focus:text-brand hover:text-brand pt-2 pb-1">
                        <div className="text-xl">
                            <FaHome />
                        </div>
                        <span class="text-xs ">Home</span>
                    </HashLink>
                    <HashLink smooth to="/#contact" class="flex flex-col gap-1 justify-center items-center w-full focus:text-brand hover:text-brand pt-2 pb-1">
                        <div className="text-xl">
                            <AiFillContacts />
                        </div>
                        <span class="text-xs">Contact</span>
                    </HashLink>
                    <div class="flex flex-col gap-1 justify-center items-center w-full focus:text-brand hover:text-brand pt-2 pb-1">
                        <div className="text-xl">
                            <DarkModeToggle />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Menu;