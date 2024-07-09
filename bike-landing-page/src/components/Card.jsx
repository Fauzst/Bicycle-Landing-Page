import { useEffect, useState } from "react"


function Card(props){
    const [cart, setCart] = useState([]);
    //Add to Cart function
    function addToCart(name, price, id, rating){
        console.log(cart)
        setCart((prevCart) => [
            ...prevCart,
            {name, price, id, rating}
        ])
        console.log(name)
        
    }


    return (
        <div className="object-contain min-h-[380px] min-w-[260px] phone:h-[380px] phone:w-[2600px] drop-shadow-md rounded-xl bg-white ">
            <div className="h-[150px] w-full ">
            <img className="w-[100%] h-[100%] object-scale-down rounded-xl" src={props.image}></img>
            </div>
            <hr className=""></hr>
            <div className="p-4">
                <div className="h-[150px]">
                <h1 className="font-bold text-xl">{props.name}</h1>
                <h2 className="font-semibold text-lg">Price: {props.price}</h2>
                <p className="text-sm">Rating: {props.rating}</p>
                </div>
                <div className="flex justify-center align-middle">
                    <button className="bg-yellow-300 w-[180px] p-1 rounded-full font-semibold hover:bg-yellow-400" onClick={() => addToCart(props.name, props.price, props.id, props.rating)}>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Card