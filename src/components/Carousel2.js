

import { format, parseISO } from "date-fns";
import Link from "next/link";
export const Carousel2 = ({ articles, index }) => {

    const caroSecond = articles[articles.length - 3]

    return (


        // <div className={prev ? `duration-600 translateX(-${(index * 100) / 6}%)` : `translateX(-${(index * 100) / 6}%)`} >
        <Link href={`/blog/${caroSecond.id}`}><img className="w-[1250px] h-full object-cover relative" src={caroSecond.social_image} alt="" />
            {/* <div>
                <p>{caroSecond.title}</p>
                <p >{caroSecond.description}</p>
                <p>{format(caroSecond.published_at, 'LLLL d, yyyy')}</p>

            </div> */}

        </Link>
        // </div>


    );
};