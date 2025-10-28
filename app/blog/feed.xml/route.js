import RSS from "rss";
import { getBlogs } from '../feeder.js';
import { metadata } from "../../layout";
import { getHackathons } from "@/app/hackathons/feeder.js";


// Export the route handler
export async function GET() {
    const feed = new RSS({
        title: metadata.title,
        description: metadata.description,
        site_url: metadata.url,
        feed_url: `${metadata.url}/blog/feed.xml`,
        pubDate: new Date(),
    });

    const allPosts = await getBlogs()

    allPosts.forEach(post => {
        feed.item({
            title : post.frontmatter.title,
            guid : `${metadata.url}/blog/${post.slug}`,
            url : `${metadata.url}/blog/${post.slug}`,
            date : post.frontmatter.publishDate,
            custom_elements : [
                {'summary' :post.frontmatter.summary },
                {'author' : "yoshixi" },

            ]
        })
    })
    
    const allHackathons = await getHackathons()
    allHackathons.forEach(post => {
        feed.item({
            title : post.frontmatter.title,
            guid : `${metadata.url}/hackathons/${post.slug}`,
            url : `${metadata.url}/hackathons/${post.slug}`,
            date : post.frontmatter.publishDate,
            custom_elements : [
                {'summary' :post.frontmatter.title + " Devlog" },
                {'author' : "yoshixi" },
            ]
        })
    })

    return new Response(feed.xml(), {
        headers: {
            'Content-Type': 'application/atom+xml; charset=utf-8',
        },
    });
}