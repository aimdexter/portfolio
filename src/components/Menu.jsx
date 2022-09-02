import { FaHome } from 'react-icons/fa';
import { SiAboutdotme } from 'react-icons/si';
import { AiFillContacts, AiOutlineAppstore } from 'react-icons/ai';

const Menu = () => {
    return (
        <div class="">
            <section id="bottom-navigation" class="block fixed inset-x-0 bottom-0 z-10 bg-black text-white">
                <div id="tabs" class="flex justify-between">
                    <a href="#" class="flex flex-col gap-1 justify-center items-center  w-full focus:text-teal-500 hover:text-teal-500 pt-2 pb-1">
                        <div className="text-xl">
                            <FaHome />
                        </div>
                        <span class="text-xs">Home</span>
                    </a>
                    <a href="#socials" class="flex flex-col gap-1 justify-center items-center  w-full focus:text-teal-500 hover:text-teal-500 pt-2 pb-1">
                        <div className="text-xl">
                            <AiOutlineAppstore />
                        </div>
                        <span class="text-xs">Projects</span>
                    </a>
                    <a href="#" class="flex flex-col gap-1 justify-center items-center w-full focus:text-teal-500 hover:text-teal-500 pt-2 pb-1">
                        <div className="text-xl">
                            <SiAboutdotme />
                        </div>
                        <span class="text-xs">About me</span>
                    </a>
                    <a href="#" class="flex flex-col gap-1 justify-center items-center w-full focus:text-teal-500 hover:text-teal-500 pt-2 pb-1">
                        <div className="text-xl">
                            <AiFillContacts />
                        </div>
                        <span class="text-xs">Contact</span>
                    </a>
                </div>
            </section>
        </div>
    );
}

export default Menu;