import { Grid, Typography, Box } from "@mui/material";
import Figure from "../../components/Figure";
import { NormalText, NormalTextBold } from "../../components/Typography";

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
    const text = `Synthetic biology is often surrounded by fear, misconceptions, and a sense of inaccessibility for those outside the scientific community. With Electrophyll, our goal was to challenge this perception by bringing science closer to people in creative and engaging ways. We designed interactive activities, workshops, and outreach events to show that synthetic biology is not an unattainable or intimidating concept, but rather an exciting and powerful tool with real-world applications. Through these initiatives, we created opportunities for dialogue, learning, and inspiration, making biotechnology approachable for diverse audiences, from young students to the general public.`;

    return (
            <Typography
            sx={{
                whiteSpace: "pre-line", 
                wordBreak: "break-word", 
                textAlign: "justify",
                padding: "1rem",
            }}
            >
            {text}
            </Typography>
        
    );
}

export function Engagement_Education() {
    const path_image = "https://static.igem.wiki/teams/5756/assets/images/wiki/humanprac/image-brain.svg";
    const text = `Synthetic biology is a subject that can be scary for people that are not in the biology field. It can easily become overwhelming and therefore lose its appeal. However, we, Electrophyll, had the ambition to make it approachable and fun to show that it is not the unattainable beast the general public thinks it is. Furthermore, synthetic biology has a bad reputation, especially with the DNA manipulation, and the misunderstanding and misinformation surrounding it.   

And for that, we organized many activities that reached out a diversified public from Quebec (Sherbrooke city and the South shore of Montreal). Let’s look into them!`;
    const wrapped = wrapText(text, 80); // 80 chars per line (adjust as needed)

    return (
        <Grid container sx={{ width: "90%" }} alignItems="center" justifyContent="center">
            {/* Text on the left */}
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
                <img src={path_image} style={{ width: "80%", maxWidth: 350 }} alt="Engagement Education" />
            </Grid>
        </Grid>
    );
}

export function Regional_Expo(){
    const text = `Last March, we attended the Regional Expo-Sciences Finale that took place at Sherbrooke University. For three days, we had a stand that invited kids and teenagers from age 6 to 17 to see with their own eyes the DNA extraction of a strawberry and the conductivity of water. Indeed, those experiments were a vulgarized representation of our project on a smaller scale. We had a concept of electricity and the use of plant cells.  

    The DNA extraction used simple ingredients that can be found in any households. Students could mash the strawberry and soak them in an aqueous solution containing dish soap and salt to release the intracellular content and detach the DNA. After that, cold rubbing alcohol was poured onto the filtered mixture, and the DNA could visibly be seen detaching from the rest of the other intracellular content after a couple of minutes. Kids were impressed to be able to see and play with actual DNA! 

    For the electricity experiment, we had two beakers: one filled with Milli-Q water and the other with tap water mixed with a good quantity of salt. Then, two electrodes were submerged successively in the beakers. A light attached to an electrical circuit could then light up. The goal was to prove that adding ions to a solution made the light shine brighter, and the kids were impressed to see the brightness difference from the two beakers.  

    The activities were a success! Approximately 300 kids came and tried the experiments, and they were fascinated! `;
    //const wrapped = wrapText(text, 80); // 80 chars per line (adjust as needed)

    const pathImage1 = "https://static.igem.wiki/teams/5756/assets/images/wiki/humanprac/exp-rience-batterie.webp";
    const pathImage2 = "https://static.igem.wiki/teams/5756/assets/images/wiki/humanprac/exp-rience-adn-fraise.webp";

    const pathImage3 = "https://static.igem.wiki/teams/5756/assets/images/wiki/humanprac/expo-sc-1.svg";
    const pathImage4 = "https://static.igem.wiki/teams/5756/assets/images/wiki/humanprac/expo-sc-2.svg";
    const pathImage5 = "https://static.igem.wiki/teams/5756/assets/images/wiki/humanprac/expo-sc-3.svg";

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
            <Figure title="Figure 1: Explicative posters of the experiments" g={3}>
                <img src={pathImage1} />
                <img src={pathImage2} />
            </Figure>
            <Figure title="Figure 2 : Photos from the event" g={1}>
                <img src={pathImage3} />
                <img src={pathImage4} />
                <img src={pathImage5} />
            </Figure>
        </Grid>
    );
}

export function SherbMuseum(){
    const wrapped = "The Museum of Nature and Science in Sherbrooke offers interactive and immersive exhibitions on science, nature, and innovation. It stands out for its modern facilities, educational activities, and diverse temporary exhibits. We therefore offered to set up an information booth for a full day at the museum. With a plant and our prototypes, we represented the microbial fuel cell. Around 100 young people and their parents were able to learn more about synthetic biology, electricity, and our team! Although most of the visitors were already passionate about science, they discovered the potential of the bacterial world and saw a concrete application of it. This opportunity also allowed for discussions with the young participants about access to electricity in certain countries, the definition of clean and sustainable energy, and many other environment-related topics. Young minds are more aware than we might think, and they are full of ideas to improve their future. Exchanging with them was truly inspiring and gave us the motivation to go even further in our involvement with young people!";
    const img1 = "https://static.igem.wiki/teams/5756/assets/images/wiki/humanprac/muse.svg";
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

            {wrapped}
            </Typography>
            <Figure title="Figure 3 : Picture from the event" g={0}>
                <img src={img1} />
            </Figure>
        </Grid>
    );
}

export function Vox_Pop(){
    const text = `To make synthetic biology a little more dynamic, we decided to go out and ask questions to people on the streets of our city, Sherbrooke, in a Vox-pop format for our social media platforms. We asked a group of people from the University for the first video and strangers from the Downtown part of Sherbrooke for the second video.
  
Doing a vox pop on synthetic biology is relevant because it helps capture public perceptions and misconceptions, sparks curiosity, and makes the topic more accessible. It also provides insights to better adapt science communication and foster dialogue between science and society. 

At first, people were intimidated to answer questions about synthetic biology. However, when they heard our questions, they saw that this subject can be fun and entertaining and that it can be multidisciplinary. They also realized that they knew more than they thought and that they were surrounded by synthetic biology, which is exactly the takeaway we wanted viewers of the video to have. 
Posting it on different platforms helps us to reach a bigger public too. For both videos, we reached a total of 1500 viewers on Tik Tok and 3700 on Instagram.`;

    return(
        <Typography
            sx={{
                whiteSpace: "pre-line", 
                wordBreak: "break-word", 
                textAlign: "justify",    
                padding: "1rem"
            }}
        >
            {text}
        </Typography>
    );
}


export function High_School(){
    const text = `We conducted an outreach activity in a Secondary 5 advanced Math and Science class, involving approximately 30 students. The session began with a brief presentation of our project, during which we introduced basic concepts related to DNA and synthetic biology.

Following this introduction, we facilitated an educational escape game designed to reinforce the students’ understanding through problem-solving and collaboration. The activity included a series of challenges, such as answering scientific questions to unlock envelopes and decoding DNA sequences to obtain further clues.

This interactive approach combined theoretical explanations with hands-on tasks, allowing students to engage with synthetic biology in an educational and enjoyable way.`;
    const img1 = "https://static.igem.wiki/teams/5756/assets/images/wiki/humanprac/highsschool1.svg";
    const img2 = "https://static.igem.wiki/teams/5756/assets/images/wiki/humanprac/highsschool2.svg";
    const img3 = "https://static.igem.wiki/teams/5756/assets/images/wiki/humanprac/highsschool3.svg";

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
                }}
            >
                {text}
            </Typography>

            <Figure title="Figure 4 : Photos from the event" g={1}>
                <img src={img1} />
                <img src={img2} />
                <img src={img3} />
            </Figure>
        </Grid>
    );
}



export function College(){
    const texte1 = `To reach a broader audience, we decided to engage with older students. In Quebec, CEGEP follows high school and precedes university. Some students are enrolled in pre-university programs, while others pursue technical training. We visited Séminaire de Sherbrooke Collégial and Cégep de Sherbrooke, both of which offer science-related programs and expressed interest in our project. We delivered a 30-minute presentation outlining our project and the underlying theory, followed by a 15-minute Q&A session. The audience included teachers and students from various science programs.
 
At both CEGEPs, we also discussed the possibility of creating a collegiate iGEM team. It was exciting to hear their ideas and to answer their questions about ours. Both teachers and students seemed highly motivated and enthusiastic about our project and the competition.  `
    return (
        <Box component="div">
            <NormalText>{texte1}</NormalText>
            <Figure title="Figure 5 : Photos from the event" g={1}>
                <img src="https://static.igem.wiki/teams/5756/assets/images/wiki/humanprac/image-23.webp"/>
                <img src="https://static.igem.wiki/teams/5756/assets/images/wiki/humanprac/image-24.webp"/>
            </Figure>
        </Box>

    );
}

// Add this component at the top of your file, after the imports
interface PersonProfileProps {
    title: string;
    text: string;
    imagePath: string;
    altText: string;
}

function PersonProfile({ title, text, imagePath, altText }: PersonProfileProps) {
    return (
        <Grid container sx={{ width: "100%", mb: 2 }} alignItems="flex-start" spacing={2}>
            {/* Text section on the left */}
            <Grid item xs={12} md={8}>
                <NormalTextBold>{title}</NormalTextBold>
                <NormalText>
                    {text}
                </NormalText>
            </Grid>
            
            {/* Image on the right */}
            <Grid item xs={12} md={4} sx={{ display: "flex", justifyContent: "center" }}>
                <img 
                    src={imagePath} 
                    alt={altText}
                    style={{ 
                        width: "100%", 
                        maxWidth: "20em",
                        height: "auto",
                        borderRadius: "8px"
                    }} 
                />
            </Grid>
        </Grid>
    );
}

export function IntegHum(){
    const text1 = `Meeting with Professor Sébastien Rodrigue, Department of Biology, Université de Sherbrooke, PhD Biology, MSc Biology, BCS Biotechnology`;
    const text2 = `During this meeting, the synthetic biology team discussed the genes involved in electricity production. Professor Rodrigue explained that overexpressing pilA alone would increase nanowire production but would not necessarily enhance electron transfer. Based on his guidance, we decided to overexpress both pilA and omcZ to improve overall efficiency. For the construction of the recombinant DNA molecule, he introduced us to Gibson assembly, to insert both genes into a plasmid vector without the need for restriction enzymes. He also recommended online resources such as BioCyc and RAST for metabolic pathway modeling and genome annotation. His advice was very helpful to develop the methodology for the synthetic biology part of this project.`;
    const pathSeb = "https://static.igem.wiki/teams/5756/assets/images/wiki/humanprac/sebastien-1.webp";

    const sous_titre = "Isabelle Arsenault – Laboratory Technician, Faculty of Engineering (Department of Biotechnology and Chemical Engineering), Université de Sherbrooke";
    const text3 = `We had the opportunity to meet with Isabelle on multiple occasions throughout the course of our project. Thanks to her strong background in biotechnology, she provided us with valuable recommendations for the wet lab portion of our work. Her guidance was instrumental during all stages of our experiments, where she actively contributed by sharing her expertise and ensuring that our procedures were carried out effectively. Isabelle's support not only helped us overcome technical challenges but also enhanced the overall quality and reliability of our results.`;
    const pathIsabelle = "https://static.igem.wiki/teams/5756/assets/images/wiki/humanprac/image-25.webp";

    const sous_titre1 = `Martin Thibault – Technician in physics Faculty of Engineering (Department of Biotechnology and Chemical Engineering), Université de Sherbrooke`;
    const texte4 = `With his extensive knowledge of electricity, Martin was able to greatly assist us in our work on current capture. He provided valuable recommendations for our wet lab manipulations and guided us toward different approaches for retaining electrical current. In addition, Martin supplied us with the necessary equipment to record and analyze our current data, which proved essential for the advancement of our project. Also Martin provided us with a software that can record and measure continuous voltage data.`;
    const pathMartin = "https://static.igem.wiki/teams/5756/assets/images/wiki/humanprac/martin-1.webp";

    const sous_titre2 = `Professor Patrick Vermette – Ing. Ph. D, (Department of Biotechnology and Chemical Engineering), Université de Sherbrooke`;
    const texte5 = `Professor Vermette supported our team by sharing his extensive knowledge of the commercial and industrial landscape. He provided valuable advice on the entrepreneurial aspects of our project, offering insights into how to design a strong business model and how to approach real-world problems with practical and innovative solutions.`;
    const pathPatrick = `https://static.igem.wiki/teams/5756/assets/images/wiki/humanprac/patrick-1.webp`;

    const pathMarcAntoine = "https://static.igem.wiki/teams/5756/assets/images/wiki/humanprac/marc-antoine-1.webp";
    const texte6 = `Thanks to his valuable expertise, Professor Lauzon played a central role in guiding us during the selection of our original project idea. He helped us evaluate the resources available within the faculty for each potential direction, which was crucial in shaping our final choice. Moreover, his continuous support and encouragement were key to the development and advancement of our project.`;
    const sous_titre3 = "Professor Marc-Antoine Lauzon – Ing. Ph. D, (Department of Biotechnology and Chemical Engineering), Université de Sherbrooke";

    const pathRobert = "https://static.igem.wiki/teams/5756/assets/images/wiki/humanprac/robert-1.webp";
    const texte7 = `During our proof-of-concept trials, Robert guided us toward a safer and more reliable source of electrogenic bacteria, steering us away from our original idea of using wastewater. His expertise allowed us to refine our approach and ensure that our experiments could be carried out under safer and more controlled conditions.`;
    const sous_titre4 = `Robert Toupin – Ing., (Department of Biotechnology and Chemical Engineering), Université de Sherbrooke`;

    return (
        <Box component={"div"} sx={{ padding: "1rem" }}>
            <PersonProfile 
                title={text1}
                text={text2}
                imagePath={pathSeb}
                altText="Professor Sébastien Rodrigue"
            />

            <PersonProfile 
                title={sous_titre}
                text={text3}
                imagePath={pathIsabelle}
                altText="Isabelle Arsenault"
            />

            <PersonProfile 
                title={sous_titre1}
                text={texte4}
                imagePath={pathMartin}
                altText="Martin Thibault"
            />

            <PersonProfile 
                title={sous_titre2}
                text={texte5}
                imagePath={pathPatrick}
                altText="Professor Patrick Vermette"
            />

            <PersonProfile 
                title={sous_titre3}
                text={texte6}
                imagePath={pathMarcAntoine}
                altText="Professor Marc-Antoine Lauzon"
            />

            <PersonProfile 
                title={sous_titre4}
                text={texte7}
                imagePath={pathRobert}
                altText="Robert Toupin"
            />
        </Box>
    );
}