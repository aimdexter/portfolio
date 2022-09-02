import Stack from "./Stack";

const Profile = () => {
    return (
        <div className=" flex flex-col pt-8">
            <div className="md:flex md:justify-center md:items-center md:gap-5 md:pb-8">
                <div className="md:flex-1">
                    <img src="/images/profile.jpg" className="rounded-3xl" alt="" />
                </div>
                <div className="md:flex-1">
                    <div className="flex flex-col text-xl font-bold pt-8">
                        Nice to meet you,
                        <span className="text-2xl font-extrabold text-brand pb-4">I am Aimade ANOUAR</span>
                    </div>
                    <div className="flex text-base font-medium pb-8 md:pr-3">
                        Working full time in Angular, Typescript and SCSS, leading the team for revamping DotCMS administration system.
                    </div>
                </div>
            </div>
            <div className="py-8">
                <div className="flex flex-col justify-center items-center gap-5 md:px-20">
                    <div className="text-xl font-bold px-16 text-center">
                        My experience includes but not limited
                    </div>
                    <div className="flex gap-2 flex-wrap items-center justify-center">
                        <Stack content='HTML' />
                        <Stack content='CSS' />
                        <Stack content='SASS' />
                        <Stack content='Tailwind' />
                        <Stack content='Bootstrap' />
                        <Stack content='Figma' />
                        <Stack content='JavaScript' />
                        <Stack content='Nodejs' />
                        <Stack content='npm' />
                        <Stack content='Reactjs' />
                        <Stack content='Nextjs' />
                        <Stack content='Git' />
                        <Stack content='ViteJs' />
                        <Stack content='Python' />
                        <Stack content='Django' />
                        <Stack content='PostgreSQL' />
                        <Stack content='MongoDB' />
                        <Stack content='Mysql' />
                        <Stack content='SQLserver' />
                        <Stack content='Firebase' />
                        <Stack content='Docker' />
                        <Stack content='Nginx' />
                        <Stack content='Github' />
                        <Stack content='Gitlab' />
                        <Stack content='Heroku' />
                        <Stack content='Vercel' />
                        <Stack content='Netlify' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;