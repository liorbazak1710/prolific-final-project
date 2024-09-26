import React, { useState, useEffect, useRef } from "react";
import { getMovements } from "../API/movementsAPI";
import "./loopOfMovements.css";

const LoopOfMovements = (props) => {
  const [URLs, setURLs] = useState([]);
  const videoRefs = useRef([]);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [hasCompletedFirstLoop, setHasCompletedFirstLoop] = useState(false);

  // Fetch video URLs based on provided IDs
  function getURLsByIds(data) {
    return props.ids.map((id) => {
      const matchingObject = data.find((object) => object.id === id);
      return matchingObject ? matchingObject.videoUrl : "";
    });
  }

  // Handle the end of the current video
  const handleVideoEnd = () => {
    const nextIndex = currentVideoIndex + 1;

    if (nextIndex === URLs.length) {
      // Trigger the callback for video completion only if the first loop is done
      if (!hasCompletedFirstLoop && props.onVideosEnd) {
        props.onVideosEnd();
        setHasCompletedFirstLoop(true); // Mark that the first loop has completed
      }

      // Continue looping to the first video again
      setCurrentVideoIndex(0);
    } else {
      setCurrentVideoIndex(nextIndex);
    }
  };

  // Fetch data on mount and when props.ids change
  useEffect(() => {
    const fetchData = async () => {
      const data = await getMovements();
      const fetchedURLs = getURLsByIds(data);
      setURLs(fetchedURLs);
      setHasCompletedFirstLoop(false); // Reset the loop completion flag when new videos are loaded
      setCurrentVideoIndex(0); // Start at the first video
    };
    fetchData();
  }, [props.ids]);

  // Auto-play the current video when the index changes
  useEffect(() => {
    const currentRef = videoRefs.current[currentVideoIndex];
    if (currentRef) {
      currentRef.play().catch((error) => {
        console.error("Error attempting to play video:", error);
      });
    }
  }, [currentVideoIndex]);

  return (
    <div className="loop-of-movements">
      <div className="video-container">
        {/* Render and play videos */}
        {URLs.map((url, index) => (
          <video
            key={index}
            muted
            autoPlay
            playsInline
            onEnded={handleVideoEnd}
            ref={(el) => (videoRefs.current[index] = el)}
            className="video-player"
            src={url}
            preload="metadata"
            style={{
              display: index === currentVideoIndex ? "block" : "none",
            }}
            loop={URLs.length === 1} // Only loop if there's a single video
          ></video>
        ))}
      </div>
    </div>
  );
};

export default LoopOfMovements;
