import React, { useEffect, useRef, useState } from 'react'
import OfficeItem from './components/OfficeItem';

const data = [
    {
        imgUrl: "https://cinnamon.agency/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fzagreb.b5180ce4.jpeg&w=640&q=75",
        city: "Zagreb",
        address: "Slavonska avenija 6, 10000, Zagreb, Croatia"
    },
    {
        imgUrl: "https://cinnamon.agency/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnew-york.4d639475.jpeg&w=640&q=75",
        city: "New York",
        address: "500 7th Ave, New York, NY 10018, United States"
    },
    {
        imgUrl: "https://cinnamon.agency/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbelgrade.a9250fd0.jpeg&w=640&q=75",
        city: "Belgrade",
        address: "Bulevar vojvode Mišića 37 11000, Belgrade, Serbia"
    }
];

function Offices() {
    const ref = useRef();
    const [scrollValue, setScrollValue] = useState(0);

    useEffect(() =>{
        (() =>{
            ref.current.style.transform = `translateX(${scrollValue}px)`;
        })()
    }, [scrollValue]);

  return (
    <div className='bg-white py-40'>
        <div className="content flex flex-col gap-14 relative">
            <div className="text-13.5 font-bold">Our Offices</div>
            <div className="absolute flex gap-8 transition-transform duration-300" ref={ref}>
                {
                    data.map((item, index) =>(
                        <OfficeItem {...item} key={index} />
                    ))
                }
            </div>
            <div className="flex mt-[385px] gap-8">
                <i class="fa-solid fa-left-long text-3xl cursor-pointer text-gray-400" onClick={() =>setScrollValue(v => v+540)}></i>
                <i class="fa-solid fa-right-long text-3xl cursor-pointer text-primary" onClick={() =>setScrollValue(v => v-540)}></i>
            </div>
        </div>
    </div>
  )
}

export default Offices