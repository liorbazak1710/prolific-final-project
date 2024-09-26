import React, { useState, useEffect } from 'react';
import Text from '../SurveyComponents/Text';
import ImageWithDescription from '../SurveyComponents/ImageWithDescription';
import RatingScale from '../SurveyComponents/RatingScale';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import LoopOfMovements from '../SurveyComponents/loopOfMovements';
import { emotions } from '../params';


const ExamplePage = ({ onComplete }) => {
  const [showFirstText, setShowFirstText] = useState(true);
  const [showImage, setShowImage] = useState(false);
  const [showSecondText, setShowSecondText] = useState(false);
  const [showRatingScale, setShowRatingScale] = useState(false);
  const [selectedRating, setSelectedRating] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [realLabel] = useState("Joy"); // Mock real emotion for this example

  useEffect(() => {
    setStartTime(new Date()); // Set the start time when the page is first rendered
  }, []);

  const description = `
Our goal in this study is to learn how people interpret the emotions expressed by a robot's movements. For this purpose, we will show you several videos of the robot performing different movements, referred to as gestures. We would like you to share your thoughts on what kind of emotion you believe the robot is trying to convey through each gesture.`;

  const scale_desc = `
Please choose the label that best describes the emotion of the robot.`;

  const handleFirstButtonClick = () => {
    setShowFirstText(false);
    setShowImage(true);
    setShowSecondText(true);
  };

  const handleSecondButtonClick = () => {
    setShowSecondText(false);
    setShowRatingScale(true);
  };

  const handleRatingChange = (value) => {
    setSelectedRating(value);
  };

  const handleNextClick = () => {
    if (!isFormValid()) return; // Ensure the form is valid before proceeding
  
    const endTime = new Date();
    const timeTaken = (endTime - startTime); // Time taken in seconds
  
    const examplePageData = {
      rating: {
        question: "What kind of emotion do you think the robot is expressing?",
        response: selectedRating
      },
      timeTaken: timeTaken,
      // Include any other relevant data here
    };
  
    onComplete(examplePageData); // Pass the formatted data to the parent component
  };

  const isFormValid = () => {
    return selectedRating !== null;
  };

  return (
    <Box sx={{ width: '100%', maxWidth: 700, mx: 'auto', mt: 4, mb: 10 }}>
      <div>
        {showFirstText && (
          <Text
            title="Let's Start with an Example"
            description={description}
            buttonText="I Understand"
            buttonDelay={5000}
            onButtonClick={handleFirstButtonClick}
          />
        )}

        {showImage && (
          <>
            <LoopOfMovements ids={["20"]} />
          </>
        )}
        {showSecondText && (
          <>
            <Text
              title="Let's go over an example"
              buttonText="Let's See"
              buttonDelay={100}
              onButtonClick={handleSecondButtonClick}
            />
          </>
        )}

        {showRatingScale && (
          <>
            <RatingScale
              questionText="What kind of emotion do you think the robot is trying to express?"
              description={scale_desc}
              realLabel={realLabel} // Pass the real emotion (from JSON)
              emotions={emotions} // Pass the global emotions list
              onValueChange={handleRatingChange}
              selectedValue={selectedRating}
              numOptions={5}
            />

            <Box sx={{ mt: 4, textAlign: 'left' }}>
              <Button 
                variant="outlined"
                color="secondary"
                onClick={handleNextClick} 
                disabled={!isFormValid()}
                sx={{ minHeight: '50px', minWidth: '150px', float: 'left' }}
              >
                Next
              </Button>
            </Box>
          </>
        )}
      </div>
    </Box>
  );
};

export default ExamplePage;
