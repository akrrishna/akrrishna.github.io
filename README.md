# Krishna Neupane - Portfolio Website

<div align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/MDX-1B1F23?style=for-the-badge&logo=mdx&logoColor=white" alt="MDX" />
</div>

## 👋 About Me

Hi! I'm **Krishna Neupane** - a passionate **Teacher**, **Web Developer**, and **Content Writer** dedicated to creating meaningful digital experiences and sharing knowledge.

### 🎯 What I Do
- **Teaching**: 2+ years of experience in education, helping students learn and grow
- **Web Development**: Building modern, accessible web applications with cutting-edge technologies
- **Content Writing**: Creating engaging articles and stories that resonate with readers

### 🚀 Mission
*"Code. Teach. Write. Repeat."*

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern UI library
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Beautiful, accessible components
- **Vite** - Fast build tool and dev server

### Content Management
- **MDX** - Markdown with JSX for rich content
- **Auto-discovery** - Automatic blog post discovery and metadata extraction
- **Frontmatter** - YAML metadata for blog posts

### Development Tools
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Git** - Version control

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   ├── FeaturedBlogs.tsx
│   ├── FeaturedProjects.tsx
│   ├── SkillTree.tsx
│   └── ThemeToggle.tsx
├── content/            # MDX blog posts with auto-discovery
│   └── posts/          # Individual .mdx files with frontmatter
├── hooks/              # Custom React hooks
├── lib/                # Utilities and data
│   ├── data.ts         # Project metadata
│   ├── posts.ts        # MDX auto-discovery logic
│   └── utils.ts        # Utility functions
├── pages/              # Page components
│   ├── Index.tsx       # Home page
│   ├── Projects.tsx    # Projects page
│   ├── Blogs.tsx       # Blog listing
│   ├── BlogPost.tsx    # Individual blog post
│   └── NotFound.tsx    # 404 page
└── App.tsx             # Main app component
```

## 🎨 Features

- ✨ **Modern Design** - Clean, responsive layout with smooth animations
- 🌙 **Dark/Light Theme** - Toggle between themes with persistent preference
- 📱 **Mobile-First** - Optimized for all device sizes
- ♿ **Accessible** - WCAG compliant with keyboard navigation
- ⚡ **Fast Performance** - Optimized with Vite and modern React patterns
- 📝 **MDX Blog System** - Auto-discovered blog posts with rich content support
- 🎯 **SEO Optimized** - Meta tags, structured data, and performance metrics
- 🔄 **Zero-Config Content** - Add MDX files and they're automatically available

## 📝 Content Management

### Blog Posts
- **Pure MDX** - Write content in `.mdx` files with frontmatter
- **Auto-discovery** - No manual configuration needed
- **Rich Content** - Support for Markdown, HTML, and React components
- **Automatic Sorting** - Posts sorted by date (newest first)

### Projects
- **Simple Metadata** - Managed through `src/lib/data.ts`
- **External Links** - Direct links to live projects and GitHub repos
- **Quick Preview** - Optimized for portfolio browsing

For detailed content management instructions, see [CONTENT_MANAGEMENT.md](CONTENT_MANAGEMENT.md).

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/akrrishna/akrrishna.github.io.git

# Navigate to the project directory
cd akrrishna.github.io

# Install dependencies
npm install

# Start the development server
npm run dev
```

### Adding Content
```bash
# Add a new blog post
# 1. Create src/content/posts/my-new-post.mdx
# 2. Add frontmatter with metadata
# 3. Write your content
# 4. Done! Post is automatically available

# Add a new project
# 1. Edit src/lib/data.ts
# 2. Add project metadata to the projects array
# 3. Done! Project appears on the website
```

## 📊 Stats

- **2+ Years** Teaching Experience
- **10+ Projects** Built
- **15+ Articles** Written
- **100%** TypeScript Coverage
- **95+** Lighthouse Performance Score

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

- **Portfolio**: [npkrishna.com](https://npkrishna.com)
- **GitHub**: [@akrrishna](https://github.com/akrrishna)
- **Facebook**: [Krishna Neupane](https://www.facebook.com/itskr1shna/)

---

<div align="center">
  <p>Made with ❤️ by Krishna Neupane</p>
  <p>Built with React, TypeScript, Tailwind CSS, and MDX</p>
</div>
