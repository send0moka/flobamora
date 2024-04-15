import ArticleCard from "@/components/articles/ArticleCard";
import { articles } from "@/data/articles";
import { useTranslation } from "react-i18next";
import "@fontsource/dela-gothic-one";

export default function Articles() {
  const firstArticle = articles[0];
  const { t } = useTranslation();
  return (
    <div className={"flex flex-col gap-4"}>
      {/* Header */}
      <div
        className={
          "min-h-[500px] bg-cover bg-center bg-no-repeat w-full flex flex-col justify-center items-center text-center gap-10 px-3"
        }
        style={{
          backgroundImage: `url('https://raw.githubusercontent.com/send0moka/flobamora/7b5edfeb299d4746d08b4b1509117f88b799330a/public/images/Articles/5%20REASONS%20TO%20VISIT%20THE%20MAGNIFICENT%20KOMODO%20ISLAND/Deri%20Nazaroni.jpg')`,
        }}>
        <h1
          className={
            "font-extrabold text-3xl md:text-5xl xl:text-6xl shadow-xl text-white"
          }
          style={{
            fontFamily: "Dela Gothic One",
            textShadow: "5px 5px 0px rgba(0, 0, 0, 0.5)",
          }}>
          {t("Read handpicked articles to get you inspired by East Nusa Tenggara")}
        </h1>
      </div>
      {/* Latest Articles */}
      <div className={"container py-3"}>
        <div className={"flex flex-col gap-7"}>
          <hr className={"border-black max-w-80 border-[2px] mt-5 mb-2"} />
          <h2 className={"text-5xl font-bold"}>
            {t("LATEST ARTICLES")}
          </h2>
          {/* Featured */}
          <div className={"grid md:grid-cols-2 grid-flow-row gap-7 hover:translate-y-1 transition-transform duration-300"}>
            <img
              src="https://raw.githubusercontent.com/send0moka/flobamora/7b5edfeb299d4746d08b4b1509117f88b799330a/public/images/Articles/5%20MOVIES%20SET%20IN%20BEAUTIFUL%20EAST%20NUSA%20TENGGARA/dok.%20Miles%20Films%20_%20Humba%20Dreams.jpeg"
              alt=""
              className={"object-cover rounded-lg"}
            />
            <div className={"flex flex-col justify-between"}>
              <div className={"flex flex-col gap-3"}>
                <span className={"text-black-main"}>
                  {firstArticle.datePublished}
                </span>
                <h3 className={"font-bold text-4xl"}>
                  {t(firstArticle.title).toUpperCase()}
                </h3>
                {firstArticle.description?.map((value, key) => (
                  <p key={key} className={"text-justify"}>
                    {t(value)}
                  </p>
                ))}
              </div>
              <a href={`/articles/${firstArticle.slug}`}>
                <button
                  className={
                    "text-green-main rounded-3xl py-2 px-4 w-fit bg-green-main/20 font-semibold hover:text-white-main hover:bg-green-main"
                  }>
                  {t("Read More")}
                </button>
              </a>
            </div>
          </div>
          <div
            className={
              "grid aclgrid:grid-cols-2 md:grid-cols-3 grid-flow-row gap-7"
            }>
            {articles.map((value) => {
              if (value.slug !== "5-movies-set-in-beautiful-east-nusa-tenggara")
                return (
                  <ArticleCard
                    title={value.title}
                    datePublished={value.datePublished}
                    imgURL={value.imgURL}
                    slug={value.slug}
                    key={value.slug}
                  />
                );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
