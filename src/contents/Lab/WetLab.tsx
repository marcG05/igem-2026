import { ContentPage, SectionsTemplate } from "../../components/ContentRender";
import { Experiment, Protocols, BacterialCount, GramColoration , Leak, Chemical, PlantGrow, PlantElect, TestEvolution, FinalTest} from "./WetLabSection";
import Reference from "../../components/Reference";
import { NormalText } from "../../components/Typography";

const reference = `Coppi, M. V., Leang, C., Sandler, S. J., & Lovley, D. R. (2001). Development of a Genetic System for Geobacter sulfurreducens. Applied and Environmental Microbiology, 67(7), 31803187. https://doi.org/10.1128/AEM.67.7.3180-3187.2001 
Fernández, M. L., & Reigada, R. (2014). Effects of Dimethyl Sulfoxide on Lipid Membrane Electroporation. The Journal Of Physical Chemistry B, 118(31), 93069312. https://doi.org/10.1021/jp503502s  
Gibson, D. G. and al. (2009) Nature Methods, 343-345.  
Gibson Assembly Cloning Kit. Instruction manual, 2015. New England BioLabs.  
Green, M. R. et J. Sambrook. 2012, Molecular cloning: a laboratory manual, 4th ed. Cold Spring Harbour Laboratory Press, Cold Spring Harbor, N. Y.  
Jiang, J., He, P., Luo, Y., Peng, Z., Jiang, Y., Hu, Y., Qi, L., Dong, X., Dong, Y., & Shi, L. (2023). The varied roles of pilA-N, omcE, omcS, omcT, and omcZ in extracellular electron transfer by Geobacter sulfurreducens. Frontiers in Microbiology, 14. https://doi.org/10.3389/fmicb.2023.1251346 
Lovley, D. R., & Walker, D. J. F. (2019). Geobacter protein nanowires. Frontiers In Microbiology, 10. https://doi.org/10.3389/fmicb.2019.02078 
MolecularCloud. (n.d.). What is Gibson assembly? MolecularCloud. https://www.molecularcloud.org/what-is-Gibson-assembly.html 
New England Biolabs. (n.d.). EcoRV. New England Biolabs. https://www.neb.com/en-ca/products/r0195-ecorv 
New England Biolabs. (n.d.). Restriction of foreign DNA by E. coli K-12. New England Biolabs. https://www.neb.com/en-us/tools-and-resources/usage-guidelines/restriction-of-foreign-dna-by-e-coli-k-12 
Primer Premier : : Software for PCR Primer Design | Primer Design Program. (s. d.). https://www.premierbiosoft.com/primerdesign/ 
Steward, K., PhD, & Steward, K., PhD. (2024, 16 février). An Introduction to Electroporation – A Tool for Transfection and Competent Cell Generation. Cell Science From Technology Networks. https://www.technologynetworks.com/cell-science/articles/an-introduction-to-electroporation-a-tool-for-transfection-and-competent-cell-generation-363195  `


export function Wetlab() {
  return (
    <ContentPage>

      <SectionsTemplate title="Bacterial Count  of the Plant Rhizosphere (February 20th)" mt="4em" left="0" mb="2em">
        <BacterialCount />
      </SectionsTemplate>

      <SectionsTemplate title="Gram coloration   (Staining on February 21th and microscopic observations on February 26th)" mt="2em" left="0" mb="2em">
        <GramColoration />
      </SectionsTemplate>

      <SectionsTemplate title="Leakage test of the prototypes  (February 28th and March 31st)" mt="2em" left="0" mb="2em">
        <Leak />
      </SectionsTemplate>

      <SectionsTemplate title="Chemical battery test  (March 31st)" mt="2em" left="0" mb="2em">
        <Chemical />
      </SectionsTemplate>

      <SectionsTemplate title="Plant growth  in selective medium prior to battery electricity test (April 3rd  to 10th)" mt="2em" left="0" mb="2em">
        <PlantGrow />
      </SectionsTemplate>
      
      <SectionsTemplate title="Plant electricity test (April 10th)" mt="2em" left="0" mb="2em">
        <PlantElect />
      </SectionsTemplate>

      <SectionsTemplate title="Test and evolution of the prototype summer 2025" mt="2em" left="0" mb="2em">
        <TestEvolution />
      </SectionsTemplate>

      <SectionsTemplate title="Final test (September 15th to September 20) " mt="2em" left="0" mb="2em">
        <FinalTest />
      </SectionsTemplate>

      <SectionsTemplate title="Experiment" mt="2em" left="0" mb="2em">
        <Experiment />
      </SectionsTemplate>

      <SectionsTemplate title="Protocols" mt="2em" left="0" mb="2em">
        <Protocols />
      </SectionsTemplate>
      {/* References inside ContentPage but excluded from sidebar */}
      <SectionsTemplate title="" mt="2em" left="0" mb="2em" excludeFromSidebar>
        <Reference title="References"> <NormalText> {reference} </NormalText></Reference>
      </SectionsTemplate>
    </ContentPage>
  );
}
