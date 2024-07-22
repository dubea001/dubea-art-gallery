'use client';
import ArtCard from '@/Components/ArtCard';
import { fetchArtFromRijksMuseum } from '@/Utils/api';
import { useEffect, useState } from 'react';

const page = () => {
    const [artWork, setArtWork] = useState([]);

    useEffect(() => {
        const fetchData = async (ps = 50) => {
            try {
                const data = await fetchArtFromRijksMuseum({ ps: ps });
                setArtWork(data.artObjects);
            } catch (error) {
                console.error('error fetching data', error);
            }
        };
        fetchData();
    }, []);
    return (
        <section>
            <h2 className='font-semibold text-2xl mb-4 text-center'>
                More From Gallery
            </h2>
            <div className='flex flex-wrap gap-8 items-center justify-evenly'>
                {artWork.map((item) => (
                    <ArtCard key={item.id} art={item} />
                ))}
            </div>
        </section>
    );
};

export default page;
