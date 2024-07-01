import Image from "next/image";
import Card from "../../components/Card";

export default function Tours() {
    return (
        <main className="bg-white">
            <div className="">
                <div className="h-screen">
                    <div className="w-full bg-[#C4C4C4] h-2/3 z-10">

                    </div>
                    <div className="max-w-screen-lg min-[1537px]:max-w-screen-xl mx-auto">
                        <div className="bg-white p-[30px] shadow-special w-full md:w-5/6 -mt-36 z-50">
                            <div className='flex items-center gap-[8px]'>
                                <div className='w-[24px] h-0.5 bg-[#E71230]'></div>
                                <p className='text-[#162346] text-[16px]'>Хятад</p>
                            </div>
                            <div>
                                <p className='text-[#272343] text-[40px] font-PT-Serif font-bold mt-[10px] mb-[15px]'>Ай Бисда How to Get Started With UI/UQ</p>
                            </div>
                            <div className='flex justify-between items-center'>
                                <div className='flex gap-2 text-[16px] text-[#6D7280] leading-[24px]'>
                                    <p>March 25, 2021</p>
                                    <p>•</p>
                                    <p>4 answers</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="max-w-screen-lg min-[1537px]:max-w-screen-xl mx-auto px-4 lg:px-0">
                    <div className=''>
                        <p className='font-bold text-[#272343] text-[28px] font-PT-Serif mb-[15px]'>How to Get Started With UI/UX</p>
                        <p className='font-bold text-[#272343] text-[20px] font-PT-Serif mb-[15px]'>20 web designer skills to have</p>
                        <p className='text-[16px] font-Poppins text-[#494B5C] mb-[15px]'>Here's a medley of 20 skills to help you become a design expert, no matter where you're at in your career.</p>
                        <p className='text-[16px] font-Poppins text-[#494B5C] mb-[15px] border-l-[5px] border-[#E71230] pl-[20px]'>Being a web designer involves harmoniously combining visuals and content. But non-technical skills, like collaboration and communication, are also important.</p>
                        <p className='font-bold text-[#272343] text-[20px] font-PT-Serif mb-[15px]'>1. Know the principles of design</p>
                        <div className='w-full bg-[#C4C4C4] h-[420px] mb-[15px]'></div>
                        <p className='text-[16px] font-Poppins text-[#494B5C] mb-[15px]'>You don’t need to know music theory to write a song, and if you’ve never taken an art class, you can still draw. Some of us might have an innate artistic ability, but knowing the basic fundamentals can make the difference between recreating what you see and being able to build a design tha...</p>
                    </div>
                </div>
            </div>
        </main>
  );
}
