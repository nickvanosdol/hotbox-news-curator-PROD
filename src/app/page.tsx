import Image from 'next/image';

import { articles } from './constant/feed-content';
import UnderlineLink from '@/components/UnderlineLink';
import Head from 'next/head';
import PartyCounter from '@/components/PartyCounter';
import Footer from '@/components/Footer';
import ReactionCounter from '@/components/ReactionCounter';

const paragraph =
  "[ai generated] summary of today's curated content ai generated summary of today's curated content ai generated summary of today's curated content ai generated summary of today's curated content ai generated summary of today's curated content";
const words = paragraph.split(' ');

function NewsGrid() {
  return (
    <div className="py-4 sm:py-4">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center min-w-full">
          <div className="flex justify-center gap-2">
            <h2 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl ml-10 sm:ml-14">
              [ hotbox ]{' '}
            </h2>
            <Image
              className="w-10 sm:w-14 inline-block"
              src="/svg/match.svg"
              width="100"
              height="100"
              alt="Icon"
            />
          </div>
          <p className="mt-2 text-sm inline-flex gap-1">
            A reader-curated newsfeed from
            <UnderlineLink href="https://subscribe.keepcool.co">
              Keep Cool.
            </UnderlineLink>
          </p>
          <p className="mt-8">
            {new Date().toLocaleString('en-US', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}{' '}
            | Curated today by:{' '}
            <UnderlineLink
              className="inline-flex"
              href="https://www.linkedin.com/in/brettcornick/">
              Brett Cornick
            </UnderlineLink>
          </p>
          <p className="mt-6 mx-4 lg:mx-0 text-lg/8 border-gray-400 border-b-1 text-gray-800 text-left pb-4 px-1 flex flex-wrap gap-0">
            <span className="font-bold">Today&apos;s hotbox:</span>{' '}
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
          </p>
        </div>
        <div className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {articles.map(article => (
            <article
              key={article.id}
              className="group flex flex-col items-start justify-between">
              {/* <div className="relative w-full">
                <img
                  alt=""
                  src={post.imageUrl}
                  className="aspect-video w-full bg-gray-100 object-cover h-20 object-center grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 ring-1 ring-gray-900/10 ring-inset" />
              </div> */}
              <div className="max-w-xl">
                <div className="mt-2 flex items-center gap-x-4 text-xs">
                  <time
                    dateTime={article.datetime}
                    className="text-gray-500">
                    {article.date}
                  </time>
                  <div className="relative z-10 bg-[var(--color-primary-50)] rounded-lg px-3 py-1.5 font-medium text-gray-600">
                    {article.tag}
                  </div>
                </div>
                <div className="relative">
                  <h3 className="mt-1 flex text-lg/6 font-semibold text-gray-900 items-center gap-2 grayscale group-hover:grayscale-0 group-focus:grayscale-0">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      alt="article link favicon"
                      src={article.source.favicon}
                      className="size-5 bg-gray-100"
                    />
                    <UnderlineLink href={article.href}>
                      <span className="absolute inset-0 hover:cursor-newtab" />
                      {article.title}
                    </UnderlineLink>
                  </h3>
                </div>
                <p className="mt-2 line-clamp-2 text-sm/6 text-gray-600">
                  {article.description}
                </p>
                <ReactionCounter />
                {/* <div className='relative mt-8 flex items-center gap-x-4'>
                  <img
                    alt=''
                    src={post.author.imageUrl}
                    className='size-10 rounded-full bg-gray-100'
                  />
                  <div className='text-sm/6'>
                    <p className='font-semibold text-gray-900'>
                      <a href={post.author.href}>
                        <span className='absolute inset-0' />
                        {post.author.name}
                      </a>
                    </p>
                    <p className='text-gray-600'>{post.author.role}</p>
                  </div>
                </div> */}
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
    <main className="cursor-fire">
      <Head>
        <title>Hi</title>
      </Head>
      <section>
        <NewsGrid />
      </section>
      <Footer />
      <PartyCounter />
    </main>
  );
}
