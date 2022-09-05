import { MdDarkMode } from 'react-icons/md';
import { BsSun } from 'react-icons/bs';
import { IconContext } from "react-icons";
import useDarkeMode from '../hooks/useDarkeMode';


const DarkModeToggle = () => {
    const [colorTheme, setTheme] = useDarkeMode();
    return (
        <button onClick={() => setTheme(colorTheme)} className="transition duration-500">
            {colorTheme === "light" ? (
                <IconContext.Provider value={{ className: "text-xl" }}>
                    <div className="flex flex-col gap-1 justify-center items-center w-full">
                        <BsSun />
                        <span className="text-xs">Light Mode</span>
                    </div>
                </IconContext.Provider>) :
                (<IconContext.Provider value={{ className: "text-xl" }}>
                    <div className="flex flex-col gap-1 justify-center items-center w-full">
                        <MdDarkMode />
                        <span className="text-xs">Dark Mode</span>
                    </div>
                </IconContext.Provider>)
            }

        </button>
    );
}

export default DarkModeToggle;