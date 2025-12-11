import { vans } from "../data/data"
import type { Van } from "../data/data"
import { useState } from "react"

const Vans = () => {
  const [filterName, setFilterName] = useState("")

  return (
    <section className=" bg-[#FFF7ED] mb-20 px-[27px]">
      <h1 className="text-3xl font-bold mb-[22px] text-start">Explore our van options</h1>

      <div className="flex gap-5 mb-[55px]">
        <button
          onClick={() => setFilterName("simple")} 
          className="py-[7px] px-[26px] rounded-[5px] bg-[#FFEAD0] hover:bg-[#E17654] hover:text-[#FFEAD0] transition-all ">
          Simple
        </button>

        <button
          onClick={() => setFilterName("rugged")}
          className="py-[7px] px-[26px] rounded-[5px] bg-[#FFEAD0] hover:bg-[#115E59] hover:text-[#FFEAD0] transition-all "
        >
          Rugged
        </button>

        <button
          onClick={() => setFilterName("luxury")}
          className="py-[7px] px-[26px] rounded-[5px] bg-[#FFEAD0] hover:bg-[#161616] hover:text-[#FFEAD0] transition-all "
        >
          Luxury
        </button>
        <button
          onClick={() => setFilterName('')}
          className="">
          Clear All
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
        {vans.filter(van => (filterName === "" ? true : van.type === filterName)).map((van: Van) => (
            <div
              key={van.id}
              className=" rounded-xl s overflow-hidden duration-300"
            >
              <img
                src={van.imgUrl}
                alt={van.name}
                className="w-full h-52 object-cover"
              />

              <div className="p-4 space-y-2">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold text-lg">{van.name}</h2>
                  <p className="font-semibold">
                    ${van.price}
                    <span className="block text-sm font-normal">/day</span>
                  </p>
                </div>

                <span
                  className={`px-3 py-1 text-sm rounded-[5px]
                    ${van.type === "simple" ? "bg-[#E17654] text-[#FFEAD0]" : ""}
                    ${van.type === "luxury" ? "bg-[#161616] text-[#FFEAD0]" : ""}
                    ${van.type === "rugged" ? "bg-[#115E59] text-[#FFEAD0]" : ""}
                  `}
                >
                  {van.type.charAt(0).toUpperCase() + van.type.slice(1)}
                </span>
              </div>
            </div>
          ))}
      </div>
    </section>
  )
}

export default Vans
