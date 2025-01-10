
const BookCard = ({title,description,img}) => {
    
   
    return ( 
        <>
         
            <div className="flex flex-col gap-2 border h-[230px] w-[150px] ">
                <img src={img} alt="" />
                <div className="content flex flex-col">
                    <h4 className="font-semibold text-xl">{title}</h4>
                    <p>{description}</p>
                </div>
            </div>
        </>
     );
}
 
export default BookCard;