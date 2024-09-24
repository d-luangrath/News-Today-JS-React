import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { requestArtciles } from '../../reducers/hackerNewsReducer.js';
import Card from '../shared/Card/Card.jsx';
import Loading from '../shared/Loading/Loading.jsx';

export default function HackerNews() {
    const loading = useSelector((state) => state.HackerNews.loading);
    const articles = useSelector((state) => state.HackerNews.articles);
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(requestArtciles);
    }, [])

  const articleCards = articles.map((article) => <Card key={article.id} article={article} />);
  return (
    <div className="news-container">
      <img className='logo' src="../../assets/hackerNews.jpeg" alt="" />
      {loading ? <Loading /> : <div>{articleCards}</div>}
    </div>
  );
}
