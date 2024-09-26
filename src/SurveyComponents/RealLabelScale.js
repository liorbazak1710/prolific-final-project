import React from 'react';
import { Slider, Typography, Box } from '@mui/material';

const RealLabelScale = ({ realLabel, onValueChange, selectedValue }) => {
    return (
        <Box
            sx={{
                borderRadius: '12px', // Corner radius
                p: 3,                 // Padding
                backgroundColor: '#f9f9f9', // Background color
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', // Optional shadow for depth
                marginTop: '16px'
            }}
        >
            <Typography variant="h6" sx={{ mb: 2, mt: 2 }}>
                To what extent do you find the robot to show the emotion:{" "}
                <span style={{ fontWeight: 'bold' }}>{realLabel}</span>?
            </Typography>

            <Box sx={{ display: 'flex', alignItems: 'center', mt: 3 }}>
                {/* Left Label - 'not at all' */}
                <Typography sx={{ mr: 0 }}>Not at all</Typography>

                {/* Slider Component */}
                <Slider
                    value={selectedValue} // Default value is 50 if none is selected
                    onChange={(event, value) => onValueChange(value)} // Update the rating
                    min={0}
                    max={100}
                    step={1}
                    sx={{ flex: 1, mx: 2 }} // Shrink the slider and provide horizontal margin
                    valueLabelDisplay="auto"
                />

                {/* Right Label - 'perfectly' */}
                <Typography sx={{ ml: 0 }}>Perfectly</Typography>
            </Box>
        </Box>
    );
};

export default RealLabelScale;
