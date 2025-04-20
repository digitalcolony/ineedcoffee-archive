# Category Pages Generator

This project is designed to dynamically generate category pages for a blog or content website. Each category page will display a list of posts that belong to that specific category, enhancing the user experience by allowing easy navigation through different topics.

## Project Structure

The project is organized as follows:

```
category-pages-generator
├── src
│   ├── components
│   │   ├── CategoryHeader.jsx       # Displays the header for the category page
│   │   ├── CategoryPostList.jsx     # Renders a list of posts for the category
│   │   └── PostCard.jsx             # Displays details of a single post
│   ├── layouts
│   │   └── CategoryLayout.jsx       # Wraps category page content with layout structure
│   ├── pages
│   │   └── section
│   │       └── [categorySlug].jsx   # Dynamically generates category pages
│   ├── utils
│   │   ├── categoryUtils.js         # Utility functions for handling categories
│   │   └── contentLoader.js         # Loads posts from the content directory
│   └── config.js                    # Configuration settings for the project
├── public
│   └── styles
│       └── category-pages.css       # CSS styles specific to category pages
├── content
│   └── posts
│       └── example-post
│           └── index.md             # Markdown content for an example post
├── package.json                     # npm configuration file
├── .gitignore                       # Specifies files to ignore by Git
└── README.md                        # Documentation for the project
```

## Features

- **Dynamic Category Pages**: Automatically generates a page for each unique category slug found in the posts.
- **Reusable Components**: Utilizes React components for headers, post lists, and individual post cards to maintain a clean and modular codebase.
- **Utility Functions**: Includes utility functions to manage categories and load content efficiently.

## Getting Started

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd category-pages-generator
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm start
   ```

5. Open your browser and navigate to `http://localhost:3000/section/{categorySlug}` to view the category pages.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.