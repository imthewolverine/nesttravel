import Image from "next/image";
import Card from "../components/Card";
import { EnvelopeIcon, MapPinIcon, PhoneArrowDownLeftIcon, PhoneIcon } from "@heroicons/react/24/outline";

export default function Contact() {
    return (
        <main className="bg-white max-w-screen-lg min-[1537px]:max-w-screen-xl mx-auto mt-16 px-4 lg:px-0 mt-10">
            <div className='flex items-center'>
                <p className='text-[#162346] text-3xl font-bold border-b-[3px] border-[#E71230] py-2'>Холбоо барих</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="max-w-md my-20 p-10 shadow-special">
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="text" name="floating_password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Овог</label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="text" name="repeat_password" id="floating_repeat_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlFor="floating_repeat_password" className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Нэр</label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <textarea id="floating_repeat_password" className="h-20 block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlFor="floating_repeat_password" className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Санал Хүсэлт</label>
                    </div>
                    <button type="submit" className="text-white bg-[#E71230] hover:opacity-90 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center">Илгээх</button>
                </div>
                <div className="max-w-md my-20 p-10 shadow-special">
                    <div className="relative z-0 w-full mb-5 group">
                        <div className="flex items-start gap-2">
                            <MapPinIcon className="w-6 h-6 text-[#272343]"/> <p className='font-semibold text-[#272343] text-[16px] font-PT-Serif mb-[15px]'>ШУТИС МХТС эсрэг талд, Bayandzürh, Mongolia</p>
                        </div>
                        <div className="flex items-start gap-2"><PhoneIcon className="w-6 h-6 text-[#272343]"/><p className='font-semibold text-[#272343] text-[16px] font-PT-Serif mb-[15px]'>8817 4112</p></div>
                        <div className="flex items-start gap-2"><EnvelopeIcon className="w-6 h-6 text-[#272343]"/> <p className='font-semibold text-[#272343] text-[16px] font-PT-Serif mb-[15px]'>nesttourt@gmail.com</p></div>
                        <div className="flex items-start gap-2"><svg xmlns="http://www.w3.org/2000/svg" fill="#272343" className="w-6 h-6" version="1.1" id="Layer_1" viewBox="0 0 310 310">
                                                                    <g id="XMLID_834_">
                                                                    	<path id="XMLID_835_" d="M81.703,165.106h33.981V305c0,2.762,2.238,5,5,5h57.616c2.762,0,5-2.238,5-5V165.765h39.064   c2.54,0,4.677-1.906,4.967-4.429l5.933-51.502c0.163-1.417-0.286-2.836-1.234-3.899c-0.949-1.064-2.307-1.673-3.732-1.673h-44.996   V71.978c0-9.732,5.24-14.667,15.576-14.667c1.473,0,29.42,0,29.42,0c2.762,0,5-2.239,5-5V5.037c0-2.762-2.238-5-5-5h-40.545   C187.467,0.023,186.832,0,185.896,0c-7.035,0-31.488,1.381-50.804,19.151c-21.402,19.692-18.427,43.27-17.716,47.358v37.752H81.703   c-2.762,0-5,2.238-5,5v50.844C76.703,162.867,78.941,165.106,81.703,165.106z"/>
                                                                    </g>
                                                                </svg>
<a href="https://www.facebook.com/NESTTourTravelMongolia" className='font-bold text-[#272343] text-[16px] font-PT-Serif mb-[15px]'>NEST Tour &Travel Mongolia </a></div>
                    </div>
                </div>
            </div>
        </main>
  );
}
