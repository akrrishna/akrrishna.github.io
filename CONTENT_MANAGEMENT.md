# Portfolio Content Management Guide

This guide explains how to add, edit, delete, and manage the projects and blog posts displayed on your portfolio website.

## The Central Data File: `src/lib/data.ts`

All content for your portfolio is managed from a single file: `src/lib/data.ts`. This file contains two main exported arrays:

1.  `projects`: An array of project objects.
2.  `blogPosts`: An array of blog post objects.

To change any content on your website, you will only need to edit this file. The website will automatically update to reflect the changes.

---

## How Projects and Blogs are Displayed

*   **Homepage (`/`)**: Shows a *featured* selection of content. It displays any project or blog post that has the `featured: true` property.
*   **Projects Page (`/projects`)**: Displays *all* projects from the `projects` array in `data.ts`.
*   **Blogs Page (`/blogs`)**: Displays *all* blog posts from the `blogPosts` array in `data.ts`.
*   **Individual Blog Post (`/blogs/:id`)**: Displays the content of a single blog post by matching its unique `id`.

---

## Managing Your Projects

To manage your projects, open `src/lib/data.ts` and find the `projects` array.

### How to Add a New Project

1.  Copy an existing project object (from `{` to `}`).
2.  Paste it as a new item in the `projects` array.
3.  **Crucially, give it a new unique `id`**. The simplest way is to increment the last project's `id`.
4.  Change the other properties (`title`, `description`, `tech`, etc.) to match your new project.
5.  Save the file.

```javascript
// Example of adding a new project
export const projects = [
  // ... existing projects
  {
    id: 3, // The previous project was id: 2
    title: "My New Awesome Project",
    description: "A description of my new project.",
    tech: ["React", "Next.js", "Firebase"],
    status: "Live",
    link: "#",
    image: "/placeholder.svg",
    featured: false, // Set to true to show on the homepage
  },
];
```

### How to Edit a Project

1.  Find the project you want to edit in the `projects` array by its `id` or `title`.
2.  Change the values of its properties (`title`, `description`, etc.).
3.  Save the file.

### How to Delete a Project

1.  Find the project you want to delete in the `projects` array.
2.  Delete the entire object, from its opening `{` to its closing `}`.
3.  Save the file.

### How to Feature a Project on the Homepage

To make a project appear in the "Featured Projects" section on your homepage, simply set its `featured` property to `true`.

```javascript
// This project will appear on the homepage
{
  id: 1,
  title: "EduTech Learning Platform",
  // ... other properties
  featured: true, // This makes it featured
},

// This project will NOT appear on the homepage
{
  id: 3,
  title: "Portfolio Website",
  // ... other properties
  featured: false, // This keeps it off the featured list
},
```

---

## Managing Your Blog Posts

Managing blog posts follows the exact same process as managing projects, but you will be editing the `blogPosts` array in `src/lib/data.ts`.

### How to Add a New Blog Post

1.  Copy an existing blog post object in the `blogPosts` array.
2.  Paste it as a new item.
3.  **Give it a new unique `id`**.
4.  Change the `title`, `excerpt`, `date`, `category`, etc.
5.  Write your blog content inside the `content` property using HTML tags (e.g., `<h2>` for headings, `<p>` for paragraphs).
6.  Save the file.

### How to Edit, Delete, or Feature a Blog Post

The process is identical to managing projects. Find the blog post you want to modify in the `blogPosts` array and either change its properties, delete the object entirely, or set `featured: true` to have it appear on the homepage. 