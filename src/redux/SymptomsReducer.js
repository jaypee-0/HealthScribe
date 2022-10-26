const GET_SYMPTOMS = "SYMPTOMS/GET_SYMPTOMS";
const ADD_SYMPTOM = "SYMPTOMS/ADD_SYMPTOMS";

const defaultState = [];

const loadSymptoms = (json) => ({
  type: GET_SYMPTOMS,
  json,
});

function addSymptom(payload) {
  return {
    type: ADD_SYMPTOM,
    payload,
  };
}

const getSymptoms = () => (dispatch) => {
  fetch("http://localhost:3000/users/symptoms")
    .then((response) => response.json())
    .then((json) => dispatch(loadSymptoms(json)));
};

const symptomReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_SYMPTOMS:
      return action.json.map((symptom) => {
        const { id, name, date, time, intensity, comment } = symptom;
        return {
          id,
          name,
          date,
          time,
          intensity,
          comment,
        };
      });
    case ADD_SYMPTOM:
      return state.concat({
        name: action.payload.name,
        comment: action.payload.comment,
        Date: action.payload.Date,
        time: action.payload.time,
        intensity: payload.intensity,
      });
    default:
      return state;
  }
};

const addSymptom = (formState) => {
  fetch("/users/symptoms", {
    method: "POST",
    "Content-Type": "application/json",
    body: JSON.stringify(formState),
  });
};
export { symptomReducer, getSymptoms, addSymptom };