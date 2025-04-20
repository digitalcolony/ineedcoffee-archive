import React from 'react';

const CategoryHeader = ({ title }) => {
    return (
        <header className="category-header">
            <h1>{title}</h1>
        </header>
    );
};

export default CategoryHeader;