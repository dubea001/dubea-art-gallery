'use client';
import ArtCard from '@/Components/ArtCard';
import { fetchArtFromRijksMuseum } from '@/Utils/api';
import { useEffect, useState } from 'react';

const page = ({ params }) => {
    const [viewCategory, setViewCategory] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCategory = async (ps = 50, type = params.type) => {
            try {
                const response = await fetchArtFromRijksMuseum({
                    ps: ps,
                    type: type,
                });
                setViewCategory(response.artObjects);
            } catch (error) {
                setError(error);
                console.error('failed to fetch data', error);
            } finally {
                setLoading(false);
            }
        };
        fetchCategory();
    }, [params.type]);

    if (loading) {
        return <div className=''>Loading...</div>;
    }
    if (error) {
        return <div className=''>Error: {error}</div>;
    }

    return (
        <section>
            <h2 className='font-semibold text-2xl mb-4 text-center'>
                More From {params.type}
            </h2>
            <div className='flex flex-wrap gap-8 items-center justify-evenly'>
                {viewCategory.map((item) => (
                    <ArtCard key={item.id} art={item} />
                ))}
            </div>
        </section>
    );
};

export default page;
