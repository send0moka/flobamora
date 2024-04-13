import { useEffect, useState } from "preact/hooks";
import { useTheme } from "./theme-provider";
import logodark from "/svgs/logo-dark.svg";
import logolight from "/svgs/logo-light.svg";
import { WeatherType, getWeather } from "@/lib/getWeather";
import { getUserTime } from "@/lib/getTime";
import "@fontsource/dela-gothic-one";
import { useTranslation } from "react-i18next";
import { SocialIcon } from 'react-social-icons'

export default function Footer() {
  const [weather, setWeather] = useState<WeatherType>();
  const [time, setTime] = useState(getUserTime());
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getWeather();
        setWeather(data);
      } catch (error) {
        console.error("Error fetching weather:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getUserTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const { theme } = useTheme();
  const { t } = useTranslation();
  return (
    <div className={"container mt-10"}>
      <div
        className={
          "grid md:grid-cols-4 md:grid-rows-none mb-10 text-center md:text-left"
        }>
        <div className={"flex flex-col items-start text-center"}>
          <a href="/" class="flex items-center mx-auto">
            <img
              src={theme === "dark" ? logodark : logolight}
              alt="logo"
              width={75}
            />
            <h3 class="uppercase text-2xl font-bold">flobamora</h3>
          </a>
          <div class="mx-auto -translate-y-2 font-mono"><p class="opacity-50">{t("Last Year was visited by")}</p><p><b>{t("1.5 million")}</b><span class="opacity-50">{t(" tourists.")}</span></p></div>
          <div
            className={
              "flex flex-col w-full items-center justify-center text-4xl font-extrabold"
            }
            style={{
              fontFamily: "Dela Gothic One",
              textShadow: "5px 5px 0px rgba(0, 0, 0, 0.5)",
            }}>
            <div>{time}</div>
          </div>
          <div
            className={
              "pt-2 flex flex-col w-full items-center justify-center text-2xl font-semibold"
            }>
            <div>☼ {weather ? weather.current.temp_c : "--"}°C</div>
          </div>
        </div>
        <div className={"p-4 flex flex-col gap-3"}>
          <h4 className={"font-bold text-lg"}>Flobamora</h4>
          <div>
            <div><a href="/" rel="noopener" className="opacity-50 hover:opacity-100 transition-all">{t("Home")}</a></div>
            <div><a href="/articles" rel="noopener" className="opacity-50 hover:opacity-100 transition-all">{t("Articles")}</a></div>
            <div><a href="/accomodations" rel="noopener" className="opacity-50 hover:opacity-100 transition-all">{t("Lodging & Accommodations")}</a></div>
          </div>
        </div>
        <div className={"p-4 flex flex-col gap-3"}>
          <h4 className={"font-bold text-lg"}>{t("Data Source")}</h4>
          <div>
            <div><a href="https://www.detik.com/" target="_blank" rel="noopener" className="opacity-50 hover:opacity-100 transition-all">Detik.com</a></div>
            <div><a href="https://www.wikipedia.org/" target="_blank" rel="noopener" className="opacity-50 hover:opacity-100 transition-all">Wikipedia</a></div>
            <div><a href="https://www.indonesia.travel/" target="_blank" rel="noopener" className="opacity-50 hover:opacity-100 transition-all">Indonesia Travel</a></div>
            <div><a href="https://www.kompas.com/" target="_blank" rel="noopener" className="opacity-50 hover:opacity-100 transition-all">Kompas.com</a></div>
            <div><a href="https://www.tripadvisor.co.id/" target="_blank" rel="noopener" className="opacity-50 hover:opacity-100 transition-all">Tripadvisor</a></div>
            <div><a href="https://www.gotravelaindonesia.com/" target="_blank" rel="noopener" className="opacity-50 hover:opacity-100 transition-all">gotravela Indonesia</a></div>
          </div>
        </div>
        <div className={"p-4 flex flex-col gap-3"}>
          <h4 className={"font-bold text-lg"}>{t("About Us")}</h4>
          <div class="flex gap-2 mx-auto md:mx-0">
            <SocialIcon network="x" className="hover:grayscale hover:translate-y-1 transition-all duration-300 cursor-pointer" />
            <SocialIcon network="tiktok" className="hover:grayscale hover:translate-y-1 transition-all duration-300 cursor-pointer" />
            <SocialIcon network="instagram" className="hover:grayscale hover:translate-y-1 transition-all duration-300 cursor-pointer" />
            <SocialIcon network="youtube" className="hover:grayscale hover:translate-y-1 transition-all duration-300 cursor-pointer" />
          </div>
        </div>
      </div>
      <hr className={"w-full border-black"} />
      <div className={"mx-auto text-center text-sm text-neutral-400 py-10"}>
        Copyright 2024 <a href="https://github.com/sendomoka/flobamora" class="hover:underline hover:text-white transition-all duration-300" >Flobamora</a>. All rights reserved.
      </div>
    </div>
  );
}
