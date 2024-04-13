import { DestinationService } from "@/data/destinations";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react"
import { Carousel, CarouselResponsiveOption } from 'primereact/carousel'

interface Destination {
  name: string;
  imgURL: string;
  mapLink: string;
}

export default function ExploreMore() {
  const { t } = useTranslation();
  const [destinations, setDestinations] = useState<Destination[]>([]);
  const responsiveOptions: CarouselResponsiveOption[] = [
    {
      breakpoint: '1400px',
      numVisible: 2,
      numScroll: 1
    },
    {
      breakpoint: '1199px',
      numVisible: 3,
      numScroll: 1
    },
    {
      breakpoint: '767px',
      numVisible: 2,
      numScroll: 1
    },
    {
      breakpoint: '575px',
      numVisible: 1,
      numScroll: 1
    }
  ]
  useEffect(() => {
    DestinationService.map((value) => {
      setDestinations((destinations) => [...destinations, value]);
    })
  }, [])
  const destTemplate = (destination: Destination) => {
    return (
      <a href={destination.mapLink}>
        <div className={"group w-[300px] bg-cover bg-no-repeat h-[600px] flex items-end rounded-3xl hover:grayscale lg:ml-6"} style={{ backgroundImage: `url('${destination.imgURL}')`, backgroundPositionX: "center" }} role={"presentation"}>
          <h3 className={"text-5xl p-6 font-bold transition-transform duration-300 group-hover:-translate-y-8"}>{t(destination.name)}</h3>
        </div>
      </a>
    )
  }
  return (
    <div className={"flex flex-col px-10 xl:px-56 py-10 gap-10"}>
      <div className={"flex flex-col md:flex-row gap-3"}>
        <div className={"md:w-3/5"}>
          <hr
            className={"border-green-main dark:border-white border-2 max-w-96"}
          />
          <h2
            className={
              "uppercase font-extrabold text-green-main dark:text-white text-2xl sm:text-4xl md:text-6xl md:mb-4"
            }>
            {t("Explore More")} <br /> {t("East Nusa Tenggara")}
          </h2>
        </div>
        <p className={"text-green-main dark:text-white md:w-2/5"}>
          {t("Not sure what to do on your next trip to East Nusa Tenggara? No worries. We have gathered a selection of curated destinations from different parts of the provience.")}
        </p>
      </div>
      <div className={"text-white"}>
        <Carousel value={destinations} numVisible={3} numScroll={3} responsiveOptions={responsiveOptions} autoplayInterval={10000} circular itemTemplate={destTemplate} />
      </div>
    </div>
  );
}