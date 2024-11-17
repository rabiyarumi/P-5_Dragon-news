import React from "react";
import Header from "../components/Header";
import RightNavbar from "../components/layout-component/RightNavbar";
import { Link, useLoaderData } from "react-router-dom";

const NewsDetails = () => {
  const data = useLoaderData();
  const news = data.data[0];
  return (
    <div className="container mx-auto">
      <header>
        <Header></Header>
      </header>
      <main className="grid grid-cols-12 gap-4 mt-10">
        <section className="col-span-9">
          <h2 className="font-semibold mb-3 text-2xl">Dragon News</h2>

          <div className="card bg-base-100 border-[1px] ">
            <figure className="px-10 pt-10">
              <img
                src={news?.image_url}
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body ">
              <h2 className="card-title">{news.title}</h2>
              <p>{news?.details}</p>
              <div className="card-actions">
                <Link to={`/category/${news?.category_id}`} className="btn bg-[#D72050] text-white rounded-none">All news in this category</Link>
              </div>
            </div>
          </div>
        </section>


        <aside className="col-span-3">
          <RightNavbar></RightNavbar>
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;
