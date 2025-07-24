import UnderlineLink from '@/components/UnderlineLink';
import Head from 'next/head';
// import PartyCounter from '@/components/PartyCounter';
import Footer from '@/components/Footer';
import Link from 'next/link';
import FireBanner from '@/components/FireBanner';
import { Gradient } from '@/components/Gradient';
import { getInoreaderArticles } from '../../inoreader/queries';
import { extractPreview, formatDateToLong } from '@/lib/helpers';
// import ReactionCounter from '@/components/ReactionCounter';

// const paragraph =
//   "[ai generated] summary of today's curated content ai generated summary of today's curated content ai generated summary of today's curated content ai generated summary of today's curated content ai generated summary of today's curated content";
// const words = paragraph.split(' ');

async function NewsGrid() {
  const articles = await getInoreaderArticles();

  return (
    <div className="py-4 my-4 sm:py-4">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative mx-auto p-6 rounded-tl-3xl shadow-xl rounded-br-3xl text-[var(--color-primary-text)] border-2 bg-[var(--color-secondary-bg)] border-[var(--color-border)] grid max-w-2xl grid-cols-1 gap-x-12 gap-y-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <div
            className="pointer-events-none absolute bottom-0 top-0 left-0 right-0 opacity-30"
            style={{
              backgroundImage: 'url("/svg/noise.svg")',
              backgroundRepeat: 'repeat',
              backgroundSize: '182px 182px',
            }}
            aria-hidden="true"
          />
          {articles.map(article => (
            <article
              key={article.url}
              className="group flex flex-col items-start justify-between">
              <div className="max-w-xl">
                <div className="mt-2 flex items-center gap-x-4 text-xs">
                  <p
                    // dateTime={article.date_published}
                    className="text-[var(--color-secondary-text)]">
                    {formatDateToLong(article.date_published)}
                  </p>
                  <div className="relative z-10 border-1 rounded-md group-hover:shadow-sm lg:group-hover:bg-[var(--color-accent-1)] bg-[var(--color-accent-1)] lg:bg-[var(--color-secondary-bg)] shadow-md px-2 py-1 font-medium text-[var(--color-secondary-text)]">
                    {article.tags && article.tags.length > 0
                      ? article.tags[0]
                      : 'Misc'}
                  </div>
                </div>
                <div className="relative">
                  <h3 className="mt-1 flex text-lg/6 font-semibold text-[var(--color-primary-text)] items-center gap-2 lg:grayscale group-hover:grayscale-0 group-focus:grayscale-0">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      alt="article link favicon"
                      src={article.favicon}
                      className="size-6"
                    />
                    <UnderlineLink href={article.url}>
                      <span className="absolute inset-0 hover:cursor-newtab" />
                      {article.title}
                    </UnderlineLink>
                  </h3>
                </div>
                <p className="mt-2 line-clamp-3 text-sm/6 text-[var(--color-secondary-text)]">
                  {extractPreview(article.content_html)}
                </p>
                {/* <ReactionCounter /> */}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="cursor-fire relative py-5 rounded-4xl overflow-hidden font-outfit">
      <Head>
        <title>Hi</title>
      </Head>
      <section>
        <div className="mx-auto max-w-2xl text-center min-w-full">
          <div className="flex items-center justify-center gap-2">
            <h2 className="hover:text-[var(--color-accent-1)] text-4xl mt-3 font-semibold tracking-widest text-[var(--color-secondary-bg)] text-shadow-[4px_4px_0px_rgba(22,23,20,1)] font-chewy text-balance sm:text-5xl">
              [ hotbox ]{' '}
            </h2>
          </div>
          <p className="mt-2 text-shadow-[1px_1px_0px_rgba(22,23,20,1)] font-bold text-sm text-[var(--color-secondary-bg)] mx-4">
            A curated newsfeed from{' '}
            <a
              href="https://subscribe.keepcool.co"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-newtab border-dark border-b border-dotted hover:text-[var(--color-accent-1)]">
              Keep Cool.
            </a>
          </p>
          <p className="mt-8 text-shadow-[1px_1px_0px_rgba(22,23,20,1)] font-bold text-[var(--color-secondary-bg)] mx-4">
            {new Date().toLocaleString('en-US', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}{' '}
            <span className="text-[var(--color-accent-1)]">|</span> Curated
            today by:{' '}
            <Link
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-newtab border-dark border-b border-dotted hover:text-[var(--color-accent-1)]"
              href="https://www.linkedin.com/in/nicholasvanosdol/">
              Nick van Osdol
            </Link>
          </p>
          {/* <div className="mt-6 mx-2 relative layout lg:mx-0 text-lg/8 rounded-tl-3xl rounded-br-3xl shadow-xl text-[var(--color-primary-text)] border-2 p-6 bg-[var(--color-secondary-bg)] text-left flex flex-wrap gap-0">
            <div
              className="pointer-events-none absolute bottom-0 top-0 left-0 right-0 opacity-40"
              style={{
                backgroundImage: 'url("/svg/noise.svg")',
                backgroundRepeat: 'repeat',
                backgroundSize: '182px 182px',
              }}
              aria-hidden="true"
            />
            <span className="font-bold mr-1">Today&apos;s hotbox:</span>
            {words.map((word, idx) => (
              <span
                key={idx}
                className="opacity-0 animate-appear"
                style={{
                  animationDelay: `${idx * 0.05}s`,
                  animationFillMode: 'forwards',
                }}>
                {word}&nbsp;
              </span>
            ))}
          </div> */}
        </div>
        <FireBanner
          logoPaths={[
            '/svg/cartoon-fire.svg',
            '/svg/cartoon-fire-alt.svg',
            '/svg/cartoon-fire.svg',
            '/svg/cartoon-fire.svg',
            '/svg/cartoon-fire-alt.svg',
            '/svg/cartoon-fire.svg',
            '/svg/cartoon-fire.svg',
            '/svg/cartoon-fire-alt.svg',
            '/svg/cartoon-fire.svg',
            '/svg/cartoon-fire-alt.svg',
            '/svg/cartoon-fire.svg',
            '/svg/cartoon-fire.svg',
            '/svg/cartoon-fire.svg',
            '/svg/cartoon-fire-alt.svg',
            '/svg/cartoon-fire.svg',
            '/svg/cartoon-fire.svg',
            '/svg/cartoon-fire-alt.svg',
            '/svg/cartoon-fire.svg',
            '/svg/cartoon-fire-alt.svg',
            '/svg/cartoon-fire.svg',
            '/svg/cartoon-fire.svg',
            '/svg/cartoon-fire.svg',
            '/svg/cartoon-fire-alt.svg',
            '/svg/cartoon-fire.svg',
            '/svg/cartoon-fire.svg',
            '/svg/cartoon-fire.svg',
            '/svg/cartoon-fire-alt.svg',
            '/svg/cartoon-fire.svg',
            '/svg/cartoon-fire-alt.svg',
            '/svg/cartoon-fire.svg',
          ]}
        />
        <NewsGrid />
      </section>
      <Footer />
      <Gradient className="absolute inset-2 bottom-2 rounded-4xl ring-1 ring-black/5 ring-inset -z-100" />
      {/* <PartyCounter /> */}
    </main>
  );
}
