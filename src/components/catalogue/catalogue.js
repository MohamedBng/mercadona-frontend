import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './catalogue.css';
import Card from 'react-bootstrap/Card';
import Pagination from 'react-bootstrap/Pagination';
import ProductCard from '../productCard/productCard';

const Catalogue = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [showPromotions, setShowPromotions] = useState(false);
  const [categories, setCategories] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [previousPage, setPreviousPage] = useState(null);
  const [nextPage, setNextPage] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('https://mercadonastudi-c95dd55a3900.herokuapp.com/api/categories/');
        setCategories(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let apiUrl = 'https://mercadonastudi-c95dd55a3900.herokuapp.com/api/products/';
        const params = {};
    
        if (selectedCategory !== '') {
          params.category = selectedCategory;
        }
        params.page = page;
    
        const response = await axios.get(apiUrl, { params });
        let fetchedProducts = response.data.results;

        setProducts(response.data.results);

        setPreviousPage(response.data.previous);
        setNextPage(response.data.next);

        // Débogage de la pagination
        console.log('Page actuelle:', page);
        console.log('Nombre total de pages:', response.data.total_pages);

        setTotalPages(response.data.total_pages);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, [selectedCategory, showPromotions, page]);

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  return (
    <div className="container catalogue-container">
    <div className="filter-section">
        <div className="filter-item">
            <label>Filtrer par catégorie:</label>
            <select
                className="select-category"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
            >
                <option value="">Toutes les catégories</option>
                {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                        {category.label}
                    </option>
                ))}
            </select>
        </div>
    </div>
    <div className="products-section">
      {products.map((product) => (
          <ProductCard key={product.id} product={product} />
      ))}
    </div>
    <div className="pagination-section">
        <Pagination>
            {previousPage && (
                <Pagination.Prev onClick={() => handlePageChange(previousPage.split('=')[1])} />
            )}
            {nextPage && (
                <Pagination.Next onClick={() => handlePageChange(nextPage.split('=')[1])} />
            )}
        </Pagination>
    </div>
  </div>
  );
};

export default Catalogue;


  