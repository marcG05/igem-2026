import { useEffect, useRef } from "react";
import { Box, Typography } from "@mui/material";

const ecoStyles = `
.eco-container {
  max-width: 1600px;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.98);
  border-radius: 25px;
  box-shadow: 0 25px 50px rgba(0, 100, 0, 0.15);
  overflow: hidden;
  position: relative;
  border: 2px solid rgba(76, 175, 80, 0.3);
}
.eco-header {
  background: linear-gradient(135deg, #1b5e20 0%, #2e7d32 25%, #388e3c 50%, #4caf50 75%, #66bb6a 100%);
  color: white;
  padding: 40px;
  text-align: center;
  position: relative;
  overflow: hidden;
}
.eco-header::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: 
    repeating-linear-gradient(
      45deg,
      transparent,
      transparent 15px,
      rgba(255,255,255,0.08) 15px,
      rgba(255,255,255,0.08) 30px
    ),
    repeating-linear-gradient(
      -45deg,
      transparent,
      transparent 20px,
      rgba(139, 195, 74, 0.1) 20px,
      rgba(139, 195, 74, 0.1) 40px
    );
  animation: ecoFloat 25s linear infinite;
}
@keyframes ecoFloat {
  0% { transform: translateX(-100px) translateY(-100px) rotate(0deg); }
  100% { transform: translateX(100px) translateY(100px) rotate(360deg); }
}
.eco-header h1 {
  font-size: 3.2em;
  font-weight: bold;
  margin-bottom: 15px;
  position: relative;
  z-index: 2;
  text-shadow: 2px 2px 8px rgba(0,0,0,0.4);
  background: linear-gradient(45deg, #ffffff, #c8e6c9, #ffffff);
  background-clip: text;
  -webkit-background-clip: text;
  animation: shimmer 3s ease-in-out infinite alternate;
}
@keyframes shimmer {
  0% { filter: brightness(1); }
  100% { filter: brightness(1.2); }
}
.eco-header p {
  font-size: 1.5em;
  opacity: 0.95;
  position: relative;
  z-index: 2;
  color: #c8e6c9;
  font-weight: 500;
}
.eco-badge {
  position: absolute;
  top: 20px;
  right: 20px;
  background: rgba(76, 175, 80, 0.9);
  color: white;
  padding: 8px 15px;
  border-radius: 20px;
  font-size: 1em;
  font-weight: bold;
  z-index: 3;
  border: 2px solid rgba(255, 255, 255, 0.3);
}
.eco-canvas {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 8px;
  min-height: 1000px;
  height: auto;
  background: linear-gradient(135deg, #e8f5e8 0%, #f1f8e9 100%);
  padding: 8px;
}
.eco-section {
  padding: 18px;
  display: flex;
  flex-direction: column;
  position: relative;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  cursor: pointer;
  overflow: visible;
  border-radius: 15px;
  border: 2px solid transparent;
  min-height: 480px;
}
.eco-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 6px;
  background: var(--accent-color);
  transform: scaleX(0);
  transition: transform 0.4s ease;
  border-radius: 3px 3px 0 0;
}
.eco-section::after {
  content: '';
  position: absolute;
  top: 10px;
  right: 10px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--accent-color);
  opacity: 0.7;
  animation: pulse 2s infinite;
}
@keyframes pulse {
  0%, 100% { transform: scale(1); opacity: 0.7; }
  50% { transform: scale(1.3); opacity: 1; }
}
.eco-section:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 20px 40px rgba(76, 175, 80, 0.25);
  border-color: var(--accent-color);
}
.eco-section:hover::before {
  transform: scaleX(1);
}
.eco-section h3 {
  font-size: 1.2em;
  font-weight: bold;
  margin-bottom: 18px;
  color: var(--text-color);
  display: flex;
  align-items: flex-start;
  gap: 8px;
  white-space: normal;
  overflow: visible;
  line-height: 1.3;
  word-wrap: break-word;
  hyphens: auto;
}
.eco-section-icon {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--accent-color), var(--accent-light));
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 0.9em;
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  flex-shrink: 0;
  align-self: flex-start;
  margin-top: 2px;
  transition: transform 0.3s;
}
.eco-section ul {
  list-style: none;
  flex: 1;
  padding: 0;
  margin: 0;
}
.eco-section li {
  margin-bottom: 12px;
  padding: 12px 16px;
  background: rgba(255,255,255,0.9);
  border-radius: 10px;
  border-left: 4px solid var(--accent-color);
  font-size: 0.95em;
  line-height: 1.4;
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
  position: relative;
  word-wrap: break-word;
}
.eco-section li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  background: linear-gradient(to bottom, var(--accent-color), var(--accent-light));
  border-radius: 0 2px 2px 0;
}
.eco-section li:hover {
  background: rgba(255,255,255,1);
  transform: translateX(8px);
  box-shadow: 0 6px 12px rgba(76, 175, 80, 0.2);
}
.eco-partners {
  background: linear-gradient(135deg, #c8e6c9 0%, #a5d6a7 100%);
  --accent-color: #2e7d32;
  --accent-light: #4caf50;
  --text-color: #1b5e20;
}
.eco-activities {
  background: linear-gradient(135deg, #dcedc8 0%, #c5e1a5 100%);
  --accent-color: #388e3c;
  --accent-light: #66bb6a;
  --text-color: #2e7d32;
}
.eco-value-prop {
  background: linear-gradient(135deg, #e8f5e8 0%, #c8e6c9 50%, #a5d6a7 100%);
  --accent-color: #1b5e20;
  --accent-light: #388e3c;
  --text-color: #0d4f14;
  grid-row: span 2;
  border: 3px solid rgba(27, 94, 32, 0.3);
  min-height: 980px;
}
.eco-relationships {
  background: linear-gradient(135deg, #f1f8e9 0%, #dcedc8 100%);
  --accent-color: #558b2f;
  --accent-light: #7cb342;
  --text-color: #33691e;
}
.eco-segments {
  background: linear-gradient(135deg, #e0f2f1 0%, #b2dfdb 100%);
  --accent-color: #00695c;
  --accent-light: #26a69a;
  --text-color: #004d40;
}
.eco-resources {
  background: linear-gradient(135deg, #e8f5e8 0%, #c8e6c9 100%);
  --accent-color: #2e7d32;
  --accent-light: #4caf50;
  --text-color: #1b5e20;
}
.eco-channels {
  background: linear-gradient(135deg, #f3e5f5 0%, #c8e6c9 100%);
  --accent-color: #388e3c;
  --accent-light: #66bb6a;
  --text-color: #2e7d32;
}
.eco-costs {
  background: linear-gradient(135deg, #e0f7fa 0%, #b2ebf2 100%);
  --accent-color: #00838f;
  --accent-light: #26c6da;
  --text-color: #006064;
}
.eco-revenue {
  background: linear-gradient(135deg, #e8f5e8 0%, #c8e6c9 50%, #81c784 100%);
  --accent-color: #1b5e20;
  --accent-light: #4caf50;
  --text-color: #0d4f14;
}
.eco-value-prop h3 {
  font-size: 1.5em;
  margin-bottom: 25px;
  background: linear-gradient(45deg, #1b5e20, #4caf50, #66bb6a);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1.2;
  word-wrap: break-word;
  hyphens: auto;
}
.eco-value-prop li {
  margin-bottom: 16px;
  padding: 14px 20px;
  font-size: 1.1em;
  font-weight: 500;
}
@media (max-width: 1400px) {
  .eco-canvas { min-height: 900px; gap: 6px; padding: 6px; }
  .eco-section { padding: 16px; min-height: 420px; }
  .eco-section h3 { font-size: 1.1em; margin-bottom: 16px; }
  .eco-value-prop { min-height: 860px; }
  .eco-value-prop h3 { font-size: 1.4em; }
}
@media (max-width: 1200px) {
  .eco-canvas {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto auto auto;
    min-height: auto;
    height: auto;
  }
  .eco-value-prop {
    grid-row: span 1;
    grid-column: span 3;
    min-height: 400px;
  }
  .eco-section { min-height: 350px; }
}
@media (max-width: 768px) {
  .eco-canvas {
    grid-template-columns: 1fr;
    gap: 15px;
    min-height: auto;
  }
  .eco-value-prop {
    grid-column: span 1;
    min-height: 300px;
  }
  .eco-section { padding: 20px; min-height: 280px; }
  .eco-header h1 { font-size: 2.2em; }
}
.eco-footer {
  background: linear-gradient(135deg, #1b5e20 0%, #2e7d32 25%, #388e3c 50%, #4caf50 75%, #66bb6a 100%);
  color: white;
  padding: 30px;
  text-align: center;
  font-size: 1.2em;
  font-weight: 500;
  position: relative;
  overflow: hidden;
}
.eco-footer::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #81c784, #4caf50, #2e7d32, transparent);
}
.eco-icons {
  margin-top: 15px;
  font-size: 1.5em;
  opacity: 0.8;
}
`;

const sections = [
  {
    className: "eco-partners",
    icon: "🤝",
    title: "Key Partners",
    items: [
      "🏭 Eco-responsible greenhouse operators",
      "⚙️ Green equipment manufacturers",
      "🎓 Universities & research centers",
      "🏛️ Sustainable government programs",
      "🏭 Future: green breweries, wastewater plants"
    ]
  },
  {
    className: "eco-activities",
    icon: "⚡",
    title: "Key Activities",
    items: [
      "🔬 Green biotechnology R&D",
      "🏭 Eco-responsible manufacturing",
      "🔧 Smart installation & monitoring",
      "📊 Environmental data analysis",
      "📋 Sustainability certifications"
    ]
  },
  {
    className: "eco-value-prop",
    icon: "💎",
    title: "Green Value Proposition",
    items: [
      "⚡ 100% renewable on-site energy",
      "♻️ Circular economy - zero waste",
      "💰 Dramatic energy cost reduction",
      "🌍 Certified negative carbon impact",
      "🏆 Premium sustainable brand image",
      "🌱 Complete environmental traceability"
    ]
  },
  {
    className: "eco-relationships",
    icon: "💚",
    title: "Customer Relations",
    items: [
      "🔧 Ecological preventive maintenance",
      "🤝 Dedicated green transition support",
      "📱 Environmental impact dashboards",
      "🚀 Sustainable solution co-innovation"
    ]
  },
  {
    className: "eco-segments",
    icon: "👥",
    title: "Green Customer Segments",
    items: [
      "🏭 Eco-certified industrial greenhouses",
      "🌿 Urban vertical farms",
      "🔬 Green research institutions",
      "🎓 Sustainable universities",
      "🍺 Future: green food industries"
    ]
  },
  {
    className: "eco-resources",
    icon: "🛠️",
    title: "Green Key Resources",
    items: [
      "🧬 Geobacter strains & intellectual property",
      "🔬 Synthetic biology expertise",
      "⚙️ Bioreactors & green IoT systems",
      "🏭 Laboratories & pilot facilities",
      "🤝 Sustainable partner network"
    ]
  },
  {
    className: "eco-channels",
    icon: "📢",
    title: "Green Channels",
    items: [
      "👨‍💼 Specialized sustainable sales team",
      "🤝 Green supplier partnerships",
      "🎯 Eco-exemplary demonstration projects",
      "🎪 Sustainability conferences & trade shows",
      "📈 CSR-focused B2B marketing"
    ]
  },
  {
    className: "eco-costs",
    icon: "💸",
    title: "Optimized Cost Structure",
    items: [
      "🔬 Clean technology R&D",
      "🏭 Eco-efficient production",
      "📋 Environmental certifications",
      "📈 Green marketing & CSR communication",
      "🔧 Sustainable maintenance services"
    ]
  },
  {
    className: "eco-revenue",
    icon: "💰",
    title: "Sustainable Revenue",
    items: [
      "📦 Eco-designed MFC module sales",
      "🔧 Green maintenance contracts",
      "📊 CSR platform subscriptions",
      "📈 Sustainability data monetization",
      "⚖️ Clean technology licenses"
    ]
  }
];

export function EcoBusinessModelSection() {
  const canvasRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Inject styles once
    if (!document.getElementById("eco-business-model-styles")) {
      const style = document.createElement("style");
      style.id = "eco-business-model-styles";
      style.innerHTML = ecoStyles;
      document.head.appendChild(style);
    }

    // Interactive effects
    const canvas = canvasRef.current;
    if (canvas) {
      const sections = canvas.querySelectorAll(".eco-section");
      sections.forEach(section => {
        section.addEventListener("mouseenter", function () {
          (section as HTMLElement).style.zIndex = "10";
          (section as HTMLElement).style.filter = "brightness(1.05)";
        });
        section.addEventListener("mouseleave", function () {
          (section as HTMLElement).style.zIndex = "1";
          (section as HTMLElement).style.filter = "brightness(1)";
        });
        section.addEventListener("click", function () {
          (section as HTMLElement).style.transform = "scale(0.96)";
          (section as HTMLElement).style.filter = "brightness(1.1) hue-rotate(10deg)";
          setTimeout(() => {
            (section as HTMLElement).style.transform = "";
            (section as HTMLElement).style.filter = "";
          }, 200);
        });
        // Icon animation
        const icon = section.querySelector(".eco-section-icon");
        if (icon) {
          icon.addEventListener("mouseenter", function () {
            (icon as HTMLElement).style.transform = "scale(1.2) rotate(360deg)";
          });
          icon.addEventListener("mouseleave", function () {
            (icon as HTMLElement).style.transform = "scale(1) rotate(0deg)";
          });
        }
      });
    }
  }, []);

  return (
    <Box component="div" className="eco-container" sx={{ mt: 8, mb: 8 }}>
      <Box component="div" className="eco-header" sx={{ position: "relative" }}>
        <Box component="div" className="eco-badge" sx={{ position: "absolute", top: 20, right: 20 }}>
          🌿 100% Green
        </Box>
        <Typography component="h1" sx={{ fontWeight: "bold", fontSize: { xs: "2em", md: "3.2em" }, mb: 2 }}>
          🌱 Ecological Business Model Canvas
        </Typography>
        <Typography component="p" sx={{ fontSize: { xs: "1em", md: "1.5em" }, color: "#c8e6c9", fontWeight: 500 }}>
          🔋 MFC Integration - Sustainable Solutions for Hydroponic Greenhouses
        </Typography>
      </Box>
      <Box component="div" className="eco-canvas" ref={canvasRef}>
        {sections.map((section, idx) => (
          <Box key={idx} className={`eco-section ${section.className}`} component="div">
            <Typography component="h3" sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <span className="eco-section-icon">{section.icon}</span>
              {section.title}
            </Typography>
            <ul>
              {section.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </Box>
        ))}
      </Box>
      <Box component="div" className="eco-footer" sx={{ mt: 4 }}>
        <div>🌱 Sustainable Innovation • 🔋 Clean Energy • ♻️ Circular Economy</div>
        <div className="eco-icons">🌿 🌍 ⚡ ♻️ 🔋 🌱</div>
      </Box>
    </Box>
  );
}