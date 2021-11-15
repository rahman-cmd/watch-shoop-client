import React from 'react';
import news1img from '../../../images/team3.jpg';
import news2img from '../../../images/parts.jpg';
import NewsCard from '../NewsCard/NewsCard';

const latestNews = [
  {
    title: "New Watch Arrivals",
    time: "March 15, 2021",
    discription: "Apple Watch online at best price in India. Check full specifications of Apple Watch smartwatch with its features...",
    image: news1img
  },
  {
    title: "Replace New Parts",
    time: "March 17, 2021",
    discription: "Buy Xiaomi Mi Watch online at best price in India. Check full specifications of Xiaomi Mi Watch smartwatch with its features...",
    image: news2img
  }
]

const News = () => {
  return (
    <section className='news'>
      <div className="container">
        <h1 className="mb-5 text-center">Latest News From Our Blog</h1>
        <div className="row mt-5">
          {
            latestNews.map(news => <NewsCard news={news}></NewsCard>)
          }
        </div>
      </div>
    </section>
  );
};

export default News;