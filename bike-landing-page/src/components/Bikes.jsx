import Card from "./Card"






function Bikes(){

    return (
        <div className=" bg-yellow-300 h-[650px] p-5">
            <h1 className="mb-[70px] flex justify-center font-bold text-4xl">Exclusive Bicycles at Exclusive Price!</h1>
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


export default Bikes