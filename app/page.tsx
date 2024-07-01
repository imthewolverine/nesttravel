import Image from "next/image";
import Card from "./components/Card";
import { MapPinIcon, SunIcon, MoonIcon, BanknotesIcon } from "@heroicons/react/24/outline";
import CardBig from "./components/CardBig";
export default function Home() {
  return (
    <main className="bg-white ">
      <div className="lg:h-screen flex ">
        {/*<div className="mx-auto">
          <div className="absolute h-1/2 bg-white w-1/3 border border-1 border-black px-40">sdfd</div>
        </div>*/}
        <div className="w-full lg:w-5/12 bg-[#F5F5F5] h-screen flex justify-end z-10 hidden lg:block content-center">
          <div className="p-8 flex flex-col space-y-2 bg-white w-full lg:w-4/5 ml-auto -mt-10 lg:-mr-20 z-20 shadow-sm ">
            <div className='flex items-center gap-[8px]'>
              <div className='w-[24px] h-0.5 bg-[#E71230]'></div>
              <p className='text-[#162346] text-[16px]'>Хятад</p>
            </div>
            <p className="text-3xl font-bold text-[#162346]">Монгол текст турший Монгол текст турший</p>
            <div className="flex text-sm justify-between text-[#494B5C]">
              <div className="flex items-center space-x-1"><MapPinIcon className="w-5 h-5"/><p>Хятад</p></div>
              <div className="flex items-center space-x-1"><SunIcon className="w-5 h-5"/><p>10 өдөр</p><MoonIcon className="w-5 h-5"/><p>9 шөнө</p></div>
              <div className="flex items-center space-x-1"><BanknotesIcon className="w-5 h-5"/><p>2.990.000₮</p></div>
            </div>
            <p className="text-sm text-[#494B5C] py-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
            <button className="bg-[#E71230] hover:opacity-80 text-white py-3 px-6 lg:w-1/3">Дэлгэрэнгүй</button>
          </div>
        </div>
        <div className="h-[500px] lg:h-screen w-full lg:w-7/12 bg-[#ACACB1] z-0">
        </div>
      </div>
      <div className="max-w-screen-lg min-[1537px]:max-w-screen-xl mx-auto mt-16 px-4 xl:px-0">
          <div className='flex items-center'>
            <p className='text-[#162346] text-3xl font-bold border-b-[3px] border-[#E71230] py-2'>Онцлох аяллууд</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mt-16">
            <Card/><Card/><Card/><Card/><Card/><Card/>
          </div>
      </div>
      <div className="bg-[#F5F5F5]">
        <div className="max-w-screen-lg min-[1537px]:max-w-screen-xl mx-auto mt-16 px-4 xl:px-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12 py-12">
              <div className="flex items-center justify-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-20 h-20 text-[#162346]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
                  </svg>
                  <div className='flex flex-col'>
                      <div className="mb-2 text-3xl font-extrabold text-[#162346]">10+</div>
                      <div className="text-lg dark:text-gray-400 text-[#E71230] opacity-80 font-semibold">тэмцээн</div>
                  </div>
              </div>
              <div className="flex items-center justify-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-20 h-20 text-[#162346]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
                  </svg>
                  <div className='flex flex-col'>
                      <div className="mb-2 text-3xl font-extrabold text-[#162346]">10+</div>
                      <div className="text-lg dark:text-gray-400 text-[#E71230] opacity-80 font-semibold">тэмцээн</div>
                  </div>
              </div>
              <div className="flex items-center justify-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-20 h-20 text-[#162346]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
                  </svg>
                  <div className='flex flex-col'>
                      <div className="mb-2 text-3xl font-extrabold text-[#162346]">10+</div>
                      <div className="text-lg dark:text-gray-400 text-[#E71230] opacity-80 font-semibold">тэмцээн</div>
                  </div>
              </div>
            </div>
        </div>
      </div>
      
      <div className="max-w-screen-lg min-[1537px]:max-w-screen-xl mx-auto mt-16 px-4 xl:px-0">
          <div className='flex items-center'>
            <p className='text-[#162346] text-3xl font-bold border-b-[3px] border-[#E71230] py-2'>Таньд санал болгох</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-16 w-full">
            <CardBig/><CardBig/><CardBig/><CardBig/><CardBig/><CardBig/>
          </div>
      </div>
    </main>
  );
}
