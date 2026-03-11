import { Typography, Grid } from "@mui/material";
import Subsection from "../../components/Subsection";
import CycleText from "../../components/CycleText";
import Figure from "../../components/Figure";

// Utility to insert line breaks so that no line exceeds a given character width
function wrapText(text: string, maxWidth: number): string {
    const words = text.split(' ');
    let lines: string[] = [];
    let currentLine = '';

    words.forEach(word => {
        // If adding the next word would exceed the maxWidth, start a new line
        if ((currentLine + word).length > maxWidth) {
            lines.push(currentLine.trim());
            currentLine = word + ' ';
        } else {
            currentLine += word + ' ';
        }
    });
    if (currentLine) lines.push(currentLine.trim());
    return lines.join('\n');
}

export function Description() {
    const text = `The iGEM UdeS 2025 project aims to integrate a microbial fuel cell into a hydroponic system using Geobacter sulfurreducens, an electroactive bacterium capable of converting organic waste into electricity. This innovative system enables the simultaneous production of green energy and sustainable crops. Addressing today’s major challenges in energy transition and food autonomy, it offers a local solution for agricultural greenhouses while also holding global potential for isolated or developing communities seeking resilient and eco-friendly technologies.`;
    //const wrapped = wrapText(text, 40); // 40 chars per line (adjust as needed)

    return (
       <Grid sx={{
            display: "flex",
            flexDirection: "column",
            padding: "1rem",
            gap: 4,
        }}>
            <Typography
            sx={{
                whiteSpace: "pre-line", 
                wordBreak: "break-word", 
                textAlign: "justify",    
            }}>
            {text}
            </Typography>
        </Grid>
    );
}

export function Engineering() {
    const txtWrap = 30;

    const text = `We follow the Design–Build–Test–Learn (DBTL) cycle to structure and improve our engineering process. This approach allows us to design thoughtful solutions, build and test prototypes, and learn from real data to refine our ideas. By repeating this cycle, we work more efficiently, adapt to challenges, and ensure that each step of our project builds on evidence and continuous improvement.`;
    const wrapped = wrapText(text, txtWrap); // 40 chars per line (adjust as needed)
    const wrap2 = wrapText(`At the beginning of our project, we searched for a plant that could produce electricity via its consortium of bacteria. The plan was to make a house garden that could generate its own electricity. We finally chose to use the Epipremnum aureum plant because of its accessibility and its potential.`, txtWrap);
    const wrap3 = wrapText(`We performed a cell count and a Gram staining to learn what the consortium of the plant looked like.`, txtWrap);
    const wrap4 = wrapText(`We learned that we had a good cell concentration of  UFC/ml and that the consortium contained Gram-negative bacillus, gram-positive bacillus and gram-positive E. coli looking bacillus.`, txtWrap);
    const wrap5 = wrapText(`With the goal of creating a microbial fuel cell (MFC), our team first reviewed existing designs in this field to better understand their functionning. Although several different configurations have been developed, most consist of two chambers, one anaerobic, separated either by a salt bridge or by a proton exchange membrane.`, txtWrap);


    return (
        <Grid sx={{
            display: "flex",
            flexDirection: "column",
            padding: "1rem",
            gap: 4,
        }}>
            <Grid sx={{
                display: "flex",
                flexDirection: "row",
                padding: "1rem",
                alignItems: "center",
                gap: 4,
            }}>
                <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "flex-end" }}>
                <Typography
                    sx={{
                        whiteSpace: "pre-line",
                        wordBreak: "break-word",
                        textAlign: "justify",
                        width: { xs: "100%", md: "90%" },
                    }}
                >
                    {wrapped}
                </Typography>
            </Grid>
            {/* Image on the right */}
            <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "flex-start" }}>
                <img src="https://static.igem.wiki/teams/5756/assets/images/project/eng.svg" style={{ width: "80%", maxWidth: 350 }} alt="Engagement Education" />
            </Grid>
        </Grid>

        <Subsection title="Microorganism Selection and Fuel Cell Proof of Concept" image="https://static.igem.wiki/teams/5756/assets/images/project/cycle.svg" textImage="Cycle 1">
                    <Grid sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 2,
                    }}>
                        <Typography sx={{
                        fontSize: "1.5rem",
                        }}>
                            a) plant + microorganism
                        </Typography>

                        <CycleText img="design">
                            <Typography>
                                {wrap2}
                            </Typography>
                        </CycleText>

                        <CycleText img="test">
                            <Typography>
                                {wrap3}
                            </Typography>
                        </CycleText>

                        <CycleText img="learn">
                            <Typography>
                                {wrap4}
                            </Typography>
                        </CycleText>

                        <Typography sx={{
                        fontSize: "1.5rem",
                        }}>
                            b) Experimental battery
                        </Typography>

                        <CycleText img="design">
                            {wrap5}
                        </CycleText>

                        <CycleText img="build">
                            {wrapText(`Having free access to 3D printers, we used them to print our prototypes. The first prototype was printed in one piece, so the 2 chambers were joined by a bridge. Since it leaked and ruined our membrane, we had to think of another prototype. This second one was in two pieces joined by bolts and screws to insert the membrane without damaging it and coated with liquid caoutchouc to prevent any leaks.`, txtWrap)}
                        </CycleText>

                        <CycleText img="test">
                            {wrapText(`To ensure that our prototype would not introduce errors, we decided to test it with a known oxidation reaction to simulate the biological process. Specifically, we used ascorbic acid in the anode chamber and the same catholyte solution intended for use with the bacteria. We also tested the reaction with different materials for the cathodes and anodes. This experiment also allowed us to verify both the tightness of the prototype and the proper functioning of the proton exchange membrane.`,txtWrap)}
                        </CycleText>

                        <CycleText img="learn">
                            {wrapText(`The results show that our prototype was able to produce electricity, even though the voltage was relatively low. In addition, zinc proved to be the most effective cathode, while graphite was the best anode. For the next steps, we believe it would be more relevant to perform continuous measurements with a biological system, since the output will depend on bacterial growth, unlike in a chemical battery.`,txtWrap)}
                        </CycleText>

                    </Grid>
        </Subsection>

        <Subsection title="Combine the plants and the experimental battery" image="https://static.igem.wiki/teams/5756/assets/images/project/cycle.svg" textImage="Cycle 2">
                    <Grid sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 2,
                    }}>
                        <CycleText img="design">
                            {wrapText(`We took the same design as the cycle 1.`, txtWrap)}
                        </CycleText>

                        <CycleText img="build">
                            {wrapText(`In the cathodic chamber, a piece of zinc was connected to the electric circuit, while in the anodic chamber a piece of graphite was connected. A 100 Ω resistor was placed in the circuit, with a multimeter connected in parallel to the resistor.`, txtWrap)}
                        </CycleText>

                        <CycleText img="test">
                            {wrapText(`We incubated the plants in two different mediums for 24 hours, 72 hours and one week. Then, we measured punctually the voltage for the different incubating time plant culture (24h, 72h and 1 week). The value of voltage and amperage were near zero`, txtWrap)}
                        </CycleText>

                        <CycleText img="learn">
                            {wrapText(`On the culture of 72 hours and 1 week, there was fungal gowth, which was not desired because we want bacteria to do the exchanges at the anode in our design. We learn that we could use acetate instead of glucose as our electron donor. We don’t think that we have enough microorganisms in our medium. We read in literature that industrial waste could contain a better electroactive consortium. We think we should put the anode in the medium at the beginning of its growth to have a biofilm on the anode. Also, the anodic chamber has to be anaerobic so the electrons can be reduced at the anode. Therefore, we have to change our prototype. Also, we learned that we must switch to a semi-continuous battery because we want the bacteria to have nutriments and we don’t want any formation of fungus.`, txtWrap)}
                        </CycleText>


                    </Grid>
        </Subsection>

        <Subsection title="Prototype upgrade and electricity test" image="https://static.igem.wiki/teams/5756/assets/images/project/cycle.svg" textImage="Cycle 3">
                    <Grid sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 2,
                    }}>

                        <CycleText img="design">
                            {wrapText(`We designed a new prototype that can be semi-continuous, with an anaerobically chamber and that can contain the anode. We added a hermetic lid with three holes: one for the anode and two holes for tubing. One tube that goes in the medium and one for a tube that stays out of the medium. These two tubes were used to take out medium and add some for our semi-continuous concept. They were also used to perform nitrogen purges. We decided to set aside the use of plants and focus on generating electricity. We tried using brewery wastewater as we read in literature that it could generate voltage. Studies also indicated that Geobacter spp. can be found in spent grain under anaerobic conditions.`, txtWrap)}
                        </CycleText>

                        <CycleText img="build">
                            {wrapText(`We 3D printed the prototype. It is separated in three parts and it is joined by bolts. The spent grain used in the experiment was collected from our university’s brewery.`, txtWrap)}
                            <Figure title="Figure 1: 3D prototype" g={1}>
                                <img src="https://static.igem.wiki/teams/5756/assets/images/project/3dproto.svg" style={{
                                    maxWidth: "12rem",
                                    maxHeight: "12rem"
                                }}/>
                            </Figure>
                        </CycleText>

                        <CycleText img="test">
                            {wrapText(`We prepared a culture medium specifically for Geobacter spp. and placed it in the anodic chamber. We started a plate reader to generate a growth curve and monitor how the consortium developed. We also did a Gram staining to observe the morphology of the cells. The battery was assembled using granite the anode and zinc for the cathode. We added two tubes to facilitate medium and gas exchanges. The battery was then linked to a computer for continuous voltage and current monitoring. We reached a stable voltage of 0.6 mV after 24 hours. Notably, the consortium’s growth curve also showed its first plateau at the 24-hour mark.`, txtWrap)}
                            <Figure title="Figure 2: Test of the prototype" g={1}>
                                <img src="https://static.igem.wiki/teams/5756/assets/images/project/prototest.svg" style={{
                                    maxWidth: "12rem",
                                    maxHeight: "12rem"
                                }}/>
                            </Figure>
                        </CycleText>

                        <CycleText img="learn">
                            {wrapText(`We learned that our spent grain medium probably had no trace of Geobacter spp. However, we think that our prototype is promising because the curve of voltage and the growth curve stabilize at 24 hours, which we suppose is the time it took for the consortium to acclimatize and form a biofilm. We also suspect that the bridge between the two chambers may be too long, potentially causing stagnant liquid to accumulate near the membrane, which could hinder proton transfer. Also, the hole may be too small and that can limit the exchanges at the membrane. We believe that with a microbial consortium containing a confirmed presence of Geobacter spp., the voltage output could be significantly improved.`, txtWrap)}
                        </CycleText>

                        

                    </Grid>
        </Subsection>

        <Subsection title="Future steps – Genetically modified electroactive bacteria" image="https://static.igem.wiki/teams/5756/assets/images/project/cycle.svg" textImage="Cycle 4">
                    <Grid sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 2,
                    }}>
                        <Typography sx={{
                            padding : "1rem",
                            maxWidth: "71%",
                        }}>
                            {wrapText(`The rate of bioelectricity production in an electroactive bacterium depends first on its ability to oxidise an electron donor and then to transfer electrons from its metabolism to the biofilm. Once the electrons reach the biofilm, it must be as conductive as possible to efficiently direct them toward the anode and generate electricity. To improve bioelectricity production in our prototype, we aim to focus on this final step of external electron transfer (EET) by engineering Geobacter sulfurreducens. According to the literature, we concluded that G. sulfurreducens can produce bioelectricity and that it can be isolated from spent grain. We developed a strategy to optimize the conductivity of its biofilm.`, txtWrap)}
                        </Typography>

                        <CycleText img="design">
                            {wrapText(`Many genes play important roles in the final step of EET in G. sulfurreducens. These include genes coding for conductive nanowires, inner membrane and periplasmic porins and cytochromes, structural and redox proteins, as well as other components that facilitate electron transfer. Based on our research, we identified the pilA and omcZ genes as essential for EET. The OmcZ cytochromes form conductive filaments that enhance current production in thick biofilms, and their deletion has been shown to reduce electricity output in G. sulfurreducens (Hu et al., 2021). PilA pilin nanowires monomer is essential for the secretion of c-type cythochromes such as OmcZ. By amplifying these two genes, we aim to improve the EET rate, which we expect will result in increased electricity production.`, txtWrap)}
                        </CycleText>

                        <CycleText img="build">
                            {wrapText(`We plan to amplify the pilA and omcZ genes from the wild-type G. sulffureducens DNA using PCR. We designed all the primers with Primer Premier software to ensure their assembly in the pBBR1MCS-2 vector. We will use the Gibson assembly method to insert, the pilA and omcZ genes, into the vector, pBBR1MCS-2. This molecular cloning strategy is using primers with overlapping sequences to connect the inserts and the vector. To help us visualize the assembly, we used Ape software:`, txtWrap)}
                            <Figure title="Figure 3: Screenshot of the assembly" g={1}>
                                <img src="https://static.igem.wiki/teams/5756/assets/images/project/cycle-4-1.svg" style={{
                                    maxWidth: "12rem",
                                    maxHeight: "12rem"
                                }}/>
                                
                            </Figure>

                            The pilA and omcZ genes will keep their natural promoters, and we plan to clone the resulting plasmid into E. coli. This way, we will be able to produce our plasmid in a safe and well-characterized host to ensure the subsequent stages of our project.
                        </CycleText>

                        <CycleText img="test">
                            <Typography>To determine whether our genetic modifications could enhance bioelectricity production in our prototype, we developed mathematical models grounded in experimental data from the literature. These models allow us to connect specific changes in G. sulfurreducens - namely the overexpression of PilA and OmcZ - to measurable functional outcomes, such as electricity generation. By analyzing our predictions, we observed that overexpressing OmcZ is expected to increase the electric current, while overexpressing PilA would reduce the biofilm’s resistance, facilitating electron transfer. This insight have helped us estimate the potential gains in bioelectricity but also to understand the operational limits of our microbial fuel cell system.</Typography>
                            <Typography>To ensure the plasmid is correctly transformed, we will perform a positive control using competent E. coli cells and the pBBR1MCS-2 vector. The control will be plated on LBA-kan agar, where growth will indicate successful vector uptake. We will also prepare a negative control, composed of unassembled DNA fragments and competent E. coli cells, which will be plated on LBA agar to confirm that the cells can grow, and on LBA-kan agar to verify the absence of spontaneous growth.
Once these verifications are completed, we will extract and purify the plasmidic DNA to characterize it on an agarose gel.
For the next step, we plan to introduce the plasmid to G. sulfurreducens by electrotransformation, a method that uses electric pulses to temporarily create pores in the cell membrane to make it permeable. A positive control with the pBBR1MCS-2 vector will be included and plated on LBA-kan agar to confirm that the method is effective. We will then perform the same electrotransformation method with our assembled plasmid to fully modify the G. sulfurreducens cells and plate the culture on LBA-kan agar.
It would be interesting to confirm the overexpression of the pilA and omcZ genes by extracting and purifying the corresponding PilA and OmcZ proteins. We could then compare their concentrations in our engineered G. sulfurreducens strain with those in the wild-type strain. Further research will be needed to carry out this type of protein characterization in our project.</Typography>
                        </CycleText>
                        
                        <CycleText img="learn">
                            We anticipate the possibility that the genetically modified cells may not grow due to overexpression of the inserted genes. In that case, we would incorporate an inducible promoter to control the timing and level of expression.
After completing these tests, we plan to incorporate the modified bacteria into our prototype and compare their electricity production with that of the wild-type strain. We expect that the modified bacteria will form a more conductible biofilm than the wild type, which will enhance bioelectricity production.
                        </CycleText>
                    </Grid>
        </Subsection>
    </Grid>
    );
}


