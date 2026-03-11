import { ContentPage, SectionsTemplate } from "../../components/ContentRender";
import { Introduction, Faraday, Nernst, Resistance, Conclusion } from "./math_section";
import { NormalText } from "../../components/Typography";
import Reference from "../../components/Reference";

const reference = `Blokesch. 2019. « The Type IV Pilus Protein PilU Functions as a PilT-Dependent Retraction ATPase ». PLOS Genetics 15(9):e1008393. doi:10.1371/journal.pgen.1008393.
Dhar, Bipro Ranjan, Junyoung Sim, Hodon Ryu, Hao Ren, Jorge W. Santo Domingo, Junseok Chae, et Hyung-Sool Lee. 2017. « Microbial activity influences electrical conductivity of biofilm anode ». Water Research 127:230‑38. doi:10.1016/j.watres.2017.10.028.
Ishii, Shun’ichi, Kazuya Watanabe, Soichi Yabuki, Bruce E. Logan, et Yuji Sekiguchi. 2008. « Comparison of Electrode Reduction Activities of Geobacter Sulfurreducens and an Enriched Consortium in an Air-Cathode Microbial Fuel Cell ». Applied and Environmental Microbiology 74(23):7348‑55. doi:10.1128/AEM.01639-08.
Levar, Caleb E., Colleen L. Hoffman, Aubrey J. Dunshee, Brandy M. Toner, et Daniel R. Bond. 2017. « Redox Potential as a Master Variable Controlling Pathways of Metal Reduction by Geobacter Sulfurreducens ». The ISME Journal 11(3):741‑52. doi:10.1038/ismej.2016.146.
Mouselly, Maryam, Hussain Alawadhi, et Sirugaloor Thangavel Senthilkumar. 2024. « Current Status of Ferro-/Ferricyanide for Redox Flow Batteries ». Current Opinion in Electrochemistry 48:101581. doi:10.1016/j.coelec.2024.101581.
Nevin, Kelly P., Byoung-Chan Kim, Richard H. Glaven, Jessica P. Johnson, Trevor L. Woodard, Barbara A. Methé, Raymond J. DiDonato, Sean F. Covalla, Ashley E. Franks, Anna Liu, et Derek R. Lovley. 2009. « Anode Biofilm Transcriptomics Reveals Outer Surface Components Essential for High Density Current Production in Geobacter Sulfurreducens Fuel Cells » édité par M. G. Marinus. PLoS ONE 4(5):e5628. doi:10.1371/journal.pone.0005628.
Reguera, Gemma, Kevin D. McCarthy, Teena Mehta, Julie S. Nicoll, Mark T. Tuominen, et Derek R. Lovley. 2005. « Extracellular Electron Transfer via Microbial Nanowires ». Nature 435(7045):1098‑1101. doi:10.1038/nature03661.
Richter, Hanno, Kelly P. Nevin, Hongfei Jia, Daniel A. Lowy, Derek R. Lovley, et Leonard M. Tender. 2009. « Cyclic Voltammetry of Biofilms of Wild Type and Mutant Geobacter Sulfurreducens on Fuel Cell Anodes Indicates Possible Roles of OmcB, OmcZ, Type IV Pili, and Protons in Extracellular Electron Transfer ». Energy & Environmental Science 2(5):506. doi:10.1039/b816647a.
Tan, Yang, Ramesh Y. Adhikari, Nikhil S. Malvankar, Joy E. Ward, Kelly P. Nevin, Trevor L. Woodard, Jessica A. Smith, Oona L. Snoeyenbos-West, Ashley E. Franks, Mark T. Tuominen, et Derek R. Lovley. 2016. « The Low Conductivity of Geobacter uraniireducens Pili Suggests a Diversity of Extracellular Electron Transfer Mechanisms in the Genus Geobacter ». Frontiers in Microbiology 07. doi:10.3389/fmicb.2016.00980.
Tang, Yinjie J., Romy Chakraborty, Héctor García Martín, Jeannie Chu, Terry C. Hazen, et Jay D. Keasling. 2007. « Flux Analysis of Central Metabolic Pathways in Geobacter Metallireducens during Reduction of Soluble Fe(III)-Nitrilotriacetic Acid ». Applied and Environmental Microbiology 73(12):3859‑64. doi:10.1128/AEM.02986-06.`;

export function Math() {
  return (
    <ContentPage>
      <SectionsTemplate title="Introduction" mt="4em" left="0" mb="0">
        <Introduction />
      </SectionsTemplate>

      <SectionsTemplate title="Faraday's Law model" mt="2em" left="0" mb="0">
        <Faraday />
      </SectionsTemplate>

      <SectionsTemplate title="Nernst model" mt="2em" left="0" mb="0">
        <Nernst />
      </SectionsTemplate>

      <SectionsTemplate title="Resistance model" mt="2em" left="0" mb="0">
        <Resistance />
      </SectionsTemplate>

      <SectionsTemplate title="Conclusion" mt="2em" left="0" mb="0">
        <Conclusion />
      </SectionsTemplate>

      <Reference title="References"> <NormalText> {reference} </NormalText></Reference>

    </ContentPage>
  );
}