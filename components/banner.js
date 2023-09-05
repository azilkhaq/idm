const Banner = () => {
    return (
      <div className="relative bg-cover bg-center md:h-screen sm:h-[calc(100vh-4rem)]" style={{ backgroundImage: "url('/images/banner.png')" }}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-white text-center sm:mb-20 md:mb-80">
            <p className="text-2xl sm:text-4xl md:text-8xl font-semibold mb-2 sm:mb-4">PT Informasi</p>
            <p className="text-2xl sm:text-4xl md:text-8xl font-semibold">
              <span className="text-red-500">Digital</span> Mandiri
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Banner;
  