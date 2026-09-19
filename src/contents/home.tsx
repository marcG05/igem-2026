import Section2 from "../components/home/Section2";
import Section3 from "../components/home/Section3";
import Section4 from "../components/home/Section4";
import Section5 from "../components/home/Section5";
import Section6 from "../components/home/Section6";
import Splash from "../components/home/Splash";
import GoTop from "../components/navigations/GoTop";

export function Home() {
  return (
    <>
      <Splash />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <GoTop />
    </>
  );
}
