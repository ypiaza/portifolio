const SkillsBar = () => {
    return (
        <div className='grid grid-cols-1 items-center justify-center h-full bg-white hover:shadow-2xl hover:shadow-white/50 duration-300'>
                <iframe
                    className='w-full'
                    src="https://github-readme-stats.vercel.app/api/top-langs/?username=ypiaza&layout=compact&langs_count=8&theme=dark "
                    title="Top Languages"
                />
        </div>
    )
}

export default SkillsBar