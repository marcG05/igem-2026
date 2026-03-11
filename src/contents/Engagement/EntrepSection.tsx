import { Box,  } from '@mui/material';
import { NormalText, Subtitle2 } from '../../components/Typography';
import Figure from '../../components/Figure';
import { ImpactSection } from './ImpactSection';
import { InfographicSection } from './InfographicSection';
import { EcoBusinessModelSection } from './EcoBusinessModelSection';




export function UnmetNeeds(){
    const sous_titre1 = "Context"
    const texte1 = `The global food system is a major driver of climate change. Agriculture accounts for roughly 25–30% of worldwide greenhouse gas emissions, rising to nearly one-third when all agricultural products are considered. At the same time, it is the largest consumer of freshwater resources, using about 70% of global withdrawals. These pressures are further intensified by climate change, which amplifies water scarcity and energy demand.
Controlled-environment agriculture, such as hydroponic greenhouses, has emerged as a promising alternative to open-field farming. However, these systems are extremely energy intensive: 65–85% of their electricity demand is dedicated to heating, cooling, and climate control. In many regions, this energy still comes from fossil fuels, creating a paradox where “green” food production can still carry a significant carbon footprint.`
    const texte2 = `Our vision is to transform this contradiction into an opportunity. By combining biotechnology with clean energy, we aim to develop circular food production systems that generate part of their own electricity from organic waste streams. This would reduce reliance on fossil fuels, increase autonomy, and strengthen resilience in food systems facing global warming and rising energy costs.
Through iGEM, our goal is not only to demonstrate the technical feasibility of this approach, but also to build a credible entrepreneurial framework around it. We seek to develop a minimum viable product (MVP), construct a solid business case for industrial hydroponic greenhouses, and prove to the judges and stakeholders that our solution is both innovative and scalable.`
    const sous_titr2 = "Environmental Challenge"
    const texte3 = `Hydroponics is often presented as a sustainable solution to the limitations of traditional agriculture, particularly due to its significant reduction in water consumption. Some studies estimate that it can use up to 90% less water than soil-based cultivation. However, this approach remains highly dependent on energy, especially for artificial lighting, heating, and climate control in greenhouses, which increases its carbon footprint. Moreover, even though closed systems limit discharges into the environment, they can accumulate phytotoxic root exudates and mineral salts that hinder plant growth. Commonly used substrates, such as rockwool, also pose waste management challenges, as they are difficult to recycle. Thus, the environmental sustainability of hydroponic greenhouses ultimately depends on reducing energy consumption and improving waste management within the system.`
    const sous_titre3 = "Gaps in Current Agricultural Systems"
    const texte4 = `Although hydroponics improves the efficiency of water, nutrient, and space use, it still presents several structural limitations. The high installation costs and technological complexity of these systems hinder their large-scale adoption, particularly in small-scale farms. In addition, managing nutrient solutions remains challenging: recirculation cycles can lead to the accumulation of pathogens or root-related contaminants, reducing crop resilience.
Moreover, hydroponic systems rarely achieve full circularity. Plant residues (dead roots, organic waste) are generally excluded from the production cycle, which limits their sustainability. Finally, few greenhouses integrate renewable energy sources, increasing their dependence on fossil fuels. These shortcomings highlight the need for innovative approaches to strengthen the robustness and circularity of these systems.`
    const sous_titre4 = "Economic and Societal Consequences"
    const texte5 = `The development of hydroponics is hindered by high investment and operational costs. Setting up a greenhouse equipped with climate control systems, pumps, and LED lighting requires a major investment, which is often inaccessible to small producers. Although some studies show that profitability can be achieved through higher yields and more efficient resource use, results vary depending on the scale of the projects.
For example, profitability analyses conducted in Nigeria indicate that small and medium-sized hydroponic farms can obtain highly favorable returns on investment (positive NPV and IRR of 83%), while in Greece, a 0.2-ha hydroponic tomato greenhouse can be viable within a five-year horizon. However, these outcomes are highly dependent on energy costs and market stability. As a result, the economics of hydroponic greenhouses remain fragile and are often reliant on public subsidies or significant private investments.
Beyond environmental and economic aspects, hydroponics also raises social issues. The market tends to concentrate in the hands of large companies capable of absorbing high installation costs, thereby marginalizing small producers. This dynamic exacerbates inequalities in access to innovative food production and reinforces the dependence of developing countries on fragmented and costly international supply chains.
In addition, the establishment and operation of hydroponic greenhouses require specialized skills in biology, automation, and engineering, which exclude part of the traditional agricultural workforce. Finally, even though hydroponics can bring production closer to urban areas and contribute to local food security, its social acceptance still needs improvement, as some consumers continue to perceive it as an “artificial” method of production.`


    return(
        <Box component="div" sx={{mr:4, width:"90%"}}>
            <Subtitle2> {sous_titre1} </Subtitle2>
            <NormalText> {texte1} </NormalText>
            <ImpactSection />
              
            <NormalText> {texte2} </NormalText>
            <Subtitle2> {sous_titr2} </Subtitle2>
            <NormalText> {texte3} </NormalText>
            <Subtitle2> {sous_titre3} </Subtitle2>
            <NormalText> {texte4} </NormalText>            
            <Subtitle2> {sous_titre4} </Subtitle2>
            <NormalText> {texte5} </NormalText>            
        </Box>
    );
}

export function ProblemStatement(){
    const sous_titre1 = "Climate Impact of Hydroponic Greenhouses"
    const texte1 = `The Canadian greenhouse market is experiencing continuous growth and plays a strategic role in local food supply. According to Statistics Canada, the total greenhouse area increased from 31.8 million square meters in 2023 to 33.3 million in 2024, representing a growth of about 4%. This production is heavily concentrated in three provinces: Ontario, which accounts for 63.9% of the total area, British Columbia (18.5%), and Quebec (10.7%).
This growth is accompanied by a major challenge: energy consumption. Hydroponic greenhouses, particularly those with controlled environments, consume large amounts of electricity for lighting, heating/cooling, ventilation, pumping, and other operations. At the international level, it is estimated that 65% to 85% of the electricity consumption of a commercial greenhouse is devoted to heating and climate regulation. In the Canadian context, where winters are harsh, this energy dependence is even more pronounced. As a result, greenhouses can generate significant greenhouse gas (GHG) emissions when the electricity used comes from fossil fuel sources.
In some provinces such as Quebec, the electricity used in greenhouses is produced mainly from renewable or hydroelectric sources, which lowers the carbon footprint of energy consumption. However, this is not the case for all provinces, nor for many other countries.`
    const sous_titre2 = "Energy Dependency"    
    const texte2 = `Quebec, being very rich in hydroelectricity, has a much lower carbon intensity of electricity production (around 1.2 g CO₂/kWh) than other Canadian provinces such as Alberta, where it can exceed 470 g CO₂/kWh due to the reliance on coal and natural gas. This characteristic significantly reduces the carbon footprint of Quebec’s greenhouses. However, because of the long and harsh winters, energy demand remains high. Heating alone can account for 65 to 85% of the total energy consumption of a commercial greenhouse.
In Western Canada, the situation is different. Heating needs are lower in British Columbia, but the electricity there remains more carbon-intensive than in Quebec. In Alberta and Saskatchewan, the dependence on fossil fuels results in a much higher carbon footprint, even though the climatic conditions sometimes require less heating.
Thus, the energy dependency of greenhouses represents not only a climatic challenge (greenhouse gas emissions) but also an economic one, as energy can account for 30 to 40% of total operating costs. Reducing this dependency through the integration of renewable technologies such as microbial fuel cells therefore becomes essential to ensure the sector’s competitiveness and sustainability.`
    const sous_titre3 = "Innovation Opportunity"
    const texte3 = `Microbial fuel cells (MFCs) represent a promising innovation for reducing energy dependency in hydroponic greenhouses. By exploiting organic waste, wastewater, or even rhizodeposits released by plant roots, MFCs can generate part of the electricity needed for climate control systems. This approach could both recycle waste streams and provide a renewable source of “green” electricity, thereby decreasing reliance on external electricity grids (hydroelectric or fossil-fuel based) and reducing greenhouse gas (GHG) emissions.
Recent studies highlight both the potential and the current limitations of MFC technology. For example, Golzarian et al. (2024) demonstrated a dual-chamber plant microbial fuel cell using Cyperus papyrus and Shewanella oneidensis that produced a maximum power output of 240 mW, while also achieving significant wastewater treatment benefits, including reductions of 61.8% COD and 93.2% BOD. Similarly, Shajid et al. (2025) reported that depending on substrate type and operating conditions, MFCs can reach power densities ranging from 0.222 W/m² up to 1.089 W/m², although coulombic efficiencies remain low, often below 1%. These results underline both the progress made in scaling MFCs and the challenges that remain before reaching commercial viability.
Key factors influencing performance include electrode surface area, cell configuration (single vs. dual chamber), cathodic chamber volume, substrate type and pre-treatment, ambient temperature, and pH. Zhang et al. (2025) showed that maintaining near-neutral pH and moderately warm temperatures (~30–35 °C) improved both power output and efficiency. Moreover, the integration of nanomaterials into electrode surfaces has been identified as a promising route to enhance biofilm attachment and electron transfer, thereby boosting power generation.
The main advantage of integrating MFCs into greenhouse systems is their dual function: waste valorization and electricity generation. In practice, MFCs are unlikely to cover the total electricity demand of greenhouses (heating, lighting, ventilation), but they can contribute to reducing peak loads and improving energy autonomy. Their circular approach—closing nutrient loops, lowering external electricity needs, and cutting GHG emissions—makes them particularly attractive for Canadian provinces and other regions dependent on fossil-based electricity. When combined with complementary renewable technologies (e.g., solar panels, heat recovery systems), MFCs could form part of a hybrid model for more sustainable greenhouse production.`


return (
        <Box component="div" sx={{mr:4, width:"90%"}}>
            <Subtitle2> {sous_titre1} </Subtitle2>
            <NormalText> {texte1} </NormalText>
            <Subtitle2> {sous_titre2} </Subtitle2>
            <NormalText> {texte2} </NormalText>
            <InfographicSection />
            <Subtitle2> {sous_titre3} </Subtitle2>
            <NormalText> {texte3} </NormalText>
        </Box>

    );
}

export function MarkerAnalysis(){
    const sous_titre1 = "Beachhead Market – First Customers"
    const texte1 =  `The first potential clients for the integration of microbial fuel cells (MFCs) are Quebec-based companies already operating large-scale hydroponic greenhouses. These businesses face high energy dependency due to heating, artificial lighting, and ventilation requirements needed to maintain optimal growing conditions. Integrating MFCs would allow them not only to reduce energy costs but also to lower their carbon footprint, particularly in a context where sustainability and greenhouse gas (GHG) reduction are becoming strategic priorities.`
    const sous_titre2 = "1. Cultures Gen V (Quebec)"
    const texte2 = `Cultures Gen V is one of the largest hydroponic production companies in Quebec. Based in Quebec City, it produces around 11,500 tons of fresh vegetables annually, including lettuce, tomatoes, cucumbers, and peppers. The company emphasizes sustainable practices and positions itself as a key player in Canada’s green agriculture. With MFC integration, Cultures Gen V could valorize its organic byproducts (root residues, nutrient-rich wastewater) to generate part of its electricity, thereby enhancing energy autonomy and strengthening its image as a sustainable company.
Cultures Gen V – Sustainable practices`
    const sous_titre3 = "2. Lufa Farms (Montreal)"
    const texte3 = `Lufa Farms is internationally recognized for pioneering the first commercial rooftop greenhouses in a major city. Based in Montreal, the company operates several urban greenhouses and distributes its products directly to consumers through a subscription model and via supermarkets. MFCs could be integrated into their hydroponic systems to reduce the energy costs associated with artificial lighting, a major expense in urban production. Furthermore, this would reinforce Lufa’s ecological mission of bringing food production closer to consumers while minimizing its environmental footprint.
Lufa Farms – Urban farms`

    const sous_titre4 = "3. Pharmaflo (Gatineau)"
    const texte4 = `Pharmaflo is a pharmaceutical company specializing in the research and development of plant-based pharmaceutical compounds. All its crops are grown in highly controlled indoor hydroponic greenhouses. For this type of facility, where lighting, ventilation, and climate regulation represent constant and energy-intensive needs, MFCs could play a key role by providing a source of green, complementary electricity. Adopting this technology would strengthen the sustainability of their operations and their positioning as an innovative player at the intersection of biotechnology and sustainable agriculture.
Pharmaflo – Pharmaceutical greenhouses

 Summary of Potential Benefits for These Companies:
Reduction of energy costs related to heating and artificial lighting.
Valorization of organic waste from hydroponic crops (roots, wastewater, depleted substrates).
Improved ecological image and increased competitiveness in a market where sustainability is a differentiating factor.
Enhanced energy autonomy, particularly relevant in the context of rising electricity costs.`

const texte_1 = `The potential market for microbial fuel cell (MFC) integration extends well beyond small and medium-sized local greenhouses. The technology could attract interest from several key customer segments, each with distinct motivations for adoption:`
    const sous_titre_1 = "1. Large-Scale Commercial Greenhouses and Multinational Retail Chains"
    const texte_2  = `In addition to local hydroponic producers, industrial-scale greenhouses supplying major retailers (e.g., Walmart, Super C, IGA, Metro) represent an important customer base. These corporations are under growing pressure to reduce their carbon footprint and to meet corporate sustainability targets. Integrating MFCs would allow them to showcase innovation while achieving long-term reductions in energy costs.
Notable Quebec greenhouse producers that could benefit include:
Produits frais FMS – A company specializing in fresh hydroponic produce distributed across Quebec supermarkets. fraisfms.ca
Hydroserres Mirabel – One of the largest greenhouse tomato producers in North America, committed to large-scale, sustainable cultivation. alimentsduquebec.com
Serres Sagami (Savoura) – A pioneer in organic tomato production in Quebec, with a strong focus on innovation and eco-friendly farming. savoura.com
These companies already manage energy-intensive operations and stand to gain from technologies that combine cost efficiency and sustainability, making them prime candidates for MFC integration.`
    const sous_titre_2 = "2. Research Institutions and Universities"
    const texte_3 = `Another promising customer segment consists of academic institutions and research centers involved in controlled-environment agriculture, bioenergy, and sustainable technology development. These institutions could serve as early adopters and testbeds for MFC systems, validating their feasibility and accelerating technology transfer to industry.
Relevant institutions include:
Agriculture and Agri-Food Canada research centers, located in various provinces.
Réseau québécois de recherche en agriculture durable (RQRAD), which promotes sustainable agricultural innovation. rqrad.com
Laboratoire sur l'agriculture urbaine (AU/LAB), focused on urban agriculture innovation. au-lab.ca
The Canadian university network, where research groups in bioengineering, biotechnology, and agronomy are actively exploring new renewable energy solutions.

By working with these institutions, the technology could benefit from scientific validation, pilot projects, and partnerships, all of which are essential steps before scaling to large-scale commercial adoption.`
    
    const sous_titre_3 = "Customer Interviews & Market Validation"
    const texte_4 = `To validate the relevance of microbial fuel cells (MFCs) for hydroponic greenhouses, a set of structured customer interviews could be conducted. The objective is to identify customer priorities, pain points, and willingness to adopt innovative technologies.
 
Key Interview Questions
Energy Costs → How significant are electricity and heating costs in their overall operating budget?
Sustainability Goals → Is reducing greenhouse gas (GHG) emissions a priority, whether for compliance with regulations, certification standards, or corporate image?
Adoption Criteria → Would they be willing to invest in a new technology? If yes, under which conditions (acceptable cost, expected efficiency, payback period, perceived risks, reliability)?
Operational Flexibility → How do they currently manage seasonal variations in energy consumption, and what technologies do they already use to mitigate these fluctuations?
Incentives and Market Drivers
Climatic Context → Quebec’s harsh winters and hot summers create highly variable energy demands, making solutions that optimize energy use particularly attractive.
Sustainability Trends → Growing pressure from markets, consumers, and governments to reduce carbon emissions and adopt eco-friendly practices.
Financial Levers → Availability of government subsidies and incentive programs to support investments in sustainable agricultural technologies.
Competitive Differentiation → The opportunity for greenhouse operators to strengthen their market positioning by combining cost savings with a sustainability-oriented brand image.`
    const sous_titre_4 = "Benchmarking & Competitive Landscape"
    const texte_5 = `Currently, several technologies are already being used in greenhouses to reduce energy dependency and improve sustainability. These include:

Solar Panels (Photovoltaics): Increasingly integrated into greenhouse structures to partially offset electricity consumption. However, in northern climates like Quebec, solar energy is intermittent, with limited production during winter months when energy needs are highest.
Battery Storage Systems: Used to store renewable energy (mainly solar), batteries help stabilize electricity supply. Despite their potential, the high cost of large-scale storage systems remains a major barrier for commercial adoption.
Heat Recovery Systems: Some greenhouses recycle waste heat from nearby industries or data centers to reduce heating costs (e.g., the Saint-Hyacinthe greenhouse project using data center waste heat). This requires geographical proximity to a heat source and significant infrastructure investments.
Optimization of Artificial Lighting (LEDs): The adoption of LED lighting has significantly reduced electricity use compared to traditional high-pressure sodium lamps. LEDs allow better control of the light spectrum for plant growth but remain a substantial source of energy consumption.

While these solutions contribute to reducing greenhouse energy costs, they remain dependent on external energy sources (grid electricity, industrial waste heat, etc.). None of them fully closes the loop by valorizing the greenhouse’s own organic waste streams, which is the unique opportunity provided by Microbial Fuel Cells (MFCs).
When comparing MFCs to existing solutions, several factors stand out:`

    const image_1 = "https://static.igem.wiki/teams/5756/assets/images/entrep/image-15.svg"
    const texte_6 = `Unique Positioning of MFCs
Unlike current alternatives, MFCs:
Provide dual value: renewable electricity + waste valorization.
Are adapted to local resources (root exudates, organic residues, wastewater from hydroponics).
Offer a circular and sustainable approach, reducing external dependency.
Have strong potential for scalability if combined with other renewable technologies (solar, LED optimization, heat recovery).
This positions MFCs as a complementary and innovative solution, not as a direct competitor, but as part of a hybrid energy model for future greenhouses.`

  const sous_titrex = "Customer Segments"
  return (
        <Box component="div" sx={{mr:4, width:"90%"}}>
            <Subtitle2> {sous_titre1} </Subtitle2>
            <NormalText> {texte1} </NormalText>
            <Subtitle2> {sous_titre2} </Subtitle2>
            <NormalText> {texte2} </NormalText>
            <Subtitle2> {sous_titre3} </Subtitle2>
            <NormalText> {texte3} </NormalText>
            <Subtitle2> {sous_titre4} </Subtitle2>
            <NormalText> {texte4} </NormalText>

            <Subtitle2> {sous_titrex} </Subtitle2>
            <NormalText>{texte_1}</NormalText>
            <Subtitle2>{sous_titre_1}</Subtitle2>
            <NormalText>{texte_2}</NormalText>
            <Subtitle2>{sous_titre_2}</Subtitle2>
            <NormalText>{texte_3}</NormalText>

            <Subtitle2>{sous_titre_3}</Subtitle2>
            <NormalText>{texte_4}</NormalText>

            <Subtitle2>{sous_titre_4}</Subtitle2>
            <NormalText>{texte_5}</NormalText>
             <Figure title=" " g={1}>
                <img src={image_1} />
            </Figure>
            <NormalText>{texte_6}</NormalText>
        </Box>

    );
}


export function Solutions(){
  const texte1 = `The principle of a microbial fuel cell relies on the metabolism of certain bacteria capable of transferring electrons to an electrode. Like chemical batteries, this type of cell has an anode chamber and a cathode chamber. In the anode chamber, bacteria and an anode are found in an anoxic environment. The organisms must be exoelectrogenic, meaning that they are able to transmit the electrons produced during cellular respiration directly to the anode. On the other side, the cathode chamber contains a cathode and a reducing electrolyte. The two compartments are separated by a proton exchange membrane, which allows protons to pass through, while the electrons travel from the anode to the cathode via an external electrical circuit.`
  const image1 = "https://static.igem.wiki/teams/5756/assets/images/entrep/image-16.svg"
  const texte2 = 'A good example of an exoelectrogenic organism is the genus Geobacter. These bacteria form a conductive biofilm on the anode and use conductive pili to transfer electrons. Strains of Geobacter that are genetically modified for example, by overexpressing the OmcZ gene (which encodes for small conductive wires that facilitate the conduction of electrons to an anode through a biofilm on long distances) through techniques such as the Gibson assembly, could significantly'
  const texte3 = `Our solution creates integrated green energy within the greenhouse itself. Unlike solar panels or external energy sources, the MFC-Geobacter system is embedded directly in hydroponic cultivation. We would offer a system that includes an anode with a biofilm of genetically modified Geobacter spp. already established on it’s surface. This reduces both the carbon footprint and the energy dependency of greenhouses. By combining biotechnology with sustainable agriculture, our approach creates a circular bio-energy model that is both environmentally friendly and cost-effective.`
  const texte4 = `The minimum viable product possible for our project is a miniature version of a commercial hydroponic greenhouse. With a limited number of plant growing in a bacteria-rich environment caused by the added organic waste, here we have spent grain available from the on campus brewery, we aim to power a small LED light.`
  const image2 = "https://static.igem.wiki/teams/5756/assets/images/entrep/image-17.svg"
  const texte5 = `Our solution is designed to scale progressively. In the short term, the technology can power sensors and monitoring devices inside hydroponic systems. With further development, larger pilot installations could partially supply energy to entire greenhouses, reducing operational costs and environmental impact. Unlike other renewable solutions, our system does not require additional space or external inputs—it is integrated directly into the agricultural infrastructure. This makes it uniquely suited for urban agriculture, where space is limited but demand for sustainability is high. `
  return (
    <Box component="div" sx={{mr:4, width:"90%"}}>
          <Subtitle2>Technical Description of the MFC-Geobacter</Subtitle2>  
          <NormalText>{texte1}</NormalText>
          <Figure title=" " g={1}>
                <img src={image1} />
          </Figure>
          <NormalText>{texte2}</NormalText>
          <Subtitle2>Value Proposition / Unique Selling Point</Subtitle2>
          <NormalText>{texte3}</NormalText>
          <Subtitle2>Minimum Viable Product</Subtitle2>
          <NormalText>{texte4}</NormalText>
          <Subtitle2>Scalability & Differentiation</Subtitle2>

          <NormalText>{texte5}</NormalText>
          <Subtitle2>SWOT Analysis</Subtitle2>
          <Figure title=" " g={1}>
                <img src={image2} />
          </Figure>
          
          
    </Box>
  );
}


export function Businness(){

  const texte1 = `Our solution is designed to scale progressively. In the short term, the technology can power sensors and monitoring devices inside hydroponic systems. With further development, larger pilot installations could partially supply energy to entire greenhouses, reducing operational costs and environmental impact. Unlike other renewable solutions, our system does not require additional space or external inputs—it is integrated directly into the agricultural infrastructure. This makes it uniquely suited for urban agriculture, where space is limited but demand for sustainability is high. `
  const texte4 = ` 
Our technology provides a unique competitive advantage because it combines synthetic biology, circular economy principles, and renewable energy generation in a way that current solutions cannot replicate.

Unique Technology Platform
o   Unlike solar panels or batteries, our microbial fuel cells (MFCs) are powered by engineered Geobacter strains specifically designed to overexpress extracellular electron transfer pathways.
o   This synthetic biology approach allows us to produce electricity directly from organic greenhouse effluents, turning a waste stream into a resource.

Integrated Waste-to-Energy System
o   Competing technologies (e.g., solar, wind, batteries) provide renewable energy but do not address waste management challenges.
o   Our system uniquely closes the loop by reducing waste disposal costs and generating energy simultaneously.

Data and Operational Insights
o   Beyond energy, our solution provides real-time monitoring of water quality, nutrient cycles, and greenhouse conditions.
o   This data adds value by improving yield and reducing risks — something no other renewable energy solution for agriculture currently offers.

Scalability and Adaptability
o   While our initial focus is hydroponic greenhouses, the underlying technology is adaptable to other industries with organic effluents (breweries, food processing, wastewater).
o   This expands our addressable market far beyond agriculture, creating opportunities for cross-sector applications.

Barriers to Entry
o   The use of genetically engineered bacteria, combined with proprietary MFC designs, creates a high barrier to entry for competitors.
o   Regulatory and biosafety expertise further strengthens our defensibility, making it difficult for new entrants to replicate our model quickly.

In summary, our competitive advantage lies in offering a dual-value system — renewable energy and waste management — enhanced by proprietary biotechnology and data services. This positions us uniquely compared to solar panels, batteries, or traditional waste-to-energy technologies.

 `
  const texte2 = `We envision four major stages for the maturation of our microbial fuel cell (MFC) technology applied to hydroponic greenhouses:

•            Lab: Proof of concept, optimization of electrogenic microbial strains, electrodes, separators, and system configuration (single large battery vs. modular sections).
•            Prototype: Construction of an integrated prototype (scaled to a partial greenhouse section), controlled condition testing (temperature, light, hydroponic flow), evaluation of electrical yields and plant growth.
•            Pilot: Larger-scale implementation in a functioning greenhouse, with multiple modules to test both configurations (one central battery vs. distributed modules). Development of monitoring and control systems, validation of reliability, and food safety.
•            Commercial Product: Manufacturing, certification, deployment, market entry, maintenance, and business model development.`
  
  const imageTexte = "https://static.igem.wiki/teams/5756/assets/images/entrep/group-11.svg"
  const imageTexte1 = `To achieve these stages, the following resources will be required:

Budget: Laboratory equipment (electrodes, separators, hydroponic tanks), monitoring instruments (voltage, current, water chemistry, pathogen detection), and workforce costs. At prototype/pilot scale: greenhouse space, technical personnel (engineers, microbiologists, agronomists), utilities, and supply chain.

Materials: Conductive and biocompatible electrodes, safe separators (ceramic or polymer), hydroponic systems, monitoring and sampling equipment, analytical tools for electricity output, nutrient cycling, plant growth, and microbial activity.

Human expertise: Microbiologists, bioelectrochemists, agronomic engineers, food safety specialists, project engineers, and regulatory consultants.

Infrastructure: Laboratory space, access to a pilot greenhouse, reliable water and nutrient supply, and the capacity to scale up production and deployment.`
  const image2 = "https://static.igem.wiki/teams/5756/assets/images/entrep/image-18.svg"
  const image_texte = `Our business model combines direct product sales, recurring service revenues, and data-driven opportunities, ensuring both financial sustainability and long-term impact.

Direct Equipment Sales
o   Our primary revenue stream will come from the sale of microbial fuel cell (MFC) modules, designed to integrate seamlessly into existing hydroponic greenhouses.
o   The units will be available in scalable packages, enabling clients to expand capacity as their operations grow.
Maintenance & Monitoring Contracts
o   To guarantee reliable and continuous performance, we will offer maintenance and monitoring services.
o   These contracts create recurring revenue while providing peace of mind for operators.

Environmental Data Services
o   Our system generates valuable sustainability data (carbon footprint reduction, energy savings, waste valorization).
o   This data can be sold to businesses, research groups, or government agencies interested in tracking and certifying sustainability metrics.

Modules, Subscriptions & Licensing
o   In addition to one-time sales, we will provide modular upgrades and subscription-based services such as software dashboards, predictive analytics, and remote system optimization.
o   In the long term, licensing opportunities will allow partners to embed our engineered Geobacter strains or MFC technology into their own platforms.

Long-Term Expansion to Other Industries
o   While our initial market is industrial hydroponic greenhouses, our microbial battery technology is versatile.
o   It can later be integrated into other sectors with organic effluents, such as breweries, food-processing plants, or wastewater treatment facilities.
This expands our addressable market and demonstrates the scalability of our innovation beyond agriculture.`
  
  return (
    <Box component="div" sx={{mr:4, width:"90%"}}>
        <NormalText>{image_texte} </NormalText>   

        <Subtitle2>Business Model CANVAS</Subtitle2>
        <Box component="div" sx={{mb:5, mt:5}}>
          <EcoBusinessModelSection />
        </Box>
        <Subtitle2>Customer Value & ROI</Subtitle2>
        <NormalText>{texte1}</NormalText>
        <Subtitle2>Competitive Advantage</Subtitle2>
        <NormalText>{texte4}</NormalText>
        <NormalText>{texte2}</NormalText>
            <img src={imageTexte} />
        <Subtitle2>Resources & Requirements</Subtitle2>
        <NormalText>{imageTexte1}</NormalText>
        <Subtitle2>Risks & Mitigation Strategy</Subtitle2>
        <Figure title=" " g={1}>
            <img src={image2} />
        </Figure>
    </Box>

  );
}

export function Regulatory(){

  const texte1 = `Operating with genetically modified organisms (GMOs) requires strict adherence to both local and international regulations.

·      In North America, frameworks such as the Canadian Environmental Protection Act (CEPA) and USDA/ EPA/ FDA regulations oversee the release and containment of GMOs.

·      In the European Union, our system would fall under Directive 2009/41/EC on contained use of genetically modified microorganisms
. By designing our product as a fully contained module, we align with the legal category of “contained use” rather than open release, reducing regulatory complexity. We also anticipate that regulatory compliance will become a competitive differentiator, as customers will want assurance of safety and legality.`
  
  /*const texte2 = `Our innovation combines genetic engineering of Geobacter and MFC design. This creates opportunities for IP protection at two levels:
1.     Patents on engineered strains with enhanced extracellular electron transfer.
2.     Patents on modular MFC architecture, covering the design and integration with hydroponic systems.
 In parallel, we will conduct a freedom-to-operate (FTO) analysis to ensure that our approach does not infringe existing patents in microbial electrochemistry. Licensing agreements may be pursued if needed. Over time, this IP portfolio will strengthen our market position and create barriers to entry for competitors.`
  */
  const image1 = "https://static.igem.wiki/teams/5756/assets/images/entrep/image-19.svg"  
  //const texte3 = `In the pilot phase, the microbial fuel cell (MFC) business could target 10–15 hydroponic farms, selling units at an average of $3,000 each. This would generate an initial revenue of $30,000–$45,000, supplemented by annual maintenance contracts worth $300 per unit, adding $3,000–$4,500. Assuming successful performance, expansion into a regional market of 100 farms could raise revenues to $300,000 from sales plus $30,000 from services within two years. As economies of scale reduce production costs and adoption grows, the company could expand nationwide, reaching 1,000 farms within five years. This would represent $3 million in unit sales and $300,000 annually from maintenance, establishing a stable recurring revenue stream. Long term, licensing or partnerships with larger agricultural technology providers could multiply growth potential. Overall, the MFC business model combines upfront hardware sales with sustainable recurring income, positioning it for scalable growth in the clean energy and agri-tech sectors.`
  const texte_3 = `Because our technology relies on genetically engineered Geobacter strains, biosafety is a top priority. The microbial fuel cells (MFCs) will be designed as closed, sealed modules to prevent any release of living organisms into the environment. Multiple containment layers — physical barriers, sterilization protocols, and biological safeguards — will ensure compliance with biosafety standards. These design features will not only guarantee safety but also facilitate regulatory approval by addressing one of the main concerns associated with GMOs.`
  
  return (
    <Box component="div" sx={{mr:4, width:"90%"}}>
      <Subtitle2>Biosafety & Containment</Subtitle2>
      <NormalText>{texte_3}</NormalText>
      <Subtitle2>Regulatory Landscape</Subtitle2>
      <NormalText> {texte1} </NormalText>
      <Subtitle2>Intellectual Property & Freedom to Operate</Subtitle2>
      
      <Subtitle2>PESTEL Analysis</Subtitle2>
      <Figure title=" " g={1}>
        <img src={image1} />
      </Figure>
    </Box>
  );
}


export function Financials(){
  const texte1 = `In the pilot phase, the microbial fuel cell (MFC) business could target 10–15 hydroponic farms, selling units at an average of $3,000 each. This would generate an initial revenue of $30,000–$45,000, supplemented by annual maintenance contracts worth $300 per unit, adding $3,000–$4,500. Assuming successful performance, expansion into a regional market of 100 farms could raise revenues to $300,000 from sales plus $30,000 from services within two years. As economies of scale reduce production costs and adoption grows, the company could expand nationwide, reaching 1,000 farms within five years. This would represent $3 million in unit sales and $300,000 annually from maintenance, establishing a stable recurring revenue stream. Long term, licensing or partnerships with larger agricultural technology providers could multiply growth potential. Overall, the MFC business model combines upfront hardware sales with sustainable recurring income, positioning it for scalable growth in the clean energy and agri-tech sectors.`
  const texte2 = `For a typical hydroponic farm, investing in microbial fuel cells (MFCs) can deliver strong ROI through energy savings and waste valorization. A standard system costing $3,000 generates about 1,500 kWh per year, equivalent to roughly $225 in electricity savings at an average rate of $0.15/kWh. With annual maintenance of $300, the net yearly benefit is around -$75 in the first years. However, as energy prices rise or waste management costs are offset, the savings can grow to $400–$600 annually, turning the net benefit positive. In an optimistic scenario, payback could be reached in 5–6 years, with ROI exceeding 100% over 10 years. In a conservative case, ROI may be closer to 40–50% over the same period, still attractive compared to traditional equipment. For clients scaling across multiple units, cumulative savings significantly improve profitability and strengthen the farm’s sustainability profile.`
  const texte3 = `The use of the MFC-Geobacter system within hydroponic greenhouses to produce electricity can deliver long-term benefits on several levels. First, it contributes to a measurable reduction in carbon emissions by partially replacing fossil fuel or grid electricity with renewable bioelectricity. This aligns directly with global climate objectives and can position greenhouse operators as leaders in sustainable agriculture. This reduces waste disposal needs while simultaneously generating power, creating a closed-loop system. Secondly, by producing part of their own electricity, greenhouses gain greater energy independence, shielding operators from price volatility on the energy market and strengthening resilience in the face of global supply chain disruptions.`
  return (
    <Box component="div" sx={{mr:4, width:"90%"}}>
      <Subtitle2>Cost Estimates</Subtitle2>
      <NormalText>{texte1}</NormalText>
      <Subtitle2>Revenue Projections</Subtitle2>
      <NormalText>{texte2}</NormalText>
      <Subtitle2>Client ROI Scenarios</Subtitle2>
      <NormalText>{texte3}</NormalText>

    </Box>
  );
}


export function LongTermImpacts(){
  const texte1 = `Despite these advantages, some risks are inevitable. The use of genetically engineered Geobacter raises the concern of potential bioleakage, even though the system is designed for containment. Also, the initial costs of research, development, and deployment are significant and could represent a barrier to adoption for smaller producers. Finally, public perception may pose a challenge: while some stakeholders may welcome the integration of biotechnology in agriculture, others may express skepticism toward GMOs, requiring proactive engagement and transparent communication to build acceptance.`
  const texte2 = `To ensure long-term sustainability and minimize risks, several strategies are planned. Biosafety will be addressed through multiple levels of containment, sterilization protocols, and strict compliance with regulatory frameworks, ensuring that genetically engineered strains remain securely confined. Economic barriers can be lessened through phased adoption, beginning with pilot projects and modular units that reduce entry costs while demonstrating return on investment. In parallel, partnerships with governments and research institutions can help get funding for sustainable agriculture. Finally, transparent communication with stakeholders and the public by highlighting environmental benefits, safety measures, and cost savings will be key to building trust. By embedding sustainability at the technical, financial, and societal levels, this solution can evolve into a robust and resilient model for circular energy in agriculture.`
  const texte3 = `Our iGEM team brings together diverse expertise in molecular biology, microbiology, engineering, and business. While relatively new, we are highly motivated and committed to achieving ambitious goals. Many team members already have substantial laboratory experience, which is essential for building and testing our prototype. Beyond technical expertise, our group also excels in communication and outreach. These skills have allowed us to secure sponsorships, organize fundraising events, and connect with experts. Most importantly, the team is eager to learn, adapt, and collaborate with external partners, ensuring that we can tackle both the scientific and entrepreneurial aspects of the project.`
  
  return (
    <Box component="div" sx={{mr:4, width:"90%"}}>
      <Subtitle2>Positive Impacts</Subtitle2>
      <NormalText>{texte1}</NormalText>
      <Subtitle2>Negative Impacts & Risks</Subtitle2>
      <NormalText>{texte2}</NormalText>
      <Subtitle2>Sustainability Strategy</Subtitle2>
      <NormalText>{texte3}</NormalText>
    </Box>
  );
}


export function TeamMarketing(){
  const texte1 = `Our communication strategy revolves around a clear narrative: “green, circular, and innovative.” We aim to position our project as a groundbreaking example of biotechnology applied to sustainable agriculture. To reach different audiences, we will use multiple channels:
·      Social media (Facebook, Instagram, LinkedIn) to engage the public and share visual storytelling.
·      Scientific conferences and publications to validate our work within the academic community.
·      Trade fairs and agricultural events to connect with potential partners and early adopters.
·      By emphasizing both scientific credibility and accessible communication, we can build trust and enthusiasm around our solution.`
  
  const texte2 = `Our go-to-market strategy follows a phased approach:

Proof of Concept – Build a functional prototype during our lab tests, demonstrating the feasibility of electricity production with engineered Geobacter.
Pilot Phase – Deploy the system in small-scale hydroponic greenhouses to test long-term stability, scalability, and integration with plant cultivation.
Early Clients – Partner with urban farming startups and experimental greenhouses interested in sustainable and self-sufficient energy models.
Industrial Scale-Up – Collaborate with large agricultural producers and governmental programs to integrate the technology into commercial hydroponic farms.
By combining innovation, communication, and strategic scaling, our team aims to bring this technology from the lab bench to the market, creating a truly sustainable energy solution for agriculture.`
  return (
    <Box component="div" sx={{mr:4,width:"90%" }}>
      <Subtitle2>Team Skills & Capabilities</Subtitle2>
      <NormalText>{texte1}</NormalText>
      <Subtitle2>Go-to-Market Strategy</Subtitle2>
      <NormalText>{texte2}</NormalText>
    </Box>
  );
}


export function Conclusion(){
  const texte1 = `Our solution is fundamentally different from existing renewable energy options because it combines waste valorization and electricity generation in a single closed-loop system. By engineering Geobacter bacteria and integrating them into microbial fuel cells, we transform greenhouse effluents into a renewable energy source. Unlike solar panels, batteries, or biodigesters, our approach simultaneously reduces operational costs, improves sustainability metrics, and provides valuable environmental data. This unique integration makes our technology not only innovative but also essential for the future of sustainable agriculture.`
  const texte2 = `We envision a future where food production systems are energy-resilient, circular, and climate-positive. Hydroponic greenhouses, instead of relying heavily on fossil fuels, could partially power themselves while reducing waste and environmental impact. Over time, the same microbial battery platform can be adapted to other industries with organic effluents, such as breweries, food-processing plants, and wastewater treatment facilities. By scaling across sectors, our solution has the potential to contribute significantly to the reduction of greenhouse gas emissions and the transition to a more sustainable global food system.`
  const texte3 = ` 
Beyond the competition, our priority will be to translate this project into a viable startup pathway. This will include:

·      Incubation: joining accelerators focused on biotech and sustainable agri-tech.

·      Partnerships: collaborating with industrial greenhouse operators for pilot installations.

·      Funding: raising seed capital and applying for grants dedicated to climate innovation.
Through these steps, we aim to transform our iGEM project from a promising prototype into a scalable solution with real-world impact.`
  return (
    <Box component="div" sx={{mr:4, width:"90%"}}>
      <Subtitle2>Value Proposition Recap</Subtitle2>
      <NormalText>{texte1}</NormalText>
      <Subtitle2>Long-Term Vision</Subtitle2>
      <NormalText>{texte2}</NormalText>
      <Subtitle2>Next Steps Beyond iGEM</Subtitle2>
      <NormalText>{texte3}</NormalText>
    </Box>
  );

}