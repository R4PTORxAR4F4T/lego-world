import React from 'react';
import { FaRecycle,FaCreativeCommonsRemix } from 'react-icons/fa';
import { MdHighQuality,MdCastForEducation } from "react-icons/md";

const About = () => {
    return ( 
        <div className=" my-12">
            <div>
                <p className="text-2xl font-bold my-12 py-2 border-b">Lego's quality</p>
            </div>
            <div className="card_body flex flex-wrap sm:flex-nowrap justify-evenly gap-10">
                <div className="border flex-1 flex flex-col items-center justify-center p-4 rounded-lg">
                    <MdCastForEducation className="text-4xl"/>
                    <div className="text-sm font-semibold">Educational</div>
                </div>
                <div className="border flex-1 flex flex-col items-center justify-center p-4 rounded-lg">
                    <FaCreativeCommonsRemix className="text-4xl"/>
                    <div className="text-sm font-semibold">Creativity</div>
                </div>
                <div className="border flex-1 flex flex-col items-center justify-center p-4 rounded-lg">
                    <MdHighQuality className="text-4xl"/>
                    <div className="text-sm font-semibold">Durable</div>
                </div>
                <div className="border flex-1 flex flex-col items-center justify-center p-4 rounded-lg">
                    <FaRecycle className="text-4xl"/>
                    <div className="text-sm font-semibold">Environmental</div>
                </div>
            </div>
        </div>
    );
};

export default About;