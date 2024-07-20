'use client';

import { useEffect, useState } from 'react';
import { fetchArtFromRijksMuseum } from '../Utils/api';
import Image from 'next/image';

const Gallery = () => {
    const [artWork, setArtWork] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchArtFromRijksMuseum('p=30');
                setArtWork(data.artObjects);
                console.log(data.artObjects);
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
            <div className='flex flex-wrap gap-8 items-center justify-center '>
                {artWork.map((item) => (
                    <div
                        key={item.id}
                        className='flex flex-col border border-black md:w-[40%]'
                    >
                        <Image
                            src={item.webImage.url}
                            alt={item.title}
                            width={item.webImage.width}
                            height={item.webImage.height}
                            layout='responsive'
                            className='w-full'
                        />
                        <p className='text-lg font-bold text-gray-800'>
                            By: {item.principalOrFirstMaker}
                        </p>
                        <p className='text-base font-semibold text-gray-500'>
                            {item.title}
                        </p>
                    </div>
                ))}
            </div>
            <button className='text-center border border-red-500 px-8 py-2 my-8'>
                Explore Our Gallery
            </button>
        </section>
    );
};

export default Gallery;
