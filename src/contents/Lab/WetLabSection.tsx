import { Typography, Grid } from "@mui/material";
import Figure from "../../components/Figure";
import ExtendsList from "../../components/ExtendsList";
import ExtendsChild from "../../components/ExtendsChild";
import { NormalText, Subtitle2 } from "../../components/Typography";
import CustomDataTable from "../../components/CustomTable";

export function FinalTest(){
    return (<Grid sx={{
            display: "flex",
            flexDirection: "column",
            padding: "1rem",
            gap: 4,
        }}>
            <Subtitle2>
                Objective
            </Subtitle2>
            <NormalText>
                Generate electricity with beer sludge waste with the experimental battery. This could demonstrate the possibility to exploit Geobacter sulfurreducens and an organic waste to produce green electricity. 
            </NormalText>
            <Subtitle2>
                Methodology
            </Subtitle2>
            <NormalText>
                A culture medium was made specifically to promote the growth of Geobacter sulfurreducens. It is detailed here with the real weight measured:
            </NormalText>
            <Figure title="Figure 14. Culture medium for Geobacter sulfurreducens with measured weights" g={1}>
                <img src="https://static.igem.wiki/teams/5756/assets/images/rapportmanip/image42.webp" />
            </Figure>

            <NormalText>
                Next, we combined 200mL of spent grain and 400 mL of culture medium to put in the anode room. Volumes were judged at the time of the lab. The objective remained to have a good cell concentration.
            </NormalText>

            <Figure title="Figure 15. Spent grain from the local brewery and ingredients for the culture medium of Geobacter spp." g={2}>
                <img src="https://static.igem.wiki/teams/5756/assets/images/rapportmanip/image24.webp" />
                <img src="https://static.igem.wiki/teams/5756/assets/images/rapportmanip/image25.webp" />
            </Figure>

            <NormalText>
                {`We kept a volume of our culture to do a plate reader to have a preview of the growth curve of the culture and see how long it took to metabolize the nutriments sources.

Then, we prepared the catholyte with K3[Fe(CN)6] and respecting the same protocol as our last battery tests (see the protocols section). 

The battery was then assembled as shown in the next figures. On our first day, we saw that the catholyte was running out near the membrane, but we forced the bolts and there were not any leaks after that. We also had to put more seal on the entry of the two tubes because we observed air leaks when doing the N2 purge. After sealing the holes, the purges seemed effective as we can see in the video below . We could clearly see bubbles in the water at the exit of the gas tube. 
`}
            </NormalText>

            <Figure title="Figure 16. Assembly and testing of the prototype" g={5}>
                <img src="https://static.igem.wiki/teams/5756/assets/images/rapportmanip/image26.webp" />
                <img src="https://static.igem.wiki/teams/5756/assets/images/rapportmanip/image27.webp" />
                <img src="https://static.igem.wiki/teams/5756/assets/images/rapportmanip/image28.webp" />
                <img src="https://static.igem.wiki/teams/5756/assets/images/rapportmanip/image29.webp" />
                <img src="https://static.igem.wiki/teams/5756/assets/images/rapportmanip/image30.webp" />
            </Figure>

            <NormalText>
                Then, a Gram coloration was made to characterize the beer sludge and try to globally identify Geobacter sulfurreducens. We also wanted to observe our culture and how it grew in the battery. The Gram coloration was made on hour 67. 
            </NormalText>

            {/** */}
            <Figure title="Figure 17. Manipulation in laboratory" g={1}>
                <img 
                    src="https://static.igem.wiki/teams/5756/assets/images/rapportmanip/image31.webp" 
                    style={{
                        maxWidth: "20rem",
                        maxHeight: "20rem",
                        width: "auto",
                        height: "auto"
                    }}
                />
            </Figure>

            <Subtitle2>
                Results
            </Subtitle2>

            <NormalText>
                {`Gram Staining:

First, we observed our medium with the microscope after doing the Gram staining. This is what we observed:
`}
            </NormalText>

            <Figure title="Figure 18. Microscopic observation of the culture medium after Gram staining" g={1}>
                <img src="https://static.igem.wiki/teams/5756/assets/images/rapportmanip/image32.webp" />
                <img src="https://static.igem.wiki/teams/5756/assets/images/rapportmanip/image33.webp" />
            </Figure>

            <NormalText>
                {`First we observed many di cocci Gram-positive and Gram-negative diplococci. We can also observe numerous chains of cocci. Approximately 5% of the bacteria were rod-shaped, stained either violet (Gram-positive) or pink (Gram-negative).

As we know, Geobacter spp. are rod shape Gram-negative bacteria. We expected to find more Geobacter cells because we used a medium specifically designed for their growth. However, we believe that Geobacter spp. were absent from the spent grain. Anaerobic conditions are necessary for the growth of Geobacter, and these conditions may not have been fully maintained.

The spent grain most likely contained lactic bacteria such as Lactococcus spp., Leoconostoc spp. and Streptococcus spp.  These species are known to be found in spent grain. They are cocci-shaped, which is what we observed on the microscope.

Growth curve:
`}
            </NormalText>

            <Figure title="Figure 19. Growth curve of spent grain" g={1}>
                <img src="https://static.igem.wiki/teams/5756/assets/images/rapportmanip/image43.webp" />

            </Figure>

            <NormalText>
                {`We can observe two pics at 24 and 80 hours. The curve shows a decrease in absorbance which could be due to an agglomeration of medium at the bottom of the wells.

This curve proves us that changing the medium in our battery every 24 hours can be beneficial for the growth of the consortium as it reaches its first plateau around that time.

Voltage curve:

Here are the voltage and amperage recorded by the multimeter on 5 days:
`}
            </NormalText>

            <Figure title="Figure 20. Voltage saved in continuous for 5 days" g={0}>
                                    <img src="https://static.igem.wiki/teams/5756/assets/images/rapportmanip/image44.webp" />

            </Figure>

            <Figure title="Figure 21. Amperage saved in continuous for 5 days" g={1}>
                                                        <img src="https://static.igem.wiki/teams/5756/assets/images/rapportmanip/image45.webp" />

            </Figure>

            <NormalText>
                As we can see on Figure 20, we obtained a voltage of approximately 0.6 mV 24h after introducing the spent grain and the culture medium in the anode room. After 24 hours, the voltage is stable at 0.6 mV. Although, this is not a high voltage, it still represents an improvement compared to our previous electricity test. As a reminder, the first time we tested the battery with the bacteria from the plants, we obtained this graphic:
            </NormalText>

            <Figure title="Figure 22. Voltage saved in continuous on four days on April 10th " g={1}>
                                                    <img src="https://static.igem.wiki/teams/5756/assets/images/rapportmanip/image46.webp" />

            </Figure>

            <NormalText>
                {`As we can see, many data points in the previous test were below zero and appeared chaotic. This time we can observe a curve and a plateau and no wild points. Additionally, we reached a stable voltage of 0.6mV compared to the 0.1mV on April 10th.

An important point of our analysis is that the growth curve first stabilizes at 24 hours, the same time at which the voltage reaches its plateau, as seen in the next graph. Our hypothesis is that it took the first 24h for the consortium to acclimate to the culture medium and to form a biofilm on the anode.
`}
            </NormalText>

            <Figure title="Figure 23. Absorbance at 600 nm and voltage saved in continuous for 5 days" g={1}>
                <img src="https://static.igem.wiki/teams/5756/assets/images/rapportmanip/image47.webp" />
            </Figure>

            <NormalText>
                These results are more concluding than our previous ones, indicating that we are heading in the right direction. Our smallest, anaerobic and semi-batch prototype proved to be more efficient and shows a great potential. Also, when we opened the lid on the battery at the end of our testing, there were not any fungal growth, suggesting that our semi-continuous process was effective.
            </NormalText>

            <Subtitle2>
                Conclusion
            </Subtitle2>
            <NormalText>
                {`The main limitation of our project is our source of electroactive bacteria. We didn’t have the resources to puchase pure strains, and we didn’t have the material to identify which microorganisms were present in our consortium. We tried to stimulate the growth of Geobacter spp. by providing its conditions of growth and nutriments but that was not sufficient. We couldn’t see a significant presence of Geobacter with the staining. However, the shape of the voltage graph and the growth curve suggest that the prototype might have performed better with a higher concentration of exoelectrogenic bacteria. 

Also, we believe that our prototype could be improved. The bridge between the two chambers seems too long and too narrow. Therefore, stagnant liquid could be stuck at the membrane and that could decrease exchanges at the membrane. We would also increase the exchange surface area of the proton membrane between the chambers. 

Despite these limitations, we are proud of the results from our latest test. After many iterations, we have achieved a much more promising outcome. 
`}
            </NormalText>
            <Subtitle2>
                More pictures
            </Subtitle2>
            <Figure title="" g={1}>
                <img src="https://static.igem.wiki/teams/5756/assets/images/rapportmanip/image35.webp" />
                <img src="https://static.igem.wiki/teams/5756/assets/images/rapportmanip/image36.webp" />
                <img src="https://static.igem.wiki/teams/5756/assets/images/rapportmanip/image37.webp" />
                <img src="https://static.igem.wiki/teams/5756/assets/images/rapportmanip/image38.webp" />
                <img src="https://static.igem.wiki/teams/5756/assets/images/rapportmanip/image39.webp" />

                
            </Figure>
        </Grid>);
}

export function TestEvolution(){
    return (
        <Grid sx={{
            display: "flex",
            flexDirection: "column",
            padding: "1rem",
            gap: 4,
        }}>
            <Subtitle2>
                Objective
            </Subtitle2>
            <NormalText>
                Generate electricity with the newer smaller model with an anaerobic anodic chamber with chemical solutions and beer sludge waste. Test the feasibility of using a fed-batch model, where older bacteria are taken out of the anodic chamber and replaced with new and thriving bacteria.
            </NormalText>

            <Subtitle2>
                Methodology
            </Subtitle2>
            <NormalText>
                The prototype was, before everything, leak tested with the protonic membrane to ensure the joint between the two chambers was only permeable to protons. The prototype was then tested as a chemical battery, where an anolyte solution was placed in the anodic chamber and a catholyte solution placed in the catholyte chamber. With a known resistance of 1.5 Ω placed in a small electrical circuit, the electrical tension can be measured as shown in figure 12.
            </NormalText>

            <Figure title="Figure 12. Test of the prototype as a chemical battery" g={1}>
                <img src="https://static.igem.wiki/teams/5756/assets/images/rapportmanip/image22.webp" />
            </Figure>

            <NormalText>
                To make the fed-batch possible, small tubes were inserted into the holes in the anodic chamber cover. Clamps were added to ensure the chamber would stay an anaerobic environment. The system was then tested with water and a syringe.
            </NormalText>

            <Subtitle2>
                Results
            </Subtitle2>
            <NormalText>
                This newer prototype did not have a leak between the chambers through the protonic membrane. Each chamber was tested individually as shown in figure 13.
            </NormalText>

            <Figure title="Figure 13. Test of the new prototype waterproofing" g={1}>
                                <img src="https://static.igem.wiki/teams/5756/assets/images/rapportmanip/image23.webp" />

            </Figure>

            <NormalText>
                {`The chemical test of the prototype did not result in a big electrical tension. Indeed, the output was only around 0.2 mV which was less than expected. The electrodes could have been too old to produce a greater electrical tension.

The tubes for the fed-batch test with the clamps were leak-proof to water and, with a syringe, water could easily be extracted and added.
`}
            </NormalText>

        </Grid>
    );
}

export function PlantElect(){
    return (<Grid sx={{
            display: "flex",
            flexDirection: "column",
            padding: "1rem",
            gap: 4,
        }}>
            <Subtitle2>
                Objective
            </Subtitle2>
            <NormalText>
                Test the 8 cultures (1 week, 72h, 24h and only the medium with medium 1 (from the soil) and medium 2) with the experimental battery. Determine the optimal culture broth for achieving maximum voltage output.
            </NormalText>
            <NormalText>
                Each culture was tested in the experimental battery with the anolyte. The cultures were put in the anode room. Voltage and amperage were measured with a multimeter. The assembly of the battery is shown in figure 6.
            </NormalText>
            <Figure title="Figure 6. Assembly of the battery connected to the multimeter" g={0}>
                <img src="https://static.igem.wiki/teams/5756/assets/images/rapportmanip/image14.webp" />
            </Figure>
            <Subtitle2>
                Results
            </Subtitle2>
            <NormalText>
                Figures 7 to 9 shows the aspect of the cultures at the time of the lab. 
            </NormalText>
            <Figure title="Figure 7. 24 h cultivation in the two mediums" g={2}>
                                <img src="https://static.igem.wiki/teams/5756/assets/images/rapportmanip/image15.webp" />

            </Figure>

            <Figure title="Figure 8. a) 72 cultivation mediums b) Roots allure (Sarma et Mohanty, 2018) medium c) Roots allure (Sophia et Sreeja, 2017) medium" g={1}>
                <img src="https://static.igem.wiki/teams/5756/assets/images/rapportmanip/image16.webp" />
                <img src="https://static.igem.wiki/teams/5756/assets/images/rapportmanip/image17.webp" />
                <img src="https://static.igem.wiki/teams/5756/assets/images/rapportmanip/image18.webp" />
            </Figure>

            <Figure title="Figure 9. One week cultivation medium" g={1}>
                <img src="https://static.igem.wiki/teams/5756/assets/images/rapportmanip/image19.webp" />
            </Figure>
            <NormalText>
                {`We can see a big difference between the 24h medium and the one week one. The second one is more turbid and we can see a mushroom growth starting. 
Here are the results for the voltage and the amperage of the cultures.   
`}
            </NormalText>

            <NormalText>
                {`The results were not satisfying. 

We had the chance to log the voltage and amperage during all the weekend, and the results were the same as the instantaneous ones. Here in figure 10 is the system connected to the computer who saved our results. The extraction is shown in figure 11.
`}
            </NormalText>

            <Figure title="Figure 10. Battery connected to the multimeter for 4 days" g={0}>
                <img src="https://static.igem.wiki/teams/5756/assets/images/rapportmanip/image20.webp" />
            </Figure>

            <Figure title="Figure 11. Voltage saved in continuous on four days" g={0}>
                <img src="https://static.igem.wiki/teams/5756/assets/images/rapportmanip/image41.webp" />
            </Figure>

            <NormalText>
                {`Figure 11 shows that we didn’t attain any voltage during the period of testing. This was not surprising because the results taken instantaneous were also at zero.

We realised that we made some mistakes.

First, the culture of 7 days was too long. It developed a lot of fungus and we don’t think it had any bacteria left for our tests. The culture was very trouble and there was likely more waste than nutriments for our bacteria. 

Next, we didn’t put the anode during the cultivation period. By putting the culture directly in the battery and immediately checking the multimeter, we didn’t give enough time for the anode to produce a biofilm. We found in our research that the biofilm is an essential part of the electron road.
Thirdly, our anode room was not in anaerobic condition. It’s essential that the anodic room is in anaerobic conditions because the electron can’t be reduced by oxygen. It must go through the circuit to the cathode chamber.
Finally, the culture media we tested contained dextrose, sucrose and/or glucose. The problem is that by selecting the electroactive pothos consortium, we were aiming to facilitate Shewanella species, a well-known bio electricity producing bacterial genus. Shewanella species metabolize preferably two and three-carbon carbohydrates as carbon/electron source (Choi et al., 2014). Many of these species also lack in glucokinase, which prevents them from obtaining energy from glucose. It is possible that other bacterial and fungus species took advantage of this metabolism and developed a lot more rapidly then Shewanella species.   

Good news is we found some solutions for the next manipulations.

It is necessary to form a biofilm on the anode. For that, we must incubate the anode with our cultures. Also, we must change the broth to always have a culture of fresh bacteria and no mushrooms. In consequence, we changed our battery for a semi-continuous small bioreactor battery. We reduced the volume chambers to 100 mL. On our next model, we added an entrance to add broth and take out the same volume every 24 hours. The broth will also be modified to replace the glucose by lactate which is preferred by electroactive bacteria, like Shewanella, for carbon/electron source.

We also added a lid to our anode chamber to stay anaerobic. To ensure that the chamber stays anaerobic, we added a nitrogen purge. The lid had 3 holes; one for the N2 purge, one for the outing of the 02 during the purge and one for the transfer of broth and waste. We can’t forget a small hole for the anode cable.
The picture below demonstrated a model  of our new battery. The goal is to start the culture on day one with broth, the bacteria and the anode. A biofilm should start being formed within hours. The anode and cathode will be connected to a multimeter who can save the live data. Each day, a small part of the broth will be removed, and the same quantity of new broth will be added with a syringe in one of the hole. After that, a N2 purge will be made to ensured that all the 02 is removed. We will close every ending open to air. 
`}
            </NormalText>

            <Figure title="" g={1}>
                                <img src="https://static.igem.wiki/teams/5756/assets/images/rapportmanip/image21.webp" />

            </Figure>

            <NormalText>
                A new problem comes up with this avenue. How does the plant grow without oxygen or contact with the sun? We thought about this problem, and we decided that the priority of or project was to produce electricity. The integrated plant will come at a next moment. One of our insecurities was that we didn’t have enough bacteria in our broth. To boost it we thought of searching bacteria from the wastewater beer sludge. First, there’s a lot of research that has been done on this type of waste with positive electricity results. Second, we have a brewery next door, at our campus. Our goal is now to produce electricity from a wastewater consortium. 
            </NormalText>


        </Grid>);
}

export function PlantGrow(){
    return (
        <Grid sx={{
            display: "flex",
            flexDirection: "column",
            padding: "1rem",
            gap: 4,
        }}>
            <Subtitle2>
                Objective
            </Subtitle2>
            <NormalText>
                Growing the electroactive consortium directly from the pothos plants in two different selective broth. Quantify the culture duration required and determine the optimal medium for achieving maximum voltage output.
            </NormalText>
            <Subtitle2>
                Methodology
            </Subtitle2>
            <NormalText>
                {`To select the electroactive pothos roots consortium, we tried two different selective media to isolate the electroactive bacteria and enhance bioelectricity production. The first medium was used by Sophia & Sreeja (2017), to characterize the rhizosphere microflora in their PMFC experiment. The second medium was used by Sarma & Mohanty (2018), to select electroactive bacteria from a sewage treatment facility and to inoculate the anodic chamber with this anaerobic culture. 
The first broth was prepared with 5 g tryptone, 2.5 g yeast extract and 0.5 g dextrose in 1000 ml distilled water. The second broth was prepared with 8 g sodium acetate, 7 g glucose, 7 g sucrose, 10 g pepton, 8.2 g Na2HPO4.2H2O and 5.2 g NaH2PO4.H2O in 1000 ml distilled water. All the broth was autoclaved for 15 minutes at 121 °C.  Aseptically, pothos plants with approximately 1 to 2 10 cm long roots and 1 to 2 leaves were incubated in each broth for each duration tested. The cultures incubated at room temperature under a growth lamp for the following periods: 24 h, 3 days and 7 days. By testing these different periods, we wanted to characterize the impact of the culture duration on the consortium composition (bacteria vs fungal) and on electricity production. The cultures were aerobically incubated to imitate plant growth.
`}
            </NormalText>

            <Subtitle2>
                Results
            </Subtitle2>
            <NormalText>
                {`A great consortium seemed to have developed during the incubation. Indeed, the broth became turbid after 48 hours. Significant yeast growth was observed for the 7- and 3-days incubation, likely because these microorganisms are part of the natural consortium associated with pothos.
Broth on April 9th:
On Figure 5, we can see on the left the two different broths that were started 24h before the electricity test . On the right we can see the growth culture 72h. It is very turbid and shows a great growth and a lot of waste.
`}
            </NormalText>
            <Figure title="Figure 5. A) 7 days culture broths at t=0. B) 3 days culture broths at t=0. C) Moisture on the 7 days culture broth surface at t=4 days. D) Left bottle: 24 h culture at  t=0 and right bottle: 72 h culture at t=48 h. The darkest culture broths are the Sarma & Mohanty (2018) medium and the lightest the Sophia & Sreeja (2017) medium." g={2}>
                <img src="https://static.igem.wiki/teams/5756/assets/images/rapportmanip/image9.webp" />
                <img src="https://static.igem.wiki/teams/5756/assets/images/rapportmanip/image10.webp" />
                <img src="https://static.igem.wiki/teams/5756/assets/images/rapportmanip/image11.webp" />
                <img src="https://static.igem.wiki/teams/5756/assets/images/rapportmanip/image12.webp" />
                <img src="https://static.igem.wiki/teams/5756/assets/images/rapportmanip/image13.webp" />

            </Figure>
        </Grid>
    );
}

export function Chemical(){
    const columns = ["Electrodes", "Voltage (V)", "Current (mA)", "Resistance (Ω)"];

    const data = [
    ["Cathode: Zinc\nAnode: Copper", "0.6", "Not measured", "0"],
    ["Cathode: Copper\nAnode: Graphite", "0.260", "Not measured", "0"],
    ["Cathode: Zinc\nAnode: Graphite", "0.9", "Not measured", "0"],
    ["Cathode: Graphite\nAnode: Graphite", "0.260", "0.02", "1.5"],
    ["Cathode: Graphite\nAnode: Graphite", "0.317", "Not measured", "0"],
  ];
    return (<Grid sx={{
            display: "flex",
            flexDirection: "column",
            padding: "1rem",
            gap: 4,
        }}>
            <Subtitle2>
                Objective
            </Subtitle2>
            <NormalText>
                Demonstrate that the battery setup is functional by measuring a current density and a voltage using a known chemical reaction. To simulate the metabolism of an electrogenic bacterium, the electro-oxidation of ascorbic acid will be used to provide electrons and protons to the system on the anode side:  
            </NormalText>

            <Figure title="Figure 4 : Structure of Ascorbic Acid and Expected Reaction (pKa1 = 4,1 ; pKa2 = 11,8) (Matsui et al., 2015; Shen et al., 2021)" g={1}>
                <img src="https://static.igem.wiki/teams/5756/assets/images/rapportmanip/image6.webp" />

            </Figure>

            <NormalText>
On the cathode side, oxygen reduction will be employed, as is expected to occur in the presence of bacteria:  
O2 + 4 e- + 4 H+ {"->"} 2 H2O
These two reactions are expected to occur spontaneously, considering that the standard potential of the reduction reaction ranges from -0.283 to +0.19 V (depending on pH) (Borsook et Keighley, 1933; Shen et al., 2021) and that of the oxidation reaction is +1.229 V (Thierry Ghislain, 2023). 
The hypothesis assumes that the redox reaction of ascorbic acid is a representative simulation of the reaction occurring as a result of the cellular respiration of electroattractive bacteria. It is also assumed that the catholyte is sufficiently oxygenated for the reduction reaction.

            </NormalText>

            <Subtitle2>
                Methodology
            </Subtitle2>
            <NormalText>
                The membrane is installed between the two parts of the prototype, which are then tightened together using bolts. One side contains the anolyte, a pH 4 ascorbic acid solution, and the other side contains the catholyte, a mixture of 32.925 g of K₃[Fe(CN)₆], 16 g of NaCl, 0.4 g of KCl, 2.88 g of Na₂HPO₄, and 0.49 g of KH₂PO₄ in 2 L of distilled water. The graphite anode and zinc cathode are placed in their respective compartments and connected with wires linked to a multimeter. Voltage and current are measured using the multimeter.
            </NormalText>
            <Figure title="" g={2}>
                <img src="https://static.igem.wiki/teams/5756/assets/images/rapportmanip/image7.webp" />
                <img src="https://static.igem.wiki/teams/5756/assets/images/rapportmanip/image8.webp" />
            </Figure>
            <Subtitle2>
                Results
            </Subtitle2>
            <NormalText>
                The measured voltages demonstrate that the oxidation of ascorbic acid with the catholyte and the proton exchange membrane can generate electricity. The highest voltages were obtained using a zinc cathode, which we will retain for subsequent tests. It should be noted, however, that the literature generally reports the use of a graphite cathode, and this possibility must therefore be kept in mind. This configuration (two graphite electrodes) was also tested with a resistor to measure current. The resulting current was very low (0.02 mA). The main challenge will therefore be to obtain a higher current in the biological system.
            </NormalText>
            <CustomDataTable title="Table 1: Electricity test of prototype #2 with reference medium (ascorbic acid, pH 4)" columns={columns} data={data} />

        </Grid>);
}

export function Leak(){
    return (
        <Grid sx={{
            display: "flex",
            flexDirection: "column",
            padding: "1rem",
            gap: 4,
        }}>
            <Subtitle2>
                Objective
            </Subtitle2>
            <NormalText>
                Check the watertightness of the printed model to eliminate this potential source of error. Ensuring that a Microbial Fuel Cell (MFC) does not leak is essential for accurate performance and reliable results. Leaks can cause cross-contamination between compartments, loss of electrolyte or substrate, and reduced electrical output, all of which compromise the functionality and integrity of the system. A sealed design is therefore critical for maintaining proper internal conditions and achieving valid experimental data. 
            </NormalText>

            <Subtitle2>
                Methodology
            </Subtitle2>
            <NormalText>
                Prototype 1:
The first prototype was 3D-printed as a single piece to avoid the need for sealing between assembled parts and could contain 2000 cm3 in each chamber. The bridge exceeds on one side to allow the tightening of the protonic membrane on this part. Water was poured into the prototype without the membrane to check for leaks. Then, the membrane was inserted and tightened using a collar before adding water to one side of the prototype. The same procedure was repeated on the other side. 

            </NormalText>
            <Figure title="" g={1}>
                                                <img src="https://static.igem.wiki/teams/5756/assets/images/rapportmanip/image4.webp" />

            </Figure>

            <NormalText>
                Prototype 2:
The second prototype was designed in two pieces after the failure of the first prototype, which damaged the membrane. This prototype could contain 1400 cm3 in the complete chamber and 1150 cm3 in the incomplete chamber (the printer failed). The membrane was inserted between the pieces and tightened with bolts dans nuts. Water was poured into one side of the prototype and checked for leaks using brown paper. The same procedure was repeated on the other side. 

            </NormalText>

            <Figure title="" g={1}>
                                <img src="https://static.igem.wiki/teams/5756/assets/images/rapportmanip/image5.webp" />

            </Figure>

            <Subtitle2>
                Results
            </Subtitle2>

            <NormalText>
                The leak test conducted on February 28 on the first prototype revealed several shortcomings in the 3D printing. Although the prototype had been coated with a layer of silicone, multiple leaks were observed beneath the bridge. During further testing, tightening the membrane sufficiently with the collar to ensure a seal ended up damaging it. The results of this lab session led to the design of a new prototype and the application of a thicker silicone coating.
The leak test conducted on March 31 on the second prototype showed that the new design, which secures the membrane between the two parts of the prototype, prevented membrane damage, and the additional coating successfully ensured watertightness.

            </NormalText>
        </Grid>
    );
}

export function GramColoration(){
    return (
        <Grid sx={{
            display: "flex",
            flexDirection: "column",
            padding: "1rem",
            gap: 4,
        }}>
            <Subtitle2>
                Objective
            </Subtitle2>
            <NormalText>
                Characterize and observe the microorganisms that are present in the electroactive consortium of pothos roots with Gram coloring and verify the presence of contamination. We wanted to verify that electroactive bacteria, like Shewanella sp., were present.
            </NormalText>

            <Subtitle2>
                Methodology
            </Subtitle2>
            <NormalText>
                For each Erlenmeyer, two smears were prepared and fixed on microscope slides. Gram coloration was then performed on each of the slides for observation at 1000 x under the microscope. 
            </NormalText>
            <Subtitle2>
                Results
            </Subtitle2>
            <NormalText>
                Gram-negative bacillus, gram-positive bacillus and gram-positive E. coli looking bacillus were observed. Shewanella sp. are gram-negative bacillus, suggesting its potential presence in the broth. It is possible that E. coli contamination occurred during the manipulations.
            </NormalText>
            <Figure title="Figure 3. Gram coloration of the Pothos rhizosphere consortium, visualized at ×1000 magnification." g={2}>
                <img src="https://static.igem.wiki/teams/5756/assets/images/rapportmanip/image1.webp" />
                <img src="https://static.igem.wiki/teams/5756/assets/images/rapportmanip/image2.webp" />
                <img src="https://static.igem.wiki/teams/5756/assets/images/rapportmanip/image3.webp" />
            </Figure>

        </Grid>
    );
}

export function BacterialCount() {
    return (
        <Grid sx={{
            display: "flex",
            flexDirection: "column",
            padding: "1rem",
            gap: 4,
        }}>

            <Typography sx={{
            fontFamily : "'Expletus Sans', cursive",
            fontWeight: 900,
            
            }} variant="h5" >
            Objective
            </Typography>
            <Typography
            sx={{
                whiteSpace: "pre-line",
                wordBreak: "break-word",
                textAlign: "justify",
            }}
            >
            Quantify the bacterial growth in the culture medium where pothos roots were incubated. It is important to have a good concentration of bacteria to ensure that a biofilm can be produced and that enough electrons can be transferred to the anode. Research shows that with a concentration of 5x107 cells/mL, the MFC could produced 0.45 mW (Ringeisen et al., 2006). This is a guideline that shows that we are on the right way to produce this quantity of electricity. 
            </Typography>

            <Typography sx={{
            fontFamily : "'Expletus Sans', cursive",
            fontWeight: 900,
            
            }} variant="h5" >
            Methodology
            </Typography>

            <Typography
            sx={{
                whiteSpace: "pre-line",
                wordBreak: "break-word",
                textAlign: "justify",
            }}
            >
                Before cutting pothos roots, the culture broth was prepared with 1.25 g tryptone, 0.625 g yeast extract and 0.25 g dextrose in 300 ml distilled water(Sophia et Sreeja, 2017). The broth was separated in two Erlenmeyer and then put to autoclave for 15 min at 121 °C. Under the laminar flow hood, 5 to 8 roots were cut with a sterile scalpel and put in each Erlenmeyer. The two roots incubation were placed at 100 rpm at 37 °C for 24 and 48 hours.
            </Typography>
            
            <Figure title="Figure 1. Selective medium for electroactive bacteria ready for roots incubation." g={0}>
                <img src="https://static.igem.wiki/teams/5756/assets/images/lab/ouvrir-la-photo.webp" />
            </Figure>
            <Typography
            sx={{
                whiteSpace: "pre-line",
                wordBreak: "break-word",
                textAlign: "justify",
            }}
            >
                LB agar plates were then prepared, autoclaved for 15 min at 121 °C tand stored at 4 °C. Eight dilutions were performed for each Erlenmeyer in saline solutions : 10-1, 10-2, 10-3, 10-4, 10-5, 10-6, 10-7 and 10-8. Four to five 20 µl drops were plated in triplicate on the LB-agar for each dilution. The plates were then incubated at 37 °C. After 24 h and 48 h of incubation, the CFUs were counted.
            </Typography>
            <Typography sx={{
            fontFamily : "'Expletus Sans', cursive",
            fontWeight: 900,
            
            }} variant="h5" >
            Results
            </Typography>
            <Figure title="" g={1}>
                <img src="https://static.igem.wiki/teams/5756/assets/images/lab/fig2wet.webp" />
            </Figure>

            <Figure title="Figure 2. Rhizosphere microbial count on LB agar plates." g={2}>
                <img src="https://static.igem.wiki/teams/5756/assets/images/lab/fig2-1wet.webp" />
                <img src="https://static.igem.wiki/teams/5756/assets/images/lab/fig2-2wet.webp" />
            </Figure>


            


        </Grid>
    );
}

export function Experiment() {
    const text = `Reminder: 
    The following methods outline our future objectives to advance the project. They have not yet been implemented in the laboratory but were carefully designed to integrate synthetic biology into our work. These protocols will be key steps for future development.`;
    const text2 = `Geobacter sulfurreducens (ATCC 51573) would be propagated in an NBAFYE medium according to the methods of (Coppi et al., 2001). This medium is composed of 15 mM acetate as an electron donor and of 40 mM fumarate as the electron acceptor. The culture would be maintained in anaerobic conditions at 30 °C. 

Genomic DNA from G. sulfurreducens would be extracted from the pure culture. Cells would be harvested by centrifugation, and DNA isolated with the Genome DNA Kit (Bio 101, Inc., Carlsbad, CA) according to the manufacturer’s instructions. 
The two genes we want to overexpress are the pilA and the omcZ genes which both sequences are found in the natural G. sulfurreducens genome. To amplify them, we plan to use four primers: 
pilA_fwd: CAAACGGTAATTGGCCAATTACCCCCATAC 
pilA_rev: AAGGGCGAAGCCGCCGCCTTAACTTTCGGGCGGATAG 
omcZ_fwd: GCCGTGAGGCTCGGGGGGCAATGAAGAAAAAGGTACTGATTG 
omcZ_rev: AATTGGCCAATTACCGTTTGACTTTCTTC)  

The primers were designed using Primer Premier software. They are designed to enable the Gibson assembly by adding bases from the second sequence to the first sequence, facilitating the assembly process.  
We used Ape to visualize the molecular cloning strategy as well as the gene and vector DNA sequences. The same approach was used for the amplification of the pBBR1MCS-2 vector with the following primers: 
pBBR1MCS-2_fwd: GGCGGGCGGGCTTCGCCC 
pBBR1MCS-2_rev: TGCCCCCCGAGCCTCACGG) 

All our DNA fragments for assembly would be amplified by PCR. PCR will be performed using Pfu 4 X buffer and the thermoresistant polymerase Pfu+. The amplified DNA fragments will be analysed on a 1.2 % agarose gel in TAE 1 X buffer. SYBR SAFE marker will be use to confirm their concentration, along with the 1 kb DNA Ladder (Promega), and their molecular weight will be determined using the Low DNA Mass Ladder (Invitrogen).`;

    const text3 = `For the Gibson assembly, we are planning to use a 1 : 1: 1 molecular ratio for each fragment. The fragment with the smallest molecular weight will be attributed a size ratio of 1 and a volume to add in the mix of 1 µl. Following this principle, 30 ng of the pilA fragment, 143 ng of the omcZ fragment and 510 ng of the pBBR1MCS-2 were added in each reaction to achieve a DNA concentration between 25 and 100 ng/µl. The total volume of the reaction is 10 µl. The Gibson mix 2 X will be used, and to ensure proper assembly, the mix will be incubated at 50 °C for 1 h before being stored at 4 °C.`;
    const text4 = `The plasmid will be transformed in E. coli (strain: EC100Dpir-116). This strain, derived from wild-type K-12 E. coli, is commonly used for cloning and is already competent (New England Biolabs, n.d.). The transformation will occur by mixing the appropriate DNA volume with 45 µl of competent E. coli cells. To achieve an effective thermal shock, the mix will be cooled on ice for 30 minutes, then incubated at 42 °C for exactly 30 seconds before being placed on ice for 2 minutes. After these steps, the cells should be transformed, and 400 µl of SOC medium at 37 °C can be added. The culture will then be incubated at 37 °C for 60 minutes and at 225 rpm. 

Multiple cultures will be performed the success of our transformation. The negative control is intended to include non-assembled fragment with competent cells, and the positive control will include only the pBBR1MCS-2 vector with competent cells.`;
    const text5 = `To successfully select the recombinant cells, all the cultures will be spread on LBA and/or LBA-kan (30 µg/ml kanamycin) agar plates at 37 °C for 24 hours. 
200 µl of culture broth with the plasmid will be incubated in duplicate on LBA-kan plates to select the UFCs containing the kanamycin resistance gene that is included in the plasmid. The same volume of non-assembled fragment culture will be inoculated on a LBA agar plate to verify that there is no contamination in our manipulations and on LBA-kan agar plate to confirm the absence of natural resistance. 50 µl and 200 µl of the positive control culture is planned to be plated on LBA-kan agar to ensure the kanamycin resistance gene is well expressed in the cells.`;
    const text6 = `To validate the sequence of our constructed plasmid in the successfully recombinant cells, the next step is to inoculate a LB-kan 30 µg/ml broth with the transformants that grew on the kanamycin-containing agar. To obtain a pure culture of transformants, the LB-kan culture will be incubated at 37 °C for 24 hours and at 225 rpm. 

Plasmidic DNA extraction will be performed using the alkaline lysis method. In this method, 1.5 ml of culture is centrifugated to discard the culture medium and to retain only the cells. The pellet is then resuspended in Solution I (Glucose 50 mM, EDTA 10 mM, Tris 25 mM, pH 8, at 4 °C). Solution II (NaOH 0,2 N, SDS 1 %) is added to lyse the cells, and the DNA is released with cautious mixing to avoid breaking the bacterial DNA. The mix is kept on ice for 1 minute before adding Solution III (KOAc 5 M, glacial acetic acid) and mixing to precipitate the bacterial DNA. The plasmidic DNA is then purified using chloroform to eliminate proteins. After centrifugation, the aqueous phase is transferred into 95 % ethanol to precipitate the plasmidic DNA. After centrifugation, the plasmidic pellet is washed with 70 % ethanol. The precipitation and washing steps are done twice to remove as many salts as possible. The pellet is then air-dried and resuspended in TE-RNase buffer at 4 °C. 

With this extracted and purified DNA, we will be able to characterize our plasmid using restriction enzymes to confirm the presence of each insert. We plan to use EcoRV for simple restriction digestion because its restriction site, GAT^ATC, is not present in the  pilA and omcZ genes. The digestion will be performed by adding 1 µl of EcoRV to the digestion mix.  The digestion mix have a total volume of 15 ml and will contain 2 ml of plasmidic DNA. It will then be incubated at 37 °C for 30 min. The resulting fragment will be analysed on 1.2 % agar gel in TAE 1 X buffer and using SYBR SAFE dying. By comparison with the 1 kb DNA Ladder, the fragment should be 6903 bp long.`;    
    const text7 = `All manipulations will be performed on ice and under anaerobic conditions. All buffers should be at 4 °C and be anoxic during the manipulations. 
 
1. Preparation of the Electrocompetent Cells  
G. sulfurreducens will be incubated in NBAFYE medium until an optical density of 0.2 to 0.35 is obtained. The cells will then be harvested by centrifugation at 4300 g for 8 minutes. An electroporation buffer (1 mM HEPES pH 7, 1 mM MgCl2 and 175 mM sucrose) will be used to double wash the cells and to resuspend them to a final concentration of 10^11 cells/ml. During the manipulation, pipetting must be done with precaution because G. sulfurreducens is prone to breakage. DMSO will be added to help create pores in the cell membrane, achieving a final DMSO concentration of 10% (Fernández & Reigada, 2014). Our plasmid will also be added to the cell suspension in the electroporation buffer. The electrocompetent cells must be used immediately or stored at -80 °C to keep them ready. 

2. Electrotransformation  
For the electrotransformation, the cells will be exposed to an electrical pulse to create pores in the membrane and allow it to become permeable. The electrical parameters must be carefully chosen to avoid lysing the cells. We will follow the electrical parameters described in (Coppi et al., 2001), which are, for 25 µl of cells, a 14.7 kV cm-1 field strength, a 4 kΩ resistance and a 25 µF capacitance for approximately 6 ms per pulse. After the electroporation, the cells will be washed with room temperature phosphate-buffered NBAF medium and then placed in 9 ml pre-warm NBAFYE anaerobic medium to grow for 5 hours at 30 °C. 

3. Adding the Plasmid and Selecting the Recombinants 
 The transformants will be plated on NBAFYE medium containing 200 µg of kanamycin/ml to select the recombinants. The UFCs that grow on this medium will be used to inoculate a liquid selective medium, and kanamycin have to be added to the culture every 48 hours to keep the selective pressure.`;
return (
        <Grid sx={{
            display: "flex",
            flexDirection: "column",
            padding: "1rem",
            gap: 4,
        }}>
        <Typography sx={{
            fontFamily : "'Expletus Sans', cursive",
            fontWeight: 900,
            
        }} variant="h5" >
            Genetic Engineering Protocol:
        </Typography>
        <Typography
            sx={{
                whiteSpace: "pre-line",
                wordBreak: "break-word",
                textAlign: "justify",
            }}
        >
            {text}
        </Typography>
         <Typography sx={{
            fontFamily : "'Expletus Sans', cursive",
            fontWeight: 900,
            
        }} variant="h5" >
            Materials and Method:
        </Typography>

        <Typography sx={{
            fontFamily : "'Expletus Sans', cursive",
            fontWeight: 900,
            
        }} variant="h6" >
            Fragments Amplification
        </Typography>
        <Typography
            sx={{
                whiteSpace: "pre-line",
                wordBreak: "break-word",
                textAlign: "justify",
            }}
        >
            {text2}
        </Typography>
        <Typography sx={{
            fontFamily : "'Expletus Sans', cursive",
            fontWeight: 900,
            
        }} variant="h6" >
            Plasmid Construction
        </Typography>
        <Typography
            sx={{
                whiteSpace: "pre-line",
                wordBreak: "break-word",
                textAlign: "justify",
            }}
        >
            {text3}
        </Typography>
        <Figure title="Figure 24: Plasmid construction diagram" g={1}>
            <img src="https://static.igem.wiki/teams/5756/assets/images/lab/genetique-1-photoroom-1.svg" />
        </Figure>
        <Typography sx={{
            fontFamily : "'Expletus Sans', cursive",
            fontWeight: 900,
            
        }} variant="h6" >
            Cloning the Plasmid in E. coli
        </Typography>
        <Typography
            sx={{
                whiteSpace: "pre-line",
                wordBreak: "break-word",
                textAlign: "justify",
            }}
        >
            {text4}
        </Typography>
        <Typography sx={{
            fontFamily : "'Expletus Sans', cursive",
            fontWeight: 900,
            
        }} variant="h6" >
            Selection of the Recombinant Cells
        </Typography>
        <Typography
            sx={{
                whiteSpace: "pre-line",
                wordBreak: "break-word",
                textAlign: "justify",
            }}
        >
            {text5}
        </Typography>
        <Typography sx={{
            fontFamily : "'Expletus Sans', cursive",
            fontWeight: 900,
            
        }} variant="h6" >
            Verification of the Sequence of the Replicated Plasmids
        </Typography>
        <Typography
            sx={{
                whiteSpace: "pre-line",
                wordBreak: "break-word",
                textAlign: "justify",
            }}
        >
            {text6}
        </Typography>
        <Typography sx={{
            fontFamily : "'Expletus Sans', cursive",
            fontWeight: 900,
            
        }} variant="h6" >
            Electrotransformation of G. sulfurreducens
        </Typography>
        <Figure title="Figure 25: Electroporation" g={1}>
            <img src="https://static.igem.wiki/teams/5756/assets/images/lab/bio-synth-tique-2-1.svg" />
        </Figure>
        <Typography
            sx={{
                whiteSpace: "pre-line",
                wordBreak: "break-word",
                textAlign: "justify",
            }}
        >
            {text7}
        </Typography>
        <Figure title="Figure 26: Shematic diagram showing the steps and associated charges during electroporation Credit : Technology Networkd" g={1}>
            <img src="https://static.igem.wiki/teams/5756/assets/images/lab/bio-synth-3-1.svg" />
        </Figure>
        </Grid>
    );
}

export function Protocols() {
    return (
        <Grid sx={{
            display: "flex",
            flexDirection: "column",
            padding: "1rem",
            gap: 4,
        }}>
            <ExtendsList>
                <ExtendsChild title="Characterization of transformants">
                    {[
                        <iframe key="characterization" src="https://static.igem.wiki/teams/5756/assets/pdf/wetlab/characterization-of-transformants.pdf" style={{
                            width: "80vw",
                            height: "90vh",
                        }} />
                    ]}
                </ExtendsChild>

                <ExtendsChild title="Fragments amplification and analysis">
                    {[
                        <iframe key="fragments-amplification" src="https://static.igem.wiki/teams/5756/assets/pdf/wetlab/fragments-amplification-and-analysis.pdf" style={{
                            width: "80vw",
                            height: "90vh"
                        }}  />
                    ]}
                </ExtendsChild>

                <ExtendsChild title="G. sulfurreducens DNA extraction">
                    {[
                        <iframe src="https://static.igem.wiki/teams/5756/assets/pdf/wetlab/g-sulfurreducens-dna-extraction.pdf" style={{
                            width: "80vw",
                            height: "90vh"
                        }}  />
                    ]}
                </ExtendsChild>

                <ExtendsChild title="Plasmid construction">
                    {[
                        <iframe src="https://static.igem.wiki/teams/5756/assets/pdf/wetlab/plasmid-construction.pdf" style={{
                            width: "80vw",
                            height: "90vh"
                        }}  />
                    ]}

                </ExtendsChild>

                <ExtendsChild title="Transformation in E. coli">
                    {[
                        <iframe src="https://static.igem.wiki/teams/5756/assets/pdf/wetlab/transformation-in-e-coli.pdf" style={{
                            width: "80vw",
                            height: "90vh"
                        }}  />
                    ]}
                </ExtendsChild>
            </ExtendsList>
        </Grid>
    );
}
