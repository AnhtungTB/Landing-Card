import Cards from '../../asserts/desktop/isocard.svg'

function Slogan() {
    return ( 
        <section className="text-[36px] my-14 font-semiboldt md:relative md:my-28 md:grid md:grid-cols-3 md:items-center md:text-[48px]">
            <div className="text-center md:col-span-1 md:col-start-2">
                <p>
                    Earn <span className="text-purple-700">More</span>
                </p>
                <p className="">Pay Less</p>
                <button className="text-[20px] px-6 py-[6px] font-bold mt-[27px] bg-purple-500 rounded-[14px] hover:bg-pink-400 transition-all duration-500 md:text-[24px] md:px-8 md:py-[8px]" >
                    Start
                </button>
            </div>
            <div className="mt-[60px] md:absolute md:right-[-5rem]">
                <img src={Cards} alt="credit card"></img>
            </div>
        </section>
     );
}

export default Slogan;