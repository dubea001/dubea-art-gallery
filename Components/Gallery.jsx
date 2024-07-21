import { useEffect, useState } from 'react';
import { fetchArtFromRijksMuseum } from '../Utils/api';
import Image from 'next/image';

const Gallery = () => {
    const [artWork, setArtWork] = useState([]);

    useEffect(() => {
        const fetchData = async (ps = 20) => {
            try {
                const data = await fetchArtFromRijksMuseum({ ps: ps });
                setArtWork(data.artObjects);
                // console.log(data.artObjects);
            } catch (error) {
                console.error('failed to fetch data', error);
            }
        };
        fetchData();
    }, []);

    return (
        <section className='border border-green-500 flex flex-col items-center justify-center px-8 mb-16'>
            <h2 className='font-semibold text-2xl mb-4 text-center'>
                Our Gallery
            </h2>
            <div className='flex flex-wrap gap-8 items-center justify-evenly border border-red-600'>
                {artWork.map((item) => (
                    <div
                        key={item.id}
                        className='flex flex-col border border-black md:w-[40%] lg:w-[30%] min-h-[35rem]'
                    >
                        <Image
                            src={item.webImage.url}
                            alt={item.title}
                            width={item.webImage.width}
                            height={item.webImage.height}
                            className='w-full h-96'
                        />

                        <div className='my-4'>
                            <p className='text-lg font-bold text-gray-800'>
                                {item.title}
                            </p>
                            <p className='text-sm font-semibold text-gray-500 font-mono'>
                                By: {item.principalOrFirstMaker}
                            </p>
                            <button className='bg-gray-800 text-white px-8 py-2 font-mono text-lg text-semi-bold my-4'>
                                More details
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <button className='text-center border border-red-500 px-8 py-2 my-8'>
                Explore More From Our Gallery
            </button>
        </section>
    );
};

export default Gallery;
