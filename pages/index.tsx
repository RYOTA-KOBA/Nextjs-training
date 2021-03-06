/* eslint-disable react/no-unknown-property */
/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';
import { GetStaticProps } from 'next';

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};

type Props = {
  allPostsData: {
    id: string;
    title: string;
    date: string;
  }[];
};

export default function Home({ allPostsData }: Props) {
  return (
    <div className="font-famify-global">
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section className={utilStyles.headingMd}>
          <p>こんにちは！！</p>
          <p>
            (This is a sample website - you’ll be building a site like this on{' '}
            <a className="text-blue-400" href="https://nextjs.org/learn">
              our Next.js tutorial
            </a>
            .)
          </p>
        </section>
        <Link href="/Profile">
          <a className="text-xl text-blue-400 hover:text-blue-600">プロフィール</a>
        </Link>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className={utilStyles.headingLg}>Blog</h2>
          <ul className={utilStyles.list}>
            {allPostsData.map(({ id, date, title }) => (
              <li className={utilStyles.listItem} key={id}>
                <Link href={`/posts/${id}`}>
                  <a>{title}</a>
                </Link>
                <br />
                <small className={utilStyles.lightText}>
                  <Date dateString={date} />
                </small>
              </li>
            ))}
          </ul>
        </section>
      </Layout>
    </div>
  );
}
