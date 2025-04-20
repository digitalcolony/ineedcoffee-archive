import React from 'react';
import { Link } from 'react-router-dom';

const PostCard = ({ post }) => {
    return (
        <div className="post-card">
            <h2 className="post-title">
                <Link to={`/posts/${post.id}`}>{post.title}</Link>
            </h2>
            <p className="post-excerpt">{post.excerpt}</p>
            <Link className="read-more" to={`/posts/${post.id}`}>
                Read More
            </Link>
        </div>
    );
};

export default PostCard;