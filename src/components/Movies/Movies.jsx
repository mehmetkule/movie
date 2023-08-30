import { AiFillCaretRight, AiOutlineArrowRight } from "react-icons/ai";

import mv1 from "../../assets/images/mv1.jpg";
import mv2 from "../../assets/images/mv2.jpg";
import mv3 from "../../assets/images/mv3.jpg";
import mv4 from "../../assets/images/mv4.jpg";
import mv5 from "../../assets/images/mv5.jpg";
import mv6 from "../../assets/images/mv6.jpg";
import new1 from "../../assets/images/new1.jpg";
import new2 from "../../assets/images/new2.jpg";
import new3 from "../../assets/images/new3.jpg";
import new4 from "../../assets/images/new4.jpg";
import new5 from "../../assets/images/new5.jpg";

const Movies = () => {
  return (
    <section className="py-24 bg-black">
      <div className="container flex flex-col lg:flex-row lg:space-x-16 space-y-8 lg:space-y-0">
        <div className="basis-2/3">
          <div className="flex space-x-2 divide-x  justify-center items-center lg:justify-start divide-gega-red divide-opacity-50  mb-8">
            <h2 className="text-gega-red">
              <a href="#">Latest</a>
            </h2>
            <h2 className="text-gega-grey pl-2 hover:text-gega-red duration-500">
              <a href="#">Popular</a>
            </h2>
            <h2 className="text-gega-grey pl-2 hover:text-gega-red duration-500">
              <a href="#">Best</a>
            </h2>
          </div>
          <div className="flex flex-wrap">
            <div className="group relative overflow-hidden basis-1/3">
              <img
                src={mv1}
                className="group-hover:scale-110 group-hover:opacity-50 duration-500"
              />
              <div className="absolute px-6 bottom-8">
                <h3 className="text-gega-grey group-hover:text-gega-melon group-hover:mb-2 duration-500">
                  Oblivion
                </h3>
                <p className="text-xs opacity-0 group-hover:opacity-100 group-hover:mb-10 duration-500 text-gega-grey">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam,
                  a?
                </p>
                <div className="flex text-2xl absolute space-x-8 text-gega-grey opacity-0 -bottom-2 group-hover:bottom-2 group-hover:opacity-100 duration-500">
                  <a href="#" className="hover:text-gega-red duration-500">
                    <AiFillCaretRight />
                  </a>
                  <a href="#" className="hover:text-gega-red duration-500">
                    <AiOutlineArrowRight />
                  </a>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden basis-1/3">
              <img
                src={mv2}
                className="group-hover:scale-110 group-hover:opacity-50 duration-500"
              />
              <div className="absolute px-6 bottom-8">
                <h3 className="text-gega-grey group-hover:text-gega-melon group-hover:mb-2 duration-500">
                  Oblivion
                </h3>
                <p className="text-xs opacity-0 group-hover:opacity-100 group-hover:mb-10 duration-500 text-gega-grey">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam,
                  a?
                </p>
                <div className="flex text-2xl absolute space-x-8 text-gega-grey opacity-0 -bottom-2 group-hover:bottom-2 group-hover:opacity-100 duration-500">
                  <a href="#" className="hover:text-gega-red duration-500">
                    <AiFillCaretRight />
                  </a>
                  <a href="#" className="hover:text-gega-red duration-500">
                    <AiOutlineArrowRight />
                  </a>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden basis-1/3">
              <img
                src={mv3}
                className="group-hover:scale-110 group-hover:opacity-50 duration-500"
              />
              <div className="absolute px-6 bottom-8">
                <h3 className="text-gega-grey group-hover:text-gega-melon group-hover:mb-2 duration-500">
                  Oblivion
                </h3>
                <p className="text-xs opacity-0 group-hover:opacity-100 group-hover:mb-10 duration-500 text-gega-grey">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam,
                  a?
                </p>
                <div className="flex text-2xl absolute space-x-8 text-gega-grey opacity-0 -bottom-2 group-hover:bottom-2 group-hover:opacity-100 duration-500">
                  <a href="#" className="hover:text-gega-red duration-500">
                    <AiFillCaretRight />
                  </a>
                  <a href="#" className="hover:text-gega-red duration-500">
                    <AiOutlineArrowRight />
                  </a>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden basis-1/3">
              <img
                src={mv4}
                className="group-hover:scale-110 group-hover:opacity-50 duration-500"
              />
              <div className="absolute px-6 bottom-8">
                <h3 className="text-gega-grey group-hover:text-gega-melon group-hover:mb-2 duration-500">
                  Oblivion
                </h3>
                <p className="text-xs opacity-0 group-hover:opacity-100 group-hover:mb-10 duration-500 text-gega-grey">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam,
                  a?
                </p>
                <div className="flex text-2xl absolute space-x-8 text-gega-grey opacity-0 -bottom-2 group-hover:bottom-2 group-hover:opacity-100 duration-500">
                  <a href="#" className="hover:text-gega-red duration-500">
                    <AiFillCaretRight />
                  </a>
                  <a href="#" className="hover:text-gega-red duration-500">
                    <AiOutlineArrowRight />
                  </a>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden basis-1/3">
              <img
                src={mv5}
                className="group-hover:scale-110 group-hover:opacity-50 duration-500"
              />
              <div className="absolute px-6 bottom-8">
                <h3 className="text-gega-grey group-hover:text-gega-melon group-hover:mb-2 duration-500">
                  Oblivion
                </h3>
                <p className="text-xs opacity-0 group-hover:opacity-100 group-hover:mb-10 duration-500 text-gega-grey">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam,
                  a?
                </p>
                <div className="flex text-2xl absolute space-x-8 text-gega-grey opacity-0 -bottom-2 group-hover:bottom-2 group-hover:opacity-100 duration-500">
                  <a href="#" className="hover:text-gega-red duration-500">
                    <AiFillCaretRight />
                  </a>
                  <a href="#" className="hover:text-gega-red duration-500">
                    <AiOutlineArrowRight />
                  </a>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden basis-1/3">
              <img
                src={mv6}
                className="group-hover:scale-110 group-hover:opacity-50 duration-500"
              />
              <div className="absolute px-6 bottom-8">
                <h3 className="text-gega-grey group-hover:text-gega-melon group-hover:mb-2 duration-500">
                  Oblivion
                </h3>
                <p className="text-xs opacity-0 group-hover:opacity-100 group-hover:mb-10 duration-500 text-gega-grey">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam,
                  a?
                </p>
                <div className="flex text-2xl absolute space-x-8 text-gega-grey opacity-0 -bottom-2 group-hover:bottom-2 group-hover:opacity-100 duration-500">
                  <a href="#" className="hover:text-gega-red duration-500">
                    <AiFillCaretRight />
                  </a>
                  <a href="#" className="hover:text-gega-red duration-500">
                    <AiOutlineArrowRight />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="basis-1/3">
            <h2 className="text-gega-grey mb-8">Hot News</h2>
            <div className="flex flex-col h-full pb-16 justify-between space-y-4">
                <div className="flex items-center group">
                    <div className="basis-1/3 h-full">
                        <img src={new1} className="h-full w-full object-cover" />
                    </div>
                    <div className="pl-4 basis-2/3 text-gega-grey group-hover:text-gega-melon group-hover:cursor-pointer duration-500">
                        <p className="text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, dolorum.</p>
                        <p className="text-xs tracking-tighter mt-2 font-gemunu font-bold uppercase">On NOW 01 2022</p>
                    </div>
                        
                </div>
                <div className="flex items-center group">
                    <div className="basis-1/3 h-full">
                        <img src={new2} className="h-full w-full object-cover" />
                    </div>
                    <div className="pl-4 basis-2/3 text-gega-grey group-hover:text-gega-melon group-hover:cursor-pointer duration-500">
                        <p className="text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, dolorum.</p>
                        <p className="text-xs tracking-tighter mt-2 font-gemunu font-bold uppercase">On NOW 01 2022</p>
                    </div>
                        
                </div>
                <div className="flex items-center group">
                    <div className="basis-1/3 h-full">
                        <img src={new3} className="h-full w-full object-cover" />
                    </div>
                    <div className="pl-4 basis-2/3 text-gega-grey group-hover:text-gega-melon group-hover:cursor-pointer duration-500">
                        <p className="text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, dolorum.</p>
                        <p className="text-xs tracking-tighter mt-2 font-gemunu font-bold uppercase">On NOW 01 2022</p>
                    </div>
                        
                </div>
                <div className="flex items-center group">
                    <div className="basis-1/3 h-full">
                        <img src={new4} className="h-full w-full object-cover" />
                    </div>
                    <div className="pl-4 basis-2/3 text-gega-grey group-hover:text-gega-melon group-hover:cursor-pointer duration-500">
                        <p className="text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, dolorum.</p>
                        <p className="text-xs tracking-tighter mt-2 font-gemunu font-bold uppercase">On NOW 01 2022</p>
                    </div>
                        
                </div>
                <div className="flex items-center group">
                    <div className="basis-1/3 h-full">
                        <img src={new5} className="h-full w-full object-cover" />
                    </div>
                    <div className="pl-4 basis-2/3 text-gega-grey group-hover:text-gega-melon group-hover:cursor-pointer duration-500">
                        <p className="text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, dolorum.</p>
                        <p className="text-xs tracking-tighter mt-2 font-gemunu font-bold uppercase">On NOW 01 2022</p>
                    </div>
                        
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Movies;
