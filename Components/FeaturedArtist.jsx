import { useEffect, useState } from 'react';
import { fetchArtFromRijksMuseum } from '@/Utils/api';
import { reduceText } from '@/Utils/index';
import Image from 'next/image';

const FeaturedArtist = () => {
    const [featuredArtists, setFeaturedArtists] = useState([]);
    const [artWork, setArtWork] = useState({});

    useEffect(() => {
        const fetchFeaturedArtistNames = async () => {
            try {
                const data = await fetchArtFromRijksMuseum({ ps: 5 });
                const artistNames = data.artObjects.map(
                    (item) => item.principalOrFirstMaker
                );

                setFeaturedArtists(artistNames);

                const artistWorks = artistNames.map((artist) =>
                    fetchArtFromRijksMuseum({
                        involvedMaker: artist,
                        ps: 4,
                    })
                );
                const results = await Promise.all(artistWorks);
                const newArtworks = {};
                results.forEach((result, index) => {
                    newArtworks[artistNames[index]] = result.artObjects;
                });
                setArtWork(newArtworks);
            } catch (error) {
                console.error('error fetching featured artist', error);
            }
        };

        // fetchFeaturedArtistNames();
    }, []);

    return (
        <section className='min-h-[30rem] border border-pink-600 my-8 px-8 py-4 md:px-12'>
            <h2 className='font-semibold text-2xl mb-4'>Featured Artist</h2>
            <div className='bg-stone-200 h-[30rem] p-4 gap-8 flex overflow-x-auto'>
                {featuredArtists.map((artist) => (
                    <div
                        key={artist}
                        className='border border-gray-800 gap-4 py-4 px-2 min-w-[80%] md:min-w-[60%] lg:min-w-[30%] hover:shadow-[-5px_5px_0px_#1F2937] transition duration-200'
                    >
                        <div className='grid grid-cols-2 w-full h-[90%] place-items-center gap-x-0 gap-y-2'>
                            {artWork[artist]?.map((art, index) => (
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
                        <button className='bg-gray-800 text-white px-8 py-2 font-mono text-lg text-semi-bold my-2 transition duration-200 hover:bg-gray-700'>
                            {reduceText(artist)}
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FeaturedArtist;
