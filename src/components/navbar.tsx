import Link from "next/link"

export const Navbar = () => {
    return (
        <nav className="bg-primary text-white">
            <div className="flex justify-between w-screen">
                <div className="flex-1"></div>
                <div className="flex-1"><h3>Product Viewer</h3></div>
            <ul className="flex">
                <li className="mr-6">
                    <Link className="hover:text-blue-800" href="/">View Products</Link>
                </li>
            </ul>
            </div>
        </nav>
    )
}

export default Navbar;