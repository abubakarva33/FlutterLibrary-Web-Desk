import { articleData, screenData, templateData } from "../DummyData";
import ArticleEach from "./components/ArticleEach";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ScreenHeader from "./components/ScreenHeader";
import SectionHeader from "./components/SectionHeader";
import SideHeader from "./components/SideHeader";
import TemplateEach from "./components/TemplateEach";

const Home = () => {
  return (
    <div className="grid  grid-cols-12">
      <div className=" col-span-2">
        <SideHeader />
      </div>
      <div className="mx-5 col-span-10">
        <Header />
        <div className="flex justify-center my-10">
          <div className="max-w-2xl">
            <h1 className="text-center text-4xl	">Build your next App even faster!</h1>
            <p className="text-center text-slate-500	mt-2">
              Beautifully designed, expertly crafted Flutter components and templates, to jumpstart
              your projects and speed up your development process.
            </p>
          </div>
        </div>
        <SectionHeader title="Templates" />
        <div className=" grid grid-cols-1	md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {templateData?.map((item, ind) => (
            <TemplateEach data={item} key={ind} />
          ))}
        </div>
        <SectionHeader title="Articles" />
        <div className=" grid grid-cols-1	md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {articleData?.map((item, ind) => (
            <ArticleEach data={item} key={ind} />
          ))}
        </div>
        <SectionHeader title="Screens" />
        <ScreenHeader />
        <div className=" grid grid-cols-2	md:grid-cols-3 lg:grid-cols-5 gap-4 mb-10">
          {screenData?.map((item, ind) => (
            <img src={`/images/${item?.image}.webp`} alt="" key={ind} className="rounded-lg" />
          ))}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
