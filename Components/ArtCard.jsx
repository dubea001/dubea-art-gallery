import Image from 'next/image';
import Link from 'next/link';

const ArtCard = ({ art }) => {
    return (
        <div
            key={art.id}
            className='flex flex-col border border-gray-800 p-2 md:w-[40%] lg:w-[30%] min-h-[35rem] hover:shadow-[-5px_5px_0px_#1F2937] transition duration-200'
        >
            <Image
                src={art.webImage?.url}
                alt={art.title}
                width={art.webImage.width}
                height={art.webImage.height}
                className='w-full h-96'
            />

            <div className='my-4'>
                <p className='text-lg font-bold text-gray-800 font-mono'>
                    {art.title}
                </p>
                <p className='text-sm font-semibold text-gray-500 my-4'>
                    By: {art.principalOrFirstMaker}
                </p>
                <Link
                    href={`/details/${art.objectNumber}`}
                    className='bg-gray-800 text-white px-8 py-2 font-mono text-lg text-semi-bold transition duration-200 hover:bg-gray-700'
                >
                    More details
                </Link>
            </div>
        </div>
    );
};

export default ArtCard;
