// Auto-discover all MDX files in the content/posts directory
const posts = import.meta.glob('../content/posts/*.mdx', { eager: true })

export interface BlogPost {
  slug: string
  title: string
  date: string
  excerpt: string
  category: string
  featured: boolean
  readTime: string
  content: React.ComponentType // The MDX component
}

interface MDXModule {
  frontmatter?: {
    title?: string
    date?: string
    excerpt?: string
    category?: string
    featured?: boolean
    readTime?: string
  }
  default: React.ComponentType
}

// Process all discovered MDX files
export const allPosts: BlogPost[] = Object.entries(posts).map(([path, post]: [string, MDXModule]) => {
  const slug = path.replace('../content/posts/', '').replace('.mdx', '')
  return {
    slug,
    title: post.frontmatter?.title || 'Untitled',
    date: post.frontmatter?.date || '',
    excerpt: post.frontmatter?.excerpt || '',
    category: post.frontmatter?.category || 'General',
    featured: post.frontmatter?.featured || false,
    readTime: post.frontmatter?.readTime || '5 min read',
    content: post.default // The actual MDX component
  }
}).sort((a, b) => {
  const dateA = new Date(a.date).getTime()
  const dateB = new Date(b.date).getTime()
  return dateB - dateA
})

// Filter for featured posts
export const featuredPosts = allPosts.filter(post => post.featured)

// Get a single post by slug
export const getPostBySlug = (slug: string): BlogPost | undefined => {
  return allPosts.find(post => post.slug === slug)
} 