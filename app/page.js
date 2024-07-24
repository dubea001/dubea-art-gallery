'use client';

import ArtCategory from '@/Components/ArtCategory';
import FeaturedArtist from '@/Components/FeaturedArtist';
import Footer from '@/Components/Footer';
import Gallery from '@/Components/Gallery';
import Hero from '@/Components/Hero';
import Navbar from '@/Components/Navbar';

export default function Home() {
    return (
        <main className=''>
            <Navbar />
            <Hero />
            {/*  <FeaturedArtist /> */}
            <ArtCategory />
            {/* <Gallery /> */}
            <Footer />
        </main>
    );
}
