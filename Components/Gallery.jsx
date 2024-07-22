import { useEffect, useState } from 'react';
import { fetchArtFromRijksMuseum } from '../Utils/api';
import Image from 'next/image';
import Link from 'next/link';
// import { useRouter } from 'next/navigation';

const Gallery = () => {
    const [artWork, setArtWork] = useState([]);
    // const router = useRouter();

    useEffect(() => {
        const fetchData = async (ps = 20) => {
            try {
                const data = await fetchArtFromRijksMuseum({ ps: ps });
                setArtWork(data.artObjects);
                console.log(data.artObjects);
            } catch (error) {
                console.error('failed to fetch data', error);
            }
        };
        fetchData();
    }, []);

    const handleMoreDetails = (id, headerImage) => {
        router.push({
            pathname: `/details/${id}`,
            query: { headerImage },
        });
    };

    return (
        <section className='flex flex-col items-center justify-center px-8 mb-16'>
            <h2 className='font-semibold text-2xl mb-4 text-center'>
                Our Gallery
            </h2>
            <div className='flex flex-wrap gap-8 items-center justify-evenly'>
                {artWork.map((item) => (
                    <div
                        key={item.id}
                        className='flex flex-col border border-gray-800 p-2 md:w-[40%] lg:w-[30%] min-h-[35rem] hover:shadow-[-5px_5px_0px_#1F2937] transition duration-200'
                    >
                        <Image
                            src={item.webImage.url}
                            alt={item.title}
                            width={item.webImage.width}
                            height={item.webImage.height}
                            className='w-full h-96'
                        />

                        <div className='my-4'>
                            <p className='text-lg font-bold text-gray-800 font-mono'>
                                {item.title}
                            </p>
                            <p className='text-sm font-semibold text-gray-500 my-4'>
                                By: {item.principalOrFirstMaker}
                            </p>
                            <Link
                                href={{
                                    pathname: `/details/${item.objectNumber}`,
                                    query: {
                                        headerImage: item.headerImage?.url,
                                    },
                                }}
                                className='bg-gray-800 text-white px-8 py-2 font-mono text-lg text-semi-bold transition duration-200 hover:bg-gray-700'
                            >
                                More details
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
            <button className='border border-gray-800 text-gray-800 hover:shadow-[-5px_5px_0px_#1F2937] transition duration-200 px-8 py-2 font-mono text-lg text-semi-bold my-8'>
                Explore More From Our Gallery
            </button>
        </section>
    );
};

export default Gallery;
