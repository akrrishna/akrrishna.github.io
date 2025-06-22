# Portfolio Content Management Guide

This guide explains how to add, edit, delete, and manage the projects and blog posts displayed on your portfolio website.

## Content Management Overview

Your portfolio uses a **hybrid content management system**:

1. **Projects**: Managed entirely through `src/lib/data.ts`
2. **Blog Posts**: Pure MDX files with auto-discovery in `src/content/posts/`

---

## Managing Your Projects

Projects are managed entirely through the `src/lib/data.ts` file.

### How to Add a New Project

1. Open `src/lib/data.ts` and find the `projects` array
2. Copy an existing project object and paste it as a new item
3. **Give it a new unique `id`** (increment the last project's id)
4. Update all properties to match your new project
5. Save the file

```javascript
// Example of adding a new project
export const projects = [
  // ... existing projects
  {
    id: 4, // Increment from the previous project
    title: "My New Awesome Project",
    description: "A description of my new project.",
    tech: ["React", "Next.js", "Firebase"],
    status: "Live",
    link: "#",
    image: "/placeholder.svg",
    featured: false, // Set to true to show on homepage
  },
];
```

### How to Edit or Delete a Project

- **Edit**: Find the project by `id` and change its properties
- **Delete**: Remove the entire object from the `projects` array
- **Feature**: Set `featured: true` to show on the homepage

---

## Managing Your Blog Posts

Blog posts use **pure MDX auto-discovery** - just create MDX files and they're automatically available!

### How to Add a New Blog Post

1. Create a new `.mdx` file in `src/content/posts/` directory
2. Use a descriptive filename (e.g., `my-new-blog-post.mdx`)
3. Add frontmatter at the top with all required metadata:

```mdx
---
title: "Your Blog Post Title"
date: "Jan 15, 2025"
excerpt: "A brief description of your blog post that will appear in previews."
category: "Technology"
featured: true
readTime: "5 min read"
---

## Your First Heading
<p>Your blog content goes here. You can use standard markdown syntax and HTML tags.</p>

### Subheading
<p>More content with paragraphs, lists, code blocks, etc.</p>

<p>You can include HTML elements like <code>&lt;code&gt;</code> tags for inline code.</p>
```

**That's it!** The system automatically:
- Discovers your new MDX file
- Extracts metadata from frontmatter
- Makes it available on the blog pages
- Sorts posts by date (newest first)

### How to Edit a Blog Post

Simply edit the `.mdx` file directly. You can modify:
- Frontmatter metadata (title, date, category, etc.)
- Blog content
- Both will be automatically reflected on the website

### How to Delete a Blog Post

Delete the `.mdx` file from `src/content/posts/`. The post will automatically disappear from the website.

### How to Feature a Blog Post

Set `featured: true` in the frontmatter of your MDX file. Featured posts will appear on the homepage.

---

## MDX Content Guidelines

### Required Frontmatter Fields
```yaml
---
title: "Your Blog Post Title"        # Required
date: "Jan 15, 2025"                # Required (YYYY-MM-DD or readable format)
excerpt: "Brief description"         # Required
category: "Technology"              # Required
featured: true/false                # Required
readTime: "5 min read"              # Required
---
```

### Supported Features
- **Markdown**: All standard markdown syntax
- **HTML**: Direct HTML tags for enhanced formatting
- **Frontmatter**: YAML metadata at the top of each file
- **Code Blocks**: Syntax highlighting for code snippets
- **Images**: Standard markdown image syntax

### Best Practices
- Use descriptive filenames (they become the URL slug)
- Keep frontmatter metadata complete and accurate
- Use semantic HTML elements for better accessibility
- Include proper heading hierarchy (h2, h3, h4)
- Add alt text for images

### Example MDX Structure

```mdx
---
title: "Your Blog Post Title"
date: "Jan 15, 2025"
excerpt: "Brief description for previews and SEO."
category: "Technology"
featured: true
readTime: "5 min read"
---

## Main Heading
<p>Introduction paragraph with your main content.</p>

### Subheading
<p>Supporting content with examples and explanations.</p>

<p>You can include <code>inline code</code> and <strong>bold text</strong>.</p>

## Another Section
<p>More content sections as needed.</p>
```

---

## Content Display Rules

- **Homepage (`/`)**: Shows projects and blog posts with `featured: true`
- **Projects Page (`/projects`)**: Shows all projects from `data.ts`
- **Blogs Page (`/blogs`)**: Shows all blog posts from `src/content/posts/`
- **Individual Blog Post (`/blogs/:slug`)**: Renders the corresponding MDX file

---

## Auto-Discovery Benefits

### Zero Configuration
- Add a new `.mdx` file → it's automatically available
- No need to update imports or data files
- No manual slug management

### Automatic Features
- **Sorting**: Posts automatically sorted by date (newest first)
- **Filtering**: Featured posts automatically filtered for homepage
- **Slug Generation**: URL slugs automatically generated from filenames
- **Metadata Extraction**: All metadata automatically extracted from frontmatter

### Single Source of Truth
- Only MDX files exist - no separate data files
- All content and metadata in one place
- No synchronization issues

---

## Troubleshooting

### Common Issues
1. **Blog post not appearing**: Check that the MDX file is in `src/content/posts/`
2. **Missing metadata**: Ensure all required frontmatter fields are present
3. **Styling issues**: Check that your MDX content follows the prose styling guidelines

### File Structure Reference
```
src/
├── content/
│   └── posts/
│       ├── accessible-web-experiences.mdx
│       ├── art-of-teaching.mdx
│       ├── balancing-passions.mdx
│       └── power-of-storytelling.mdx
├── lib/
│   ├── data.ts (projects only)
│   └── posts.ts (auto-discovery logic)
└── pages/
    └── BlogPost.tsx (renders MDX content)
```

### Adding a New Blog Post Checklist
- [ ] Create `.mdx` file in `src/content/posts/`
- [ ] Add all required frontmatter fields
- [ ] Write your blog content
- [ ] Test the post appears on `/blogs` page
- [ ] Test the individual post page works
- [ ] Set `featured: true` if you want it on homepage 