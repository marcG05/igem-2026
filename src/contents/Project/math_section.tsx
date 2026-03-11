import { Grid, Typography } from "@mui/material";
import Figure from "../../components/Figure";

export function Introduction(){
    const text = `In order to maximize electricity production by Geobacter sulfurreducens, a genetic modification should be considered. As explained in the “Electroactive Bacteria + Geobacter” section, the genes related to biofilm conductivity are OmcZ and pilA. These are therefore the genes we would aim to overexpress. In this section, we modeled the impact that these genetic modifications could have on energy production. Based on the literature and assuming that the only changes caused by the genetic modification are the number of electrons produced, the substrate oxidation yield, and the biofilm conductivity, linear relationships can be used to quantify this impact. All other variables remain unchanged. The following formulas are used to demonstrate that the targeted genetic modifications could lead to increased energy production.`;
    return(
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

export function Faraday(){
    const text = `The first model uses Faraday’s Law: 
Q = nFz
 
Q : Electric charge (C) 
n : Amount of substance transformed (mol) 
F : Faraday’s constant (96485 C/mol) 
z : Number of electrons transferred 
 
The variable z would be modified by the genetic overexpression of OmcZ, as more electrons would be expelled by the bacteria. This would therefore lead to an increase in the electric charge Q.  The datas used to model were 1.5x10⁷ electrons/second per cell (Tan et al. 2016) and we assumed a 50% improvement.`;
    
    const text2 = `This graph shows a gain of approximately 0.75x 10¹² C for an increase of 0.75 x 10⁷ moles of electrons transferred per mole of substrate. This significant gain supports the hypothesis that a genetic modification could be worthwhile.`;

    return(
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

            <Figure title="Figure 1: Faraday's law" g={1}>
                <img src="https://static.igem.wiki/teams/5756/assets/images/math/faraday.svg" />
            </Figure>

            <Typography
            sx={{
                whiteSpace: "pre-line", 
                wordBreak: "break-word", 
                textAlign: "justify",    
            }}>
            {text2}
            </Typography>
        </Grid>
    );
}

export function Nernst(){
    const text = `The second model uses the Nernst equation:`;
    const text2 = `E : Electrode potential (mV)
E⁰ : Standard potential (mV)
R : Gas constant (8.314 J/mol·K)
T : Temperature (K)
z : Number of electrons exchanged
F : Faraday’s constant (96485 C/mol)
[ ]: Concentration of the species
 
The datas used to model were 293K and we assume a 50% improvement. We used an inital concentration of 1.5mM of acetate, which usally produce 11mM of Fe(II) (Tang et al. 2007).  Since the potential of the anode is -0.1V and the potential of the cathode is 0,36V, the potential of the MFC is 0.46V (Levar et al. 2017; Mouselly, Alawadhi, et Senthilkumar 2024). Finaly, the reaction of oxydation of acetate produce 8 electrons(Richter et al. 2009). Here, the concentration of the product would be influenced by the overexpression of OmcZ, as the bacteria would be able to process acetate more efficiently.`;
    const text3 = `For an increase in product conversion of approximately 0.005 mol, the potential decreases slightly. This loss of potential highlights the importance of maintaining a fresh environment for the bacteria in order to maximize energy production.`;

     return(
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
            <Figure title="" g={1}>
                <img src="https://static.igem.wiki/teams/5756/assets/images/math/nersntequation.svg" />
            </Figure>
            <Typography
            sx={{
                whiteSpace: "pre-line", 
                wordBreak: "break-word", 
                textAlign: "justify",    
            }}>
            {text2}
            </Typography>

            <Figure title="Figure 2: Graphic for the Nernst equation" g={1}>
                <img src="https://static.igem.wiki/teams/5756/assets/images/math/nernstgraph.svg" />
            </Figure>

            <Typography
            sx={{
                whiteSpace: "pre-line", 
                wordBreak: "break-word", 
                textAlign: "justify",    
            }}>
            {text3}
            </Typography>
        </Grid>
    );

}


export function Resistance(){
    const text = `The final model uses the resistance formula and the power formula.

Resistance formula:`;

    const text2 = `R : Biofilm resistance (Ω)
L : Distance between two points in the film (mm)
α : Biofilm conductivity (µS/cm)
A : Surface area of conductive pili (mm²)

The datas used to model were 5mS/cm for the biofilm conductivity and an improvement of 500% proteins on the anode (Dhar et al. 2017; Nevin et al. 2009). For the surface area of conductive pili, we used a density of cell per anode of 1.35x10⁹ cell/cm2, a mean of pili’s diameter of 3nm and a mean of 5 pili per cell to calculate it (Adams et al. 2019; Ishii et al. 2008; Reguera et al. 2005) :`;

    const text3 = `In this case, the variable A would be modified by the genetic overexpression of pilA, as more pili would be produced by the bacteria. This would lead to a decrease in the resistance .`;

    const text4 = `This modeling shows that increasing the effective surface area of pili decreases the biofilm resistance by just over 0.25 Ω/cm, for an increase of nearly 0.002 mm² in effective pili surface area. Even if the gain is small, it could be really useful to increase the power.
 
Electric power formula:`;

    const text5 = `
P : Electric power (W)
R : Biofilm resistance (Ω)
I : Current (A)
 
Although this formula was not plotted in a model, it demonstrates the positive impact of reducing the system’s resistance (as described above). Indeed, a lower resistance would increase the electrical power produced by the system.`;

    return (<Grid sx={{
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
            <Figure title="" g={1}>
                <img src="https://static.igem.wiki/teams/5756/assets/images/math/resistanceequation.svg" />
            </Figure>
            <Typography
            sx={{
                whiteSpace: "pre-line", 
                wordBreak: "break-word", 
                textAlign: "justify",    
            }}>
            {text2}
            </Typography>

            <Figure title="" g={1}>
                <img src="https://static.igem.wiki/teams/5756/assets/images/math/resistanceairequation.svg" />
            </Figure>

            <Typography
            sx={{
                whiteSpace: "pre-line", 
                wordBreak: "break-word", 
                textAlign: "justify",    
            }}>
            {text3}
            </Typography>
            <Figure title="Figure 3: Graphic for the resistance formula" g={1}>
                <img src="https://static.igem.wiki/teams/5756/assets/images/math/resistancegraph.svg" />
            </Figure>

            <Typography
            sx={{
                whiteSpace: "pre-line", 
                wordBreak: "break-word", 
                textAlign: "justify",    
            }}>
            {text4}
            </Typography>
            <Figure title="" g={1}>
                <img src="https://static.igem.wiki/teams/5756/assets/images/math/resistancepower.svg" />
            </Figure>
            <Typography
            sx={{
                whiteSpace: "pre-line", 
                wordBreak: "break-word", 
                textAlign: "justify",    
            }}>
            {text5}
            </Typography>

        </Grid>);
}

export function Conclusion(){
    const text = `In conclusion, based on the literature and our estimations, genetic modification could enhance energy production. Indeed, the overexpression of OmcZ would increase the electrical charge, while the overexpression of pilA would reduce the biofilm resistance. However, it is important to keep in mind that more efficient bacteria require a regular supply of fresh medium in order to sustain their energy production.`;

     return(
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