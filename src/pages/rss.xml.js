import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const blog = await getCollection('blog', ({ data }) => {
    return !data.draft;
  });
  
  return rss({
    title: 'AlgoDrift Blog',
    description: 'Stay updated with the latest in technology, AI, development tools, and programming tutorials.',
    site: context.site,
    items: blog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/blog/${post.slug}/`,
      categories: post.data.categories,
    })),
    customData: `<language>en-us</language>`,
  });
}