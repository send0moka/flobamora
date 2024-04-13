import { useTranslation } from "react-i18next"
import "@fontsource/dela-gothic-one"
export default function AccomodationCard({
    title,
    address,
    imgURL,
    desc,
    source,
    sourceURL,
    price,
    rating
}: {
    title: string;
    address: string;
    imgURL: string[];
    desc: string;
    source: string;
    sourceURL: string;
    price: string;
    rating: string;
}) {
    const { t } = useTranslation();
    return (
        <div className={"flex flex-col gap-1 p-4 rounded-xl hover:translate-y-1 hover:bg-black/10 dark:hover:bg-white/10 transition-transform duration-300"}>
            <div class="flex gap-2 w-full">
                <img src={imgURL[0]} className={"rounded-xl h-[200px] w-1/2 object-cover"} />
                <img src={imgURL[1]} className={"rounded-xl h-[200px] w-1/2 object-cover"} />
            </div>
            <div class="flex gap-2 w-full">
                <img src={imgURL[2]} className={"rounded-xl h-[100px] w-1/3 object-cover pt-1"} />
                <img src={imgURL[3]} className={"rounded-xl h-[100px] w-1/3 object-cover pt-1"} />
                <img src={imgURL[4]} className={"rounded-xl h-[100px] w-1/3 object-cover pt-1"} />
            </div>
            <h4 className={"font-bold text-3xl"}>{t(title)}</h4>
            <div class="flex gap-1">
                📌
                <span>{t(address)}</span>
            </div>
            <p class="opacity-50 text-justify">{t(desc)}</p>
            <div class="flex flex-col gap-6 md:flex-row md:gap-20 my-1 p-4 w-full justify-center md:items-center bg-black/10 dark:bg-white/10"
            style={{
                fontFamily: "Dela Gothic One"
              }}
            >
                <span>⭐{t(rating)} / 10</span>
                <span>{t(price)}</span>
                <a href={sourceURL} className={"text-emerald-500 hover:underline hover:translate-x-2 transition-transform duration-300"}>
                    {t(source)}
                </a>
            </div>
        </div>
    );
}
