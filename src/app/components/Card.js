import { format, parseISO } from "date-fns";

export const Card = ({ img, title, date, tag }) => {

    const published_at = parseISO(date)

    return (


        <div className=" border-2 border-gray-100 rounded-lg px-4 py-4 mb-8">
            <div className="flex flex-col gap-8">
                <img src={img} alt="" />
                <p className="text-blue-500 flex justify-center px-2 w-fit h-8 border-2 border-gray-200 rounded-lg bg-gray-200">{tag}</p>
                <p className="font-bold">{title}</p>
                <p className="text-gray-400">{format(published_at, 'LLLL d, yyyy')}</p>
            </div>
        </div>


    )
}