import { ContentPage, SectionsTemplate } from "../../components/ContentRender";
import Reference from "../../components/Reference";
import { NormalText } from "../../components/Typography";
import { Description, Engineering } from "./sections_texte";


const reference = `Gibson, D. G. and al. (2009) Nature Methods, 343-345.
Primer Premier : : Software for PCR Primer Design | Primer Design Program. (s. d.). https://www.premierbiosoft.com/primerdesign/
Jiang, J., He, P., Luo, Y., Peng, Z., Jiang, Y., Hu, Y., Qi, L., Dong, X., Dong, Y., & Shi, L. (2023). The varied roles of pilA-N, omcE, omcS, omcT, and omcZ in extracellular electron transfer by Geobacter sulfurreducens. Frontiers in Microbiology, 14. https://doi.org/10.3389/fmicb.2023.1251346
Hu, Y., Wang, Y., Han, X., Shan, Y., Li, F., & Shi, L. (2021). Biofilm Biology and Engineering of Geobacter and Shewanella spp. For Energy Applications. Frontiers in Bioengineering and Biotechnology, 9, 786416. https://doi.org/10.3389/fbioe.2021.786416
Steward, K., PhD, & Steward, K., PhD. (2024, 16 février). An Introduction to Electroporation – A Tool for Transfection and Competent Cell Generation. Cell Science From Technology Networks. https://www.technologynetworks.com/cell-science/articles/an-introduction-to-electroporation-a-tool-for-transfection-and-competent-cell-generation-363195`;

export function Project() {
  return (
    <ContentPage>
      <SectionsTemplate title="Description" mt="4em" left="" mb="2em">
        <Description />
      </SectionsTemplate>

      <SectionsTemplate title="Engineering" mt="2em" left="" mb="2em">
        <Engineering />
      </SectionsTemplate>

      <Reference title="Reference">
        <NormalText>
          {reference}
        </NormalText>
      </Reference>

    </ContentPage>
  );
}


