import React from 'react'
import Button from '../../ui/Button'
import Input from '../../ui/Input'

function Footer() {
  return (
    <div className='bg-black bg-opacity-90 bg-noise pt-20 pb-10'>
        <div className="content text-white flex flex-col gap-8">
            <div className="grid lg:grid-cols-11">
                <div className="lg:col-start-1 lg:col-end-5">
                    <img src="/app/logo-white.svg" alt="" className='w-40 mb-[44px]' />
                </div>
                <div className="lg:col-start-5 lg:col-end-12">
                    <div className="text-2xl w-2/5 lg:w-full lg:text-3xl font-bold">All software, zero bullshit.</div>
                </div>
            </div>
            <div className="grid lg:grid-cols-11 gap-20 lg:gap-0">
                <div className="lg:col-start-1 lg:col-end-5">
                    <div className="grid grid-cols-2 grid-rows-3 lg:flex flex-col gap-3 text-light font-medium">
                        <div className="cursor-pointer hover:text-white transition-all">Home</div>
                        <div className="cursor-pointer hover:text-white transition-all">Projects</div>
                        <div className="cursor-pointer hover:text-white transition-all">Services</div>
                        <div className="cursor-pointer hover:text-white transition-all">About Us</div>
                        <div className="cursor-pointer hover:text-white transition-all">Careers</div>
                        <div className="cursor-pointer hover:text-white transition-all">Blog</div>
                    </div>
                </div>
                <div className="lg:col-start-5 lg:col-end-12">
                    <div className="grid grid-cols-2 lg:grid-cols-[repeat(3,220px)] gap-8">
                            <div className="flex flex-col gap-2">
                                <div className="font-bold">Zagreb</div>
                                <div className="text-light text-sm space-y-1">
                                    <p>Slavonska avenija 6,</p>
                                    <p>10000, Zagreb, Croatia</p>
                                    <p>+38599 347 3103</p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <div className="font-bold">New York</div>
                                <div className="text-light text-sm space-y-1">
                                    <p>500 7th Ave, New York,</p>
                                    <p>NY 10018, United States</p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <div className="font-bold">Belgrade</div>
                                <div className="text-light text-sm space-y-1">
                                    <p>Bulevar vojvode Mišića 37</p>
                                    <p>11000, Belgrade, Serbia</p>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
            <div className="w-3/4 lg:w-full flex flex-col lg:flex-row lg:justify-between items-end lg:items-end mt-16 lg:mt-0 gap-8 lg:gap-0">
                <div className="text-sm underline cursor-pointer order-last lg:order-first">hello@cinnamon.agency</div>
                <div className="self-start w-full flex flex-col gap-6 lg:w-64">
                    <div className="font-bold">Our newsletter</div>
                    <Input type="email" label="Your E-mail" />
                    <Button full>Subscribe</Button>
                </div>
                <div className="flex flex-col w-56 justify-between gap-8 lg:gap-0">
                    <img src="https://cinnamon.agency/_next/static/media/pangea-badge.7734fbc8.svg" alt="" />
                    <img src="https://cinnamon.agency/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fclutch-badge.cc332fa4.png&w=256&q=100" alt="" />
                </div>
            </div>
            <div className="w-full border-b border-thin-light"></div>
            <div className="flex flex-col-reverse items-center lg:items-baseline lg:flex-row justify-between gap-8 lg:gap-0">
                <div className="flex gap-8">
                    <div className="text-light">© 2022 Cinnamon</div>
                    <div className="text-light cursor-pointer underline">Privacy Policy</div>
                </div>
                <div className="w-full lg:w-fit flex justify-center lg:justify-start gap-6 text-white border-b border-thin-light lg:border-none pb-8 lg:pb-0">
                    <i class="fa-brands fa-linkedin text-xl cursor-pointer"></i>
                    <i class="fa-brands fa-dribbble text-xl cursor-pointer"></i>
                    <i class="fa-brands fa-behance text-xl cursor-pointer"></i>
                    <i class="fa-brands fa-instagram text-xl cursor-pointer"></i>
                    <i class="fa-brands fa-facebook text-xl cursor-pointer"></i>
                    <i class="fa-solid fa-rss text-xl cursor-pointer"></i>
                </div>
            </div>
            {/* <div className="flex flex-col gap-8">
                <div className="flex flex-col lg:flex-row justify-between">
                    <div className="flex flex-col">
                        <div className="">
                            <img src="/app/logo-white.svg" alt="" className='w-40 mb-[44px]' />
                            <div className="grid grid-cols-2 grid-rows-3 lg:flex flex-col gap-3 text-light font-medium">
                                <div className="cursor-pointer hover:text-white transition-all">Home</div>
                                <div className="cursor-pointer hover:text-white transition-all">Projects</div>
                                <div className="cursor-pointer hover:text-white transition-all">Services</div>
                                <div className="cursor-pointer hover:text-white transition-all">About Us</div>
                                <div className="cursor-pointer hover:text-white transition-all">Careers</div>
                                <div className="cursor-pointer hover:text-white transition-all">Blog</div>
                            </div>
                        </div>
                        <div className="text-sm underline mt-52 cursor-pointer">hello@cinnamon.agency</div>
                    </div>

                    <div className="flex flex-col justify-between">
                        <div className="grid grid-cols-[repeat(3,220px)] gap-8">
                            <div className="col-start-1 col-end-4 text-3xl font-bold">All software, zero bullshit.</div>
                            <div className="flex flex-col gap-2">
                                <div className="font-bold">Zagreb</div>
                                <div className="text-light text-sm space-y-1">
                                    <p>Slavonska avenija 6,</p>
                                    <p>10000, Zagreb, Croatia</p>
                                    <p>+38599 347 3103</p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <div className="font-bold">New York</div>
                                <div className="text-light text-sm space-y-1">
                                    <p>500 7th Ave, New York,</p>
                                    <p>NY 10018, United States</p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <div className="font-bold">Belgrade</div>
                                <div className="text-light text-sm space-y-1">
                                    <p>Bulevar vojvode Mišića 37</p>
                                    <p>11000, Belgrade, Serbia</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="flex justify-between">
                            <div className="flex flex-col gap-6 w-64">
                                <div className="font-bold">Our newsletter</div>
                                <Input type="email" label="Your E-mail" />
                                <Button full>Subscribe</Button>
                            </div>
                            <div className="flex flex-col w-56 justify-between">
                                <img src="https://cinnamon.agency/_next/static/media/pangea-badge.7734fbc8.svg" alt="" />
                                <img src="https://cinnamon.agency/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fclutch-badge.cc332fa4.png&w=256&q=100" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full border-b border-thin-light"></div>
                <div className="flex justify-between">
                    <div className="flex gap-8">
                        <div className="text-light">© 2022 Cinnamon</div>
                        <div className="text-light cursor-pointer underline">Privacy Policy</div>
                    </div>
                    <div className="flex gap-6 text-white">
                        <i class="fa-brands fa-linkedin text-xl cursor-pointer"></i>
                        <i class="fa-brands fa-dribbble text-xl cursor-pointer"></i>
                        <i class="fa-brands fa-behance text-xl cursor-pointer"></i>
                        <i class="fa-brands fa-instagram text-xl cursor-pointer"></i>
                        <i class="fa-brands fa-facebook text-xl cursor-pointer"></i>
                        <i class="fa-solid fa-rss text-xl cursor-pointer"></i>
                    </div>
                </div>
            </div> */}
        </div>
    </div>
  )
}

export default Footer