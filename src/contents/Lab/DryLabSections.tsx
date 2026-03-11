import { Box } from "@mui/material";
import { Subtitle1, NormalText, NormalTextBold } from "../../components/Typography";
import Figure from "../../components/Figure";



export function Battery() {
    const titre1 = `Principle and Functioning of a Microbial Fuel Cell `;
    const pathImage1 = "https://static.igem.wiki/teams/5756/assets/images/lab/sh-ma-pile-1.svg"
    const text1 = `A microbial fuel cell (MFC) is a bioelectrochemical system that generates electricity by using microorganisms. In this process, bacteria located in the anode chamber oxidize organic matter, such as sugars, acetate, or wastewater components. During this oxidation, electrons and protons are released. The bacteria transfer the electrons to the anode either directly through surface proteins, via conductive nanowires, or with the help of chemical mediators. The electrons then flow from the anode through an external circuit, producing an electrical current, and finally reach the cathode. At the same time, the protons migrate through a membrane or an electrolyte solution toward the cathode chamber. At the cathode, the electrons and protons recombine with a terminal electron acceptor, typically oxygen, which is reduced to form water. In this way, the MFC simultaneously produces electricity and contributes to the degradation of organic matter. It therefore has potential applications in renewable energy generation and wastewater treatment.  `;


    return (
        <Box component="div">
            <Subtitle1>{titre1}</Subtitle1>
            <NormalText>{text1}</NormalText>
            <Figure title="Figure 1 : Operating Mechanism of a Dual-Chamber Microbial Fuel Cell (MFC)  " g={1}>
                <img src={pathImage1} />
            </Figure>
        </Box>
    );
}

export function Materials_and_assembly() {
    const sous_titre1 = `Protonic membrane`;
    const text2 =  `In a microbial fuel cell, a physical separation between the compartments is necessary to avoid direct mixing of the substrates and products which would short-circuit the battery. However, proton exchange must be possible to maintain electrical neutrality by allowing protons to get to the cathode. This limits charge accumulation in the two compartments and stabilizes the system. To achieve this, two options are available: a salt bridge or a protonic membrane which is often called proton exchange membrane (PEM). Both allow the creation of a MFC, but the protonic membrane is designed for this purpose. In contrast to the salt bridge who permits the exchange of all ions, the PEM allows selective conduction of protons (H+). This selective conduction forces the electrical current because the electrons can only pass through the electrical circuit to go to the cathode. It is the electron flux in the circuit that creates exploitable electrical current. Which is why we chose a protonic membrane despite its higher cost. The membrane is PFSA D125-U Proton Exchange Membrane.`
    const sous_titre2 =  `MFC`
    const text4 = `All prototypes were 3D printed in PLA and were made of two chambers (for the anolyte and catholyte media) linked by a passageway for proton exchange. We used 3D printed PLA because it is accessible and free at our university. Two graphite electrodes immersed in each chamber are connected by a copper wire.  In literature, the MFC are more in the order of cm3, because the objective is to assemble many cells in series. Our team chose a bigger format to facilitate the manipulation and the 3D printing.`
    const sous_titre3 = `Anodic Chamber`
    const text5 = `The anodic chamber is where the electron ejection happens. The bacteria oxidize their medium and pass their electrons to the anode through their pilis. The challenge in this chamber is to force the ejected electrons to pass through the electrical circuit by having the anode as the only electron acceptor. This means that there must be no oxygen or any other acceptor in the anodic chamber.`
    const sous_titre4 = `Cathodic chamber`
    const text6 = `The cathodic chamber stayed the same throughout all the tests. The quality of a cathodic solution depends on on its ability to accept electrons.  It was the one described in many different articles developing MFC: an aqueous solution composed of 32.925g of K3[Fe(CN)6], 16g of NaCl, 0.4g of KCl, 2.88 g of Na2HPO4 and 0.49g of KH2PO4 , all of which is diluted in 2L of distilled water and adjusted to a pH of 7 .`

    return (
        <Box component="div">
            <NormalTextBold> {sous_titre1} </NormalTextBold>
            <NormalText> {text2} </NormalText>
            <NormalTextBold> {sous_titre2} </NormalTextBold>
            <NormalText> {text4} </NormalText>
            <NormalTextBold> {sous_titre3} </NormalTextBold>
            <NormalText> {text5} </NormalText>
            <NormalTextBold> {sous_titre4} </NormalTextBold>
            <NormalText> {text6} </NormalText>
        </Box>
    );
}

export function Plant() {
    const sous_titre1 = `Generating electricity with plants; our starting point`;
    const text1 = `Faced with global population growth and the increasing scarcity of agricultural resources, it is becoming essential to develop alternative methods of food production. Hydroponics offers several advantages, such as reduced space requirements thanks to the possibility of vertical cultivation, reduced water use, better control of the nutrients supplied to plants, and control over pathogens that can affect crops. 

In this project, the plant served as a support for the anode, allowing electroactive bacteria to form a biofilm on the root system. During photosynthesis, the plant uses CO₂ and light to produce energy, then releases excess nutrients through its roots. This allows electroactive bacteria to break down certain compounds and release electrons and protons. 

The reference experiment was conducted with Epipremnum aureum and Dracaena braunii, two common plant species with advantageous characteristics: growth at room temperature, tolerance to indirect lighting, rapid growth, ease of maintenance, and air-purifying properties. The anode contained the soil substrate, the plant, and the electroactive bacteria, while the cathode comprised a partially submerged electrode associated with a culture of aerobic microorganisms acting as final electron acceptors. Electricity production was measured over a period of 60 days under optimal conditions for plants and electroactive bacteria. The anode chamber was inoculated with anaerobic microorganisms twice, while the cathode chamber was constantly fed with a new aerobic microbial culture. 
 
However, for our experiment, the families of bacteria used, Geobacter and Shewanella, are facultative anaerobes. More specifically, Geobacter can grow with oxygen, but only in low concentrations. In addition, the anode and cathode are immersed in water, which poses a compatibility problem since the plant cannot survive in an oxygen-depleted environment. 
One option to explore would be to design a two-component system: a first system dedicated to plant growth, paired with a microbial fuel cell that would provide the electrical energy needed for artificial lighting of the plant, thus creating a self-sustaining energy cycle.` 

    const sous_titre2 = `For our project : `
    const text2 = `Because of the complexity of this aspect, we chose to put aside plant growth in our project. Our priority was to find a good consortium to generate electricity with our experimental battery. In the far future, we would like to form a biofilm that can produce electricity and sell this biofilm to farmers to integrate them at their farm. Our idea is further detailed in the entrepreneurial section of our wiki!`
    
    
    return (
        <Box component="div">
            <NormalTextBold> {sous_titre1} </NormalTextBold>
            <NormalText> {text1} </NormalText>
            <NormalTextBold> {sous_titre2} </NormalTextBold>
            <NormalText> {text2} </NormalText>
        </Box>
    );
}

export function BrewerSpentGrain(){
    const sous_titre3 = `Spent grain source`
    const text3 = `Brewers’ spent grain is a residual organic byproduct of the mashing step. In the beermaking process, malt and water are combined at high temperature and mixed in the mashing step. Then, the mixture is drained, and the residual liquid (wort) is used in further steps`
    const path1 = "https://static.igem.wiki/teams/5756/assets/images/lab/dreche-photoroom-1.svg"
    
    const text4 = `The solid part of brewery waste, known as the spent grains, are rich in fiber, proteins and phenolic compounds. It is usually used in animal feed. When stored under anaerobic conditions, spent grains can support the development of anaerobic microbial communities such as Geobacter spp. Other microorganisms such as lactic acid bacteria, acetic acid bacteria, facultative anaerobes can also be found in spent grain.  
In the final part of our project, we decided to use the spent grain as the source of our microbial consortium. It is important to maintain anaerobic conditions to promote the growth of Geobacter spp. `
    const sous_titre4 = `Culture medium used for the growth of Geobacter spp.`
    const text5 = `In the article of  (Negassa et al., s. d.), Geobacter spp. were isolated locally from brewery wastewater and sludge samples. The culture medium contained: “0.1 g/L of KCl, 1.5 g/L of NH4Cl, 0.6 g/L of NaH2PO4.H2O, 0.5 g/L of vitamin mixture and 0.5 g/L of trace mineral mix, 0.5 g/L nutrient broth, 2.5 g/L of NaHCO3 and 0.25 g/L glucose.”  

We also found a medium selective for Geobacter spp. which contained “0.1 g KCl, 1.5 g NH4Cl, 0.5 g Na2HPO4, 0.82 g Na-Acetate as electron donor, 4.8 g Na-fumarate as an electron acceptor, 2.5 g NaHCO3, 10 ml of vitamin mix, and 10 ml of trace mineral mix. Vitamin mix contained (per liter): 2 mg biotin; 2 mg folic acid; 10 mg pyridoxine-HCl; 5 mg thiamine-HCl × 2 H2O; 5 mg riboflavin; 5 mg nicotinic acid; 5 d-Ca-pantothenate; 0.1 mg vitamin B12; 5 mg p-aminobenzoic acid, and 5 mg lipoic acid. Trace element solution contained: 1.5 g nitrilotriacetic acid; 3 g MgSO4 × 7 H2O; 0.5 g MnSO4 × H2O; 1 g NaCl; 0.1 g FeSO4 × 7 H2O; 0.18 g CoSO4 × 7 H2O; 0.1 g CaCl2 × 2 H2O; 0.18 g ZnSO4 × 7 H2O; 0.01 g CuSO4 × 5 H2O; 0.02 g KAl(SO4)2 × 12 H2O; 0.01 g H3BO3; 0.01 g NaMoO4 × 2 H2O; 0.03 g NiCl2 × 6 H2O; 0.30 mg Na2SeO3 × 5 H2O; 0.40 mg Na2WO4 × 2 H2O)”.

Both media were similar, but we chose to use the second one for our experiments. Our goal was to maximize the availability of nutriments for Geobacter spp. and attempt to isolate it by providing optimal growth conditions within the beer sludge. 

We must note that the medium contains acetate as his electron donor. Acetate is the usual electron donor and main carbon source for Geobacter spp. This means that Geobacter can oxide acetate to generate energy through his metabolic pathways. We added the acetate to boost the metabolic activity of Geobacter leading to increased electron transfer to the anode. `
    const sous_titre5 = `Spent grain microbial fuel cell in literature`
    const text6 = `In the article of (Negassa et al., s. d.), Geobacter spp. were isolated from brewery waste sludge. The samples were spread on Petri dishes and were incubated for 1 week at 30 oC with acetate and Fe(III) to promote Geobacter growth. Their morphology was studied with a Gram staining. The isolated bacteria were then transferred into the medium detailed in the past section. The medium was then inoculated in the anode chamber. The article obtained 0.7 to 0.8V on the 5th to 11th day of inoculation with the brewery waste sludge. 
 
In a study published in Bioresource Technology in 2009 by Wen et al., electricity was produced directly from the brewery wastewater using a single chamber, air-cathode MFC. The anodic chamber had an inlet and an outlet, so the wastewater could be easily pumped in and out. It’s with this information that we decided to apply the fed-batch principle to our prototype. The volumes of the chamber in this study were also of 100 mL, which inspired the idea of trying a smaller prototype. The maximum voltage produced in this study was 0.578 V. 
 
In a 2015 study published in Environmental Science and Pollution Research by Miran et al., a dual chamber MFC was inoculated with anaerobic bacteria and a carbon source. The brewery waste was added later, when the voltage output was stable. The maximum voltage produced with the brewer's waste was 0.41 V. The microbial community that formed a biofilm around the anode was studied. Geobacter spp. was found among many other genus of electroactive bacteria. This study also helped us decide to use a fed-batch process in our prototype. 
 
In summary, the literature inspired us to use a fed-batch microbial fuel cell and demonstrated that Geobacter spp. can be found in the spent grain, making it a good consortium to generate electricity. `
    return (
        <Box component="div">
            <NormalTextBold> {sous_titre3} </NormalTextBold>
            <NormalText> {text3} </NormalText>
            <Figure title=" " g={1}>
                <img src={path1} />
            </Figure>
            <NormalText> {text4} </NormalText>
            <NormalTextBold> {sous_titre4} </NormalTextBold>
            <NormalText> {text5} </NormalText>
            <NormalTextBold> {sous_titre5} </NormalTextBold>
            <NormalText> {text6} </NormalText>            
        </Box>
    );
}

export function Bacteria(){
    const sous_titre1 = `Electroactive bacteria (Shewanella et Geobacter)`
    const text1 =  `An electroactive bacterium is a microorganism that oxidizes specific substrates and uses the resulting electrons as a source of energy for its metabolism. These electrons are then transferred across the phospholipid membrane to an external electron acceptor. Electroactive bacteria play a key role in the biogeochemical cycling of carbon and metals and are found in a variety environment. They are also widely used as tools in electrochemical biosensors, in bioremediation and microbial fuel cells (MFCs) field, which is the focus of our project.  

Our goal is to bring electroactive bacteria into contact with both an electron donor and an electron acceptor, the anode, to initiate electron flow, the fundamental basis of electricity production. To ensure this process works efficiently, the anodic chamber must be maintained under anaerobic conditions, otherwise the transferred electrons will preferentially reduce dioxygen rather than flow to the anode. 

During our project, we focused on two genera of electroactive bacteria: Geobacter and Shawanella spp. Both transfer electrons from cytoplasmic respiratory oxidation reactions to external metallic minerals, a process known as extracellular electron transfer (EET). We chose these genera because they are well-studied, documented and and achievable with our resources. For example, cultures with high abundance of Geobacter spp. are known to produce some of the highest current densities observed in MFCs. Also, the Mtr pathway in Shawanella oneidensis MR-1 is one of the most thoroughly characterized EET pathways. `
    const path = "https://static.igem.wiki/teams/5756/assets/images/lab/image-11.svg" 
    const text2 = `Here is a brief overview of Shawanella spp.’s EET mechanism: Electrons generated from the metabolism are first transferred to the inner membrane quinol dehydrogenase CymA. They are then passed to the outer membrane via redox and structural proteins. Periplasmic cytochromes (STC and FccA) and outer membrane porins are also essential for efficient electron transfer. Finally, outer membrane c-type cytochromes and nanowires, organized as the MTR complex, conduct electrons to the anode. Nanowires are extensions of the outer membrane and periplasmic space, supporting the c-type cytochromes and allowing long-distance electron transfer.  `
    const path1 = "https://static.igem.wiki/teams/5756/assets/images/lab/image-photoroom-27-1.svg"
    const text3 = `G. sulfurreducens possesses a similar EET pathway known as the Pcc EET pathways. Its nanowires, polymerized by pilin protein pilA, facilitate the secretion of c-type cytochromes OmcZ and OmcS, which assemble into conductive filaments. These nanowires exhibit conductivities up to 1000 times higher than other types of nanowires. In addition, G. sulfurreducens can use electron shuttles, such as flavins, to achieve indirect electron transfer to the anode when in planktonic form. `
    const path2 = "https://static.igem.wiki/teams/5756/assets/images/lab/image-photoroom-28-1.svg"
    const sous_titre2 = `Bacteria growth conditions `
    const text4 = `At the beginning of our project, we identified through online research that Shewanella sp. and Geobacter sp. are good electroactive bacteria commonly used in microbial fuel cell (MFC) projects. These bacteria have the ability to transfer electrons, produced during the degradation of their substrates, to the anode (electron acceptor), which then transfers the electrons to the cathode via an electrical wire. 

Our initial idea was to use bacteria from the rhizosphere. We wanted to use an enriched consortium that could contain electroactive bacteria. Using a consortium in the lab increased our chances to produce electricity because they show a better performance. We hoped that Shewanella sp. would be present in the rhizosphere as we read that it can be found in natural environments. We didn’t have the necessary resources in our lab to identify which bacterial species were present on our plant roots. We were only able to perform a cell count and a Gram staining of our consortium (lab section) .  

Shewanella species are Gram-negative and are motile rods found in marine and freshwater ecosystems. Their main substrates are lactate and pyruvate, and they are facultative anaerobic. `
    
    const sous_titre3 = `Carbon source metabolism: `
    const text5 = `We then turned our research to Geobacter sp. for their electroactive properties. Geobacter sp. are Gram-negative, anaerobic and heterotrophic. Their primary carbon source is acetate and it can also metabolize ethanol, pyruvate, lactate, hydrogen and formate. Their usual electron acceptor is fumarate. Via the tricarboxylic acid cycle, acetate is oxidized to CO2 and fumarate is reduced to succinate. In the case of our microbial fuel cell, we aim to have the anode act as the electron acceptor, followed by the cathode. `
    
    const sous_titre4 = `Formation of an electroactive biofilm and electron transfer (in planktonic form or as a biofilm)`
    const text6 = `An electroactive biofilm is an extracellular matrix structured by extracellular polymeric substances (EPS) produced by the bacteria, and it contains electroactive component. The thickness and electroactivity of the biofilm are crucial for bioelectricity production, as they ensure efficient electron transfer to the anode. Biofilm formation occurs through multiple stages and is a dynamic process that evolves over time.  

The steps of electroactive biofilm formation in Shawanella and Geobacter spp. are as follow: 
Attachment stage: Cells establish physical contact with a surface, often the surface of an electron acceptor such as the anode. This attachment is facilitated by their flagella, pili, and extracellular DNA. Favorable electroactive environmental conditions are required to initiate the biofilm formation. 
Biofilm maturation: During this stage, EPS are secreted to form the biofilm matrix, while c-type cytochromes and electron mediator components become incorporated. EPS consist of a mix of soluble and gel-forming components, such as polysaccharides, proteins and extracellular DNA, as well as insoluble components, including cellulose, flagella or pili.  
Bacterial growth: Cells proliferate in successive layers over the anode because the electroactive biofilm allows them to transfer their electrons from a bigger distance. As the colony grows, electricity production increases accordingly. 
Biofilm dispersal: Planktonic cells are released from the biofilm and can attach to new surfaces, initiating the formation of a new biofilm cycle. `
    
    const text7 = `Biofilms create microenvironment that provides stability for the bacteria living within the colony. They also serve as storage site for digestive enzyme, helping cells access nutrients. Additionnnally, biofilms protect the colony from external toxins and antimicrobial agents, and they help prevent desiccation of the cells. Therefore, the biofilm is essential for maintaining an active exoelectrogenic colony and achieving significant current production. 

In MFCs, Shawanella spp. form a biofilm when lactate is present, and both the biofilm and the planktonic cells contribute to electricity production. For Geobacter spp., planktonic cells play a minor role in current generation, making the biofilm formation on the anode critical for optimizing MFC performance. This is because it is energetically more favorable for Geobacter spp. to transfer electrons through direct contact via the biofilm rather than using electrons shuttles. `
    const sous_titre5 = `Métabolisme production omcZ et pilA de G. sulfurreducens `

    const text8 = `Their biofilm conductivity, linked to bioelectricity production, is closely linked to the presence of electroactive components like c-type cytochromes, such as OmcZ, and conductive nanowires.  

OmcZ is often found near the anode in electroactive G. sulfurreducens biofilms indicating its crucial role in the last steps of EET and in the thickness of the biofilms. This c-type cytochrome is also upregulated when found in current-producing conditions (Kai et al., s. d.). 

PilA monomers polymerize to form the type IV pili that are facilitating long-distance electron transfer and that are helping with the biofilm thickness. These types of pili assemble in the periplasmic space and elongate to extend into the outer membrane. The PilA transcription is regulated by PilS-PilR in response to environmental signals`
    const sous_titre6 = `Anaerobic medium importance`

    const text9 = `
An important aspect of our system is that the anode chamber must be anaerobic. As explained in the “battery section”, it is important to avoid the presence of oxygen in the anodic chamber because the O2 will be reduced by the electrons instead of the anode. Therefore, it is primordial that our microbial consortium can grow under anaerobic conditions. 

As mentioned in the lab section, we chose to use beer sludge as our consortium in order to include electroactive bacteria and hopefully Geobacter spp.  

Fortunately, some of our colleagues had previously performed an anaerobic growth curve of beer sludge on Petri dishes during one of our classes. We based our hypothesis on their results (these students were also a part of the iGEM group, so the conditions of laboratory were approved, and the results were considered reliable). With only the growth of beer sludge in water they obtained this curve. We can therefore assume that there are microorganisms in the spent grains and that they can grow in anaerobic conditions. This assumption is further supported by literature from past anaerobic experiments. 

`
    return (
      <Box component="div">
        <NormalTextBold> {sous_titre1} </NormalTextBold>
        <NormalText> {text1} </NormalText>
        <Figure title=" " g={1}>
            <img src={path} />
        </Figure>
        <NormalText> {text2} </NormalText>
        <Figure title=" " g={1}>
            <img src={path1} />
        </Figure>
        <NormalText> {text3} </NormalText>
        <Figure title=" " g={1}>
            <img src={path2} />
        </Figure>
        <NormalTextBold> {sous_titre2} </NormalTextBold>
        <NormalText> {text4} </NormalText>
        <NormalTextBold> {sous_titre3} </NormalTextBold>
        <NormalText> {text5} </NormalText>
        <Figure title=" " g={1}>
            <img src="https://static.igem.wiki/teams/5756/assets/images/lab/img1.svg" />
        </Figure>
        <Figure title=" " g={1}>
            <img src="https://static.igem.wiki/teams/5756/assets/images/lab/img2.svg" />
        </Figure>
        <NormalTextBold> {sous_titre4} </NormalTextBold>
        <NormalText> {text6} </NormalText>        
        <Figure title=" " g={1}>
            <img src="https://static.igem.wiki/teams/5756/assets/images/lab/img3.svg" />
        </Figure>
        <NormalText> {text7} </NormalText>    
        <NormalTextBold> {sous_titre5} </NormalTextBold>
        <NormalText> {text8} </NormalText>    
        <NormalTextBold> {sous_titre6} </NormalTextBold>
        <NormalText > {text9} </NormalText>    
        <Figure title=" " g={1}>
            <img src="https://static.igem.wiki/teams/5756/assets/images/lab/picture3-1.svg" />
        </Figure>
      </Box>  
    );
}


export function Parts(){
    const text = `For future steps in our project, we decided to use natural genes from the G. sulfurreducens genome, specifically pilA and omcZ, for overexpression. These two genes play an important role in biofilm conductivity and structure, thereby enhancing bioelectricity generation (Jiang et al., 2023). We plan to insert these parts to the pBBR1MCS-2 vector, which already contains a promoter, a replication origin and an antibiotic resistance gene. The antibiotic resistance gene will be useful to distinguish recombinant cells and non-recombinant ones. All these parts would be assembled using the Gibson assembly technique, with the following primers we designed using the Primer Premier software (Primer Premier :: Software for PCR Primer Design | Primer Design Program). `
    const sous_titre1 = `Primers `
    const sous_titre2 = `Parts`
    const text1 = `In the future, we plan to include an inducible promoter to be able to induce the overexpression of pilA and omcZ when needed. Using an inducible promoter, would allow us to fine-tune the timing and expression level of these genes, thereby avoiding excessive stress on the bacterial membrane.  `
    return (
        <Box component="div">
            <NormalText> {text} </NormalText>
            <NormalText>
            {`pilA : Coding for the pilin monomer PilA, a nanowire protein (Lovley & Walker, 2019) involved in electron transfer to the anode   

omcZ : Coding for the outer membrane c-type cytochrome OmcZ, which receives electrons from intracellular cytochromes. OmcZ acts as a highly conductive terminal redox protein located at the cell surface and within the biofilm (Jiang et al., 2023). 

Vector (pBBR1MCS-2): A broad-host-range plasmid used to facilitate transformation in E. coli. It carries the kanamycin resistance gene and the OriV replication origine. This vector is commonly used in the electrotransformation of Gram-negative bacteria, including as E. coli and G. sulfurreducens (Coppi et al., 2001). `}
        </NormalText>
            <NormalTextBold> {sous_titre1} </NormalTextBold>
            <Figure title="" g={1}>
                <img src="https://static.igem.wiki/teams/5756/assets/images/lab/primer.webp" />
            </Figure>
            <NormalTextBold> {sous_titre2} </NormalTextBold>
            <Figure title=" " g={1}>
                <img src="https://static.igem.wiki/teams/5756/assets/images/lab/part.webp" />
            </Figure>
            <NormalText> {text1} </NormalText>
        </Box>
    );

}