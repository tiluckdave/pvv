const ContactForm = () => {
    return (
        <div className="w-full card rounded-3xl bg-white my-28 px-5 md:px-10 py-8 pb-10 border">
            <h1 className="text-normal text-2xl text-blue-500  text-center uppercase px-12">Send A </h1>
            <h1 className="text-normal text-2xl text-blue-500 font-bold text-center uppercase px-12">Message</h1>


            <div class="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                <input class="w-full bg-gray-100 text-gray-900 mt-4 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="text" placeholder="Name*" />
                <input class="w-full bg-gray-100 text-gray-900 mt-4 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="number" placeholder="Phone*" />
            </div>
            <input class="w-full bg-gray-100 text-gray-900 mt-8 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="email" placeholder="Email*" />
            <div class="my-8">
                <textarea placeholder="Write Your message*" class="w-full h-32 bg-gray-100 text-gray-900 mt-3 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
            </div>
            <button class="uppercase  text-sm  tracking-wide bg-amber-500 text-black p-3 rounded-lg w-full 
  focus:outline-none focus:shadow-outline">
                Send Message
            </button>
        </div>
    )
}

export default ContactForm