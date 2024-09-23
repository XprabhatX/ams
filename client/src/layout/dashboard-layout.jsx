import { useOutlet } from "react-router-dom";
import Header from "../components/core/header";
import Navbar from "../components/core/navbar";

export default function DashboardLayout() {
    const outlet = useOutlet();

    return (
        <main className="min-h-screen flex flex-col">
            <Header />
            <section>{outlet}</section>
            <Navbar />
        </main>
    );
}
