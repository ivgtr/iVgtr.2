import type { NextApiHandler } from "next";
import { XMLParser } from "fast-xml-parser";

const rssList = [
  {
    siteName: "Around Flower",
    category: "はてなブログ",
    url: "https://ivgtr.hatenablog.jp/rss",
  },
  {
    siteName: "Qita",
    category: "Qiita",
    url: "https://qiita.com/ivgtr/feed",
  },
];

const getRssJson: NextApiHandler = async (_, res) => {
  try {
    const parser = new XMLParser();
    const rss: { title: string; url: string; pubDate: Date; category: string }[] = [];
    await Promise.all(
      rssList.map(async (rssItem) => {
        const response = await fetch(rssItem.url, {
          method: "GET",
          headers: {
            "Content-Type": "application/xml",
          },
        });
        const data = await response.text();
        const items = parser.parse(data);

        if (rssItem.category === "はてなブログ") {
          items.rss.channel.item.forEach((item: { title: string; link: string; pubDate: Date }) => {
            rss.push({
              category: rssItem.category,
              title: item.title,
              url: item.link,
              pubDate: new Date(item.pubDate),
            });
          });
        } else if (rssItem.category === "Qiita") {
          items.feed.entry.forEach((item: { title: string; url: string; published: Date }) => {
            rss.push({
              category: rssItem.category,
              title: item.title,
              url: item.url,
              pubDate: new Date(item.published),
            });
          });
        }
      })
    );
    const sortedRss = rss.sort((a, b) => b.pubDate.getTime() - a.pubDate.getTime());

    res.status(200).json({ rss: sortedRss });
  } catch (e) {
    console.error(e);
    res.status(500);
    res.end();
  }
};

export default getRssJson;
