import { JSDOM } from 'jsdom';

export function formatDateToLong(dateStr: string): string {
  const date = new Date(dateStr);
  // Options for toLocaleDateString: Month (long), Day (numeric), Year (numeric)
  return date.toLocaleString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });
}

export function extractPreview(content_html: string): string {
  // Parse HTML and extract text
  const dom = new JSDOM(`<body>${content_html}</body>`);
  const body = dom.window.document.body;

  // Remove images, links, scripts, etc.
  body
    .querySelectorAll('img, a, script, style, figure, table, iframe')
    .forEach(el => el.remove());

  // Get the text content
  const text = body.textContent?.replace(/\s+/g, ' ').trim() || '';

  // Split into sentences
  const sentences = text.split(/(?<=[.!?])\s+/);

  for (const sentence of sentences) {
    if (
      sentence.replace(/\s/g, '').length > 20 &&
      !/published online|doi|copyright|all rights reserved|©|received:|accepted:|journal|license|editor|supplementary|affiliation|volume|issue|pp\./i.test(
        sentence
      )
    ) {
      return sentence;
    }
  }

  // Final fallback: first non-empty sentence or first 100 chars
  return sentences.find(s => s.length > 0) || text.slice(0, 100) || '';
}
