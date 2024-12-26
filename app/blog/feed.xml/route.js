import RSS from "rss";

import { metadata } from "../../layout";


// Export the route handler
export async function GET() {
    const feed = new RSS({
        title: metadata.title,
        description: metadata.description,
        site_url: metadata.url,
        feed_url: `${metadata.url}/blog/feed.xml`,
        pubDate: new Date(),
    });

//    const allPosts = await getAllPosts()
//
//    allPosts.forEach(post => {
//        feed.item({
//            title : post.title,
//            guid : `${metadata.url}/blog/${post.uri}`,
//            url : `${metadata.url}/blog/${post.uri}`,
//            date : post.date
//        })
//    })

    return new Response(feed.xml(), {
        headers: {
            'Content-Type': 'application/atom+xml; charset=utf-8',
        },
    });
}