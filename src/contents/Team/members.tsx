import React, { useEffect, useRef, useState } from "react";
import { Box } from "@mui/material";
import { BasicBox } from "../../components/teams/basicBox.tsx";
import {MovingFish} from '../../components/home/Sections.tsx'
import { Canvas } from '@react-three/fiber'
import { LoadingPage } from "../LoadingPage.tsx";

const fishConfigs = [
  { basePosition: [1, 1, -350], radius: 60, speed: 0.15, phase: 0.5, scale: [0.03, 0.03, 0.03], verticalAmplitude: 200 },
  { basePosition: [1, -20, -325], radius: -70, speed: 0.15, phase: 0.1, scale: [0.03, 0.03, 0.03], verticalAmplitude: -180 },

];


const CanvasSection: React.FC<{}> = () => (
  <Canvas id="react-can" style={{position: "relative", top: 0, left: 0, width: "100%", height: "100%", zIndex:1}}>
    <ambientLight intensity={0.2} />
    <pointLight position={[10, 10, 10]} intensity={2} />
    <directionalLight position={[-10, 15, 5]} intensity={1.5} />
    {fishConfigs.map((cfg, idx) => (
      <MovingFish
        key={idx}
        {...cfg}
        basePosition={cfg.basePosition as [number, number, number]}
        scale={cfg.scale as [number, number, number]}
      />
    ))}
  </Canvas>
);

const boxSx = {
  minHeight: "100vh",
  height: "100%",
  width: "100vw",
  position: "relative",
  boxSizing: "border-box",
  mb: -10,
  zIndex: 2,
};

export function Members() {  
   const [loading, setLoading] = useState(true);
    const r = useRef(null);
  
    useEffect(() => {
      // Show loading for 2 seconds, then show the page
      const timer = setTimeout(() => 
        setLoading(false), 100);
  
       
      return () => {
        clearTimeout(timer);
        window.scrollTo(0,0);
      };
    }, []);
  
    useEffect(() => {
      if (!loading && r.current) {
        gsap.to(r.current, {
          scrollTrigger: r.current,
          opacity: 1,
          duration: 3,
          ease: "power2.out"
        });
      }
    }, [loading]);
  
    if (loading) {
      return <LoadingPage />;
    }
  return (
    <Box
      sx={boxSx}
      className="water-gradient-section"
      component="div"
    >
      <Box 
        component="div"
        sx={{ position: "absolute", height: "100%", width: "100%" }}>
        <CanvasSection />
      </Box>
      <Box
        component="div"
        sx={{
          px: { xs: 1, md: 4 },
          pt: { xs: 10, md: 12 },
          mb: "5em",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          gap: { xs: 3, md: 5 },
          width:"100%",
          minHeight: "100vh",
          position: "relative",
        }}
      >
        <BasicBox
          people={[
            { name: "Bruno Veillette", image: "https://static.igem.wiki/teams/5756/assets/images/teams/entrefinteam/brunoveillette.webp" },
            { name: "Élizabeth Levesque", image: "https://static.igem.wiki/teams/5756/assets/images/teams/entrefinteam/elizabethlevesque.webp" },
            { name: "Naïda Fleury", image: "https://static.igem.wiki/teams/5756/assets/images/teams/entrefinteam/naidafleury.webp" },
            { name: "Mégane Dupuis", image: "https://static.igem.wiki/teams/5756/assets/images/teams/gestionteam/meganedepuis.webp" },
            { name: "Marc-Antoine Charland", image: "https://static.igem.wiki/teams/5756/assets/images/teams/labteam/marcantoinecharlanf.webp" },
            { name: "Heidi Lavoie", image: "https://static.igem.wiki/teams/5756/assets/images/teams/labteam/heidilavoie.webp" },
            {name : "Juliette Demers", image: "https://static.igem.wiki/teams/5756/assets/images/teams/person.webp"}
          ]}
          topTitle="Équipe Entrepreneuriat et Finances"
          topSubtitle="STRATÉGIQUE • ORGANISATION • FINANCEMENT • COMMUNICATION • VISIONNAIRE"
          bottomTitle="Entrepreneurship and Finance Team"
          bottomSubtitle="STRATEGIC • ORGANISATION • FUNDING • OUTREACH • VISIONARY"
          width="42%"
          backText1="Entrepreneuriat et Finance 💼💡💰 L’équipe Entrepreneuriat et Finance joue un rôle clé dans le projet. Elle s’occupe de la gestion budgétaire 📊, de la recherche de commandites 🤝, ainsi que du développement entrepreneurial 🚀. Grâce à son travail, l’équipe assure la viabilité financière du projet et ouvre des opportunités pour son rayonnement à long terme ✨."
          backText2="Entrepreneurship and Finance Team 💼💡💰The Entrepreneurship and Finance team plays a key role in the project. It takes care of budget management 📊, sponsorship outreach 🤝, and entrepreneurial development 🚀. Through its work, the team ensures the financial sustainability of the project and creates opportunities for long-term growth and impact ✨."
        />
        <BasicBox
          people={[
            { name: "Élisabeth Gagné", image: "https://static.igem.wiki/teams/5756/assets/images/teams/edu/elizabethgagne.webp" },
            { name: "Laurie Bélanger", image: "https://static.igem.wiki/teams/5756/assets/images/teams/edu/lauriebelanger.webp" },
            { name: "Margot Landry", image: "https://static.igem.wiki/teams/5756/assets/images/teams/edu/margotlandry.webp" },
            { name: "Delphine lemieux", image: "https://static.igem.wiki/teams/5756/assets/images/teams/edu/delphinelemieux.webp" },
          ]}
          topTitle="Équipe Éducation"
          topSubtitle="INSPIRANT • COLLABORATIF • INFORMATIF • ÉDUCATIF • LUDIQUE"
          bottomTitle="Education Team"
          bottomSubtitle="INSPIRING • COLLABORATIVE • INFORMATIVE • EDUCATIONAL • ENGAGING"
          width="50%"
          backText1="L’équipe Éducation 📚 a vulgarisé plusieurs sujets scientifiques 🔬 par l’entremise de diverses présentations 🎤, notamment à l’Expo-science de Sherbrooke 🧪✨ et dans des écoles 🏫 (secondaire et cégep 🎓). Cela a permis de cultiver la curiosité 🌱 de plusieurs jeunes 🌟 en leur donnant l’occasion de découvrir de nouveaux sujets 💡 qu’ils et elles ne connaissaient pas encore et de poser toutes les questions ❓ qu’ils avaient en tête ."
          backText2="The Education team 📚 simplified and explained several scientific topics 🔬 through various presentations 🎤, notably at the Sherbrooke Science Fair 🧪✨ and in schools 🏫 (high school and college 🎓). This helped to spark curiosity 🌱 among many young people 🌟 by giving them the opportunity to discover new topics 💡 they had never heard of before and to ask all the questions ❓ they had in mind ."
        />
        <BasicBox
          people={[
            { name: "Laurie Bélanger", image: "https://static.igem.wiki/teams/5756/assets/images/teams/biosynteam/lauriebelanger.webp" },
            { name: "Marie-Anne Henri", image: "https://static.igem.wiki/teams/5756/assets/images/teams/labteam/marieannehenri.webp" },
            { name: "Heidi Lavoie", image: "https://static.igem.wiki/teams/5756/assets/images/teams/labteam/heidilavoie.webp" },
            { name: "Saria Berger", image: "https://static.igem.wiki/teams/5756/assets/images/teams/labteam/sariaberger.webp" },
            { name: "Étienne Vasseur", image: "https://static.igem.wiki/teams/5756/assets/images/teams/labteam/etiennevasseur.webp" },
            { name: "Élizabeth Levesque", image: "https://static.igem.wiki/teams/5756/assets/images/teams/labteam/elizabethlevesque.webp" },          
          ]}
          topTitle="Équipe Laboratoire"
          topSubtitle="INNOVANTS • INGÉNIEUX • SERRE • PLANTE • TESTS"
          bottomTitle="Laboratory Team"
          bottomSubtitle="INNOVATIVE • INGENIUS • GREENHOUSE • PLANT • EXPERIMENTS"
          width="70%"
          backText1="🔬 L’équipe labo est au cœur de l’action pour faire avancer le projet ! 💪 Elle prend en charge toutes les manipulations en laboratoire et met la main à la pâte pour atteindre les objectifs du projet. 🖨️⚡🦠 Que ça soit l’impression 3D, des tests d’électricité ou de la croissance bactérienne, l’équipe labo vise à obtenir des résultats concrets !"
          backText2="🔬 The lab team is at the heart of the action to move the project forward! 💪 They handle all the laboratory work and get hands-on to achieve the project’s goals. 🖨️⚡🦠 Whether it’s 3D printing, electrical testing, or bacterial growth, the lab team aims to deliver concrete results!"
        />
        <BasicBox
          people={[
            { name: "Élizabeth Gagné", image: "https://static.igem.wiki/teams/5756/assets/images/teams/wikiteam/elizabethgagne.webp" },
            { name: "Margot Landry", image: "https://static.igem.wiki/teams/5756/assets/images/teams/wikiteam/margotlandry.webp" },
            { name: "Delphine Lemieux", image: "https://static.igem.wiki/teams/5756/assets/images/teams/wikiteam/delphinelemieux.webp" },
            { name: "Raphaël Bonhomme", image: "https://static.igem.wiki/teams/5756/assets/images/teams/wikiteam/moi.webp" },
            { name: "Marc-Antoine Gauthier", image: "https://static.igem.wiki/teams/5756/assets/images/teams/wikiteam/marcantoinegauthier1.webp" },
          ]}
          topTitle="Équipe Wiki"
          topSubtitle="CRÉATIVITÉ • SITE WEB • INFORMATIONS • CONCEPTION • VISIBILITÉ"
          bottomTitle="Wiki Team"
          bottomSubtitle="CREATIVITY • WEB SITE • INFORMATIONS • DESIGN • VISIBILITY"
          width="60%"
          backText1="L’équipe Wiki s’occupe de résumer de manière dynamique toutes les étapes et réalisations d’iGEM UdeS depuis l’automne dernier sur un site web 🌐✨. L’équipe est divisée en deux parties : la première organise le côté esthétique et artistique 🎨, et la deuxième s’occupe de toute la programmation 💻 pour rendre le site attrayant et facile à naviguer !"
          backText2="The Wiki Team is in charge of dynamically summarizing all the steps and achievements of iGEM UdeS since last fall on a website 🌐✨. The team is split into two parts: the first focuses on the site’s artistic and aesthetic design 🎨, while the second handles all the programming 💻 behind the scenes to make the site attractive and easy to navigate!"
        />
        <BasicBox
          people={[
            { name: "Maëline Salmon", image: "https://static.igem.wiki/teams/5756/assets/images/teams/biosynteam/maelinesalmon1.webp" },
            { name: "Naïda Fleury", image: "https://static.igem.wiki/teams/5756/assets/images/teams/biosynteam/naidafleury.webp" },
            { name: "Laurie Bélanger", image: "https://static.igem.wiki/teams/5756/assets/images/teams/biosynteam/lauriebelanger.webp" },
            { name: "Mariane Lachance", image: "https://static.igem.wiki/teams/5756/assets/images/teams/biosynteam/mlachance.webp"}
          ]}
          topTitle="Équipe Biologie Synthétique"
          topSubtitle="SOLUTIONS • GÉNÉTIQUE • MÉTHODIQUE • AMBITIEUX • ANALYTIQUE"
          bottomTitle="Synthetic Biology Team"
          bottomSubtitle="SOLUTIONS • GENETIC • METHODICAL • AMBITIOUS • ANALYTICAL"
          width="40%"
          backText1="🧬 Équipe Biologie Synthétique Toujours en quête d’innovation, cette équipe explore les concepts de biologie synthétique et recherche les meilleures façons de les intégrer à notre projet 💡🔍. Grâce à leur expertise, ils transforment nos idées en avancées scientifiques concrètes 🌱✨."
          backText2="🧬 Synthetic Biology Team. Always pushing the boundaries of innovation, this team dives into synthetic biology concepts and finds the best ways to integrate them into our project 💡🔍. With their expertise, they turn our ideas into tangible scientific progress 🌱✨."
        />
        <BasicBox
          people={[
            { name: "Margot Landry", image: "https://static.igem.wiki/teams/5756/assets/images/teams/gestionteam/margotlandry.webp" },
            { name: "Mégane Dupuis", image: "https://static.igem.wiki/teams/5756/assets/images/teams/gestionteam/meganedepuis.webp" },
            { name: "Marie-Anne Henri", image: "https://static.igem.wiki/teams/5756/assets/images/teams/gestionteam/marieannehenri.webp" },
            { name: "Élizabeth Levesque", image: "https://static.igem.wiki/teams/5756/assets/images/teams/gestionteam/elizabethlevesque.webp" },
            { name: "Delphine Lemieux", image: "https://static.igem.wiki/teams/5756/assets/images/teams/gestionteam/delphinelemieux.webp" },
            { name: "NaÏda Fleury", image: "https://static.igem.wiki/teams/5756/assets/images/teams/gestionteam/naidafleury.webp" },
            { name: "Salma Berrayana", image: "https://static.igem.wiki/teams/5756/assets/images/teams/gestionteam/salmaberrayana.webp" },
          ]}
          topTitle="Équipe de Gestion"
          topSubtitle="STRAGÉGIE • COORDINATION • FINANCEMENT • COMMUNICATION • VISIBILITÉ"
          bottomTitle="Management Team"
          bottomSubtitle="STRATEGY • TEAM SUPPORT • FUNDING • OUTREACH • VISIBILITY"
          width="90%"
          backText1="💼 Le comité exécutif est le pilier qui assure le bon fonctionnement de l’équipe iGEM ! Il veille à coordonner les efforts, maintenir une communication fluide et soutenir chaque sous-équipe pour que tout avance dans la bonne direction 📋. Qu’il s’agisse de planifier des événements, gérer le budget 💰, créer des liens avec des partenaires 🤝 ou faire rayonner l’équipe 🎯✨, le comité exécutif est toujours là pour guider le projet vers le succès 🌟."
          backText2="💼The Executive Committee is the backbone that keeps the iGEM team running smoothly! They coordinate efforts, maintain clear communication, and support each sub-team to ensure everything moves in the right direction 📋. Whether it’s planning events, managing the budget 💰, building partnerships 🤝, or promoting the team 🎯✨, the Executive Committee is always there to guide the project toward success🌟."
        />
      </Box>
    </Box>
  );
}
