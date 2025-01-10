import axios from "axios";
import { useEffect } from "react";

// Component to fetch books from the API
const BookFetch = ({ url, setBookList }) => {

  
  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const { data } = await axios.get(url, {
          params: {
            api_key: import.meta.env.VITE_GOOGLE_API_KEY, 
          },
        });
        console.log(data.items);
        setBookList(data.items); 
      } catch (error) {
        console.error("Error fetching book data:", error);
      }
    };

    fetchDetails();
  }, [url, setBookList]);

  return null; 
};

export default BookFetch;