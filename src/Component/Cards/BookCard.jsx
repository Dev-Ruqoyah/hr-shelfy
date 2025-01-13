
const BookCard = ({title,description,img,author,imagecover}) => {
    
   
    return ( 
        <>
         
            <div className="flex flex-col justify-between h-[409px] hover:scale-105 duration-300 shadow-sm  border-red mx-auto gap-2 py-5 ">
                <img src={img} alt="" className="h-[230px] lg:w-[150px] mx-auto" />
                <div className="content flex flex-col w-[150px] mx-auto">
                    <h4 className="font-semibold text-supporting line-clamp-2  transition-all ">{title}</h4>
                    <p className=" text-wrap  line-clamp-3"><small>{description}</small></p>
                </div>
                <div className="flex items-center gap-2 mb-3  w-[150px] mx-auto">
                    <div className="image h-[30px] w-[30px] rounded-full">
                        <img src={imagecover} className="rounded-full object-cover w-full h-full" alt="" />
                    </div>
                    <div className="flex flex-col">
                        <small className="p-0 m-0">Book By</small>
                        <small className="p-0 m-0 text-supporting font-bold">{author}</small>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default BookCard;