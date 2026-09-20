import ChartComponent from './ChartComponent'; 
import { Box } from '@mui/material';

export interface ModernPieChartProps {
    labels: string[];
    data: number[];
    colors: string[];
    totalText?: string; // e.g., "Total : x"
}

const ModernPieChart = ({ labels, data, colors, totalText = "Total : x" }: ModernPieChartProps) => {
    
    // 1. Chart Data - Applies the offset (gaps) and rounded corners
    const chartData = {
        labels: labels,
        datasets: [
            {
                data: data,
                backgroundColor: colors,
                borderWidth: 0,       // Removes standard borders to emphasize the gap
                borderRadius: 15,     // Rounds the outer and inner edges of the slices
                offset: 20,           // Pushes the slices apart (exploded effect)
                hoverOffset: 25,      // Slightly expands on hover
            }
        ],
    };

    // 2. Modern Chart Options
    const chartOptions = {
        responsive: true,
        layout: {
            padding: 20 
        },
        plugins: {
            legend: {
                position: 'right' as const,
                title: {
                    display: true,
                    text: totalText,
                    font: {
                        size: 14,
                        weight: 'bold' as const, // <-- Added "as const" here
                        family: "Inter, 'Helvetica Neue', Helvetica, Arial, sans-serif"
                    },
                    color: '#000',
                    padding: { bottom: 15 }
                },
                labels: {
                    usePointStyle: true,
                    pointStyle: 'rectRounded',
                    padding: 15,
                    color: '#333',
                    font: {
                        size: 13,
                        family: "Inter, 'Helvetica Neue', Helvetica, Arial, sans-serif"
                    }
                },
            },
            tooltip: {
                enabled: true 
            }
        },
    };

    return (
        <Box sx={{ padding: 4, width: '100%', maxWidth: 500, mx: 'auto' }}>
            <ChartComponent 
                type="pie" 
                data={chartData} 
                options={chartOptions} 
                height={300} 
            />
        </Box>
    );
};

export default ModernPieChart;