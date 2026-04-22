import data from "../utls/aimag.json"

export default function Extra() {
    console.log(data)
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-400">
            <div className="grid grid-cols-5 gap-4 m-4" >
                {data.map((item) => (
                    <div key={item.id} className="text-black bg-white p-4 rounded-lg hover:bg-gray-200 hover:text-xl" >{item.name}</div>
                ))}
            </div>
        </div>
    );
}