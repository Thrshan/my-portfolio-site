import './MarriagePage.css'

function MarriagePage() {
    return (
    <>
    <div className='w-full h-full absolute top-0 left-0 bg-[#6fcf9a] overflow-x-hidden'>
        <img src="/hero-image.png" alt="background-blur" className="w-full h-full object-cover blur-xl brightness-110 scale-110 opacity-70" />
        <img src="/hero-image-bottom-blur.png" alt="background" className="w-full object-cover absolute top-0 left-0 border-0 inset-0" />
        
        <div className="group absolute top-65/100 left-10/100">
            <text className="block text-4xl font-medium text-left font-dancingScript text-[#f8ffca] text-shadow-amber-950 text-shadow-lg/30">
                <p>Thrshan</p>
                <p>&</p>
                <p>Dhurga Madhuri</p>
            </text>

            <text className="block text-xl font-satisfy font-medium text-left mt-5 mr-5 text-[#22221F] text-shadow-amber-950 text-shadow-2xs">
                <p>We can't wait to share our special day with you. Help us capture our wedding with Joy.</p>
            </text>
        </div>

        <div className="absolute top-[110%] ">
            <div className='left-10/100 right-10/100 p-10'>
                <h2 className="text-3xl font-dancingScript text-[#f8ffca] text-shadow-amber-950 text-shadow-2xs mb-8">Our Story</h2>
                <p className="text-lg font-satisfy text-[#22221F] leading-relaxed">
                Every love story is beautiful, but ours is my favorite.
                What began as a simple friendship slowly blossomed into a love story that means the world to us.
                There were countless reasons why this relationship might not have worked—but all we needed was one reason to believe, and we held on to that with everything we had.
                Over time, we discovered how perfectly we fit together—like pieces of a jigsaw puzzle, complementing each other’s strengths and embracing each other’s flaws.
                Now, we're ready to begin our greatest adventure yet: our journey as husband and wife.
                </p>
            </div>

            <div className='pt-5 pb-5 bg-white mt-10'>
                <img src="/image-story.webp" alt="story-image" className="w-full" />
            </div>

            <div className='bg-emerald-50'>
                <p className='font-sans font-bold text-3xl pt-10 text-shadow-amber-950'>Hindu Marriage</p>
                <div className='h-[700px]'></div>

            </div>
        </div>
    </div>
    </> 
      );
}

export default MarriagePage