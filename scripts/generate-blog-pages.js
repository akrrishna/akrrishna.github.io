import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read the base HTML template
const baseHtmlPath = path.join(__dirname, '../dist/index.html');
const baseHtml = fs.readFileSync(baseHtmlPath, 'utf-8');

// Read all MDX files from content/posts
const postsDir = path.join(__dirname, '../src/content/posts');
const postFiles = fs.readdirSync(postsDir).filter(file => file.endsWith('.mdx'));

// Function to extract frontmatter from MDX file
function extractFrontmatter(content) {
  const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
  if (!frontmatterMatch) return {};
  
  const frontmatter = {};
  const lines = frontmatterMatch[1].split('\n');
  
  for (const line of lines) {
    if (line.includes(':')) {
      const [key, ...valueParts] = line.split(':');
      let value = valueParts.join(':').trim();
      
      // Remove quotes if present
      if (value.startsWith('"') && value.endsWith('"')) {
        value = value.slice(1, -1);
      }
      
      frontmatter[key.trim()] = value;
    }
  }
  
  return frontmatter;
}

// Function to generate HTML for a blog post
function generateBlogHtml(slug, frontmatter) {
  const title = frontmatter.title || 'Untitled';
  const description = frontmatter.excerpt || 'Blog post by Krishna Neupane';
  const url = `https://npkrishna.com/blogs/${slug}`;
  const image = `https://npkrishna.com/images/og-site.png`;
  
  return baseHtml
    .replace('<title>Krishna Neupane • Portfolio Website</title>', 
             `<title>${title} | Krishna Neupane</title>`)
    .replace('<meta name="description" content="Teacher, Web Developer, and Content Writer - Building meaningful digital experiences and sharing knowledge." />', 
             `<meta name="description" content="${description}" />`)
    .replace('<meta property="og:title" content="Krishna Neupane • Portfolio Website" />', 
             `<meta property="og:title" content="${title}" />`)
    .replace('<meta property="og:description" content="Teacher, Web Developer, and Content Writer - Building meaningful digital experiences and sharing knowledge." />', 
             `<meta property="og:description" content="${description}" />`)
    .replace('<meta property="og:type" content="website" />', 
             `<meta property="og:type" content="article" />`)
    .replace('<meta property="og:image" content="https://npkrishna.com/images/og-site.png" />', 
             `<meta property="og:image" content="${image}" />
    <meta property="og:url" content="${url}" />
    <meta property="article:author" content="Krishna Neupane" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${title}" />
    <meta name="twitter:description" content="${description}" />
    <meta name="twitter:image" content="${image}" />`);
}

// Create blogs directory in dist if it doesn't exist
const blogsDir = path.join(__dirname, '../dist/blogs');
if (!fs.existsSync(blogsDir)) {
  fs.mkdirSync(blogsDir, { recursive: true });
}

// Generate HTML file for each blog post
postFiles.forEach(file => {
  const slug = file.replace('.mdx', '');
  const filePath = path.join(postsDir, file);
  const content = fs.readFileSync(filePath, 'utf-8');
  const frontmatter = extractFrontmatter(content);
  
  const html = generateBlogHtml(slug, frontmatter);
  
  // Create directory for the blog post
  const blogDir = path.join(blogsDir, slug);
  if (!fs.existsSync(blogDir)) {
    fs.mkdirSync(blogDir, { recursive: true });
  }
  
  // Write the HTML file
  fs.writeFileSync(path.join(blogDir, 'index.html'), html);
  
  console.log(`Generated: /blogs/${slug}/index.html`);
});

console.log(`✅ Generated ${postFiles.length} blog page(s)`);