import React from 'react';

const Footer = () => {
    return (
        <footer className='bg-gray-600 text-white p-8'>
            <div className='container mx-auto text-center'>
                <p>&copy; 2024 DB Art Gallery. All rights reserved.</p>
                <div className='mt-8 flex gap-8 items-center justify-center'>
                    <a href='#' className=''>
                        Contact
                    </a>
                    <a href='#' className=''>
                        Privacy Policy
                    </a>
                    <a href='#' className=''>
                        Terms of Service
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
