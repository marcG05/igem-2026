import ChartComponent from './ChartComponent'; 
import { Box } from '@mui/material';

// Simplified interface: you only provide the core data and a single color
export interface ModernLineChartDataset {
    label: string;
    data: number[];
    color: string; 
}

interface ModernLineChartProps {
    datasets: ModernLineChartDataset[];
    labels: string[];
}

const ModernLineChart = ({ datasets, labels }: ModernLineChartProps) => {
    
    // 1. Chart Data - Automatically applies line and point styling
    const chartData = {
        labels: labels,
        datasets: datasets.map(dataset => ({
            label: dataset.label,
            data: dataset.data,
            borderColor: dataset.color,         // Line color
            backgroundColor: dataset.color,     // Legend and point color
            borderWidth: 2,                     // Thickness of the line
            pointRadius: 4,                     // Size of the circular markers
            pointBackgroundColor: dataset.color,// Solid fill for markers
            pointBorderColor: dataset.color,    // Border for markers
            tension: 0,                         // 0 makes the lines straight, increase to 0.3 for curves
            fill: false,
        })),
    };

    // 2. Modern Chart Options
    const chartOptions = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
                labels: {
                    usePointStyle: true,
                    pointStyle: 'circle',
                    padding: 20,
                    color: '#333',
                    font: {
                        size: 13,
                        family: "Inter, 'Helvetica Neue', Helvetica, Arial, sans-serif"
                    }
                },
            },
        },
        scales: {
            x: {
                grid: { display: false },
                border: { display: false },
                ticks: {
                    color: '#555',
                    font: { family: "Inter, 'Helvetica Neue', Helvetica, Arial, sans-serif" }
                }
            },
            y: {
                grid: { color: '#EAEAEA' },
                border: { display: false },
                ticks: {
                    stepSize: 10, // Adjusted to match the 0, 10, 20... intervals in your image
                    padding: 10, 
                    color: '#555',
                    font: { family: "Inter, 'Helvetica Neue', Helvetica, Arial, sans-serif" }
                }
            }
        }
    };

    return (
        <Box sx={{ padding: 4, width: '100%', maxWidth: 600, mx: 'auto' }}>
            <ChartComponent 
                type="line" 
                data={chartData} 
                options={chartOptions} 
                height={350} 
            />
        </Box>
    );
};

export default ModernLineChart;