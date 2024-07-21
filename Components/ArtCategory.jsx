import { useEffect, useState } from 'react';
import { types } from '../Utils/index';
// import ArtCard from './ArtCard';
import { fetchArtFromRijksMuseum } from '@/Utils/api';
import Image from 'next/image';

const ArtCategory = () => {
    const [data, setData] = useState({
        painting: [],
        furniture: [],
        sculpture: [],
        drawing: [],
    });

    useEffect(() => {
        const fetchDataCategories = async () => {
            try {
                const response = types.map((type) =>
                    fetchArtFromRijksMuseum({ type, ps: 4 })
                );
                const results = await Promise.all(response);
                const newData = {};
                results.forEach((result, index) => {
                    newData[types[index]] = result.artObjects;
                });
                setData(newData);
                console.log(newData);
            } catch (error) {
                console.error('failed to fetch data types', error);
            }
        };

        fetchDataCategories();
    }, []);

    return (
        <section className='min-h-[30rem] border border-pink-600 my-8 px-8 py-4 md:px-12'>
            <h2 className='font-semibold text-2xl mb-4'>Categories</h2>
            <div className='bg-stone-200 h-[30rem] p-4 gap-8 flex overflow-x-auto'>
                {types.map((type) => (
                    <div
                        key={type}
                        className='border border-gray-800 gap-4 py-4 px-2 min-w-[80%] md:min-w-[60%] lg:min-w-[30%]'
                    >
                        <div className='grid grid-cols-2 w-full h-[90%] place-items-center gap-x-0 gap-y-2'>
                            {data[type]?.map((art, index) => (
                                <div key={index} className='w-fit'>
                                    <Image
                                        src={art.webImage?.url}
                                        alt={art.title}
                                        width={art.webImage.width}
                                        height={art.webImage.height}
                                        className='h-40 w-40'
                                    />
                                </div>
                            ))}
                        </div>
                        <button className='bg-gray-800 text-white px-8 py-2 font-mono text-lg text-semi-bold my-2'>
                            More {type}
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ArtCategory;
