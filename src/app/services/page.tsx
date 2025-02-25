import Image from 'next/image';

export default function Services() {
    return (
        <div>   
            <div className="flex flex-col text-black text-center my-36 mx-5 md:mx-36">
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-4xl font-bold p-3">Services</h1>
                    <p className="text-2xl p-5">YSS provides a wide range of services, such as web services, application development, and digital marketing. All our services can be tailored to your specific needs</p>
                </div>
            </div>
            <div className="flex flex-col text-black text-center md:flex-row px-7 py-20 md:px-20 bg-[#4FADEB90] justify-center">
                <div className="flex flex-col items-center justify-center md:w-1/2">
                    <h2 className="text-3xl font-bold p-3">Web Services</h2>
                    <p className="text-xl p-5">YSS specializes in web design and web application development, creating visually appealing and highly functional websites tailored to your business requirements. YSS also offers solutions designed to appeal to the general public.</p>
                </div>
                <div className="flex flex-col items-center justify-center my-5 md:ml-10">
                    <Image src="/web-development.png" alt="Website Development Clip Art" width={200} height={100} />
                </div>
            </div>
            <div className="flex flex-col text-black text-center md:flex-row px-7 py-20 md:px-20 bg-[#E0773190] justify-center">
                <div className="flex flex-col items-center justify-center md:w-1/2">
                <h2 className="text-3xl font-bold p-3">Application Development and Management</h2>
                    <p className="text-xl p-5">YSS offers top-notch mobile and desktop application development services, ensuring your applications are user-friendly, efficient, and scalable. YSS also offers software management solutions, providing our clients with special tooling to assist them in managing their software across many different sectors..</p>
                </div>
                <div className="flex flex-col items-center justify-center my-5 md:ml-10">
                    <Image src="/app-development.png" alt="Your Soft Solutions, LLC Logo" width={300} height={350} />
                </div>
            </div>
            <div className="flex flex-col text-black text-center md:flex-row px-7 py-20 md:px-20 bg-[#4C7B3190] justify-center">
                <div className="flex flex-col items-center justify-center md:w-1/2">
                <h2 className="text-3xl font-bold p-3">Digital Marketing</h2>
                    <p className="text-xl p-5">YSS provides digital marketing services, such as search engine optimization &#40;SEO&#41; and social media marketing, to help our clients reach a wider audience and grow their online presence. </p>
                </div>
                <div className="flex flex-col items-center justify-center my-5 md:ml-10">
                    <Image src="/digital-marketing.png" alt="Your Soft Solutions, LLC Logo" width={300} height={450} />
                </div>
            </div>
        </div>
    );
}