import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import React ,{ useEffect, useState }from 'react';
import ToysCard from '../ToysCard/ToysCard';


const ToyCategory = () => {

    const [alltoys, setAlltoys] = useState([]);

    useEffect(() => {
        fetch('https://assignment-11-server-jet.vercel.app/alltoys')
            .then(res => res.json())
            .then(data => setAlltoys(data));
    }, [])

    console.log(alltoys);

    return (
        // <div className="grid grid-cols-1 md:grid-cols-2 gap-6"></div>
        <div className='my-12'>
            <div className='my-16 w-full mx-auto'>
            <p className='text-4xl text-center mb-8 border-b pb-4 border-white '>All toys we have</p>
            
            <Tabs>
            <TabList>
              <Tab>Action</Tab>
              <Tab>Building</Tab>
              <Tab>Friends</Tab>
            </TabList>

            <TabPanel>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {
                    alltoys.filter(toy => toy.sub_category === "Action").map(toy => (
                        <ToysCard 
                            key={toy._id} 
                            toy={toy}
                        ></ToysCard>
                    ))
                }
                </div>
            </TabPanel>
            <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {
                    alltoys.filter(toy => toy.sub_category === "Building").map(toy => (
                        <ToysCard 
                            key={toy._id} 
                            toy={toy}
                        ></ToysCard>
                    ))
                }
                </div>
            </TabPanel>
            <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {
                    alltoys.filter(toy => toy.sub_category === "Friends").map(toy => (
                        <ToysCard 
                            key={toy._id} 
                            toy={toy}
                        ></ToysCard>
                    ))
                }
                </div>
            </TabPanel>
            </Tabs>
            </div>   
        </div>
    );
};

export default ToyCategory;