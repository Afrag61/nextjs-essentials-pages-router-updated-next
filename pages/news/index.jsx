// our-domain.com/news

import Link from "next/link";

const NewsPage = () => {
  return (
    <>
      <h1>the News Page</h1>
      <ul>
        <li>
          <Link href="/news/nextjs-is-a-great-framework">
            nextjs is a great framework
          </Link>
        </li>
      </ul>
    </>
  );
};

export default NewsPage;
