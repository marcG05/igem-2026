
import { 
    Chart as ChartJS, 
    registerables, 
    ChartData, 
    ChartOptions, 
    ChartType 
} from 'chart.js';
import { Chart } from 'react-chartjs-2';
import { Box } from '@mui/material';

// Register all required Chart.js elements
ChartJS.register(...registerables);

interface CustomChartProps {
    type: ChartType;           // 'bar', 'line', 'pie', 'doughnut', etc.
    data: ChartData;           // The data object containing labels and datasets
    options?: ChartOptions;    // Optional customization for axes, tooltips, etc.
    height?: number | string;  // Container height
}

const ChartComponent = ({ type, data, options, height = 300 }: CustomChartProps) => {
    return (
        // A relative container is required for responsive Chart.js sizing
        <Box sx={{ width: '100%', height, position: 'relative' }}>
            <Chart 
                type={type} 
                data={data} 
                options={{ 
                    // maintainAspectRatio: false allows the chart to fill the custom Box height
                    maintainAspectRatio: false, 
                    ...options 
                }} 
            />
        </Box>
    );
};

export default ChartComponent;