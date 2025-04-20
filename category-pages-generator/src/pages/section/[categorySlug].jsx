import React from 'react';
import { useRouter } from 'next/router';
import CategoryLayout from '../../layouts/CategoryLayout';
import CategoryHeader from '../../components/CategoryHeader';
import CategoryPostList from '../../components/CategoryPostList';
import { loadPosts } from '../../utils/contentLoader';
import { getUniqueCategorySlugs } from '../../utils/categoryUtils';

const CategoryPage = ({ posts, categorySlug }) => {
    return (
        <CategoryLayout>
            <CategoryHeader title={categorySlug} />
            <CategoryPostList posts={posts} />
        </CategoryLayout>
    );
};

export async function getStaticPaths() {
    const posts = await loadPosts();
    const categorySlugs = getUniqueCategorySlugs(posts);

    const paths = categorySlugs.map(slug => ({
        params: { categorySlug: slug }
    }));

    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const posts = await loadPosts();
    const filteredPosts = posts.filter(post => post.categorySlug === params.categorySlug);

    return {
        props: {
            posts: filteredPosts,
            categorySlug: params.categorySlug
        }
    };
}

export default CategoryPage;