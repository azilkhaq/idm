// pages/about.js
import React from 'react';
import Navbar from '../components/navbar';

const callfilter = () => {
    return (
        <div className="relative bg-cover bg-center md:h-screen sm:h-[calc(100vh-4rem)]" style={{ backgroundImage: "url('/images/contact.png')" }}>
           <Navbar />
            <div className="flex justify-center text-white text-center pt-20">
                <p className="text-2xl sm:text-4xl md:text-6xl font-semibold sm:mb-4">Call Filter</p>
            </div>

            <div className="flex justify-center text-white text-center">
                {/* Dua kolom */}
                <div className="flex items-center pt-10">
                    {/* Kolom Teks */}
                    <div className="flex flex-col mr-4 mb-80 justify-start">
                        <p className="text-lg text-left " style={{ fontSize: '22px' }}>
                            Call Filter is a Spam Monitoring <br />
                            Handling Service that makes it <br />
                            easy for users to handle the high activity of <br />
                            spammers or scammers in Indonesia.
                        </p>
                    </div>
                    {/* Kolom Gambar */}
                        <div className="">
                            <img src="/images/call-filter.png" alt="Game SpeedUP" style={{ width: '600px', height: 'auto' }} />
                        </div>
                </div>
            </div>
        </div>
    );
}

export default callfilter;
