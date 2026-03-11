import { useEffect, useRef } from "react";
import { Box, Typography } from "@mui/material";

// Custom CSS for the gauges
const gaugeStyles = `
.impact-section-root {
  --bg:#f4f0eb;
  --ink:#0f3a3c;
  --ring:#cfd6d3;
  --fill:#008020;
  background: var(--bg);
  color: var(--ink);
  padding:36px 20px 64px;
  max-width:1100px;
  margin:auto;
  text-align:center;
}
.impact-title {
  display:inline-block;
  opacity:0;
  transform:translateY(24px);
  transition:opacity .6s ease, transform .6s ease;
  font-weight:800;
  margin:0 0 24px;
  font-size:clamp(22px, 3vw, 36px);
}
.impact-title.show { opacity:1; transform:none; }
.gauges {
  display:grid;
  grid-template-columns:repeat(auto-fit, minmax(240px,1fr));
  gap:28px;
  align-items:start;
  justify-items:center;
}
.gauge {
  width:260px;
  aspect-ratio:1/1;
  display:grid;
  place-items:center;
  position:relative;
}
.gauge svg { width:100%; height:100%; transform:rotate(-90deg); }
.gauge .num {
  position:absolute;
  inset:0;
  display:grid;
  place-items:center;
  font-weight:800;
  font-size:clamp(26px,4vw,42px);
}
.gauge .caption {
  position:absolute;
  left:0; right:0; bottom:-56px;
  font-size:20px; line-height:1.4;
  color:#2b3b3c;
}
.track { stroke:var(--ring); opacity:.9; }
.bar { stroke:var(--fill); stroke-linecap:round; }
`;

function animateGauge(el: HTMLElement, percent: number, display: string, caption: string) {
  const TAU = Math.PI * 2;
  const R = 70;
  const C = TAU * R;

  // SVG
  const svgNS = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(svgNS, "svg");
  svg.setAttribute("viewBox", "0 0 160 160");

  function mkCircle(cls: string, color: string) {
    const c = document.createElementNS(svgNS, "circle");
    c.setAttribute("class", cls);
    c.setAttribute("cx", "80");
    c.setAttribute("cy", "80");
    c.setAttribute("r", String(R));
    c.setAttribute("fill", "none");
    c.setAttribute("stroke-width", "16");
    c.setAttribute("stroke", color);
    return c;
  }

  const track = mkCircle("track", "#cfd6d3");
  const bar = mkCircle("bar", "#008020");
  bar.style.strokeDasharray = C.toFixed(2);
  bar.style.strokeDashoffset = C.toFixed(2);

  svg.append(track, bar);

  // Number and caption
  const num = document.createElement("div");
  num.className = "num";
  num.textContent = "0%";
  const cap = document.createElement("div");
  cap.className = "caption";
  cap.textContent = caption;

  el.append(svg, num, cap);

  // Animate
  const duration = 1200;
  const start = performance.now();

  function tick(now: number) {
    const t = Math.min(1, (now - start) / duration);
    const e = 1 - Math.pow(1 - t, 3);

    const current = Math.round(percent * e);
    num.textContent = (display.includes("–") || display.includes("-"))
      ? display
      : current + "%";

    const offset = C * (1 - (percent / 100) * e);
    bar.style.strokeDashoffset = offset.toFixed(2);

    if (t < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

export function ImpactSection() {
  const gaugesRef = useRef<Array<HTMLDivElement | null>>([]);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    // Inject styles
    if (!document.getElementById("impact-gauge-styles")) {
      const style = document.createElement("style");
      style.id = "impact-gauge-styles";
      style.innerHTML = gaugeStyles;
      document.head.appendChild(style);
    }

    // Intersection Observer for scroll-triggered animation
    const observer = new window.IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;

          // Animate title
          const title = sectionRef.current?.querySelector(".impact-title");
          if (title) {
            title.classList.add("show");
          }

          // Animate gauges
          gaugesRef.current.forEach((el, i) => {
            if (el && !el.hasChildNodes()) {
              const data = [
                { percent: 25, display: "25%", caption: "of greenhouse gas emissions" },
                { percent: 70, display: "70%", caption: "of freshwater withdrawals" },
                { percent: 85, display: "65–85%", caption: "of energy use in greenhouses" },
              ][i];
              animateGauge(el, data.percent, data.display, data.caption);
            }
          });
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <Box className="impact-section-root" component="section" ref={sectionRef} sx={{borderRadius:2}}>
      <Typography className="impact-title" component="h1">
        Agriculture’s Global Impact
      </Typography>
      <Box className="gauges" component="div">
        {[0, 1, 2].map((i) => (
          <Box
            key={i}
            className="gauge"
            component="div"
            ref={(el: HTMLDivElement | null) => { gaugesRef.current[i] = el; }}
            sx={{ background: "none" }}
          />
        ))}
      </Box>
    </Box>
  );
}