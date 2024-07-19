import { format, parseISO } from "date-fns";
import { BlogTag } from "./BlogTag";
import Image from 'next/image'

export const BlogCard = ({ img, title, date, tags, name, id }) => {

    const published_at = parseISO(date)

    return (


        <div className=" border-2 border-gray-100 rounded-lg px-4 py-4 mb-8">
            <div className="flex flex-col gap-8">
                <Image
                    src={img}
                    width={1000}
                    height={500}
                    alt="Picture"


                    className="h-[2/1] w-full rounded-md" />
                <div className="text-blue-500 flex gap-2 flex-wrap rounded-lg">{tags.map((tag) => (
                    <BlogTag key={tag} tag={tag} id={id} />

                ))}
                </div>

                <p className="font-bold">{title}</p>
                <p className="text-gray-400">{format(published_at, 'LLLL d, yyyy')}</p>
                <p>{name}</p>
            </div>
        </div>



    );
};

