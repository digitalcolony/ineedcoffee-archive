import fs from "fs";
import path from "path";

// File to fix
const llmsPath = path.join(process.cwd(), "public", "llms.txt");

function fixLinks(content) {
	// Replace markdown links like ](foo.md) or ](by/foo.md) with ](/md/foo.md) or ](/md/by/foo.md)
	// Ignore absolute http(s) links and already-correct /md/ links
	return content.replace(/\]\(([^)]+)\)/g, (match, p1) => {
		const target = p1.trim();
		if (/^https?:\/\//i.test(target)) return match; // leave external links
		if (target.startsWith("/md/")) return match; // already correct
		if (target.startsWith("/")) {
			// Absolute path from root; prefix /md if it doesn't already
			return "](/md" + target + ")";
		}
		// Relative path — make it absolute under /md/
		return "](/md/" + target.replace(/^\.\//, "") + ")";
	});
}

try {
	const original = fs.readFileSync(llmsPath, "utf8");
	const fixed = fixLinks(original);
	if (fixed !== original) {
		fs.writeFileSync(llmsPath, fixed, "utf8");
		console.log("Updated public/llms.txt: prefixed link targets with /md/");
	} else {
		console.log("No changes needed in public/llms.txt");
	}
} catch (err) {
	console.error("Failed to process public/llms.txt:", err.message);
	process.exit(1);
}
