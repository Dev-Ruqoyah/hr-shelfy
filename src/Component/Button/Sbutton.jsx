const SButton = ({text}) => {
    return ( 
        <>
            <button className="border btn-primary duration-300 bg-supporting text-primary hover:text-primary transition-all px-6 lg:w-[30%] md:w-[50%] w-[50%] hover:bg-amber-950 py-2  rounded-badge">{text}</button>
        </>
     );
}
 
export default SButton;