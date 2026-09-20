import { Box, colors } from "@mui/material";
import TextNavigation from "../../components/TextNavigation";
import TextSection from "../../components/TextSection";
import Paragraph from "../../components/Paragraph";
import DropSection from "../../components/DropSection";
import ModernBarChart from "../../components/Charts/ModernBarChart";
import ModernLineChart from "../../components/Charts/ModernLineChart";
import ModernPieChart from "../../components/Charts/ModernPieChart";
const DryLab = () => {

    const labels =  ['Jan', 'Feb', 'Mar', 'Apr', 'May'];
    const datasets =  [
        {
            label: 'Monthly Sales',
            data: [12, 19, 3, 5, 2],
            backgroundColor: 'rgb(54, 163, 235)',
        }
    ];

    const datasets1 =  [
        {
            label: 'Monthly Sales',
            data: [12, 19, 3, 5, 2],
            color: 'rgb(54, 163, 235)',
        }
    ];

    const labels1 = ['Category A', 'Category B', 'Category C', 'Category D'];
    const data = [20, 35, 25, 20]; // Adjust values based on your actual data sizes

    // Colors matching the image: light blue, solid blue, light green, light pink
    const colors = ['#95C0E7', '#4278F5', '#B8D0B3', '#FDD5D9'];
    return (
        <>
            <TextNavigation>
                <TextSection title="Test">
                    <ModernLineChart labels={labels} datasets={datasets1} />
                    <ModernPieChart labels={labels1} data={data} colors={colors}/>
                </TextSection>
                <TextSection title="Test 2">
                    <Paragraph>
                        This is paragraph 1.
                        the text continue here.
                    </Paragraph>
                    <Paragraph>
                        This is paragraph 2.
                        The text continue on the line.
                    </Paragraph>
                    <DropSection title="Click me">
                        <Paragraph>
                            My new paragraph
                        </Paragraph>
                        <ModernBarChart labels={labels} datasets={datasets}/>
                    </DropSection>

                </TextSection>
            </TextNavigation>
        </>
    );
};

export default DryLab;