
import Card from "./Card"
import Accessory from "../data/accessories.json"



function Accessories(){
    let accessoryCards = Accessory.map(item => {
        return (
            <Card 
                key={item.id}
                {...item}
            />
        )
    })
    
    return (
        <div className=" bg-gray-50 h-[650px] p-5">
            <h1 className="mb-[70px] flex justify-center font-bold text-4xl">Level up with our Racing Gears!</h1>
        <div className="flex justify-center items-center align-middle">
            <div className="no-scrollbar flex flex-row gap-10 overflow-x-scroll">
                {accessoryCards}
            </div>
        </div>
        </div>
    )
}


export default Accessories