import Banner from './banner';
import Link from 'next/link';

const Dashboard = () => {
  const toggleMenu = () => {
    const menu = document.getElementById('menu');
    menu.classList.toggle('hidden');
  }

  return (
    <>
      <section>
        <Banner />
      </section>
      <section className="py-10" id="about">
        <div className="container mx-auto text-center font-deskribe">
          <h1 className="text-4xl font-secDescribe md:text-8xl my-5 font-semibold mb-8 text-transparent bg-clip-text bg-gradient-to-b from-[#01FFFF] to-[#000d51]" style={{ letterSpacing: '10px' }}>
            ABOUT US
          </h1>
          <p className="text-lg font-deskribe md:text-xl text-[#ffffff] mx-4 sm:mx-24 mb-14">
            IDM, Informasi Digital Mandiri, was established in 2022 in Jakarta, Indonesia. We started as an IT service provider such as software development, Operation and system integration. We focusing in only IT area as our team members are Expert in Software Development.
          </p>
          <section className="py-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-16 font-deskribe">
              {/* Kartu 1 */}
              <div className="flex flex-col items-center justify-center w-full h-full">
                <img src='/images/icon3.png' alt="icon3" className="w-20 h-20 mb-4 sm:mb-8" style={{ maxWidth: '100%' }} />
                <div className="flex flex-col items-center justify-center bg-gray-200 bg-opacity-20 border-red-500 border p-8 pb-11 rounded-lg w-full h-full">
                  <h2 className="text-2xl font-semibold mb-4">Objective</h2>
                  <p className="text-white">
                    Meet customer requirements, by Serving Development and operation in IT Area with Good Quality, 24 hours 7 days.
                  </p>
                </div>
              </div>
              {/* Kartu 2 */}
              <div className="flex flex-col items-center justify-center w-full h-full">
                <img src='/images/icon1.png' alt="icon1" className="w-20 h-20 mb-4 sm:mb-8" style={{ maxWidth: '100%' }} />
                <div className="flex flex-col items-center justify-center bg-gray-200 bg-opacity-20 border-red-500 border p-8 pb-11 rounded-lg w-full h-full">
                  <h2 className="text-2xl font-semibold mb-4">Vision</h2>
                  <p className="text-white">
                    Together move forward with our clients and pursue the best quality of services
                  </p>
                </div>
              </div>
              {/* Kartu 3 */}
              <div className="flex flex-col items-center justify-center w-full h-full">
                <img src='/images/icon2.png' alt="icon2" className="w-20 h-20 mb-4 sm:mb-8" style={{ maxWidth: '100%' }} />
                <div className="flex flex-col items-center justify-center bg-gray-200 bg-opacity-20 border-red-500 border p-8 pb-11 rounded-lg w-full h-full">
                  <h2 className="text-2xl font-semibold mb-4">Core Values</h2>
                  <p className="text-white">
                    Customer intimacy, Quality, and Delivery
                  </p>
                </div>
              </div>
              {/* Kartu 4 */}
              <div className="flex flex-col items-center justify-center w-full h-full">
                <img src='/images/icon4.png' alt="icon4" className="w-20 h-20 mb-4 sm:mb-8" style={{ maxWidth: '100%' }} />
                <div className="flex flex-col items-center justify-center bg-gray-200 bg-opacity-20 border-red-500 border p-8 pb-11 rounded-lg w-full h-full">
                  <h2 className="text-2xl font-semibold mb-4">Mission</h2>
                  <p className="text-white">
                    Talent Acquisition and Strengthen thru the nations with IT area as Domain.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
      <section className="py-10" id="service">
        <div className="relative bg-cover bg-center md:h-screen sm:h-[calc(100vh-4rem)]" style={{ backgroundImage: "url('/images/service.png')" }}>
          <div className="absolute inset-0 flex items-center justify-end mx-4 sm:mx-40 ">
            <div className="text-white text-right sm:mb-20 md:mb-80">
              <h1 className="text-4xl font-secDescribe md:text-8xl font-semibold text-transparent bg-clip-text bg-gradient-to-b from-[#01FFFF] to-[#000d51]" style={{ letterSpacing: '12px', fontFamily: 'share tech mono' }}>
                SERVICES
              </h1>
              <p className="text-2xl md:text-4xl py-4 sm:py-10">
                Consultancy
              </p>
              <p className="text-2xl md:text-4xl">
                System Design, Devops
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-10" id="portofolio">
        <div className="text-white text-center flex flex-col items-center">
          <h1 className="text-4xl md:text-7xl my-2 font-semibold mb-8 mx-4 sm:mx-40 text-transparent bg-clip-text bg-gradient-to-b from-[#01FFFF] to-[#000d51]" style={{ letterSpacing: '10px', fontFamily: 'share tech mono' }}>
            PORTFOLIO
          </h1>
          <p className="text-lg md:text-4xl text-[#ffffff] px-4 sm:px-40 mb-6 sm:mb-10">
            Standardize IoT Gateway using MQTT
          </p>
          <p className="text-lg md:text-xl text-[#ffffff] px-4 sm:px-40 mb-10 ">
            As Growth of IoT Business trends nowadays, our team members build a new way of IoT Device integration with new model / methodology, while the normal way need normalize its protocols first in each of device, with our solution any device can connect to central / service gateway without normalize any protocols previously.
          </p>
          <p className="text-lg md:text-4xl text-[#ffffff] px-4 sm:px-40 mb-6 sm:mb-10">
            Advance SMPP asynchronous
          </p>
          <p className="text-lg md:text-xl text-[#ffffff] px-4 sm:px-40 ">
            With switch trend from P to P SMS to become A to P SMS, this area growth and required more advance solution, in terms of service and agile delivery. Facebook, WhatsApp and up to domestic Partners require an Agile SMS platform with high throughput and High continuity integration. We offer new models of SMPP method, with custom solution by adopting async process instead of the normal way (sync process), this is a solution to overcome High latency issue.
          </p>
        </div>
      </section>

      <section id="products">
        <div className="relative bg-cover bg-center md:h-screen sm:h-[calc(100vh-4rem)]" style={{ backgroundImage: "url('/images/contact.png')" }}>
          <div className="text-center mt-20 sm:mb-20 bg-[#39d9f6]">
            <h1 className="text-4xl md:text-7xl my-2 font-semibold mb-8 mx-4 sm:mx-40 text-transparent bg-clip-text bg-gradient-to-b from-[#0d0d19] to-[#01092f]" style={{ letterSpacing: '10px', fontFamily: 'share tech mono' }}>
              PRODUCTS
            </h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center mx-4 sm:mx-40">
            <div>
              <Link href="/gsu">
                <p className="text-lg md:text-xl">Game SpeedUp</p>
              </Link>
            </div>
            <div>
              <Link href="/callBack">
                <p className="text-lg md:text-xl">Call Back Notify</p>
              </Link>
            </div>
            <div>
              <Link href="/vrbt">
                <p className="text-lg md:text-xl">VRBT</p>
              </Link>
            </div>
            <div>
              <Link href="/callFilter">
                <p className="text-lg md:text-xl">Call Filter</p>
              </Link>
            </div>
            <div>
              <Link href="/eSIm">
                <p className="text-lg md:text-xl">eSim</p>
              </Link>
            </div>
            <div>
              <Link href="/hms">
                <p className="text-lg md:text-xl">HMS</p>
              </Link>
            </div>
          </div>
          <section className="mt-20 py-10" id="contact">
            <div className="container mx-auto text-center">
              <div className="mx-auto max-w-screen-md bg-white bg-opacity-20 shadow-md border-t-8 border-blue-500 p-8 rounded-lg">
                <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
                <p className="text-xl">Email: example@example.com</p>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}

export default Dashboard;
