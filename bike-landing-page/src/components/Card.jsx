

function Card(){

    return (
        <div className=" min-h-[380px] min-w-[260px] phone:h-[380px] phone:w-[2600px] drop-shadow-md rounded-xl bg-white ">
            <img className="" src="./images/bike-1.png"></img>
            <hr className=""></hr>
            <div className="p-4">
                <h1 className="font-bold text-xl">Lorem Ipsum</h1>
                <h2 className="font-semibold text-lg">Price: </h2>
                <p className="text-sm">Rating:</p>
                <div className="flex justify-center align-middle mt-[70px] ">
                    <button className="bg-yellow-300 w-[80%] p-1 rounded-full font-semibold hover:bg-yellow-400">Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Card