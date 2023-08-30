import { AiFillHeart } from 'react-icons/ai';
import { BiMessageDetail } from 'react-icons/bi';

import user1 from "../../assets/images/userava1.jpg";
import user2 from "../../assets/images/userava2.jpg";
import user3 from "../../assets/images/userava3.jpg";
import user4 from "../../assets/images/userava4.jpg";
import user5 from "../../assets/images/userava5.jpg";

const Post = () => {
  return (
    <div className="py-16 bg-black text-gega-grey">
        <div className="container px-10 lg:px-0">
            <h2 className="text-gega-grey  hover:text-gega-red   duration-500 text-center mb-4"><a href="#">Popular Post</a></h2>
            <div className="grid grid-cols-6 gap-10">
                <div className="col-span-6 md:col-span-3 border border-gega-red">
                    <div className="border-b border-gega-red p-4 flex items-center justify-between">
                        <h3>ACCUSANTIUM DOLOREMQUE LAUDANT...</h3>
                        <img src={user1} alt="user" className="rounded-full" />
                    </div>
                    <p className="p-4 text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat distinctio minus aliquam esse iure eligendi veritatis illo ducimus animi maxime!</p>
                    <div className="border-t border-gega-red p-4 flex items-center justify-end space-x-4 font-bold font-gemunu text-xs">
                    <p>ON DEC 17, 2022</p>
                    <div className='flex items-center justify-center space-x-1'>
                        <BiMessageDetail className="text-gega-red text-xl" />
                        <p>4</p>
                        <AiFillHeart className="text-gega-red text-xl" />
                        <p>12</p>
                       
                    </div>
                    </div>  
                </div>
                <div className="col-span-6 md:col-span-3 border border-gega-red">
                    <div className="border-b border-gega-red p-4 flex items-center justify-between">
                        <h3>ACCUSANTIUM DOLOREMQUE LAUDANT...</h3>
                        <img src={user2} alt="user" className="rounded-full" />
                    </div>
                    <p className="p-4 text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat distinctio minus aliquam esse iure eligendi veritatis illo ducimus animi maxime!</p>
                    <div className="border-t border-gega-red p-4 flex items-center justify-end space-x-4 font-bold font-gemunu text-xs">
                    <p>ON DEC 17, 2022</p>
                    <div className='flex items-center justify-center space-x-1'>
                        <BiMessageDetail className="text-gega-red text-xl" />
                        <p>4</p>
                        <AiFillHeart className="text-gega-red text-xl" />
                        <p>12</p>
                       
                    </div>
                    </div>  
                </div>
                <div className="col-span-6 md:col-span-3 lg:col-span-2 border border-gega-red">
                    <div className="border-b border-gega-red p-4 flex items-center justify-between">
                        <h3>ACCUSANTIUM DOLOREMQUE LAUDANT...</h3>
                        <img src={user3} alt="user" className="rounded-full" />
                    </div>
                    <p className="p-4 text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat distinctio minus aliquam esse iure eligendi veritatis illo ducimus animi maxime!</p>
                    <div className="border-t border-gega-red p-4 flex items-center justify-end space-x-4 font-bold font-gemunu text-xs">
                    <p>ON DEC 17, 2022</p>
                    <div className='flex items-center justify-center space-x-1'>
                        <BiMessageDetail className="text-gega-red text-xl" />
                        <p>4</p>
                        <AiFillHeart className="text-gega-red text-xl" />
                        <p>12</p>
                       
                    </div>
                    </div>  
                </div>
                <div className="col-span-6 md:col-span-3 lg:col-span-2 border border-gega-red">
                    <div className="border-b border-gega-red p-4 flex items-center justify-between">
                        <h3>ACCUSANTIUM DOLOREMQUE LAUDANT...</h3>
                        <img src={user4} alt="user" className="rounded-full" />
                    </div>
                    <p className="p-4 text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat distinctio minus aliquam esse iure eligendi veritatis illo ducimus animi maxime!</p>
                    <div className="border-t border-gega-red p-4 flex items-center justify-end space-x-4 font-bold font-gemunu text-xs">
                    <p>ON DEC 17, 2022</p>
                    <div className='flex items-center justify-center space-x-1'>
                        <BiMessageDetail className="text-gega-red text-xl" />
                        <p>4</p>
                        <AiFillHeart className="text-gega-red text-xl" />
                        <p>12</p>
                       
                    </div>
                    </div>  
                </div>
                <div className="hidden lg:block lg:col-span-2 border border-gega-red">
                    <div className="border-b border-gega-red p-4 flex items-center justify-between">
                        <h3>ACCUSANTIUM DOLOREMQUE LAUDANT...</h3>
                        <img src={user5} alt="user" className="rounded-full" />
                    </div>
                    <p className="p-4 text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat distinctio minus aliquam esse iure eligendi veritatis illo ducimus animi maxime!</p>
                    <div className="border-t border-gega-red p-4 flex items-center justify-end space-x-4 font-bold font-gemunu text-xs">
                    <p>ON DEC 17, 2022</p>
                    <div className='flex items-center justify-center space-x-1'>
                        <BiMessageDetail className="text-gega-red text-xl" />
                        <p>4</p>
                        <AiFillHeart className="text-gega-red text-xl" />
                        <p>12</p>
                       
                    </div>
                    </div>  
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Post