import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import EachBookFetch from "../../Component/Fetch/EachBookFetch";
import NavBar from "../../Component/NavBar/NavBar";
import "./each.css";

const EachBook = () => {
  const [bookList, setBookList] = useState("");
  const [loading, setLoading] = useState(true);
  const [relatedBooks, setRelatedBooks] = useState([]);
  let { id } = useParams();

  // Function to strip HTML tags from descriptions
  function stripHtmlTags(html) {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = html;
    return tempDiv.textContent || tempDiv.innerText || "";
  }

  // Update document title
  useEffect(() => {
    document.title = bookList.volumeInfo?.title || "Book Details";
  }, [bookList]);

  useEffect(() => {
    const fetchRelatedBooks = async () => {
      if (bookList.volumeInfo?.authors?.[0]) {
        try {
          const { data } = await axios.get(
            `https://www.googleapis.com/books/v1/volumes?q=${bookList.volumeInfo.authors[0]}+inauthor:keyes&startIndex=0&maxResults=5`,
            {
              params: {
                key: import.meta.env.VITE_GOOGLE_API_KEY,
              },
            }
          );
          setRelatedBooks(data.items || []);
          console.log(data);
        } catch (error) {
          console.error("Error fetching related books:", error);
        }
      }
    };

    if (bookList) {
      fetchRelatedBooks();
    }
  }, [bookList]);

  return (
    <>
      <EachBookFetch
        url={`https://www.googleapis.com/books/v1/volumes/${id}`}
        setBookList={(data) => {
          setBookList(data);
          setLoading(false);
        }}
      />

      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="bg-primary py-3">
          <NavBar />
          <div className="grid md:grid-cols-3 gap-6 container mx-auto px-10 my-5">
            {/* Book Details Section */}
            <div className="md:col-span-2">
              <div className="shadow-lg flex md:flex-row flex-col gap-6 bg-white p-6 rounded-lg">
                {/* Book Image */}
                <div className="image md:w-[230px] flex-shrink-0">
                  <img
                    src={
                      bookList.volumeInfo?.imageLinks?.thumbnail ||
                      "/path/to/placeholder.jpg"
                    }
                    alt={bookList.volumeInfo?.title || "Book Cover"}
                    className="w-full h-auto rounded-lg shadow-md object-cover border border-gray-300"
                  />
                </div>

                {/* Book Content */}
                <div className="book-content flex flex-col gap-3">
                  <h5 className="font-bold text-2xl text-supporting">
                    {bookList.volumeInfo?.title}
                  </h5>
                  <p className="text-gray-700">
                    <span className="font-semibold">Author:</span>{" "}
                    {bookList.volumeInfo?.authors?.[0] || "Unknown Author"}
                  </p>
                  <p className="text-gray-700">
                    <span className="font-semibold">Pages:</span>{" "}
                    {bookList.volumeInfo?.pageCount || "N/A"}
                  </p>
                  <p className="text-gray-600 mt-3 line-clamp-6">
                    {stripHtmlTags(bookList.volumeInfo?.description) ||
                      "Description not available."}
                  </p>
                </div>
              </div>

              {/* Book Details Table */}
              <div className="overflow-x-auto my-5">
                <table className="table-auto w-full border-collapse border border-gray-300">
                  <tbody>
                    <tr className="border-b">
                      <th className="text-left p-3 font-semibold text-gray-700 bg-gray-100">
                        Book Title
                      </th>
                      <td className="p-3">
                        {bookList.volumeInfo?.title || "N/A"}
                      </td>
                    </tr>
                    <tr className="border-b">
                      <th className="text-left p-3 font-semibold text-gray-700 bg-gray-100">
                        Author
                      </th>
                      <td className="p-3">
                        {bookList.volumeInfo?.authors?.[0] || "Unknown Author"}
                      </td>
                    </tr>
                    <tr className="border-b">
                      <th className="text-left p-3 font-semibold text-gray-700 bg-gray-100">
                        ISBN
                      </th>
                      <td className="p-3">
                        {bookList.volumeInfo?.industryIdentifiers?.[0]
                          ?.identifier || "N/A"}
                      </td>
                    </tr>
                    <tr className="border-b">
                      <th className="text-left p-3 font-semibold text-gray-700 bg-gray-100">
                        Edition Language
                      </th>
                      <td className="p-3">
                        {bookList.volumeInfo?.language === "en"
                          ? "English"
                          : bookList.volumeInfo?.language?.toUpperCase() ||
                            "N/A"}
                      </td>
                    </tr>
                    <tr className="border-b">
                      <th className="text-left p-3 font-semibold text-gray-700 bg-gray-100">
                        Book Format
                      </th>
                      <td className="p-3">
                        Paperback, {bookList.volumeInfo?.pageCount || "N/A"}{" "}
                        pages
                      </td>
                    </tr>
                    <tr>
                      <th className="text-left p-3 font-semibold text-gray-700 bg-gray-100">
                        Date Published
                      </th>
                      <td className="p-3">
                        {bookList.volumeInfo?.publishedDate || "N/A"} by{" "}
                        {bookList.volumeInfo?.publisher || "Unknown Publisher"}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Related Books Section */}
            <div className="more container mx-auto px-5">
              <h3 className="text-xl font-semibold  h-auto text-center py-3">
                Related Books
              </h3>
              {relatedBooks.length ? (
                relatedBooks.map((relatedbook) => (
                  <div
                    className="flex flex-col gap-3 mb-3"
                    key={relatedbook.id}
                  >
                 <Link to={`/book/${relatedbook.volumeInfo.title}/${relatedbook.id}`}>
                 <div className="flex items-start gap-5 border-b pb-3">
                      <img
                        src={relatedbook.volumeInfo?.imageLinks?.thumbnail}
                        alt={relatedbook.volumeInfo?.title || "Book cover"}
                        className="h-28 w-28 object-cover rounded-lg shadow-md border border-gray-300"
                      />
                      <div className="text">
                        <h4 className="font-bold text-lg text-supporting">
                          {relatedbook.volumeInfo.title}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {relatedbook.volumeInfo?.authors?.[0] ||
                            "Unknown Author"}
                        </p>
                        <p className="text-sm text-gray-500 mt-2 line-clamp-2">
                          {relatedbook.volumeInfo?.description ||
                            "No description available."}
                        </p>
                      </div>
                    </div>
                 
                 </Link>
                  </div>
                ))
              ) : (
                <div>
                  <p>No related book found</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EachBook;
