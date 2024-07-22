'use client';
import { fetchArtFromRijksMuseumDetails } from '@/Utils/api';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const page = ({ params }) => {
    const [pageDetails, setPageDetails] = useState(null);

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
            <div className='border border-black px-8 py-4'>
                <h1 className='text-3xl font-bold mt-4'>{pageDetails.title}</h1>
                <p className='text-lg italic mt-2'>{pageDetails.longTitle}</p>

                {/* dont forget to add the headerimage url */}

                {/* image section */}
                {pageDetails.webImage && (
                    <div className='mt-4'>
                        <Image
                            src={pageDetails.webImage.url}
                            alt={pageDetails.title}
                            width={pageDetails.webImage.width}
                            height={pageDetails.webImage.height}
                            className='w-full h-auto'
                        />
                    </div>
                )}

                {/* description section */}
                {pageDetails.label && pageDetails.label.description && (
                    <div className='mt-4'>
                        <h2 className='text-2xl font-semibold'>Description</h2>
                        <p>{pageDetails.label.description}</p>
                        {pageDetails.plaqueDescriptionEnglish ? (
                            <p className='mt-2 italic'>
                                {pageDetails.plaqueDescriptionEnglish}
                            </p>
                        ) : (
                            pageDetails.plaqueDescriptionDutch && (
                                <p className='mt-2 italic'>
                                    {pageDetails.plaqueDescriptionDutch}
                                </p>
                            )
                        )}
                    </div>
                )}

                {/* artist info section */}
                {pageDetails.principalMakers &&
                    pageDetails.principalMakers.length > 0 && (
                        <div className='mt-4'>
                            <h2 className='text-2xl font-semibold'>
                                Artist Information
                            </h2>
                            {pageDetails.principalMakers.map((maker, index) => (
                                <div key={index} className='mt-2'>
                                    <p className='font-semibold'>
                                        {maker.name}
                                    </p>
                                    <p>
                                        Born: {maker.dateOfBirth},{' '}
                                        {maker.placeOfBirth}
                                    </p>
                                    <p>
                                        Died: {maker.dateOfDeath},{' '}
                                        {maker.placeOfDeath}
                                    </p>
                                    <p>Role: {maker.roles.join(', ')}</p>
                                    <p>
                                        Production Place:{' '}
                                        {maker.productionPlaces.join(', ')}
                                    </p>
                                </div>
                            ))}
                        </div>
                    )}

                {/* details section */}
                {pageDetails.objectNumber && (
                    <div className='mt-4'>
                        <h2 className='text-2xl font-semibold'>Details</h2>
                        <p>Object ID: {pageDetails.objectNumber}</p>
                        {pageDetails.dimensions &&
                            pageDetails.dimensions.length > 0 && (
                                <p>
                                    Dimensions:
                                    {pageDetails.dimensions
                                        .map(
                                            (dim) =>
                                                `${dim.type}: ${dim.value}${dim.unit}`
                                        )
                                        .join(', ')}
                                </p>
                            )}
                        {pageDetails.materials &&
                            pageDetails.materials.length > 0 && (
                                <p>
                                    Materials:{' '}
                                    {pageDetails.materials.join(', ')}
                                </p>
                            )}

                        {pageDetails.physicalMedium && (
                            <p>Physical Medium: {pageDetails.physicalMedium}</p>
                        )}
                    </div>
                )}

                {/* color section */}
                {pageDetails.colors && pageDetails.colors.length > 0 && (
                    <div className='mt-4'>
                        <h2 className='text-2xl font-semibold'>Colors</h2>
                        <div className='flex flex-wrap'>
                            {pageDetails.colors.map((color, index) => (
                                <div
                                    key={index}
                                    className='w-10 h-10'
                                    style={{ backgroundColor: color.hex }}
                                    title={color.hex}
                                ></div>
                            ))}
                        </div>
                    </div>
                )}

                {/* acquisition section */}
                {pageDetails && (
                    <div className='mt-4'>
                        <h2 className='text-2xl font-semibold'>Acquisition</h2>
                        <p>Method: {pageDetails.acquisition.method}</p>
                        <p>
                            Date:
                            {new Date(
                                pageDetails.acquisition.date
                            ).toLocaleDateString()}
                        </p>
                    </div>
                )}

                {/* documentation section */}
                {pageDetails.documentation &&
                    pageDetails.documentation.length > 0 && (
                        <div className='mt-4'>
                            <h2 className='text-2xl font-semibold'>
                                Documentation
                            </h2>
                            <ul className='list-disc ml-6'>
                                {pageDetails.documentation.map((doc, index) => (
                                    <li key={index}>{doc}</li>
                                ))}
                            </ul>
                        </div>
                    )}
            </div>
        </div>
    );
};

export default page;
