import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';

const ErrorBox = styled(Box)(({ theme }) => ({
  backgroundColor: '#ffcccb',
  padding: '5px 10px',
  borderRadius: '4px',
  color: 'red',
  textAlign: 'left',
  width: '50vw',
  maxWidth: '700px',
  margin: 'auto',
  marginBottom: 0,
  whiteSpace: 'pre-wrap'
}));

const StyledButton = styled('button')(({ theme, selected, readOnly }) => ({
  width: 'auto',
  padding: '10px 20px',
  borderRadius: '4px',
  margin: '5px',
  border: 'none', 
  backgroundColor: selected ? '#ADD8E6' : 'transparent',
  color: selected ? 'white' : 'black',
  cursor: readOnly ? 'default' : 'pointer',
  boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.2)',
  outline: 'none',
  transition: 'background-color 0.3s',
  '&:hover': {
    backgroundColor: selected ? '#daedf4' : '#F8F8F8',
  },
}));
const customTypographyStyle = {
  fontWeight: 'bold',
  fontSize: '16px',
  fontFamily: 'Open Sans, sans-serif',
};

const RatingScale = ({ 
  questionText, 
  description, 
  readOnly, 
  error, 
  onValueChange, 
  onCombinedEmotions,
  realLabel,   // Real emotion from the gesture
  emotions,    // Global emotions list
  selectedValue, 
  numOptions
}) => {
  const [localSelectedValue, setLocalSelectedValue] = useState(selectedValue);
  const [shuffledEmotions, setShuffledEmotions] = useState([]);

  useEffect(() => {
    // Shuffle the emotions including the real label
    const shuffled = shuffleEmotions(realLabel, emotions);
    setShuffledEmotions(shuffled);
  }, [realLabel, emotions]);

  useEffect(() => {
    setLocalSelectedValue(selectedValue);
  }, [selectedValue]);

  const shuffleEmotions = (realLabel, emotionsList) => {
    const otherEmotions = emotionsList.filter(emotion => emotion !== realLabel);
    console.log(otherEmotions)
    const randomEmotions = otherEmotions.sort(() => 0.5 - Math.random()).slice(0, numOptions);
    console.log(randomEmotions)
    const combinedEmotions = [...randomEmotions, realLabel].sort(() => 0.5 - Math.random()); // Shuffle with realLabel
    onCombinedEmotions(emotions);
    return combinedEmotions;
  };

  const handleButtonClick = (value) => {
    if (!readOnly) {
      setLocalSelectedValue(value);
      if (onValueChange) {
        onValueChange(value);
      }
    }
  };

  return (
    <>
      {error && (
        <ErrorBox>
          <Typography variant="body2">{error}</Typography>
        </ErrorBox>
      )}
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: 2, boxShadow: 3, borderRadius: 2, backgroundColor: 'background.paper', width: '50vw', maxWidth: '700px', padding: '32px 40px', fontFamily: 'Open Sans, sans-serif', margin: 'auto', marginTop: '20px', marginBottom: '20px', whiteSpace: 'pre-wrap'}}>
        <Typography variant="" sx={customTypographyStyle}>
          {`Gesture: ${questionText}`}
        </Typography>
        {description && (
          <Typography variant="" sx={{ color: '#00000073', mb: 2, fontSize: '14px', fontFamily: 'Open Sans, sans-serif'}}>
            {description}
          </Typography>
        )}
        <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', mt: 2 }}>
          {shuffledEmotions.map((emotion, index) => (
            <StyledButton
              key={index}
              selected={localSelectedValue === emotion}
              onClick={() => handleButtonClick(emotion)}
              disabled={readOnly}
            >
              {emotion}
            </StyledButton>
          ))}
        </Box>
        <Box sx={{ height: '40px', mt: 1, textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          {localSelectedValue && (
            <Typography variant="" sx={{ fontWeight: 600 }}>
              {localSelectedValue}
            </Typography>
          )}
        </Box>
      </Box>
    </>
  );
};

export default RatingScale;
