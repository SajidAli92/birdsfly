import React from 'react';
import './SearchResults.css'; 
import { Link } from 'react-router-dom';

const SearchResults = ({ searchResults }) => {
  return (
    <div className="search-results-container">
      {searchResults.length > 0 ? (
        <>
          <h2 className="results-heading">Search Results</h2>
          <div className="results-grid">
            {searchResults.map((product) => (
              <div key={product.id} className="result-card">
                <img src={product.image} alt={product.title} className="result-image" />
                <div className="result-details">
                  <h3 className="result-title">{product.title}</h3>
                  <p className="result-price">₹ {product.price * 80}</p>
                  <Link to={`/product/${product.id}`} className="view-details-btn">
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <h2 className="no-results">No matching products found.</h2>
      )}
    </div>
  );
};

export default SearchResults;
