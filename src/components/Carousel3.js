

import { format, parseISO } from "date-fns";
import Link from "next/link";
export const Carousel3 = ({ articles, index }) => {


    const caroThird = articles[articles.length - 2]


    return (



        <Link href={`/blog/${caroThird.id}`}><img className="w-[1250px] h-full object-cover relative" src={caroThird.social_image} alt="" />
            {/* <div>
                <p>{caroThird.title}</p>
                <p >{caroThird.description}</p>
                <p>{format(caroThird.published_at, 'LLLL d, yyyy')}</p>

            </div> */}

        </Link>



    );
};