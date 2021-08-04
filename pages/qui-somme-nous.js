// import Hero from "../components/Hero"
import Image from 'next/image';
import moi_meme from '../public/moi_meme.jpg';

export default function Qui_some_nous() {
    return (
        <div dir="rtl" className="bg-red-50">
            <main className="max-w-3xl mx-auto px-3 ">
            <div className=" px-8 py-20 text-center">
                {/* <Hero /> */}
                <h1 className="text-5xl font-extrabold mb-6 text-red-900">
                    <span className="text-5xl block mb-3 opacity-70"> مرحبا بكم !</span>
                    <span>مركز الحجامة للطب البديل</span>
                </h1> 
            </div>
           
            </main>

            <div className="text-yellow-700 bg-gray-600 px-16 py-1">
                 <h1 className="text-2xl font-extrabold">
                    فريق العمل | أخصائي الحجامة | المتخصصين في الحجامة بالمغرب في طنجة
                </h1>
                <p className="font-extrabold text-xl"> 
                    فريق العمل مركز الحجامة للطب البديل
                </p>
            </div>

            <div className=" p-16 mx-auto flex justify-evenly items-center">
                <Image className="rounded-xl" width={300} height={500} src={moi_meme} alt="moi_meme" /> 
                <div>
                    <h1 className="text-5xl font-extrabold">
                        الأخصائي أبو ابراهيم
                    </h1>
                    <p className="font-extrabold text-xl">
                       الحجامة الجافة و الرطبة
                    </p>
                    <p className="text-xl font-extrabold">
                        
                    </p>
                </div>
            </div>
        </div>
    )
}
