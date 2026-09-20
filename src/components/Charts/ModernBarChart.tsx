import ChartComponent from './ChartComponent'; 
import { Box } from '@mui/material';

// Simplified interface: you only provide the core data
export interface ModernBarChartDataset {
    label: string;
    data: number[];
    backgroundColor: string;
}

interface ModernBarChartProps {
    datasets: ModernBarChartDataset[];
    labels: string[];
}

const ModernBarChart = ({ datasets, labels }: ModernBarChartProps) => {
    
    // 1. Chart Data - Automatically applies the rounded corners to every dataset
    const chartData = {
        labels: labels,
        datasets: datasets.map(dataset => ({
            ...dataset,
            borderRadius: { topLeft: 4, topRight: 4 },
            borderSkipped: 'bottom',                   
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
                    stepSize: 5, 
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
                type="bar" 
                data={chartData} 
                options={chartOptions} 
                height={350} 
            />
        </Box>
    );
};

export default ModernBarChart;