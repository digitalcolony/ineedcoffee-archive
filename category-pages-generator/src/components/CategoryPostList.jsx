import React from 'react';
import PostCard from './PostCard';

const CategoryPostList = ({ posts }) => {
    return (
        <div className="category-post-list">
            {posts.map(post => (
                <PostCard key={post.id} post={post} />
            ))}
        </div>
    );
};

export default CategoryPostList;