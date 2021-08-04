export default function Hero() {
    return (
        <div>
            <h1 className="md:text-5xl sm:text-3xl text-2xl font-extrabold mb-4 text-red-900">
                <span className="block mb-3 opacity-70"> مرحبا بكم !</span>
                <span>مركز الحجامة للطب البديل</span>
            </h1>     
            <p className="sm:text-base text-xs text-gray-700">ثبت عند ابن ماجه من حديث ابن عباس قال: قال رسول الله صلى الله عليه وسلم 
            <br/>
            <span className="sm:text-lg text-sm text-blue-900 font-extrabold">
                 ما مررت ليلة أسري بي بملأ من الملائكة إلا كلهم يقول لي: يا محمد عليك بالحجامة
            </span></p>
        </div>
    )
}
