
export default function About(){
    return(
        <section className="max-w-[600px] flex flex-col items-center justif-center  bg-[#FFF7ED] pb-[55px] mb-20">
            <img className="w-screen" src="./images/aboutImg2.png" alt="" />
            <div className="flex flex-col items-center justif-center px-[27px]">
                <div className=" flex flex-col">
                    <h2 className="font-bold text-[32px] mt-12">Don’t squeeze in a sedan when you could relax in a van.</h2>
                    <p className="mt-[31px]">Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.(Hitch costs extra 😉)</p>
                    <p className="mt-2">Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
                </div>
                <div className=" flex flex-col bg-[#FFCC8D] gap-[25px] w-full mt-[55px] rounded-[5px] py-8 px-[38px]">
                    <h3 className="text-[#161616] font-bold text-[24px]">
                        Your destination is waiting. <br />Your van is ready.
                    </h3>
                    <button className="w-[174px] font-bold text-[16px] text-white px-[22px] py-3 bg-black rounded-[10px]">Explore our vans</button>
                </div>
            </div>
        </section>
    )
}