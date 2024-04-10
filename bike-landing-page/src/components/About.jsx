





function About(){

    return (
        <div className="bg-yellow-300 h-[380px]">
            <div className="align-middle items-center place-content-center grid lg:grid-cols-2 md:grid-cols-2 xl:grid-cols-2 phone:grid-cols-1 gap-4 p-10 content-center">
                <div className="flex items-center align-middle justify-center"><img className="h-[300px]" src="./images/logo.svg" alt="" /></div>
                <div className="md:mt-[25px] phone:mt-[25px]">
                    <h1 className="font-bold text-3xl">Our Mission</h1>
                    <p className="text-justify">To provide a cutting-edge technology of bicycles, be it for personal use or for competitive sports. Identity aims to provide a long-term satisfaction on the products and accessories</p>
                    <h1 className="font-bold text-3xl">Our Vision</h1>
                    <p className="text-justify">To be a distinguished brand that will not only be get distinguished by the mass, but as well as by the well-known bicycle competitions. </p>
                </div>
            </div>
        </div>
    )
}


export default About