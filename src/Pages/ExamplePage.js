import React, { useState, useEffect } from 'react';
import Text from '../SurveyComponents/Text';
import ImageWithDescription from '../SurveyComponents/ImageWithDescription'; // Import the component
import RatingScale from '../SurveyComponents/RatingScale';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import LoopOfMovements from '../SurveyComponents/loopOfMovements';
import { emotions } from '../params';
import { USE_REAL_LABEL_SCALE } from '../config'; // adjust the path if necessary
import RealLabelScale from '../SurveyComponents/RealLabelScale'; // New Component

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
    const timeTaken = endTime - startTime; // Time taken in seconds

    const examplePageData = {
      rating: {
        question: "What kind of emotion do you think the robot is expressing?",
        response: selectedRating
      },
      timeTaken: timeTaken,
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
          <>
            {/* Adding ImageWithDescription under showFirstText */}
            <ImageWithDescription 
              imageUrl="/example.png"  // Replace with the actual path to your image
              description="In this experiment, you will observe a robot of the Go2 model, as depicted in the image."
            />

            <Text
              title="Let's Start with an Example"
              description={description}
              buttonText="I Understand"
              buttonDelay={5000}
              onButtonClick={handleFirstButtonClick}
            />
          </>
        )}

        {showImage && (
          <>
            <LoopOfMovements ids={["20"]} />
          </>
        )}
        
        {showSecondText && (
          <>
            <Text
              title="Let’s review the example. In this example, you will be able to respond immediately; however, during the actual experiment, you will be required to watch the video at least once before submitting your response."
              buttonText="Let's See"
              buttonDelay={100}
              onButtonClick={handleSecondButtonClick}
            />
          </>
        )}

        {showRatingScale && (
          <>
            {USE_REAL_LABEL_SCALE ? (
              <RealLabelScale
                realLabel={realLabel} // Use the same realLabel variable
                onValueChange={handleRatingChange}
                selectedValue={selectedRating}
              />
            ) : (
              <RatingScale
                questionText="What kind of emotion do you think the robot is trying to express?"
                description={scale_desc} // Keep the description variable
                realLabel={realLabel} // Pass the same real emotion label from JSON
                emotions={emotions} // Use the global emotions list
                onValueChange={handleRatingChange} // Keep the original handler
                selectedValue={selectedRating}
                onCombinedEmotions= {(emotions) => {}}
                numOptions={5} // Fixed number of options
              />
            )}

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
