import { AiFillCaretRight, AiOutlineArrowRight } from "react-icons/ai";
import batman from "../../assets/images/batman.jpg";

const Hero = () => {
  return (
    <section className="h-96 lg:h-128 group relative">
      <img src={batman} alt="batman" className="h-full w-full object-cover" />
      <div className="absolute bottom-0 w-full bg-gradient-to-b from-transparent to-black">
        <div className="container pl-10 lg:pl-0">
          <h3 className="text-gega-melon tracking-wider group-hover:mb-1 duration-500">
            Action, Drama, Thriller
          </h3>
          <h1 className="text-gega-grey text-4xl lg:text-6xl group-hover:mb-1 duration-500">
            The Dark Knight
          </h1>
          <p className="text-gega-grey group-hover:mb-2 duration-500 text-sm lg:text-base w-3/4 lg:w-2/3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.Enim laborum
            ad fugit distinctio culpa perferendis soluta repellendus delectus
            non aliquam!
          </p>
          <div className="flex space-x-8 opacity-0 group-hover:opacity-100  group-hover:mb-10 lg:group-hover:mb-20 duration-1000">
            <div className="flex space-x-2 items-center cursor-pointer">
              <a
                href="#"
                className="text-gega-grey uppercase text-lg hover:text-gega-red duration-500"
              >
                WATCH TRAILER
              </a>
              <div className="flex h-8 w-8 text-center rounded-full justify-center items-center bg-gega-red text-gega-grey">
                <AiFillCaretRight />
              </div>
            </div>
            <div className="flex space-x-2 items-center cursor-pointer">
              <a
                href="#"
                className="text-gega-grey uppercase lg:text-lg hover:text-gega-red duration-500"
              >
                FULL SYNOPSIS
              </a>
              <div className="flex h-8 w-8 text-center rounded-full justify-center items-center bg-gega-red text-gega-grey">
                <AiOutlineArrowRight />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex  space-x-3    justify-center  items-center   relative   bottom-5  opacity-0 group-hover:opacity-100 duration-1000">
        <div className="w-3 h-3 lg:w-4 lg:h-4  rounded-full bg-gega-red cursor-pointer">
          
        </div>
        <div className="w-3 h-3 lg:w-4 lg:h-4 rounded-full bg-gega-grey cursor-pointer">
          
        </div>
        <div className="w-3 h-3 lg:w-4 lg:h-4 rounded-full bg-gega-grey cursor-pointer">
          
        </div>
        <div className="w-3 h-3 lg:w-4 lg:h-4 rounded-full bg-gega-grey cursor-pointer">
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
