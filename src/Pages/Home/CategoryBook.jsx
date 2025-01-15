import { useEffect, useState } from "react";
import CategoryButton from "../../Component/Loader/Loader";
import SubNav from "../../Component/NavBar/SubNav";
import BookCard from "../../Component/Cards/BookCard";

import axios from "axios";
import { Navigation, Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Loader from "../../Component/Loader/Loader";

const CategoryBook = () => {
  const [category, setCategory] = useState("fiction");
  const [bookList, setBookList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const logGenre = (word) => setCategory(word);

  useEffect(() => {
    const fetchGenre = async () => {
      setLoading(true);
      setError(null);
      try {
        const { data } = await axios.get(
          `https://www.googleapis.com/books/v1/volumes?q=subject:${category}&maxResults=20`,
          {
            params: {
              api_key: import.meta.env.VITE_GOOGLE_API_KEY,
            },
          }
        );
        setBookList(data.items || []);
      } catch (err) {
        setError("Failed to load books. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchGenre();
  }, [category]);

  return (
    <div className="bg-primary py-5 container mx-auto px-10">
      {/* SubNav */}
      <SubNav subNav="Genre" />

      {/* Category Buttons */}
      <div className="flex items-center gap-4 mb-6">
        
      <div className="flex items-center gap-4 mb-6">
        {["Fiction", "Nonfiction", "Romance", "Science"].map((genre) => (
          <button
            key={genre}
            onClick={() => logGenre(genre)}
            className={`px-4 py-2 rounded-md transition-all duration-200 ${
              category === genre
                ? "bg-supporting text-white"
                : "bg-gray-200 text-black hover:bg-gray-300"
            }`}
          >
            {genre}
          </button>
        ))}
      </div>
        
      </div>

      {/* Swiper Section */}
      <div className="container px-8 mx-auto relative">
        {loading ? (
          <Loader/>
        ) : error ? (
          <div className="text-center py-10">
            <p className="text-red-500 text-lg">{error}</p>
          </div>
        ) : (
          <Swiper
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={20}
            slidesPerView={3}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            pagination={{ clickable: true }}
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 10 },
              768: { slidesPerView: 2, spaceBetween: 15 },
              1024: { slidesPerView: 5, spaceBetween: 20 },
              1440: { slidesPerView: 5, spaceBetween: 25 },
            }}
          >
            {bookList.map((book) => (
              <SwiperSlide key={book.id} className="mb-12">
                <Link to={`/book/${book.volumeInfo.title}/${book.id}`}>
                  <BookCard
                    img={book.volumeInfo.imageLinks?.thumbnail || ""}
                    title={book.volumeInfo.title}
                    description={book.volumeInfo.description || "No description available"}
                    author={book.volumeInfo.authors?.[0] || "Unknown Author"}
                  />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        )}

        {/* Navigation Buttons */}
        {!loading && !error && (
          <>
            <button className="custom-prev absolute top-1/2 left-0 transform -translate-y-1/2 border p-3 bg-supporting hover:bg-amber-950 transition-all rounded-full z-10">
              <FaArrowLeft />
            </button>
            <button className="custom-next absolute top-1/2 right-0 transform -translate-y-1/2 border p-3 bg-supporting hover:bg-amber-950 transition-all rounded-full z-10">
              <FaArrowRight />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default CategoryBook;
