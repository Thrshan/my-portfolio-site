import './MarriagePage.css'
import { useEffect } from 'react'

function MarriagePage() {
    useEffect(() => {
        if (window.innerWidth >= 1024) { // Standard desktop breakpoint
            alert('This site is optimized for mobile devices. For the best experience, please view on a mobile device.')
        }
    }, [])

    return (
        <>

            <div className='bg-[#6fcf9a]'>
                <div className='relative h-screen'>
                    <img
                        src="/hero-image.png"
                        alt="background-blur"
                        className="absolute inset-0 w-full  object-cover blur-xl brightness-110 opacity-70"
                    />
                    <img
                        src="/hero-image-bottom-blur.png"
                        alt="background"
                        className="absolute inset-0 w-full  object-cover border-0"
                    />

                    <div className="absolute inset-x-0 bottom-0 w-full flex flex-col items-center pb-5">
                        <text className="text-5xl font-medium text-center mb-10 font-dancingScript text-[#f8ffca] text-shadow-amber-950 text-shadow-lg/30">
                            <p>Thrshan</p>
                            <p>&</p>
                            <p>Durga Madhuri</p>
                        </text>

                        <text className="text-4xl font-medium text-center font-dancingScript text-[#f8ffca] text-shadow-blue-400 text-shadow-lg/30">
                            <p className='text-[#0f0c41]'>Hey !! <br />We're getting married...<br /> </p>

                        </text>


                        <text className="block text-xl font-satisfy font-medium text-center m-5 text-[#22221F] text-shadow-amber-950 text-shadow-2xs">
                            <p>We can't wait to share our special day with you. Help us capture our wedding with Joy 💖</p>
                        </text>
                    </div>

                </div>

                <div className="">
                    <div className='bg-emerald-50'>
                        {/* <p className='font-sans font-bold text-3xl pt-10 text-shadow-amber-950'>Hindu Marriage</p> */}
                        {/* <div className='h-[700px]'></div> */}
                        <h2 className="text-4xl md:text-5xl font-dancingScript text-[#374151] mb-4 pt-5">Save the Date</h2>

                        <section className="bg-[#e9f5f2] py-4 px-6 text-center">
                            <h3 className="text-3xl md:text-4xl font-dancingScript text-[#374151] mb-4">Hindu Marriage</h3>
                            {/* <p className="text-xl font-satisfy text-[#374151] mb-8">We can't wait to celebrate with you!</p> */}

                            <div className="flex flex-col md:flex-row justify-center gap-10 mb-10">
                                <div className="bg-white rounded-2xl shadow-xl px-6 py-8 w-full md:w-1/3 border-t-8 border-[#6fcf9a]">
                                    <h3 className="text-2xl font-bold mb-2 text-[#1f2937]">Reception</h3>
                                    <p className="text-lg text-[#4b5563]">May 15, 2025</p>
                                    <p className="text-md text-[#6b7280]">7:00 PM onwards</p>
                                    <p className="text-sm mt-3 text-[#6d90d6]">
                                        <a
                                            href="https://maps.app.goo.gl/akpj9r147bbFhLBZA?g_st=aw"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            style={{ textDecoration: "underline", color: "inherit" }}
                                        >
                                            Hotel Sri Vyshnavi A/C Function Hall<br />Near Kunkullsmms Temple,<br />Dwaraka Tirumala<br />Andhra Pradesh 534 426
                                        </a>
                                    </p>
                                </div>

                                <div className="bg-white rounded-2xl shadow-xl px-6 py-8 w-full md:w-1/3 border-t-8 border-[#fbbf24]">
                                    <h3 className="text-2xl font-bold mb-2 text-[#1f2937]">Marriage</h3>
                                    <p className="text-lg text-[#4b5563]">May 16, 2025</p>
                                    <p className="text-md text-[#6b7280]">4:58 AM</p>
                                    <p className="text-sm mt-3 text-[#6d90d6]">
                                        <a
                                            href="https://maps.app.goo.gl/akpj9r147bbFhLBZA?g_st=aw"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            style={{ textDecoration: "underline", color: "inherit" }}
                                        >
                                            Hotel Sri Vyshnavi A/C Function Hall<br />Near Kunkullsmms Temple,<br />Dwaraka Tirumala,<br />Andhra Pradesh 534 426
                                        </a>
                                    </p>
                                </div>
                            </div>
                            <div className="w-full flex justify-center mb-7">
                                <div className="bg-white rounded-2xl shadow-xl px-6 py-8 w-[80%] md:w-1/3 border-t-8 border-[#fbbf24]">
                                    <h4 className="text-xl font-bold mb-2 text-[#1f2937]">Contacts</h4>
                                    <p>Madhuri : <a href="tel:7981240409">7981240409</a></p>
                                    <p>Chandu (Bride's Bro) : <a href="tel:8985724090">8985724090</a></p>
                                </div>
                            </div>
                            

                            {/* <p className="italic text-[#6b7280] font-satisfy text-md">Mark your calendars and come celebrate with us!</p> */}
                        </section>

                        <section className="bg-[#e9f5f2] py-4 px-6 text-center">
                            <h3 className="text-3xl md:text-4xl font-dancingScript text-[#374151] mb-4">Christian Marriage</h3>
                            {/* <p className="text-xl font-satisfy text-[#374151] mb-8">We can't wait to celebrate with you!</p> */}

                            <div className="flex flex-col md:flex-row justify-center gap-10 mb-12">
                                <div className="bg-white rounded-2xl shadow-xl px-6 py-8 w-full md:w-1/3 border-t-8 border-[#6fcf9a]">
                                    <h3 className="text-2xl font-bold mb-2 text-[#1f2937]">Marriage</h3>
                                    <p className="text-lg text-[#4b5563]">June 8, 2025</p>
                                    <p className="text-md text-[#6b7280]">10:30 AM to 11:30 AM (with Mass)</p>
                                    <p className="text-sm mt-3 text-[#6d90d6]">
                                        <a
                                            href="https://maps.app.goo.gl/BdyMLEqK8LbvB1Ao8"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            style={{ textDecoration: "underline", color: "inherit" }}
                                        >
                                            Krist Jyothi Church,<br />3/156, Mount Poonamallee Road,<br />Ramapuram, Chennai 600 089
                                        </a>
                                    </p>
                                </div>

                                <div className="bg-white rounded-2xl shadow-xl px-6 py-8 w-full md:w-1/3 border-t-8 border-[#fbbf24]">
                                    <h3 className="text-2xl font-bold mb-2 text-[#1f2937]">Reception</h3>
                                    <p className="text-lg text-[#4b5563]">June 8, 2025</p>
                                    <p className="text-md text-[#6b7280]">11:30 AM</p>
                                    <p className="text-sm mt-3 text-[#6d90d6]">
                                        <a
                                            href="https://maps.app.goo.gl/w4ffkkZ1hLBdwa4c8"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            style={{ textDecoration: "underline", color: "inherit" }}
                                        >
                                            Jothi Mahal (A/C),<br />3/156, Mount Poonamallee Road,<br />Ramapuram, Chennai 600 089
                                        </a>
                                    </p>
                                </div>
                            </div>
                            <div className="w-full flex justify-center mb-7">
                                <div className="bg-white rounded-2xl shadow-xl px-6 py-8 w-[80%] md:w-1/3 border-t-8 border-[#fbbf24]">
                                    <h4 className="text-xl font-bold mb-2 text-[#1f2937]">Contacts</h4>
                                    <p>Thrshan : <a href="tel:7299800768">7299800768</a></p>
                                    <p>Preyan (Grooms's Bro) : <a href="tel:9176363561">9176363561</a></p>
                                </div>
                            </div>

                            <p className="italic text-[#6b7280] font-satisfy text-xl">Mark your calendars and come celebrate with us!</p>
                        </section>
                    </div>

                    <div className='pt-5 pb-5 bg-white flex items-center justify-center'>
                        <img src="/image-story.webp" alt="story-image" className="w-full md:w-1/2 text-center" />
                    </div>
                    <div className=' p-10'>
                        <h2 className="text-4xl font-dancingScript text-[#374151] text-shadow-amber-950 text-shadow-2xs mb-8">Our Story</h2>
                        <p className="text-lg font-satisfy text-[#22221F] leading-relaxed">
                            Every love story is beautiful, but ours is my favorite.
                            What began as a simple friendship slowly blossomed into a love story that means the world to us.
                            There were countless reasons why this relationship might not have worked—but all we needed was one reason to believe, and we held on to that with everything we had.
                            Over time, we discovered how perfectly we fit together—like pieces of a jigsaw puzzle, complementing each other’s strengths and embracing each other’s flaws.
                            Now, we're ready to begin our greatest adventure yet: our journey as husband and wife.
                        </p>
                    </div>

                    <div className=' p-10'>
                        <h2 className="text-4xl font-dancingScript text-[#374151] text-shadow-amber-950 text-shadow-2xs mb-8">Video</h2>
                        <p className="text-lg font-satisfy text-[#22221F] leading-relaxed">
                           
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MarriagePage