import { MetablogfooterIcon } from "../assets/MetaBlogFooterIcon"

export const FooterDown = () => {

    return (
        <div className="bg-gray-100">
            <div className="px-8 lg:flex lg:justify-between lg:gap-80 max-w-screen-xl m-auto  bg-gray-100">
                <div className="py-8"><MetablogfooterIcon /></div>
                <div className="py-8 flex flex-col gap-8 lg:flex lg:flex-row">
                    <p>Terms of Use</p>
                    <p>Privacy of Policy</p>
                    <p>Cookie Policy</p>
                </div>
            </div>
        </div>


    )
}