import Image from "next/image";
import Card from "../components/Card";

export default function Tours() {
    return (
        <main className="bg-white ">
            <div className="max-w-screen-lg min-[1537px]:max-w-screen-xl mx-auto mt-16 px-4 lg:px-0">
                <div className='flex items-center'>
                    <p className='text-[#162346] text-3xl font-bold border-b-[3px] border-[#E71230] py-2'>Манай аяллууд</p>
                </div>
                <div className="max-w-screen-lg min-[1537px]:max-w-screen-xl mx-auto mt-16 px-4 lg:px-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mt-16">
                      <Card/><Card/><Card/><Card/><Card/><Card/><Card/><Card/><Card/>
                    </div>
                </div>
            </div>
        </main>
  );
}
