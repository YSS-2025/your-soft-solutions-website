//import Image from 'next/image';

export default function AboutUs() {
    return (
        <>
            <div className="flex text-center bg-[url(/dunkirk.jpg)] bg-cover bg-no-repeat bg-gray-400-400/50">
                <div className="py-20 px-7 md:p-36 flex flex-col items-center justify-center bg-gray-600/90 text-gray-200">
                    <h1 className="text-4xl font-bold p-3">Who Are We?</h1>
                    <p className="text-2xl p-5">Your Soft Solutions &#40;YSS&#41; is a software development company based in Dunkirk, NY that specializes in web-based technologies and digital marketing. YSS offers various services ranging from website creation to application development. </p>
                </div>
            </div>
            <div className="py-20 px-7 md:p-36 text-center bg-slate-400/50">
                <h1 className="text-4xl font-bold p-3">What Does YSS Do?</h1>
            <p className="text-2xl p-5">YSS creates many different solutions for both marketing and software management. YSS offers services that can be tailored for your specific needs, as well as software to appeal to the general public</p>
        </div>
        </>
    );
}