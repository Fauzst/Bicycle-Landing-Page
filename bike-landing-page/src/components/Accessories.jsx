
import Card from "./Card"




function Accessories(){

    return (
        <div className=" bg-gray-50 h-[650px] p-5">
            <h1 className="mb-[70px] flex justify-center font-bold text-4xl">Level up with our Racing Gears!</h1>
        <div className="flex justify-center items-center align-middle">
            <div className="no-scrollbar flex flex-row gap-10 overflow-x-scroll">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
        </div>
    )
}


export default Accessories