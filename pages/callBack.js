// pages/about.js
import React from 'react';
import Navbar from '../components/navbar';

const callBack = () => {
    return (
        <div className="relative bg-cover bg-center md:h-screen sm:h-[calc(100vh-4rem)]" style={{ backgroundImage: "url('/images/contact.png')" }}>
            <Navbar />
            <div className="flex justify-center text-white text-center pt-20">
                <p className="text-2xl sm:text-4xl md:text-6xl font-semibold sm:mb-4">Call Back Notif</p>
            </div>

            <div className="flex justify-center text-white text-center">
                {/* Dua kolom */}
                <div className="flex items-center mt-20">
                    {/* Kolom Gambar */}
                    <div className="w-80 h-80">
                        <img src="/images/phone.png" alt="Game SpeedUP" className="w-full h-full" />
                    </div>
                    {/* Kolom Teks */}
                    <div className="flex flex-col mr-4 justify-start">
                        <p className="text-lg text-left" style={{ fontSize: '22px' }}>
                            CB Notify is technology automatically sends <br />
                            a real unanswered call notification to B party when they <br />
                            cannot be reached by A party. The <br />
                            resulting return call creates revenue.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default callBack;
