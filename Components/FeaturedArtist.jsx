import ArtCard from './ArtCard';

const FeaturedArtist = () => {
    return (
        <section className='min-h-[30rem] border border-pink-600 my-8 px-8 py-4 md:px-12'>
            <h2 className='font-semibold text-2xl mb-4'>Featured Artist</h2>
            <div className='bg-stone-200 h-[30rem] p-4 grid md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-8'></div>
        </section>
    );
};

export default FeaturedArtist;
