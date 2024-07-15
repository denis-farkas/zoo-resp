import SectionAvis from "../../components/Section-avis";
import Mission from "../../components/Section-mission";
import Habitat from "../../components/section-habitat";
import Intro from "../../components/section-intro";
import PrestationS from "../../components/section-prestation";

const Home = () => {
  return (
    <div className="container">
      <Intro />
      <Habitat />
      <PrestationS />
      <Mission />
      <SectionAvis />
    </div>
  );
};

export default Home;
