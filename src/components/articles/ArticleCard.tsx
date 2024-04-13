import { useTranslation } from "react-i18next";
export default function ArticleCard({
  imgURL,
  datePublished,
  title,
  slug,
}: {
  imgURL: string;
  datePublished: string;
  title: string;
  slug: string;
}) {
  const { t } = useTranslation();
  return (
    <div className={"flex flex-col gap-5 hover:translate-y-1 transition-transform duration-300"}>
      <div className={"flex flex-col gap-1"}>
        <img src={imgURL} alt="" className={"rounded-xl h-[250px]"} />
        <span>{datePublished}</span>
        <h4 className={"font-bold text-3xl"}>{t(title)}</h4>
      </div>
      <a href={`/articles/${slug}`} className={"text-green-main hover:underline"}>
        {t("Explore More")} →
      </a>
    </div>
  );
}
