import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Box,
} from "@mui/material";

interface CustomDataTableProps {
  /** Table title (e.g. "Table 1: Electricity test of prototype #2") */
  title?: string;
  /** Array of column names */
  columns: string[];
  /** Array of rows (each row is an array of cell values) */
  data: (string | number)[][];
  /** Default text alignment for cells (default: "center") */
  align?: "left" | "center" | "right";
}

/**
 * CustomDataTable Component (TypeScript)
 * 
 * Example:
 * <CustomDataTable
 *   title="Table 1: Electricity test of prototype #2"
 *   columns={["Electrodes", "Voltage (V)", "Current (mA)", "Resistance (Ω)"]}
 *   data={[
 *     ["Cathode: Zinc\\nAnode: Copper", "0.6", "Not measured", "0"],
 *     ["Cathode: Copper\\nAnode: Graphite", "0.260", "Not measured", "0"],
 *   ]}
 * />
 */

const CustomDataTable: React.FC<CustomDataTableProps> = ({
  title,
  columns,
  data,
  align = "center",
}) => {
  return (
    <Box component="div" sx={{ my: 4 }}>
      {title && (
        <Typography
          variant="subtitle1"
          sx={{
            fontWeight: 600,
            mb: 1,
            bgcolor: "grey.100",
            display: "inline-block",
            px: 1,
            borderRadius: 0.5,
          }}
        >
          {title}
        </Typography>
      )}
      <TableContainer component={Paper} variant="outlined">
        <Table>
          <TableHead sx={{ bgcolor: "grey.100" }}>
            <TableRow>
              {columns.map((col, index) => (
                <TableCell
                  key={index}
                  align={index === 0 ? "left" : align}
                  sx={{ fontWeight: 600 }}
                >
                  {col}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, i) => (
              <TableRow key={i} hover>
                {row.map((cell, j) => (
                  <TableCell
                    key={j}
                    align={j === 0 ? "left" : align}
                    sx={{
                      whiteSpace: "pre-line", // preserve line breaks
                      verticalAlign: "top",
                    }}
                  >
                    {cell}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default CustomDataTable;
