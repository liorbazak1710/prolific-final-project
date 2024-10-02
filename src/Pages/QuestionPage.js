import React, { useState, useEffect } from 'react';
import RatingScale from '../SurveyComponents/RatingScale';
import RealLabelScale from '../SurveyComponents/RealLabelScale'; // New Component
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { getAllGestures, getCSVGestures } from '../API/gesturesAPI';
import LoopOfMovements from '../SurveyComponents/loopOfMovements';
import './animations.css'; // Import the CSS file with the animation
import { USE_REAL_LABEL_SCALE } from '../config'; // adjust the path if necessary


const QuestionPage = ({ onComplete }) => {
    const [gestures, setGestures] = useState([]);
    const [currentGesture, setCurrentGesture] = useState(null);
    const [responses, setResponses] = useState([]);
    const [selectedRating, setSelectedRating] = useState(null); // Track the rating
    const [emotions, setEmotions] = useState([]);
    const [shuffEmotions, setShuffledEmotions] = useState([]);
    const [numOptions, setNumOptions] = useState(4);
    const [videosCompleted, setVideosCompleted] = useState(false); // Track video completion
    const [showComponent, setShowComponent] = useState(false); // Track when to show the rating component with animation
    const [startTime, setStartTime] = useState(null); // Track the start time

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
            setStartTime(Date.now()); // Set the start time when the first gesture is shown
        };

        loadGestures();
    }, []);

    // Shuffle the gestures
    const shuffleArray = (array) => {
        return [...array].sort(() => 0.5 - Math.random());
    };

    // Reset the rating and video when clicking "Next"
    const handleNextClick = () => {
        const currentTime = Date.now();
        const responseTime = currentTime - startTime; // Calculate response time

        // Save the current response
        const currentResponse = {
            gesture: currentGesture.id,
            rating: selectedRating,
            options: shuffEmotions,
            responseTime // Add the response time
        };

        console.log("current response, " + currentGesture.id)
         // Instead of mutating the original array, create a copy and add the new response
        const updatedResponses = [...responses]; // Create a new copy of the responses array
        updatedResponses.push(currentResponse); // Add the new response

        // Now update the state with the new array
        setResponses(updatedResponses);

        // Reset the rating for the next question
        setSelectedRating(null);

        // Move to the next gesture and reset the flags
        const nextGestureIndex = gestures.indexOf(currentGesture) + 1;
        if (nextGestureIndex < gestures.length) {
            setCurrentGesture(gestures[nextGestureIndex]);
            resetStates(); // Reset states for the new question
            setStartTime(Date.now()); // Set the start time for the new gesture
        } else {
            console.log("responses" + JSON.stringify(updatedResponses))
            onComplete(updatedResponses); // If done, complete the flow
        }
    };


    // Function to reset state between gestures
    const resetStates = () => {
        console.log("in reset states");
        setVideosCompleted(false); // Reset video completion
        setShowComponent(false); // Hide the slider component until the new video finishes
    };

    const onCombinedEmotions = (emotions) => {
        setShuffledEmotions(emotions);
    }
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
                                        onCombinedEmotions= {(emotions) => {
                                            onCombinedEmotions(emotions);
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
