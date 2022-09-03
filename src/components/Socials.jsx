import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { BsStackOverflow, BsTwitter, BsYoutube } from 'react-icons/bs';
import { IoIosAttach } from 'react-icons/io';

const Socials = () => {
    return (
        <div className="flex flex-col gap-5 justify-center mb-4 md:flex-row md:justify-between">
            <div className="flex justify-around md:gap-2">
                <div className="text-2xl text-blue-900">
                    <FaLinkedinIn />
                </div>
                <div className="text-2xl text-blue-400">
                    <BsTwitter />
                </div>
                <div className="text-2xl text-blue-900">
                    <FaGithub />
                </div>
                <div className="text-2xl text-brand">
                    <BsStackOverflow />
                </div>
                <div className="text-2xl text-red-500">
                    <BsYoutube />
                </div>
                <div className="text-2xl text-pink-900">
                    <FaInstagram />
                </div>
            </div>
            <div className="flex justify-center items-center font-bold text-base">
                <div className="flex border-b-4 border-brand pb-2 px-3 md:px-1">
                    <div className="text-2xl">
                        <IoIosAttach />
                    </div>
                    <div className="">Download CV</div>
                </div>
            </div>
        </div >
    );
}

export default Socials;