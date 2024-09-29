import { BASE_URL } from '../params.js';

// Refactor addGestureEx to use async/await
async function addGestureEx(newExp) {
  try {
    // Get the current maximum ID
    const response = await fetch(BASE_URL + "/newExperiment");
    const data = await response.json();
    
    console.log(data);
    const maxId = data ? Math.max(...data.map((exp) => exp.id)) : 0;
    
    // Add 1 to the maximum ID to get the next ID for the new gesture
    const nextId = maxId + 1;
    
    // Add the new gesture with the next ID
    const addResponse = await fetch(BASE_URL + "/newExperiment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: nextId, ...newExp }),
    });

    const newData = await addResponse.json();
    return newData.id; // Resolve the promise with the new ID
  } catch (error) {
    console.error("Error adding gesture:", error);
    throw error; // Reject the promise with the error
  }
}

// Refactor getAllGesturesEx to use async/await
async function getAllGesturesEx() {
  try {
    const response = await fetch(BASE_URL + "/newExperiment");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching gestures:", error);
    throw error;
  }
}

// Refactor deleteAllExperiments to use async/await
async function deleteAllExperiments() {
  try {
    const response = await fetch(BASE_URL + "/newExperiment");
    const experiments = await response.json();

    for (const experiment of experiments) {
      try {
        await fetch(BASE_URL + '/newExperiment/' + experiment.id, {
          method: 'DELETE'
        });
        console.log(`Experiment ${experiment.id} deleted successfully.`);
      } catch (error) {
        console.error(`Error deleting experiment ${experiment.id}:`, error);
      }
    }
  } catch (error) {
    console.error('Error fetching experiments:', error);
    throw error;
  }
}

// Refactor deleteExperiment to use async/await
async function deleteExperiment(experimentId) {
  try {
    const response = await fetch(BASE_URL + '/newExperiment/' + experimentId, {
      method: 'DELETE'
    });

    if (response.ok) {
      console.log(`Experiment ${experimentId} deleted successfully.`);
    } else {
      console.error(`Error deleting experiment ${experimentId}.`);
    }
  } catch (error) {
    console.error(`Error deleting experiment ${experimentId}:`, error);
    throw error;
  }
}

export { addGestureEx, getAllGesturesEx, deleteAllExperiments, deleteExperiment };
