import React from 'react';
import CategoryHeader from '../components/CategoryHeader';
import CategoryPostList from '../components/CategoryPostList';

const CategoryLayout = ({ category, posts }) => {
    return (
        <div className="category-layout">
            <CategoryHeader title={category.title} />
            <CategoryPostList posts={posts} />
        </div>
    );
};

export default CategoryLayout;