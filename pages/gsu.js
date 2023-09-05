// pages/about.js
import React from 'react';
import Navbar from '../components/navbar';

const GSU = () => {
    return (
        <div className="relative bg-cover bg-center md:h-screen sm:h-[calc(100vh-4rem)]" style={{ backgroundImage: "url('/images/contact.png')" }}>
            <Navbar />
            <div className="flex justify-center text-white text-center pt-20">
                <p className="text-2xl sm:text-4xl md:text-6xl font-semibold sm:mb-4">Game SpeedUP</p>
            </div>
            <div className="flex justify-center text-white text-center">
                {/* Kolom Teks */}
                <div className="flex flex-col justify-start lg:flex-row lg:items-center">
                    <div className="lg:w-1/2 lg:pl-8">
                        <p className="text-lg md:text-xl lg:text-2xl text-left" style={{ fontSize: '22px' }}>
                            The SpeedUp Game service can be used to boost<br />
                            your connection while playing games such as <br />
                            Mobile Legends, Free Fire, PUBG Mobile, Arena of <br />
                            Valor, Apex Legends, and dozens of other games.
                        </p>
                        <p className="text-lg md:text-xl lg:text-2xl text-left pt-4 lg:pt-6" style={{ fontSize: '22px' }}>
                            If you often lose games due to lags on the internet <br />
                            connection, then it's time for you to use the <br /> SpeedUp Game package to boost your internet <br />
                            connection to play certain games. anti-lag <br /> guaranteed!
                        </p>
                    </div>
                    {/* Kolom Gambar */}
                    <div className="lg:w-1/2">
                        <img src="/images/dadu.png" alt="Game SpeedUP" className="w-full h-auto" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GSU;
