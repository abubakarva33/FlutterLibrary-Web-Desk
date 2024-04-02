import { articleData, screenData, templateData } from "../../DummyData";
import ArticleEach from "../components/ArticleEach";
import SectionHeader from "../components/SectionHeader";
import TemplateEach from "../components/TemplateEach";

const Home = () => {
  return (
    <div>
      <SectionHeader title="Templates" />
      <div className=" grid grid-cols-1	md:grid-cols-2 lg:grid-cols-3 gap-4">
        {templateData?.map((item, ind) => (
          <TemplateEach data={item} key={ind} />
        ))}
      </div>
      <SectionHeader title="Articles" />
      <div className=" grid grid-cols-1	md:grid-cols-2 lg:grid-cols-3 gap-4">
        {articleData?.map((item, ind) => (
          <ArticleEach data={item} key={ind} />
        ))}
      </div>
      <SectionHeader title="Screens" />
      <div className=" grid grid-cols-2	md:grid-cols-3 lg:grid-cols-5 gap-4">
        {screenData?.map((item, ind) => (
          <img src={`/public/images/${item?.image}.webp`} alt="" key={ind} className="rounded-lg" />
        ))}
      </div>
    </div>
  );
};

export default Home;
