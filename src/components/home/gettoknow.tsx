import { articles } from "@/data/articles";
import { useTranslation } from "react-i18next";

export default function GetToKnow() {
  const { t } = useTranslation();
  return (
    <div
      className={"w-full h-screen left-0 bg-cover bg-center"}
      style={{
        backgroundImage:
          "url('https://raw.githubusercontent.com/sendomoka/flobamora/7b5edfeb299d4746d08b4b1509117f88b799330a/public/images/Padar%20Island/Wendy%20Stevian.jpg')",
      }}>
      <div
        className={
          "absolute w-full min-h-screen left-0 bg-cover bg-center px-10 mx-auto flex flex-col justify-center items-start gap-4 md:gap-7 bg-black/70"
        }>
        <div
          className={
            "sm:px-0 md:w-full xl:w-3/4 flex flex-col md:flex-row md:mx-auto md:justify-between text-[#FAFAFA]"
          }>
          <div className={"flex flex-col justify-center "}>
            <hr className={"border-white border-2 max-w-[27rem]"} />
            <h2
              className={
                "font-extrabold text-2xl sm:text-4xl md:text-6xl md:mb-4 text-balance"
              }>
              {t("GET TO KNOW EAST NUSA TENGGARA")}
            </h2>
            <a href={"/articles"} className={"font-semibold hover:translate-y-1 transition-transform duration-300"}>
              {t("Explore all articles")} →
            </a>
          </div>
          <div className={"hidden md:block md:w-1/3"}>
            {t("Here are a few things to help you get acquainted with this unique province in Indonesia, East Nusa Tenggara (NTT).")}
          </div>
        </div>
        {articles.map((article, key) => {
          if (key < 2)
            return (
              <ArticleCard
                title={article.title}
                description={
                  article.articleMainDescription[0].length > 300
                    ? article.articleMainDescription[0].substring(0, 300) +
                      "...."
                    : article.articleMainDescription[0]
                }
                imgURL={article.imgURL}
                slug={article.slug}
              />
            );
        })}
      </div>
    </div>
  );
}

function ArticleCard({
  imgURL,
  title,
  description,
  slug,
}: {
  imgURL: string;
  title: string;
  description: string;
  slug: string;
}) {
  const { t } = useTranslation();
  return (
    <div
      className={
        "w-full sm:px-0 md:w-full xl:w-3/4 flex flex-col md:flex-row gap-0 md:gap-1 mx-auto hover:translate-y-1 transition-transform duration-300"
      }>
      <img
        src={imgURL}
        height={"200px"}
        className={"max-w-[320px] object-cover rounded-md"}
        alt=""
      />
      <div
        className={
          " w-full text-white rounded-b-lg flex flex-col gap-1 md:ml-5"
        }>
        <a href={`/articles/${slug}`}>
          <h3 className={"text-xl md:text-4xl font-bold"}>{t(title)}</h3>
        </a>
        <p className={"hidden md:block w-3/5"}>{t(description)}</p>
        <a href={`/articles/${slug}`}>
          <span className={"font-semibold mt-3 hidden md:block hover:underline"}>
            {t("Read More")} →
          </span>
        </a>
      </div>
    </div>
  );
}
