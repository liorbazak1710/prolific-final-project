import React, { useState, useEffect } from 'react';
import RatingScale from '../SurveyComponents/RatingScale';
import RealLabelScale from '../SurveyComponents/RealLabelScale'; // New Component
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { getAllGestures, getCSVGestures } from '../API/gesturesAPI';
import LoopOfMovements from '../SurveyComponents/loopOfMovements';
import './animations.css'; // Import the CSS file with the animation

// Mock global flag
const USE_REAL_LABEL_SCALE = true; // Set this flag to switch between components

const QuestionPage = ({ jsonFileName, onComplete }) => {
    const [gestures, setGestures] = useState([]);
    const [currentGesture, setCurrentGesture] = useState(null);
    const [responses, setResponses] = useState([]);
    const [selectedRating, setSelectedRating] = useState(null); // Track the rating
    const [emotions, setEmotions] = useState([]);
    const [numOptions, setNumOptions] = useState(4);
    const [videosCompleted, setVideosCompleted] = useState(false); // Track video completion
    const [showComponent, setShowComponent] = useState(false); // Track when to show the rating component with animation

    useEffect(() => {
        const loadGestures = async () => {
            const { gestureIds, globalEmotions, numOptions } = await getCSVGestures('/csvfile.csv');
            setEmotions(globalEmotions);
            setNumOptions(numOptions);
            const allGesturesData = await getAllGestures(); // Get all available gestures

            // Filter only the gestures whose IDs are in the gestureIds array from CSV
            const filteredGestures = allGesturesData.filter(gesture =>
                gestureIds.includes(gesture.id)
            );

            // Shuffle the filtered gestures and set the first one
            const shuffledGestures = shuffleArray(filteredGestures);
            setGestures(shuffledGestures);
            setCurrentGesture(shuffledGestures[0]); // Set the first gesture
        };

        loadGestures();
    }, []);

    // Shuffle the gestures
    const shuffleArray = (array) => {
        return [...array].sort(() => 0.5 - Math.random());
    };

    // Reset the rating and video when clicking "Next"
    const handleNextClick = () => {
        // Save the current response
        const currentResponse = {
            gesture: currentGesture.id,
            rating: selectedRating
        };
        setResponses([...responses, currentResponse]);

        // Reset the rating for the next question
        setSelectedRating(null);

        // Move to the next gesture and reset the flags
        const nextGestureIndex = gestures.indexOf(currentGesture) + 1;
        if (nextGestureIndex < gestures.length) {
            setCurrentGesture(gestures[nextGestureIndex]);
            resetStates(); // Reset states for the new question
        } else {
            onComplete(responses); // If done, complete the flow
        }
    };

    // Function to reset state between gestures
    const resetStates = () => {
        console.log("in reset states")
        setVideosCompleted(false); // Reset video completion
        setShowComponent(false); // Hide the slider component until the new video finishes
    };

    // Trigger the animation and show the rating component when the video ends
    useEffect(() => {
        if (videosCompleted) {
            setShowComponent(true); // Trigger the slide-down animation
        }
    }, [videosCompleted, currentGesture]); // Ensure it runs when `currentGesture` changes

    return (
        <Box sx={{ width: '100%', maxWidth: 700, mx: 'auto', mt: 4, mb: 10 }}>
            <div>
                {currentGesture && (
                    <>
                        {/* Pass the movements as props to LoopOfMovements */}
                        <LoopOfMovements 
                            ids={currentGesture.movements} 
                            onVideosEnd={() => setVideosCompleted(true)} // Trigger when videos end
                        />

                        {/* Conditionally render RatingScale or RealLabelScale based on video completion */}
                        {showComponent && (
                            <div className="slide-down"> {/* Apply the slide-down animation */}
                                {USE_REAL_LABEL_SCALE ? (
                                    <RealLabelScale
                                        realLabel={currentGesture.realLabel[0]} // Pass the real label
                                        onValueChange={(value) => {
                                            setSelectedRating(value); // Update the rating
                                        }}
                                        selectedValue={selectedRating}
                                    />
                                ) : (
                                    <RatingScale
                                        questionText={`What kind of emotion do you think the robot is expressing?`}
                                        description={"Please choose the label you think that best describes the emotion, there isn't a correct answer"}
                                        realLabel={currentGesture.realLabel[0]}  // Pass the real emotion label from the gesture
                                        emotions={emotions}  // Pass the global emotions list
                                        onValueChange={(value) => {
                                            setSelectedRating(value); // Update the rating
                                        }}
                                        selectedValue={selectedRating}
                                        numOptions={numOptions}
                                    />
                                )}
                            </div>
                        )}

                        <Box sx={{ mt: 4, textAlign: 'left' }}>
                            <Button
                                variant="outlined"
                                color="secondary"
                                onClick={handleNextClick}
                                disabled={selectedRating === null || !videosCompleted} // Disable until a rating is selected and videos are done
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

export default QuestionPage;
