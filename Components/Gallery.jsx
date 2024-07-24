import { useEffect, useState } from 'react';
import { fetchArtFromRijksMuseum } from '../Utils/api';
import Link from 'next/link';
import ArtCard from './ArtCard';

const Gallery = () => {
    const [artWork, setArtWork] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async (ps = 20) => {
            try {
                const data = await fetchArtFromRijksMuseum({ ps: ps });
                if (data && data.artObjects) {
                    setArtWork(data.artObjects);
                } else {
                    throw new Error('invalid data format');
                }
            } catch (error) {
                setError('failed to fetch data', error);
            } finally {
                setLoading(false);
            }
        };
        // fetchData();
    }, []);

    if (loading) {
        return <div className=''>Loading...</div>;
    }

    if (error) {
        return <div className=''>{error}</div>;
    }

    return (
        <section className='flex flex-col items-center justify-center px-8 mb-16 border border-green-600 min-h-screen'>
            <h2 className='font-semibold text-2xl mb-4 text-center'>
                Our Gallery
            </h2>
            <div className='flex flex-wrap gap-8 items-center justify-evenly'>
                {artWork.map((item) => (
                    <ArtCard key={item.id} art={item} />
                ))}
            </div>
            <Link
                href='/gallery'
                className='border border-gray-800 text-gray-800 hover:shadow-[-5px_5px_0px_#1F2937] transition duration-200 px-8 py-2 font-mono text-lg text-semi-bold my-8'
            >
                Explore More From Our Gallery
            </Link>
        </section>
    );
};

export default Gallery;
