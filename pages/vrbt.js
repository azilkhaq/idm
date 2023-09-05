// pages/about.js
import React from 'react';
import Navbar from '../components/navbar';

const vrbt = () => {
    return (
        <div className="relative bg-cover bg-center md:h-screen sm:h-[calc(100vh-4rem)]" style={{ backgroundImage: "url('/images/contact.png')" }}>
       <Navbar />
            <div className="flex justify-center text-white text-center pt-20">
                <p className="text-2xl sm:text-4xl md:text-6xl font-semibold sm:mb-4">VRBT</p>
            </div>

            <div className="flex justify-center text-white text-center mt-20">
                {/* Dua kolom */}
                <div className="flex items-center">
                    {/* Kolom Teks */}
                    <div className="flex flex-col mr-4 justify-start">
                        <p className="text-lg text-left" style={{ fontSize: '22px' }}>
                            Video Ring Back Tone is a short video-bassed<br />
                            call connection video service within 15 seconds.
                        </p>
                        <ul className="flex flex-col text-lg text-left pl-6 pt-4 justify-start" style={{ fontSize: '18px' }}>
                            <li>1. It Provides fun to the caller during call waiting time.</li>
                            <li>2. It Provides monetization through produced videos to call recipe</li>
                            <li>3. It Provide new promotion/advertising channels to corporate customer</li>
                        </ul>
                    </div>
                    {/* Kolom Gambar */}
                    <div className="w-1\2 h-100">
                        <img src="/images/vrbt.png" alt="Game SpeedUP" className="w-full h-full" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default vrbt;
