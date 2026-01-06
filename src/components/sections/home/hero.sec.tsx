import ComputerDeskCanvas from "../../canvas/computer-desk";

const HeroSec = () => {
  return (
    <section
      className="container relative w-full h-screen mx-auto bg-hero-pattern-light dark:bg-hero-pattern-dark bg-cover bg-no-repeat bg-center"
      // className={`relative w-full h-screen mx-auto`}
    >
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-primary-200" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className="font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2">
            Hi, I'm <span className="text-primary-200">Farzad</span>
          </h1>
          <p className="text-primary-50 font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-10 mt-2 text-neutral-200">
            I develop Blockchain , Web <br className="sm:block hidden" />
            aapplication and ai models
          </p>
        </div>
      </div>
      <ComputerDeskCanvas />
    </section>
  );
};

export default HeroSec;
