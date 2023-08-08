const TeamComponent = () => {
    return (
        <div className="w-full py-16">
            <h1 className="text-2xl text-center  text-blue-400 uppercase pt-4 pb-12">Our <span className="font-bold">TEAM </span> Is always for you</h1>
            <div className="flex mt-4 px-3 md:px-0">
                <div className="w-1/2 pr-4 relative">
                    <div className="hidden md:flex h-8 w-full bg-amber-500"></div>
                    <div className="hidden md:flex h-28 w-full bg-cyan-700"></div>
                    <div className="divimg flex flex-col md:absolute top-0 right-0">
                        <img src="./images/person.png" alt="person" className='  w-60 h-auto' />
                        <p className="font-bold text-center text-xs md:text-sm mt-2">ZAMEER AHAMMED KOTTALA</p>
                        <p className='font-light text-center text-gray-500 text-xs md:text-md'>EXECUTIVE DIRECTOR</p>
                    </div>
                </div>
                <div className="w-1/2 pl-4 relative flex  flex-col md:justify-end">
                    <div className="hidden md:flex mt-32 h-8 w-full bg-amber-500"></div>
                    <div className="hidden md:flex h-28 w-full bg-cyan-700"></div>
                    <div className="divimg flex flex-col md:absolute top-0 left-0">
                        <img src="./images/person2.png" alt="person" className='  w-60 h-auto' />
                        <p className="font-bold text-center text-xs md:text-sm mt-2">FAYAZ VAKKAL</p>
                        <p className='font-light text-gray-500 text-center text-xs md:text-md'>INDEPENDENT DIRECTOR</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default TeamComponent