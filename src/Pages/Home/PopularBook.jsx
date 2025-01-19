import { useState } from "react";

import BookCard from "../../Component/Cards/BookCard";
import SubNav from "../../Component/NavBar/SubNav";
import BookFetch from "../../Component/Fetch/bookfetch";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Loader from "../../Component/Loader/Loader";

const PopularBook = () => {
  const [bookList, setBookList] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  return (
    <>
      <BookFetch
        url={`https://www.googleapis.com/books/v1/volumes?q=newest&orderBy=newest
&maxResults=5&startIndex=1`}
        setBookList={setBookList}
        setError={setError}
        setLoading={setLoading}
      />

      <div className="bg-primary py-8  ">
        <SubNav subNav={"Recently Released"} />

        {loading ? (
          <Loader />
        ) : error ? (
          <div className="text-center py-10">
            <p className="text-red-500 text-lg">{error}</p>
          </div>
        ) : (
          <div className="container  px-8 mx-auto relative">
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={20}
              slidesPerView={3}
              navigation={{
                nextEl: ".custom-next",
                prevEl: ".custom-prev",
              }}
              pagination={{ clickable: true }}
              // scrollbar={{ draggable: true }}
              breakpoints={{
                320: { slidesPerView: 1, spaceBetween: 10 },
                768: { slidesPerView: 2, spaceBetween: 15 },
                1024: { slidesPerView: 5, spaceBetween: 20 },
                1440: { slidesPerView: 5, spaceBetween: 25 },
              }}
            >
              {bookList.map((book) => (
                <SwiperSlide key={book.id}>
                  <Link to={`/book/${book.volumeInfo.title}/${book.id}`}>
                    <BookCard
                      img={book.volumeInfo.imageLinks?.thumbnail || book.title}
                      title={book.volumeInfo.title}
                      description={book.volumeInfo.description}
                      author={book.volumeInfo.authors[0]}
                      imagecover={book.volumeInfo.imageLinks?.thumbnail}
                    />
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
            {/* Buttons outside the Swiper */}
            <button className="custom-prev absolute top-1/2 left-0 border p-3 bg-supporting hover:bg-amber-950 transition-all rounded-full z-10">
              <FaArrowLeft />
            </button>
            <button className="custom-next absolute top-1/2 right-0 border p-3 bg-supporting hover:bg-amber-950 transition-all rounded-full z-10">
              <FaArrowRight />
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default PopularBook;
