import { ContentPage, SectionsTemplate } from "../../components/ContentRender";
import { Battery, Plant, Materials_and_assembly, BrewerSpentGrain, Bacteria, Parts } from "./DryLabSections";
import Reference from "../../components/Reference";
import { NormalText } from "../../components/Typography";


const reference = `Banerjee, Aritro, Rajnish Calay, et Mohamad Mustafa. 2022. « Review on Material and Design of Anode for Microbial Fuel Cell ». Energies 15(6):2283. doi:10.3390/en15062283. 

Ringeisen, Bradley R., Emily Henderson, Peter K. Wu, Jeremy Pietron, Ricky Ray, Brenda Little, Justin C. Biffinger, et Joanne M. Jones-Meehan. 2006. « High Power Density from a Miniature Microbial Fuel Cell Using Shewanella Oneidensis DSP10 ». Environmental Science & Technology 40(8):2629‑34. doi:10.1021/es052254w. 

Sevda, Surajbhan, et T. R. Sreekrishnan. 2012. « Effect of Salt Concentration and Mediators in Salt Bridge Microbial Fuel Cell for Electricity Generation from Synthetic Wastewater ». Journal of Environmental Science and Health. Part A, Toxic/Hazardous Substances & Environmental Engineering 47(6):878‑86. doi:10.1080/10934529.2012.665004. 

Rajaseger, G., Chan, K. L., Tan, K. Y., Ramasamy, S., Khin, M. C., Amaladoss, A., & Haribhai, P. K. (2023). Hydroponics: current trends in sustainable crop production. Bioinformation, 19(9), 925–938. https://doi.org/10.6026/97320630019925 

Sarma, P. J., & Mohanty, K. (2018). Epipremnum aureum and Dracaena braunii as indoor plants for enhanced bio-electricity generation in a plant microbial fuel cell with electrochemically modified carbon fiber brush anode. Journal of Bioscience and Bioengineering, 126(3), 404–410. https://doi.org/10.1016/j.jbiosc.2018.03.009 

Lin, W. C., Coppi, M. V., & Lovley, D. R. (2004). Geobacter sulfurreducens Can Grow with Oxygen as a Terminal Electron Acceptor. Applied and Environmental Microbiology, 70(4), 2525–2528. https://doi.org/10.1128/aem.70.4.2525-2528.2004 

Bertling, K., Banerjee, A., & Saffarini, D. (2021). Aerobic Respiration and Its Regulation in the Metal Reducer Shewanella oneidensis. Frontiers in Microbiology, 12. https://doi.org/10.3389/fmicb.2021.723835 

Lin, W. & Coppi, M. & Lovley, D.. (2004). Geobacter sulfurreducens Can Grow with Oxygen as a Terminal Electron Acceptor. Applied and environmental microbiology. 70. 2525-8. 10.1128/AEM.70.4.2525-2528.2004. 

Frühauf-Wyllie, H. M. et Holtmann, D. (2022). Geobacter sulfurreducens metabolism at different donor/acceptor ratios. MicrobiologyOpen, 11(5), e1322. https://doi.org/10.1002/mbo3.1322 

Ikram, S., Huang, L., Zhang, H., Wang, J. et Yin, M. (2017). Composition and Nutrient Value Proposition of Brewers Spent Grain. Journal of Food Science, 82(10), 2232‑2242. https://doi.org/10.1111/1750-3841.13794 

Negassa, L. W., Mohiuddin, M. et Tiruye, G. A. (s. d.). Treatment of brewery industrial wastewater and generation of sustainable bioelectricity by microbial fuel cell inoculated with locally isolated microorganisms. Journal of Water Process Engineering, 41. https://doi.org/10.1016/j.jwpe.2021.102018 

Varanasi, J. L. et Das, D. (2018). Characteristics of Microbes Involved in Microbial Fuel Cell. Dans D. Das (dir.), Microbial Fuel Cell: A Bioelectrochemical System that Converts Waste to Watts (p. 43‑62). Springer International Publishing. https://doi.org/10.1007/978-3-319-66793-5_3 

Frühauf-Wyllie, H. M. et Holtmann, D. (2022). Geobacter sulfurreducens metabolism at different donor/acceptor ratios. MicrobiologyOpen, 11(5), e1322. https://doi.org/10.1002/mbo3.1322 

Hu, Y., Wang, Y., Han, X., Shan, Y., Li, F. et Shi, L. (2021). Biofilm Biology and Engineering of Geobacter and Shewanella spp. for Energy Applications. Frontiers in Bioengineering and Biotechnology, 9, 786416. https://doi.org/10.3389/fbioe.2021.786416 

Kai, A., Tokuishi, T., Fujikawa, T., Kawano, Y., Ueki, T., Nagamine, M., Sakakibara, Y., Suiko, M. et Inoue, K. (s. d.). Proteolytic Maturation of the Outer Membrane c-Type Cytochrome OmcZ by a Subtilisin-Like Serine Protease Is Essential for Optimal Current Production by Geobacter sulfurreducens. Applied and Environmental Microbiology, 87(12), e02617-20. https://doi.org/10.1128/AEM.02617-20 

Niju, S. et Priyadharshini, K. (2023). A review on microbial fuel cell technology for Brewery industry wastewater treatment – From fundamentals to pilot scale studies. Environmental Progress & Sustainable Energy, 42(6), e14191. https://doi.org/10.1002/ep.14191 

Obileke, K., Onyeaka, H., Meyer, E. L. et Nwokolo, N. (2021). Microbial fuel cells, a renewable energy technology for bio-electricity generation: A mini-review. Electrochemistry Communications, 125, 107003. https://doi.org/10.1016/j.elecom.2021.107003 

Pandit, S. et Das, D. (2018). Principles of Microbial Fuel Cell for the Power Generation. Dans D. Das (dir.), Microbial Fuel Cell: A Bioelectrochemical System that Converts Waste to Watts (p. 21‑41). Springer International Publishing. https://doi.org/10.1007/978-3-319-66793-5_2 

Richter, L. V., Sandler, S. J. et Weis, R. M. (2012). Two isoforms of Geobacter sulfurreducens PilA have distinct roles in pilus biogenesis, cytochrome localization, extracellular electron transfer, and biofilm formation. Journal of Bacteriology, 194(10), 2551‑2563. https://doi.org/10.1128/JB.06366-11 

Tou, I., Azri ,Y., George ,I. F., Bouzid ,O., Khemili-Talbi ,S., Sadi ,M., Kebbouche-Gana ,S., Anzil ,A. et and Laichouchi, A. (2024). Bacterial community issued from a Chlorophytum plant-microbial fuel cell for electricity generation. Biofuels, 15(5), 495‑504. https://doi.org/10.1080/17597269.2023.2261751 

Varanasi, J. L. et Das, D. (2018). Characteristics of Microbes Involved in Microbial Fuel Cell. Dans D. Das (dir.), Microbial Fuel Cell: A Bioelectrochemical System that Converts Waste to Watts (p. 43‑62). Springer International Publishing. https://doi.org/10.1007/978-3-319-66793-5_3 

Yunda, E., Phan Le, Q. N., Björn, E. et Ramstedt, M. (2023). Biochemical characterization and mercury methylation capacity of Geobacter sulfurreducens biofilms grown in media containing iron hydroxide or fumarate. Biofilm, 6, 100144. https://doi.org/10.1016/j.bioflm.2023.100144 

Primer Premier : : Software for PCR Primer Design | Primer Design Program. (s. d.). https://www.premierbiosoft.com/primerdesign/ 

Addgene : PBBR1MCS-2. (s. d.). https://www.addgene.org/85168/  

Coppi, M. V., Leang, C., Sandler, S. J., & Lovley, D. R. (2001). Development of a Genetic System for Geobacter sulfurreducens. Applied and Environmental Microbiology, 67(7), 31803187. https://doi.org/10.1128/AEM.67.7.3180-3187.2001 

Gibson, D. G. and al. (2009) Nature Methods, 343-345.  

Jiang, J., He, P., Luo, Y., Peng, Z., Jiang, Y., Hu, Y., Qi, L., Dong, X., Dong, Y., & Shi, L. (2023). The varied roles of pilA-N, omcE, omcS, omcT, and omcZ in extracellular electron transfer by Geobacter sulfurreducens. Frontiers in Microbiology, 14. https://doi.org/10.3389/fmicb.2023.1251346 

Lovley, D. R., & Walker, D. J. F. (2019). Geobacter protein nanowires. Frontiers In Microbiology, 10. https://doi.org/10.3389/fmicb.2019.02078 `


export function DryLab() {
  return (
    <ContentPage>
      <SectionsTemplate title="Battery" mt="4em" left="0" mb="2em">
        <Battery />
      </SectionsTemplate>

      <SectionsTemplate title="Materials and assembly" mt="2em" left="0" mb="2em">
        <Materials_and_assembly />
      </SectionsTemplate>

      <SectionsTemplate title="Plant" mt="2em" left="0" mb="2em">
        <Plant />
      </SectionsTemplate>

      <SectionsTemplate title="Brewer's Spent Grain" mt="2em" left="0" mb="2em">
        <BrewerSpentGrain />
      </SectionsTemplate>

      <SectionsTemplate title="Bacteria" mt="2em" left="0" mb="2em">
        <Bacteria />
      </SectionsTemplate>

      <SectionsTemplate title="Parts" mt="2em" left="0" mb="2em">
        <Parts />
      </SectionsTemplate>

      {/* References inside ContentPage but excluded from sidebar */}
      <SectionsTemplate title="" mt="2em" left="0" mb="2em" excludeFromSidebar>
        <Reference title="References"> <NormalText> {reference} </NormalText></Reference>
      </SectionsTemplate>
    </ContentPage>
  );
}
