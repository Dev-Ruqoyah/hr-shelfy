const HeroButton = ({text}) => {
    return ( 
        <>
            <button className="border btn-primary border-supporting text-supporting hover:text-primary transition-all px-6 lg:w-[30%] md:w-[50%] w-[50%] hover:bg-supporting py-2 rounded-badge">{text}</button>
        </>
     );
}
 
export default HeroButton;