import React from 'react';

const Comming = () => {
    return (
        <div className='flex flex-col sm:flex-row justify-between items-center gap-10'>
            <div className=''>
                <p className='text-4xl mb-8 pb-4 '>Comming soon....</p>
                <p className='text-xl'>Here is our new product</p>
                <p className='text-xl'>Take a closer look</p>
                <div>
                    <div className="btn btn-sm md:btn-md gap-2 normal-case lg:gap-3">
                        <div className="flex flex-col items-end">
                            <span className="text-neutral-content/50 hidden text-xs font-normal md:block">Scrol</span> 
                            <span>Down</span>
                        </div> 
                        <svg className="h-6 w-6 fill-current md:h-8 md:w-8" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"></path>
                        </svg>
                    </div>
                </div>
            </div>
            <div className="h-96 carousel carousel-vertical rounded-box w-full sm:w-1/2 border "> 
                <div className="carousel-item h-full">
                    <img src="https://www.lego.com/cdn/cs/set/assets/blt9085e4c9ecfaffbe/43225.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1" />
                </div> 
                <div className="carousel-item h-full">
                    <img src="https://www.lego.com/cdn/cs/set/assets/blt22104f90cf1009c9/10317.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1" />
                </div> 
                <div className="carousel-item h-full">
                    <img src="https://www.lego.com/cdn/cs/set/assets/blt6442a343ca0bb4c5/42111.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1" />
                </div> 
                <div className="carousel-item h-full">
                    <img src="https://www.lego.com/cdn/cs/set/assets/bltf73564a058fa0425/42151.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1" />
                </div> 
                <div className="carousel-item h-full">
                    <img src="https://www.lego.com/cdn/cs/set/assets/bltec4aa7bf8ac429a4/60324.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1" />
                </div> 
                <div className="carousel-item h-full">
                    <img src="https://www.lego.com/cdn/cs/set/assets/blt51a62f6f7514d31e/42156.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1" />
                </div>
            </div>
        </div>
    );
};

export default Comming;