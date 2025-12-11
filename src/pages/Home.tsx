export default function Home() {
    return (
        <section 
            style={{ 
            backgroundImage: "url('/images/hero-bg.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height: 'screen '
            }}
            className="text-white flex items-center justify-center h-150"
        >
            <div className="px-[27px] flex flex-col ">
                <h1 className="font-extrabold text-[36px]">You got the travel plans, we got the travel vans.</h1>
                <p className="mt-[22px]">Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
                <button className="bg-[#FF8C38] mt-[50px] py-3">Find your van</button>
            </div>
      </section>
    )
  }