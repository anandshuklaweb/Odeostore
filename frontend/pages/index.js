import React from "react";
import Slider from "../components/Slider";
import Link from "next/link";

const Home = (props) => {
  return (
    <>
      <Slider />
      <section className="text-gray-600 px-2 md:px-12 body-font">
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-wrap -mx-4 -mb-10 text-center">
            <div className="sm:w-1/2 mb-10 px-4">
              <div className="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src="https://trendbeat.vercel.app/banner2.jpg"
                />
              </div>
              <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
                Buy YouTube Videos
              </h2>
            </div>
            <div className="sm:w-1/2 mb-10 px-4">
              <div className="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src="https://trendbeat.vercel.app/banner2.jpg"
                />
              </div>
              <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
                The Catalyzer
              </h2>
            </div>
          </div>
        </div>
      </section>

      <div className="2xl:container 2xl:mx-auto py-12 bg-gray-100">
        <div className="lg:px-20 md:px-6 px-4">
          <div className="text-center md:text-3xl text-3xl font-semibold text-gray-800 dark:text-white leading-snug ">
            <h2>Featured Products</h2>
          </div>
          <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-y-12 lg:gap-x-8 sm:gap-y-10 sm:gap-x-6 gap-y-6 lg:mt-12 mt-10">
            {props.products.data.slice(0, 4).map((item) => {
              return (
                <div className="relative  border-2" key={item.id}>
                  <div className="absolute top-0 left-0 py-2 px-4 bg-white bg-opacity-50">
                    <p className="text-xs leading-3 text-gray-800">New</p>
                  </div>
                  <div className="relative group">
                    <div className="flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
                    <img
                      className="w-full "
                      src={
                        process.env.REACT_APP_UPLOAD_URL +
                        item?.attributes?.image?.data?.attributes?.url
                      }
                      alt={item?.attributes?.title}
                    />
                  </div>
                  <div className="p-4">
                    <p className="font-normal dark:text-white text-xl leading-5 text-gray-800 md:mt-6 mt-4">
                      {item?.attributes?.title}
                    </p>

                    <div className="hidden bg-red-800 bg-green-800 bg-blue-800"></div>

                    <div class="flex justify-between">
                      <p className="font-semibold dark:text-gray-300 text-xl leading-5 text-gray-800 my-4">
                        ₹{item?.attributes?.price}
                      </p>
                      <button
                        class={
                          "border-2 leading-5 border-gray-300 ml-1 rounded-full my-4 w-6 h-6 focus:outline-none " +
                          `bg-${item.attributes.color}-800`
                        }
                      ></button>
                    </div>
                    <Link href={`/product/${item.attributes.slug}`}>
                      <button className=" hover:bg-teal-600 hover:text-white  border-teal-600 border-2 rounded-sm py-1 px-6">
                        Buy Now
                      </button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps(context) {
  let headers = {
    Authorization:
      "Bearer 11dab486ffe116f1485bcdfd55099b53f8bb724d393ba42e78c81194dbab8074e8e6bb43299a647c006b24c03efe36feb72e59ab810e80723080a5f5f556bb818f3a2afa85e371abc823197702a1996a3b59bb28ae6ede51b514b95b603d3dead8df450cf7a318602cbd62ca751c1362e2b8bb21e90319f5d02c6255f78a7716",
  };
  let a = await fetch(
    "http://localhost:1337/api/products?populate=*&_limit=3",
    {
      headers: headers,
    }
  );

  let products = await a.json();

  return {
    props: { products: products }, // will be passed to the page component as props
  };
}

export default Home;
