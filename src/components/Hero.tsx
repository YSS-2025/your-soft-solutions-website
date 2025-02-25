import Image from 'next/image';

export default function Hero() {
    return (
        <div className="flex flex-col text-black text-center md:flex-row mx-7 my-20 md:m-36">
            <div className="flex flex-col items-center justify-center md:w-1/2">
                <h1 className="text-4xl font-bold p-3">Your Soft Solutions</h1>
                <p className="text-2xl p-5">We are a software development company that specializes in web applications and services and digital marketing.</p>
                { /* <button className="rounded-full bg-white/70 px-5 py-3 m-3 text-black">Learn More</button> */ }
            </div>
            <div className="flex flex-col items-center justify-center my-5 md:w-1/2">
                <Image src="/logonotext.png" alt="Your Soft Solutions, LLC Logo" width={400} height={400} />
            </div>
        </div>
    );
}