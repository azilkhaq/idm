// pages/about.js
import React from 'react';
import Navbar from '../components/navbar';

const eSim = () => {
    return (
        <div className="relative bg-cover bg-center md:h-screen sm:h-[calc(100vh-4rem)]" style={{ backgroundImage: "url('/images/contact.png')" }}>
          <Navbar />
            <div className="flex justify-center text-white text-center pt-20">
                <p className="text-2xl sm:text-4xl md:text-6xl font-semibold sm:mb-4">E-Sim</p>
            </div>

            <div className="flex justify-center text-white text-center mt-20">
                {/* Dua kolom */}
                <div className="flex items-center">
                    {/* Kolom Teks */}
                    <div className="flex flex-col mr-4 justify-start">
                        <p className="text-lg text-left" style={{ fontSize: '22px' }}>
                            eSIM.plus is a complete eSIM solution that includes <br />
                            GSMA SAS-SM certified Remote <br />
                            SIM Provisioning Platform (RSP+), <br />
                            Entitlement Server (and WS Websheet server) for <br />
                            wearables and companion devices, Operator app for eSIM <br />
                            application and enablement, <br />
                            and eSIM SDK for M2M/IoT devices
                        </p>
                        <p className="text-lg text-left pt-10" style={{ fontSize: '22px' }}>
                            eSIM.plus provides a seamless digital <br />
                            experience with the eSIM plugin <br />
                            for Mobile operators.
                        </p>
                    </div>
                    {/* Kolom Gambar */}
                    <div className="w-90 h-80">
                        <img src="/images/esim.png" alt="Game SpeedUP" className="w-full h-full" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default eSim;
