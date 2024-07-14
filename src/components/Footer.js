import React from 'react';
import { Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-auto">
      <Typography variant="body1" align="center">
        © 2024 MyStore
      </Typography>
      <div className="flex justify-center mt-2">
        <Link href="https://facebook.com" color="inherit" className="mx-2">Facebook</Link>
        <Link href="https://twitter.com" color="inherit" className="mx-2">Twitter</Link>
        <Link href="https://instagram.com" color="inherit" className="mx-2">Instagram</Link>
      </div>
    </footer>
  );
};

export default Footer;
