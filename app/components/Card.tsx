import Link from "next/link";

export default function Card() {

    return (
        <Link href="" className="text-white mx-auto gap-4">
            <div className='bg-[#C4C4C4] h-[250px]'> </div>
            <div className='-mt-10 bg-[#F7F7F7] p-[16px] w-11/12'>
                <div className='flex items-center gap-[8px]'>
                  <div className='w-[20px] h-0.5 bg-[#E71230]'></div>
                  <p className='text-[#272343] text-[14px]'>Хятад</p>
                </div>
                <div>
                    <p className='text-[#162346] text-[20px] font-PT-Serif font-bold'>Top 10 beautiful Place in Bangladesh</p>
                </div>
                <div className='flex gap-2 text-[12px] text-[#6D7280] leading-[24px] '>
                    <p>March 25, 2021</p>
                    <p>•</p>
                    <p>4 min read</p>
                </div>
                <div className='flex justify-between'>
                    <button className='flex hover:text-[#E71230] text-[#272343] font-medium text-2 items-center'>
                        <p className='mr-2'>Дэлгэрэнгүй</p>
                    </button>
                </div>
            </div>
        </Link>
      );
  }