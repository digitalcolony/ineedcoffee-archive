export const getUniqueCategorySlugs = (posts) => {
    const categorySlugs = posts.map(post => post.categorySlug);
    return [...new Set(categorySlugs)];
};