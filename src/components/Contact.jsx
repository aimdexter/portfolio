import { IoMdSend } from 'react-icons/io';

const Contact = () => {
    return (
        <div class="flex flex-col justify-center items-center pt-8">
            <div class="pt-4 pb-8 rounded-xl w-[320px]">
                <h1 class="text-2xl font-semibold text-gray-900 text-center">I’m ready to talk...</h1>
                <form class="mt-12" action="" method="POST">
                    <div class="relative">
                        <input id="Name" name="Name" type="text" class="bg-transparent pl-2 peer h-10 w-full border-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-brand" placeholder="Name" />
                        <label for="Name" class="absolute left-2 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:font-semibold peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-2 peer-focus:bg-white peer-focus:text-gray-600 peer-focus:text-sm">Name</label>
                    </div>
                    <div class="mt-10 relative">
                        <input id="email" type="text" name="email" class="peer pl-2 h-10 w-full border-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-brand" placeholder="email" />
                        <label for="email" class="absolute left-2 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:font-semibold peer-placeholder-shown:top-2 peer-focus:-top-2 peer-focus:bg-white peer-focus:text-gray-600 peer-focus:text-sm">Email</label>
                    </div>
                    <div class="mt-10 relative">
                        <input id="Message" type="Textarea" name="password" class="peer pl-2 h-10 w-full border-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-brand" placeholder="Message" />
                        <label for="Message" class="absolute left-2 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:font-semibold peer-placeholder-shown:top-2 peer-focus:-top-2 peer-focus:bg-white peer-focus:text-gray-600 peer-focus:text-sm">Message</label>
                    </div>
                    <div className="flex w-fit mx-auto px-2 flex-row items-center justify-center pt-8 gap-1 text-lg font-bold border-b-2 border-brand">
                        <IoMdSend />
                        <button type="submit">send</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Contact;