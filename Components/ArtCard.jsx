import Image from 'next/image';

const ArtCard = ({ art }) => {
    return (
        <div className='border border-black w-96 p-4'>
            <Image
                src={art.webImage?.url}
                alt={art.title}
                width={art.webImage.width}
                height={art.webImage.height}
                className='h-60 w-full'
            />
        </div>
    );
};

export default ArtCard;
