// pages/about.js
import React from 'react';
import Navbar from '../components/navbar';

const hms = () => {
    return (
        <div className="relative bg-cover bg-center md:h-screen sm:h-[calc(100vh-4rem)]" style={{ backgroundImage: "url('/images/contact.png')" }}>
          <Navbar />
            <div className="flex justify-center text-white text-center pt-20">
                <p className="text-2xl sm:text-4xl md:text-6xl font-semibold sm:mb-4">HMS</p>
            </div>

            <div className="flex justify-center text-white text-center">
                {/* Dua kolom */}
                <div className="flex items-center">
                    <div className="w-100 h-100">
                        <img src="/images/hms.png" alt="Game SpeedUP" className="w-full h-full" />
                    </div>
                    <div className="flex flex-col mr-4 justify-start">
                        <p className="text-lg text-left" style={{ fontSize: '22px' }}>
                            Headline Message Service is a brilliant Interactive <br />
                            Social Media, which can be sent and viewed quickly <br />
                            resulting in perfect and impressive communication.
                        </p>
                        <p className="text-lg text-left pt-10" style={{ fontSize: '22px' }}>
                            Once the HMS user sends a message in the form of multimedia, <br />
                            it will automatically open on the cellphone screen so that <br />
                            no one message is not read or does not arrive, all messages <br />
                            will arrive very quickly.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default hms;
