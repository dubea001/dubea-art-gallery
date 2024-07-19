'use client';

import { useEffect, useState } from 'react';
import { fetchArtFromRijksMuseum } from '../Utils/api';
import Image from 'next/image';

const Gallery = () => {
    const [artWork, setArtWork] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchArtFromRijksMuseum();
                setArtWork(data.artObjects);
                console.log(data.artObjects);
            } catch (error) {
                console.error('failed to fetch data', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className='flex flex-wrap gap-8 items-center justify-center border border-green-500'>
            {artWork.map((item) => (
                <div
                    key={item.id}
                    className='flex flex-col border border-black'
                >
                    <Image
                        src={item.webImage.url}
                        alt={item.title}
                        width={400}
                        height={400}
                    />
                    <p className='text-lg font-semibold text-gray-600'>
                        {item.title}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default Gallery;
