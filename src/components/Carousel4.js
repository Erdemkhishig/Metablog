


import { format, parseISO } from "date-fns";
import Link from "next/link";
export const Carousel4 = ({ articles, index }) => {

    const caroForth = articles[articles.length - 1]


    return (




        <Link href={`/blog/${caroForth.id}`}> <img className="w-[1250px] h-full object-cover relative" src={caroForth.social_image} alt="" />
            {/* <div>
                <p>{caroForth.title}</p>
                <p >{caroForth.description}</p>
                <p>{format(caroForth.published_at, 'LLLL d, yyyy')}</p>

            </div> */}

        </Link>



    );
};