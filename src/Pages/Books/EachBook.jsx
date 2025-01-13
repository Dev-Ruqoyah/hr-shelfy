import { useParams } from "react-router-dom";
import './each.css'

import { useState } from "react";
import EachBookFetch from "../../Component/Fetch/EachBookFetch";
import NavBar from "../../Component/NavBar/NavBar";

const EachBook = () => {
  const [bookList, setBookList] = useState("");
  let { id } = useParams();
  function stripHtmlTags(html) {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = html;
    return tempDiv.textContent || tempDiv.innerText || "";
  }
  
  // console.log(id);

  return (
    <>
      <EachBookFetch
        url={`https://www.googleapis.com/books/v1/volumes/${id}`}
        setBookList={setBookList}
      />

      <div className=" h-screen bg-primary">
        <NavBar />
        <div className="grid grid-cols-3 my-5 container mx-auto px-10">
          <div className=" col-span-2 flex gap-6">
            <div className="image  w-[230px] ">
                <img src={bookList.volumeInfo?.imageLinks?.thumbnail} alt={bookList.volumeInfo?.title} className="w-full" />
            </div>
            <div className="book content flex flex-col w-1/2">
                <h5 className="font-bold text-2xl text-supporting">{bookList.volumeInfo?.title}</h5>
                <p>Author :<span className="font-semibold text-supporting"> {bookList.volumeInfo?.authors[0]}</span></p>
                <p className ="line-clamp-9">{stripHtmlTags(bookList.volumeInfo?.description)}</p>
                </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EachBook;
