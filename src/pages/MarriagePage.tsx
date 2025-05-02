import './MarriagePage.css'
function MarriagePage() {
    return (
    <>
    <div className='w-full h-full absolute top-0 left-0 bg-[#60E59C] overflow-hidden'>
        <img src="/hero-image.png" alt="background-blur" className="w-full h-full object-cover blur-xl brightness-110 scale-110 opacity-70" />
        <img src="/hero-image-bottom-blur.png" alt="background" className="w-full object-cover absolute top-0 left-0 border-0 inset-0" />
        
        <div className="group absolute top-65/100 left-10/100">
            <text className="block text-4xl font-medium text-left font-dancingScript text-[#f8ffca] text-shadow-amber-950 text-shadow-2xs">
                <p>Thrshan</p>
                <p>&</p>
                <p>Dhurga Madhuri</p>
            </text>


            <text className="block text-xl font-satisfy font-medium text-left mt-5 mr-5 text-[#22221F] text-shadow-amber-950 text-shadow-2xs">
                <p>We can't wait to share our special day with you. Help us capture our wedding with Joy.</p>
            </text>
        </div>
    
    </div>
    </> 
      );
}

export default MarriagePage