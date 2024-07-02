import { Card } from "./Card";


export const Allblog = ({ articles }) => {



    return (
        <div >
            <div className="mt-20 font-bold text-2xl">All Blog Post</div>
            <div className="flex gap-4 py-12">
                <span className="text-xs text-yellow-600">All</span>
                <span className="text-xs">Design</span>
                <span className="text-xs">Travel</span>
                <span className="text-xs">Fashion</span>
                <span className="text-xs">Technology</span>
                <span className="text-xs">Branding</span>
                <div className="flex justify-end invisible w-[70%] lg:visible">   <span className="text-xs" >View All</span></div>


            </div>
            <div className="grid grid-rows-1 grid-cols-1 gap-2 lg:gap lg:grid-cols-3 lg:grid-rows-3">

                {articles.map((item, index) => (
                    <Card key={index} img={item.social_image} title={item.title} date={item.published_at} tag={item.tag_list[0]} />
                ))}
            </div>

        </div>


    )
}