import { useTranslation } from "react-i18next"
import "@fontsource/dela-gothic-one"
import { accomodations } from "@/data/accomodations"
import AccomodationCard from "@/components/accomodations/AccomodationCard"

const Accomodations = () => {
  const { t } = useTranslation()
  return (
    <div class="flex flex-col w-full text-black dark:text-white mt-28 px-4 md:px-24">
      <h1
        class="text-2xl md:text-6xl font-extrabold uppercase text-emerald-600 mb-4"
        style={{
          fontFamily: "Dela Gothic One",
        }}>{t("Lodging & Accommodations")}</h1>
      <p class="text-justify">{t("Enjoy an unforgettable stay with a variety of accommodation options, ranging from beachfront resorts that offer stunning ocean views to traditional villas that blend the nuances of local culture with modern facilities. Each place to stay is guaranteed to provide friendly and professional service, creating an ideal atmosphere for travelers to experience the warmth and uniqueness of NTT's exotic islands. Find your dream lodging and embark on an unforgettable adventure in the tropical paradise of East Nusa Tenggara.")}</p>
      <div class="grid md:grid-cols-2 gap-4 mt-10">
        {accomodations.map((value) => (
          <AccomodationCard
            title={value.title}
            address={value.address}
            imgURL={value.imgURL}
            desc={value.desc}
            source={value.source}
            sourceURL={value.sourceURL}
            price={value.price}
            rating={value.rating}
          />
        ))}
      </div>
    </div>
  )
}

export default Accomodations