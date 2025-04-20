export const loadPosts = () => {
    const posts = [];
    const postFiles = require.context('../../content/posts', true, /\.md$/);

    postFiles.keys().forEach((filePath) => {
        const postContent = postFiles(filePath);
        const { metadata } = postContent; // Assuming the markdown loader extracts metadata

        posts.push({
            id: metadata.id,
            title: metadata.title,
            categorySlug: metadata.categorySlug,
            publishedDate: metadata.publishedDate,
            content: postContent.default, // Assuming the default export is the content
        });
    });

    return posts;
};