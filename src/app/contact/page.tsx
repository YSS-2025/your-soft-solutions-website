"use client";

//import Image from 'next/image';
import React from "react";

export default function Contact() {
    const [loading, setLoading] = React.useState(false);
    const [success, setSuccess] = React.useState('');

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (loading) return;

        const form = e.target as HTMLFormElement
        const values = Object.fromEntries(new FormData(form).entries());

        setLoading(true);
        setSuccess('Sending...');

        try {
            await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(values),
            }).then(res => {
                if (res.ok) {
                    setSuccess('Message sent!');
                    form.reset();
                } else {
                    setSuccess('Error sending message');
                }
                setLoading(false);
                return res.json();
            });
        } catch (error) {
            setSuccess('Error sending message');
            console.error(error);
            setLoading(false);
        }
    }

    return (
        <div className="flex flex-col text-black text-center my-24 mx-5 md:mx-20">
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-4xl font-bold p-3">Contact Us</h1>
                <p className="text-2xl p-5">Please fill out the form below and we will get back to you as soon as possible.</p>
                <form className="flex flex-col items-center justify-center w-3/4 md:w-1/2" onSubmit={onSubmit}>
                    <label className="text-black text-2xl p-5">{success}</label>
                    <input type="text" placeholder="Name" name="name" required className="p-2 m-2 w-full max-w-96 rounded-md bg-white/80" />                    
                    <input type="email" placeholder="Email" name="email" required className="p-2 m-2 w-full max-w-96 rounded-md bg-white/80" />                    
                    <textarea placeholder="Message" name="message" required className="p-2 m-2 max-w-96 w-full h-40 rounded-md bg-white/80" />
                    <button className="rounded-full bg-white/70 px-5 py-3 m-5 text-black" type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}