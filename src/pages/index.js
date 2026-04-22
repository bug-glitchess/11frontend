import Link from "next/link";

export default function Home(){
    return (
        <>
            <div className="flex flex-col gap-12 justify-center items-center h-[100vh] w-full bg-white">
                <img src="https://nhs.edu.mn/favicon.ico" ></img>
                <div className="flex gap-20">
                    <Link href="/contact" className="text-black text-2xl border-2 border-gray-600 px-4 py-2 rounded-lg hover:bg-gray-200" >Contact</Link>
                    <Link href="/aboutus" className="text-black text-2xl border-2 border-gray-600 px-4 py-2 rounded-lg hover:bg-gray-200" >About us</Link>
                    <Link href="/center" className="text-black text-2xl border-2 border-gray-600 px-4 py-2 rounded-lg hover:bg-gray-200" >Users</Link>
                </div>
            </div>
        </>
    )
}