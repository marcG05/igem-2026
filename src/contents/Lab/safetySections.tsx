import { Box } from "@mui/material";
import { NormalText, Subtitle2 } from "../../components/Typography";

export function Safety_First(){
    
  return (
    <Box component="div" sx={{mr:4, width:"90%"}}>
        <Subtitle2>Safety first - always wear: </Subtitle2>
        <NormalText>-  Lab coat </NormalText>
        <NormalText>-  Safety goggles </NormalText>
        <NormalText>-  Nitrile gloves  </NormalText>
        <NormalText>-  Closed shoes  </NormalText>
        <NormalText>-  Work under a hood (chemical fume hood or biosafety cabinet, as appropriate)   </NormalText>

    </Box>

  );
}


export function Battery_Testing(){
    const texte1 = `Two types of tests were performed on the prototypes: 
Chemical functionality test : A known redox reaction (oxidation of ascorbic acid) was used to confirm the battery's functionality. 
Biological media test : In this phase, different biological environments were tested: spent beer grain (brewer's mash) and plant growth water. 
In both tests, the catholyte was the same:  
A buffer solution composed of sodium hydrogen phosphate, monopotassium phosphate, potassium chloride, sodium chloride, and ferricyanide. 
The anolyte varied depending on the test: 
Chemical test: water and ascorbic acid 
Biological test: spent grain or plant water 
Electrodes tested included: zinc, graphite, and copper. 
 
Chemical Hazards & Precautions 
Sodium hydrogen phosphate 
Risk: On thermal decomposition, releases toxic fumes of phosphorus oxides and sodium oxide. 
Precaution: Avoid overheating; handle under a fume hood. 
Monopotassium phosphate 
Risks: Ingestion may irritate the digestive tract (nausea, vomiting, cramps, diarrhea). Inhalation may irritate upper respiratory tract (especially dust or vapors). 
Precaution: If swallowed, give water—do not induce vomiting. Seek medical advice. If inhaled, move to fresh air. Rinse skin/eyes thoroughly if exposed. 
Potassium chloride 
Risk: May cause minor skin, eye, or respiratory irritation. Dust may cause mechanical irritation. 
Precaution: Wear PPE; avoid inhalation or contact. Ingestion may irritate the digestive system. 
Ferricyanide 
Risk: Releases toxic cyanide fumes when heated or mixed with acids. 
Precaution: Keep away from acids and heat sources. Always handle under a chemical fume hood. 
Zinc (solid) 
Risk: Fine zinc dust is pyrophoric (can spontaneously ignite with humidity). Reacts with acids, water, or alkalis to release hydrogen gas (flammable/explosive). 
Precaution: Avoid generating dust. Store away from oxidizers, moisture, and acids. 
Ascorbic acid (Vitamin C) 
Risk: May cause irritation to eyes and skin. Ingestion in large amounts may lead to GI issues and, rarely, urinary tract stones. 
Precaution: Rinse thoroughly if contact occurs. In case of ingestion, drink water and seek medical advice if symptoms appear. `
  return (
    <Box component="div" sx={{mr:4, width:"90%"}}>
        <Subtitle2>Safety first - always wear: </Subtitle2>
        <NormalText>{texte1}</NormalText>
    </Box>
  );
}


export function Coloration(){
    const texte1 = `    Lugol’s Iodine 

    Risk: Causes skin irritation Causes serious eye irritation May cause respiratory irritation Causes damage to organs through prolonged or repeated exposure 

    Precaution: Wash face, hands and any exposed skin thoroughly after handling Wear protective gloves/protective clothing/eye protection/face protection Do not breathe dust/fume/gas/mist/vapors/spray Do not eat, drink or smoke when using this product 

    Crystal violet 

    Risk: Harmful if swallowed Causes serious eye damage Suspected of causing cancer 

    Precaution: Obtain special instructions before use Do not handle until all safety precautions have been read and understood Wear protective gloves/protective clothing/eye protection/face protection Wash face, hands and any exposed skin thoroughly after handling Do not eat, drink or smoke when using this product 

 

    Safranine 

    Risk: Causes skin irritation.Causes serious eye irritation. 
    May cause respiratory irritation. `
    return(
    <Box component="div" sx={{mr:4, width:"90%"}}>
        <NormalText>{texte1}</NormalText>
    </Box>
    );
}