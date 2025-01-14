import subHero from '../../assets/reading.jpg'
const SubHero = () => {
    return ( 
        <>
            <div className=" container mx-auto">
                <div className="h-[70vh] bg-cover bg-center " style={{
                    backgroundImage: `url(${subHero})`,
                }}>
                    <div className="text backdrop-blur-md h-full flex flex-col justify-center items-center ">
                        <p className='text-primary md:text-2xl font-semibold text-center'>"A reader lives a thousand lives before he dies . . . <br></br> The man who never reads lives only one."</p>
                        <p className='text-supporting'>– George R.R. Martin</p>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default SubHero;