import { FadeColorDividerSection } from "@/components/fade-divider";
import { Achievement } from "@/components/home/achievement";
import { CardPlace } from "@/components/home/card-place";
import ExploreMore from "@/components/home/exploremore";
import GetToKnow from "@/components/home/gettoknow";
import { Hero } from "@/components/home/hero";

const Home = () => {
  return (
    <div class="flex flex-col w-full text-black dark:text-white">
      <section>
        <Hero />
        <FadeColorDividerSection />
      </section>
      <section>
        <CardPlace />
        <Achievement />
      </section>
      <section>
        <GetToKnow />
      </section>
      <section id="explore">
        <ExploreMore />
      </section>
    </div>
  );
};

export default Home;
