import React from 'react';
import { Link } from 'react-router-dom';

import BarcodeScanner from './BarcodeScanner';

export default () => {
  return (
    <div className="category-section">
      <Link to="/browse/baby" className="category-link">
        Baby
      </Link>
      <Link to="/browse/bakery" className="category-link">
        Bakery
      </Link>

      <div style={{ marginTop: 50 }}>
        <Link to="/admin" className="category-link">
          Admin Portal
        </Link>
      </div>

      <BarcodeScanner />
    </div>
  );
};
