'use server';

import type { Article } from './types/article';

const INOREADER_USER_ID = process.env.INOREADER_USER_ID;
const INOREADER_TAG = 'HOTBOX-ACTIVE';
const INOREADER_API_URL = `https://www.inoreader.com/stream/user/${INOREADER_USER_ID}/tag/${INOREADER_TAG}/view/json`;

export async function getInoreaderArticles(
  fallbackArticles: Article[] = []
): Promise<Article[]> {
  const params = new URLSearchParams({ n: '9' });

  try {
    const res = await fetch(`${INOREADER_API_URL}?${params}`, {
      method: 'GET',
      // No headers needed for public endpoint
    });
    if (!res.ok) throw new Error('Failed to fetch articles');
    const data = await res.json();

    // Map and filter the articles to the desired shape
    const articles: Article[] = (data.items || []).map((item: Article) => {
      // Extract base URL for favicon
      let favicon = '';
      try {
        const urlObj = new URL(item.url);
        favicon = `https://www.google.com/s2/favicons?domain=${urlObj.hostname}&sz=32`;
      } catch {
        favicon = '';
      }

      return {
        title: item.title,
        url: item.url,
        date_published: item.date_published,
        content_html: item.content_html,
        tags: (item.tags ?? []).filter(
          (tag: string) =>
            tag.toLowerCase() !== 'hotbox-active' &&
            tag.toLowerCase() !== 'hotbox-inactive'
        ),
        favicon,
      };
    });

    return articles;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (err) {
    return fallbackArticles;
  }
}
