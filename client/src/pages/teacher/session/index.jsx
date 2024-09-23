import { useEffect, useState } from "react";
import { FaWifi } from "react-icons/fa";

function Timer() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(interval); 
    }, []); 

    // Format time to HH.MM
    const formattedTime = `${time.getHours()}.${time.getMinutes().toString().padStart(2, '0')}`;

    // Format day as "Monday July 29"
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    const formattedDay = time.toLocaleDateString(undefined, options);

    return (
        <div className="flex flex-col justify-center items-center">
            <div className="font-semibold text-7xl text-center text-gray-600">{formattedTime}</div>
            <div className="font-medium text-lg text-gray-500">{formattedDay}</div>
        </div>
    );
}

export default function TeacherSession() {
    
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    
    return (
        <main className="min-h-screen bg-gray-100 px-2 sm:px-6 lg:px-8 flex flex-col justify-center items-center">
            <Timer />

            {/* Start session button */}
            <form onSubmit={handleSubmit} className="flex flex-col">
                <button type="submit" className="mt-8 bg-[#5856A1] self-center text-white rounded-full shadow-xl shadow-[#5856A1] size-40 flex flex-col justify-center items-center gap-4">
                    <FaWifi className="size-12 rotate-90" />
                    <p className="text-xl text-wrap">Start Session</p>
                </button>

                <div className="space-x-2 mt-8">

                <select className="w-16 h-10 border bg-[#8280FF] text-white border-transparent border-r-4 text-sm rounded-xl pl-1.5 font-semibold caret-white" name="subject" id="subject">
                    <option value="hci">HCI</option>
                    <option value="pbl">PBL</option>
                    <option value="abl">ABL</option>
                </select>

                <select className="w-32 h-10 border bg-[#8280FF] text-white border-transparent border-r-4 text-sm rounded-xl pl-1.5 font-semibold caret-white" name="class" id="class">
                    <option value="be_comp_a">BE COMP A</option>
                    <option value="be_comp_b">BE COMP B</option>
                    <option value="be_comp_c">BE COMP C</option>
                </select>

                <select className="w-32 h-10 border bg-[#8280FF] text-white border-transparent border-r-4 text-sm rounded-xl pl-1.5 font-semibold caret-white" name="time" id="time">
                    <option value="10-11">10:00 - 11:00</option>
                    <option value="11-12">11:00 - 12:00</option>
                    <option value="12-01">12:00 - 13:00</option>
                </select>
                </div>
            </form>
        </main>
    );
}
