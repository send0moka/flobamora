import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { useEffect, useState } from "react";

export function Achievement() {
  const { t } = useTranslation();
  const achievements = [
    {
      title: t("1st Best in Travel 2020 Competition"),
      desc: t("The Ministry of Tourism and Creative Economy of the Republic of Indonesia has won the 1st Best in Travel 2020 competition in the category of Best Destination for Sustainable Tourism Development."),
      link: "https://www.youtube.com/watch?v=yG3RowE35sA",
    },
    {
      title: t("Wae Rebo Village - UNECSO World Heritage Site 2012"),
      desc: t("Wae Rebo Village is a traditional village located in the Manggarai Regency, East Nusa Tenggara. It is a UNESCO World Heritage Site 2012."),
      link: "https://www.visitsoutheastasia.travel/activity/unesco-top-award-of-excellence-2012-for-wae-rebos-mbaru-niang-traditional-houses-on-flores/",
    },
    {
      title: t("Komodo National Park - UNESCO World Heritage Site 1991"),
      desc: t("Komodo National Park is a national park in Indonesia located within the Lesser Sunda Islands in the border region between the provinces of East Nusa Tenggara and West Nusa Tenggara."),
      link: "https://en.unesco.org/biosphere/aspac/komodo",
    },
    {
      title: t("Pink Beach - 50 Best Beaches in the World 2019"),
      desc: t("Pink Beach is one of the best beaches in the world. It is located in Komodo National Park, East Nusa Tenggara."),
      link: "https://en.tempo.co/read/1830832/indonesias-pink-beach-on-komodo-island-among-worlds-best-beaches",
    },
  ];
  const [leafTlX, setleafTlX] = useState('-26rem');
  const [leafTlY, setleafTlY] = useState('9rem');
  const [earthTlX, setearthTlX] = useState('-13rem');
  const [earthTlY, setearthTlY] = useState('26rem');
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 640) {
        setleafTlX('-20rem');
        setleafTlY('6rem');
        setearthTlX('-8rem');
        setearthTlY('20rem');
      } else {
        setleafTlX('-26rem');
        setleafTlY('9rem');
        setearthTlX('-13rem');
        setearthTlY('26rem');
      }
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const altEarth = t("earth-en");
  let srcEarth;
  if (altEarth === "earth-en") {
    srcEarth = "images/earth-en.png"
  } else if (altEarth === "earth-id") {
    srcEarth = "images/earth-id.png"
  }
  const altWave = t("wave-en");
  let srcWave;
  if (altWave === "wave-en") {
    srcWave = "images/wave-en.png"
  } else if (altWave === "wave-id") {
    srcWave = "images/wave-id.png"
  }
  const altLeaf = t("leaf-en");
  let srcLeaf;
  if (altLeaf === "leaf-en") {
    srcLeaf = "images/leaf-en.png"
  } else if (altLeaf === "leaf-id") {
    srcLeaf = "images/leaf-id.png"
  }
  return (
    <div class="h-screen flex flex-col lg:flex-row justify-center items-center mt-96 md:mt-[30rem] lg:mt-10">
      <div class="lg:w-1/2 flex justify-end lg:-translate-x-10 xl:-translate-x-32 scale-75 md:scale-100 lg:scale-75 xl:scale-100">
        <img src="images/komodo.png" alt="komodo" class="w-[30rem] h-fit z-0" />
        <motion.div
          style={{
            position: "absolute",
            width: "7rem",
            zIndex: 10,
            translateX: earthTlX,
            translateY: earthTlY
          }}
          animate={{ rotate: [0, 10, -10, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <img src={srcEarth} alt={altEarth} />
        </motion.div>
        <motion.div
          style={{
            position: "absolute",
            width: "7rem",
            zIndex: 10,
            translateX: leafTlX,
            translateY: leafTlY
          }}
          animate={{ rotate: [0, 10, -10, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <img src={srcLeaf} alt={altLeaf} />
        </motion.div>
        <motion.div
          style={{
            position: "absolute",
            width: "7rem",
            zIndex: 10,
            translateX: "-5rem",
            translateY: "-2rem"
          }}
          animate={{ rotate: [0, 10, -10, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <img src={srcWave} alt={altWave} />
        </motion.div>
      </div>
      <div class="lg:w-1/2 pt-10 md:pt-32 lg:pt-0 pb-96 lg:pb-0 px-4 md:px-10 lg:px-0 lg:pr-20 xl:pr-0">
        <h1
          className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl"
          style={{
            fontFamily: "Dela Gothic One",
          }}>
          {t("Achievement")}
        </h1>
        <p className="my-4 text-justify opacity-60 sm:text-left xl:w-[40rem]">
          {t("East Nusa Tenggara's magnificent beaches, nature, wildlife, and surf breaks have brought it global attention as an eco-tourism hotspot. We continues to earn accolades for its sustainability initiatives and wealth of natural attractions.")}
        </p>
        <Accordion type="single" collapsible className="xl:w-[40rem] opacity-80">
          {achievements.map((achievement, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>
                <b class="text-left">{achievement.title}</b>
              </AccordionTrigger>
              <AccordionContent>
                <p>{achievement.desc}</p>
                <a href={achievement.link} target="_blank" rel="noreferrer" class="text-emerald-500 hover:underline">
                  {t("More")}
                </a>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}