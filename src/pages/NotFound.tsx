import { Link } from "react-router-dom";

export default function NotFound(){
    return(
        <section className="flex flex-col items-center justify-center gap-5 mx-auto ">
            <h1  className="  font-bold text-2xl mt-[10%]">Sorry, the page you were looking for was not found</h1>
            <Link className="px-3 py-3 rounded-[5px] bg-black text-white font-semibold" to={'/'}>Return  home page</Link>
        </section>
    )
}