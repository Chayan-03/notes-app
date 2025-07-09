import { Navbar } from "../../components/Navbar";
import { Sidebar } from "../../components/Sidebar";





export const Bin = () => {
    return (
        <>
        <Navbar />
        <Sidebar/>
        <div className="flex justify-center items-center h-screen">
            <h1 className="text-2xl font-bold">Bin Page</h1>
        </div>
        </>
    );
}