const Navbar = () => {
    return (
        <nav className='bg-stone-400 border border-blue-600 gap-y-6 flex flex-col md:flex-row md:items-center md:justify-between px-8 py-8 md:px-16 md:sticky md:top-0'>
            <a href='/' className=''>
                DB ART GALLERY
            </a>
            <div className='gap-y-8 flex flex-col md:flex-row md:gap-28'>
                <ul className='flex flex-col gap-y-8 md:gap-x-24 md:gap-y-0 md:flex-row border border-green-500 w-fit'>
                    <li className='bg-yellow-300 cursor-pointer px-4 py-2'>
                        Gallery
                    </li>
                    <li className='bg-yellow-300 cursor-pointer px-4 py-2'>
                        Categories
                    </li>
                    <li className='bg-yellow-300 cursor-pointer px-4 py-2'>
                        Featured Artist
                    </li>
                </ul>
                <input
                    type='text'
                    className='border border-black px-4 w-72 py-2 focus:rounded-none focus:outline-1 focus:outline-yellow-300'
                    placeholder='Search anything and press enter'
                />
            </div>
        </nav>
    );
};

export default Navbar;
