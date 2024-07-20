const Hero = () => {
    return (
        <section
            className='border border-purple-600 min-h-[35rem] bg-cover bg-top flex items-center justify-center'
            style={{ background: 'url(/background-test.webp)' }}
        >
            <div className='bg-black bg-opacity-50 text-white px-4 md:px-8 py-4'>
                <h2 className='text-3xl md:text-5xl font-bold my-6 uppercase'>
                    Welcome to the db art gallery
                </h2>
                <p className='text-center font-mono text-lg'>
                    Explore the beauty and history of art
                </p>
            </div>
        </section>
    );
};

export default Hero;
