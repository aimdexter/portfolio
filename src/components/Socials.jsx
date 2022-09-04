import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { BsStackOverflow, BsTwitter, BsYoutube } from 'react-icons/bs';
import { IoIosAttach } from 'react-icons/io';


const Socials = () => {
    return (
        <div className="flex flex-col gap-5 justify-center mb-4 md:flex-row md:justify-between">
            <div className="flex justify-around md:gap-2 lg:gap-4">
                <div className="text-2xl text-blue-900 transition duration-500 lg:hover:bg-dark lg:p-2 lg:rounded-full lg:hover:text-white lg:dark:hover:bg-white lg:dark:hover:text-dark">
                    <a href="https://www.linkedin.com/in/aimade-anouar/" target='_blank'>
                        <FaLinkedinIn />
                    </a>
                </div>
                <div className="text-2xl text-blue-400 transition duration-500 lg:hover:bg-dark lg:p-2 lg:rounded-full lg:hover:text-white lg:dark:hover:bg-white lg:dark:hover:text-dark">
                    <a href="https://twitter.com/AnouarAimade" target="_blank">
                        <BsTwitter />
                    </a>
                </div>
                <div className="text-2xl text-blue-900 transition duration-500 lg:hover:bg-dark lg:p-2 lg:rounded-full lg:hover:text-white lg:dark:hover:bg-white lg:dark:hover:text-dark">
                    <a href="https://github.com/aimdexter" target="_blank">
                        <FaGithub />
                    </a>
                </div>
                <div className="text-2xl text-brand transition duration-500 lg:hover:bg-dark lg:p-2 lg:rounded-full lg:hover:text-white lg:dark:hover:bg-white lg:dark:hover:text-dark">
                    <a href="https://stackoverflow.com/users/12769151/aimade-anouar?tab=profile" target="_blank">
                        <BsStackOverflow />
                    </a>
                </div>
                <div className="text-2xl text-red-500 transition duration-500 lg:hover:bg-dark lg:p-2 lg:rounded-full lg:hover:text-white lg:dark:hover:bg-white lg:dark:hover:text-dark">
                    <a href="https://www.youtube.com/channel/UCiKzwqOD_8s764hzvhoZm9w" target="_blank">
                        <BsYoutube />
                    </a>
                </div>
                <div className="text-2xl text-pink-900 transition duration-500 lg:hover:bg-dark lg:p-2 lg:rounded-full lg:hover:text-white lg:dark:hover:bg-white lg:dark:hover:text-dark">
                    <a href="https://www.instagram.com/aimade_anouar/" target="_blank">
                        <FaInstagram />
                    </a>
                </div>
            </div>
            <div className="flex justify-center items-center font-bold text-base">
                <div className="flex border-b-4 border-brand pb-2 px-3 md:px-1 dark:text-white transition duration-500">
                    <div className="text-2xl ">
                        <IoIosAttach />
                    </div>
                    <a href="https://docs.google.com/document/d/e/2PACX-1vQ6RChBocrwxccBCjG7nuqTdS6HC4zi509Fgno_cQjtt_tWwqNPDcsPxIDTvOXf10aIzh82KT0xWDyn/pub" target="_blank">
                        <div className="">View resume</div>
                    </a>
                </div>
            </div>
        </div >
    );
}

export default Socials;