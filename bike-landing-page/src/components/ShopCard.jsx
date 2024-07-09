


function ShopCard(){

    return (
        <div className="w-[90%] h-[100px] bg-white border-slate-950 border-[1px] rounded  ">
            <div className="px-[25px] flex align-middle items-center gap-[50px] ">
                <div>
                    <button className=" border-2 rounded-md h-[20px] w-[20px]" type="checklist"></button>
                </div>
                <div className="h-[100%] w-[120px] object-scale-down">
                    <img src="./images/trek.png" alt="" />
                </div>
                <div>
                    <div>
                        <p className="font-bold overflow-hidden">Lorem Ipsum</p>
                        <p className="text-sm">Price: </p>
                        <p className="text-xs">Rating: </p>
                    </div>
                    <div>
                        <button className="border-2 rounded-l-md w-[30px] h-[30px]">-</button>
                        <button className="border-2 w-[30px] h-[30px]">1</button>
                        <button className="border-2 rounded-r-md w-[30px] h-[30px]">+</button>
                    </div>
                </div>
            </div>
        </div>

    )
}


export default ShopCard