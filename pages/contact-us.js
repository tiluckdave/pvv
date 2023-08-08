import Navbar from '@/components/NavBar'
import ContactForm from '@/components/ContactForm';
import ContactCard from '@/components/ContactCard';
import TeamComponent from '@/components/TeamComponent';
import Footer from '@/components/Footer';

const Contact = () => {
    const bg = './bg-city.png';
    return (
        <>
            <Navbar />
            {/* <img src="./bg-city.png" alt='logo' />   */}
            <div className="w-screen bg-contain  bg-no-repeat" style={{ backgroundImage: `url(${bg})` }}>
                {/* Content */}
                <div className=" max-w-full  mx-auto md:px-20 flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 h-full px-10 md:px-0 overflow-x-hidden">
                        <div className="flex flex-col items-start">
                            <p className="uppercase text-xl font-normal text-black pt-20 md:pt-10 ">LET'S CONTACT</p>
                            <h1 className="text-blue-500 text-6xl font-medium">PVV Infra</h1>
                            <p className="font-roboto text-xl mt-2 md:w-1/2">Complete the form and we'll follow
                                up fast within one Business Day</p>
                        </div>
                        <div className="flex flex-col justify-end md:mt-24">
                            <p className="text-xl">Prefer email <span className='text-cyan-600 font-semibold'>pvVinframai123.co</span></p>
                        </div>
                    </div>
                    <div className="md:w-1/2 w-full px-3 md:p-3 box-border">
                        <ContactForm />
                    </div>
                </div>
                {/* Our offices */}
                <div className="w-full bg-cyan-600 p-8 md:p-16">
                    <h1 className="text-2xl text-center  text-white uppercase pt-4 pb-12">Our <span className="font-bold">Offices</span></h1>
                    <div className="md:w-4/5 mx-auto  2xl:mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-16">
                        <ContactCard />
                        <ContactCard />
                        <ContactCard />
                    </div>
                </div>
                {/* Team Component */}
                <TeamComponent />
            </div >

            <Footer />

        </>
    )
}

export default Contact