// import Hero from "../components/Hero"
import Image from 'next/image';
// import moi_meme from '../public/moi_meme.jpg';
import adil from '../public/adil.png';

export default function Qui_some_nous() {
    return (
        <div dir="rtl" className="bg-red-50">
            <main className="max-w-3xl mx-auto px-3 ">
            <div className=" px-8 py-8 text-center">
                {/* <Hero /> */}
                {/* <h1 className="text-5xl font-extrabold mb-6 text-red-900">
                    <span className="text-5xl block mb-3 opacity-70"> مرحبا بكم !</span>
                    <span>مركز الحجامة للطب البديل</span>
                </h1>  */}
             <h1 className="md:text-5xl sm:text-3xl text-2xl font-extrabold mb-4 text-red-900">
                <span className="block mb-3 opacity-70"> مرحبا بكم !</span>
                <span>مركز الحجامة للطب البديل</span>
            </h1> 
            </div>
           
            </main>

            <div className="text-yellow-700 bg-gray-600 md:px-16 px-8 py-1">
                 <h1 className="md:text-2xl text-base font-extrabold">
                    فريق العمل | أخصائي الحجامة |
                    <br/>
                     المتخصصين في الحجامة بالمغرب في طنجة
                </h1>
                <p className="md:text-xl text-xs font-extrabold"> 
                    فريق العمل مركز الحجامة للطب البديل
                </p>
            </div>

            <div className=" md:p-16 p-10 mx-auto md:flex justify-evenly items-center">
                {/* <Image className="rounded-xl" width={300} height={500} src={moi_meme} alt="moi_meme" />  */}
                <Image className="rounded-xl " width={200} height={300} src={adil} alt="adil" /> 
                <div>
                    <h1 className="text-2xl font-extrabold">
                        الأخصائي أبو ابراهيم
                    </h1>
                    <p className="font-extrabold text-lg">
                       الحجامة الجافة و الرطبة
                    </p>
                  
                </div>
            </div>
        </div>
    )
}
