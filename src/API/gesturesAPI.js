import React, { useState, useEffect } from "react";
import { BASE_URL } from '../params.js'
import Papa from 'papaparse';



export const getCSVGestures = async (csvFile) => {
  const response = await fetch(csvFile);
  const text = await response.text();

  console.log(text);
  return new Promise((resolve) => {
    Papa.parse(text, {
      complete: function(results) {
        // First row: Gesture IDs
        const gestures = results.data[0].map(id => id.trim());
        console.log('gestures:', gestures);

        // Second row: Global available emotions (as individual elements in the array)
        const globalEmotions = results.data[1].map(emotion => emotion.trim());
        console.log('globalEmotions:', globalEmotions);

        // Third row: A single number for numOptions
        const numOptions = parseInt(results.data[2][0], 10);
        console.log('numOptions:', numOptions);

        // Resolve with gestureIds and globalEmotions
        resolve({ gestureIds: gestures, globalEmotions, numOptions });
      }
    });
  });
};

function getAllGestures() {
  return fetch(BASE_URL + "/gestures")
    .then((response) => response.json())
    .catch((error) => console.log("Error fetching gestures:", error));
}

function getGestureById(id) {
  return fetch(BASE_URL + '/gestures/' + id)
    .then((response) => response.json())
    .catch((error) => console.log("Error fetching gesture:", error));
}

function editGesture(id, updatedGesture) {
  return fetch(BASE_URL + '/gestures/' + id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedGesture),
  })
    .then((response) => response.json())
    .catch((error) => console.log("Error editing gesture:", error));
}

function addGestureJson(newGesture) {
  return new Promise((resolve, reject) => {
    fetch(BASE_URL + "/gestures")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        //const maxId = data ? Math.max(...data.map((gesture) => gesture.id)) : 0;
        const maxId = data && data.length > 0 ? Math.max(...data.map((gesture) => parseInt(gesture.id, 10))) : 0;
        const nextId = maxId + 1;

        fetch(BASE_URL + "/gestures", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id: String(nextId), ...newGesture }),
        })
          .then((response) => response.json())
          .then((data) => {
            resolve(nextId); // Resolve the next ID value
          })
          .catch((error) => reject(error));
      })
      .catch((error) => {
        console.log("Error fetching gestures:", error);
        reject(error);
      });
  });
}


function deleteGesture(id) {
  // send a DELETE request to delete the gesture with the given ID
  fetch(BASE_URL + '/gestures/' + id, {
    method: "DELETE",
  }).then(() => {
    // update the gestures state by removing the deleted gesture
    // setGestures(gestures.filter((gesture) => gesture.id !== id));
  });
}

export {
  addGestureJson,
  deleteGesture,
  getAllGestures,
  getGestureById,
  editGesture,
};
