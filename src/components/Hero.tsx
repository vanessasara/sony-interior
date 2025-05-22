import Image from "next/image";
import HeroImage1 from '@/assets/heroImage3.png'
import BGYellow from '@/assets/bg-slate.png'

// Inline background style
const bgImage = {
  backgroundImage: `url(${BGYellow.src})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
};

export default function Hero() {
  return (
    <main style={bgImage} className="overflow-x-hidden">
      <section className=" relative min-h-[100vh] w-full">
        <div className="container px-4 py-8 sm:px-6 lg:px-8">
          {/* Main Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[100vh] gap-4 lg:gap-8">
            {/* Left Text Block */}
            <div className="text-lightOrange mt-12 md:mt-0 p-4 space-y-8 md:space-y-16 lg:space-y-28 w-full max-w-[400px]">
            <h1 className="text-[5vw] font-bold leading-[5vw] uppercase ml-0 sm:ml-8 lg:ml-14 sm:mt-[4vh] md:mt-[6vh]">                Sony Interior
              </h1>
              <div className="relative">
                <div className="relative z-10 space-y-4">
                  <h2 className="text-lg sm:text-xl lg:text-2xl">black lifestyle lovers</h2>
                  <p className="text-xs sm:text-sm opacity-55 leading-loose">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse
                    neque, necessitatibus laboriosam illo placeat odio nam est
                    reiciendis harum optio? Quod veniam alias repudiandae commodi vel
                    cum voluptate sit a.
                  </p>
                </div>
                <div className="absolute -top-4 -left-6 sm:-top-6 sm:-left-10 w-[150px] sm:w-[200px] lg:w-[250px] h-[120px] sm:h-[150px] lg:h-[190px] bg-gray-700/25 hidden sm:block"></div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative w-full max-w-[350px] sm:max-w-[400px] md:max-w-[450px] lg:max-w-[600px]">
              <Image
                src={HeroImage1}
                alt="Hero Image"
                className="relative z-40 w-full h-auto max-h-[280px] sm:max-h-[350px] md:max-h-[500px] lg:max-h-[700px] img-shadow object-contain mx-auto"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, 50vw"
                priority
              />
              <div className="h-[100px] w-[100px] sm:h-[140px] sm:w-[140px] lg:h-[180px] lg:w-[180px] absolute top-16 sm:top-20 lg:top-24 -right-8 sm:-right-12 lg:-right-16 border-primary border-[10px] sm:border-[15px] lg:border-[20px] rounded-full z-10 hidden md:block"></div>
              <div className="absolute -top-12 sm:-top-16 lg:-top-20 left-24 sm:left-32 lg:left-[200px] z-[1] hidden lg:block">
                <h1 className="text-[80px] sm:text-[100px] lg:text-[140px] font-bold text-darkGray/40 leading-none">
                  SONY INTERIOR
                </h1>
              </div>
            </div>

            {/* Right Text Block */}
            <div className="text-lightOrange mt-12 md:mt-0 p-4 space-y-8 md:space-y-16 lg:space-y-28 w-full max-w-[400px]">
  
              <div className="relative">
                <div className="relative z-10 space-y-4">
                  <h2 className="text-lg sm:text-xl lg:text-2xl">Black interior</h2>
                  <p className="text-xs sm:text-sm opacity-55 leading-loose">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse
                    neque, necessitatibus laboriosam illo placeat odio nam est
                    reiciendis harum optio? Quod veniam alias repudiandae commodi vel
                    cum voluptate sit a.
                  </p>
                </div>
                <div className="absolute -top-4 -right-6 sm:-top-6 sm:-right-10 w-[150px] sm:w-[200px] lg:w-[250px] h-[120px] sm:h-[150px] lg:h-[190px] bg-darkGray/50 hidden sm:block"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}