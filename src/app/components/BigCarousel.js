export const BigCarousel = ({ articles }) => {

    const carouselFirst = articles[0];


    return (
        <div >
            <div className="flex mt-12 h-[600px] border-2 border-red-300 relative rounded-xl">

                <img src="{carouselFirst.cover_image}" alt="" />


                <div className="w-[95%] h-[341px] absolute top-[251px] left-[6px] rounded-lg px-4 lg:w-[50%] lg:h-[40%] lg:top-[350px] bg-white">

                </div>
            </div>

        </div>


    )
}