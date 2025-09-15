import Link from "next/link"


export const Navigation = () =>{
    return(
        <nav className="nav">
            <div className="md:p-5 md:grid md:grid-cols-3 md:gap-2 items-center">
                <div className="font-bold text-primary-content">
                    <Link href={'/'} >jakaSPACE</Link>
                </div>
                <div>
                    <ul className="md:flex md:flex-row md:justify-center gap-4">
                        <li className=""><Link href={"#"} className="bg-left-bottom bg-gradient-to-r from-base-content to-base-content bg-[length:0%_2px] bg-no-repeat hover:bg-[length:100%_2px] transition-all duration-500 ease-out">Office</Link></li>
                        <li><Link href={"#"} className="bg-left-bottom bg-gradient-to-r from-base-content to-base-content bg-[length:0%_2px] bg-no-repeat hover:bg-[length:100%_2px] transition-all duration-500 ease-out">Content Hub</Link></li>
                        <li><Link href={"#"} className="bg-left-bottom bg-gradient-to-r from-base-content to-base-content bg-[length:0%_2px] bg-no-repeat hover:bg-[length:100%_2px] transition-all duration-500 ease-out">Photobooth</Link></li>
                    </ul>
                </div>
                <div className="flex flex-row justify-end">
                    <button className="btn btn-base-300">Login</button>
                </div>
            </div>
        </nav>
    )
}