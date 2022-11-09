import React from 'react';
import img1 from "../../../assets/New folder/pexels-photo-1327405.jpeg"
import img2 from "../../../assets/New folder/pexels-photo-2295744.jpeg"
import img3 from "../../../assets/New folder/leopard-wildcat-big-cat-botswana-46254.jpeg"
import img4 from "../../../assets/New folder/pexels-photo-1123771.jpeg"
import img5 from "../../../assets/New folder/pexels-photo-460775.jpeg"
import img6 from "../../../assets/New folder/pexels-photo-135940.jpeg"
import img7 from "../../../assets/New folder/pexels-photo-3608263.jpeg"
import img8 from "../../../assets/New folder/cheetahs-cubs-two-together-1623182.jpeg"
const Showcase = () => {
    return (
        <div className='mb-5'>
            <div className='text-center my-5'>
                <h1 className="text-4xl font-bold">Recent Clicks</h1>
                <p>My Recent click are in a showcase here!</p>
            </div>
            <div className="grid grid-cols-4 h-[600px]">
                <div className='h-full'>
                    <img src={img1} className="h-[300px] w-full border-2 border-white" alt="" />
                    <img src={img4} className="h-[300px] w-full border-2 border-white" alt="" />
                </div>
                <div>
                    <img src={img3} className="h-[200px] w-full border-2 border-white" alt="" />
                    <img src={img2} className="h-[400px] w-full border-2 border-white" alt="" />
                </div>
                <div>
                    <img src={img8} className="h-[400px] w-full border-2 border-white" alt="" />
                    <img src={img6} className="h-[200px] w-full border-2 border-white" alt="" />
                </div>
                <div>
                    <img src={img5} className="h-[300px] w-full border-2 border-white" alt="" />
                    <img src={img7} className="h-[300px] w-full border-2 border-white" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Showcase;