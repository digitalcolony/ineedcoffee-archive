import fs from "fs";
import path from "path";

// Define paths
const contentPostsPath = path.join(process.cwd(), "src", "content", "posts");
const publicImagesPath = path.join(process.cwd(), "public", "images", "posts");

// Ensure the target directory exists
function ensureDirectoryExists(directory) {
	if (!fs.existsSync(directory)) {
		fs.mkdirSync(directory, { recursive: true });
	}
}

// Copy a file
function copyFile(source, destination) {
	ensureDirectoryExists(path.dirname(destination));
	fs.copyFileSync(source, destination);
	console.log(`Copied: ${source} -> ${destination}`);
}

// Copy image files from content posts to public folder
function copyPostImages() {
	console.log("Starting to copy post images to public folder...");

	// Ensure the public images posts directory exists
	ensureDirectoryExists(publicImagesPath);

	try {
		// Get all post directories
		const postDirs = fs
			.readdirSync(contentPostsPath, { withFileTypes: true })
			.filter((dirent) => dirent.isDirectory())
			.map((dirent) => dirent.name);

		let totalImagesCopied = 0;

		// Process each post directory
		for (const postDir of postDirs) {
			const postPath = path.join(contentPostsPath, postDir);
			const targetPath = path.join(publicImagesPath, postDir);

			// Check if the post directory exists
			if (fs.existsSync(postPath)) {
				// Get all files in the post directory
				const files = fs
					.readdirSync(postPath, { withFileTypes: true })
					.filter((file) => file.isFile())
					.map((file) => file.name);

				// Copy image files
				for (const file of files) {
					// Common image extensions
					if (/\.(jpg|jpeg|png|gif|webp|avif|svg)$/i.test(file)) {
						const sourcePath = path.join(postPath, file);
						const destPath = path.join(targetPath, file);
						copyFile(sourcePath, destPath);
						totalImagesCopied++;
					}
				}
			}
		}

		console.log(`Finished copying images. Total images copied: ${totalImagesCopied}`);
	} catch (error) {
		console.error("Error copying post images:", error);
	}
}

// Execute the function
copyPostImages();
