import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCard from '../components/NewsCard';

const CategoryNews = () => {
    const {data: news} = useLoaderData()
    return (
        <div>
            <h1 className='font-semibold mb-6'>Dragon News Home</h1>
            <p className='text-gray-500 text-sm'>{news.length} News Found in this Category </p>
            {
                news.map(singleNews => <NewsCard key={singleNews._id} news={singleNews}></NewsCard>)
            }
        </div>
    );
};

export default CategoryNews;