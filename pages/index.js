import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { GET_ALL_ARTICLES } from '../queries/articles'
import { ArticlePreview } from '../components/article-preview';

export default function Home({ data, loading, error }) {
  if(loading) return <div>Loading...</div>
  if(error) return <div>Error :/</div>

  const articles = data.articleCollection.items
  console.log(articles)
  return (
    <main>
      <article>
        {articles.map(({ sys, tag, title, image, author, publishDate }) => (
          <ArticlePreview
            // key={sys.id}
            tag={tag}
            title={title}
            image={image}
            // author={author}
            publishDate={publishDate}
          />
        ))}
      </article>
    </main>
  );
}

Home.getInitialProps = async ({ apolloClient }) => {
  const { data, loading, error } = await apolloClient.query({
    query: GET_ALL_ARTICLES,
  });

  return {
    data,
    loading,
    error,
  };
};