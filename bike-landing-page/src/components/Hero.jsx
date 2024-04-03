



function Hero(){

    return (
        <div id="hero" className=" pt-20 grid grid-cols-2 bg-white lg:grid-cols-2 lg:px-10 md:grid-cols-2 phone:grid-cols-1 phone:text-center xl:text-left lg:text-left md:text-left">
            <div className="flex px-10 jsutify-start align-middle items-center">
                <div className="leading-loose">
                    <h2 className="mt-2 font-semibold lg:text-4xl md:text-2xl phone:text-xl">Move Forward</h2>
                    <h1 className="mt-2 font-bold lg:text-6xl md:text-4xl phone:text-2xl">Race Your</h1>
                    <h1 className="mt-2 font-bold lg:text-6xl md:text-4xl phone:text-2xl">Way to the Top.</h1>
                    <p className="mt-2 leading-10 lg:text-xl md:text-lg phone:text-md">Slice through wind resistance with Identity’s cutting edge Bicycle Technology. </p>
                    <button className="mt-2 text-white rounded-full bg-yellow-300 px-4 py-2 hover:bg-yellow-400">Try Our Products</button>
                </div>
            </div>
            <div className="flex justify-center align-middle">
                <img className="h-[80%]" src="./images/bike-hero.svg"></img>
            </div>
        </div>
    )
}


export default Hero