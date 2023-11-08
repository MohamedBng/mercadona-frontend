import React from 'react';
import Card from 'react-bootstrap/Card';
import './productCard.css';

const ProductCard = ({ product }) => {
    const activePromotion = product.active_promotion;

    return (
        <div className="product-col">
            <Card className="product-card">
                <Card.Img
                    variant="top"
                    src={`images/${product.image.split('/').pop()}`}
                    alt={product.label}
                    className="product-img"
                />
                <Card.Body>
                    <Card.Title>{product.label}</Card.Title>
                    <Card.Text className="price-section">
                        {activePromotion ? (
                            <>
                                <span className="discounted-price">
                                    {((product.price * (100 - activePromotion.discount_percentage)) / 100).toFixed(2)} {product.price_currency}
                                </span>
                                <span className="original-price">
                                    {product.price} {product.price_currency}
                                </span>
                            </>
                        ) : (
                            <span>{product.price} {product.price_currency}</span>
                        )}
                    </Card.Text>
                    <Card.Text className="product-description">{product.description}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ProductCard;
