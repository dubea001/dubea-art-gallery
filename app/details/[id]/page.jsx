'use client';
import { fetchArtFromRijksMuseumDetails } from '@/Utils/api';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const page = ({ params }) => {
    const [pageDetails, setPageDetails] = useState(null);
    const router = useRouter();
    const { headerImage } = router.query;

    useEffect(() => {
        const fetchDetailsById = async () => {
            try {
                const data = await fetchArtFromRijksMuseumDetails(params.id);
                setPageDetails(data);
                console.log(data);
            } catch (error) {
                console.error('failed to fetch data', error);
            }
        };
        fetchDetailsById();
    }, [params.id]);

    if (!pageDetails) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            page info: {params.id}
            <div className=''>
                {headerImage && (
                    <Image
                        src={headerImage}
                        alt='header image'
                        width={1200}
                        height={600}
                        className='w-full h-auto'
                    />
                )}
            </div>
        </div>
    );
};

export default page;
