const ADD_TO_PROGRESS = "ADD_TO_PROGRESS";
const ADD_TO_DONE = "ADD_TO_DONE";

const initialState = {
  toDo: [
    {
      name: "Build a house",
    },
    {
      name: "Plant a tree",
    },
  ],
  inProgress: [
    {
      name: "Go to grocery",
      time: new Date(),
    },
  ],
  done: [
    {
      name: "Take out the trash",
      price: 5.15,
    },
    {
      name: "Walk the dog",
      price: 11.87,
    },
  ],
};

const toDoReducer = (state = initialState, action: { type: string, data: string }) => {
  switch (action.type) {
    case ADD_TO_PROGRESS:
      return {
        ...state,
        inProgress: [...state.inProgress, { name: action.data, time: new Date() }],
      };
    case ADD_TO_DONE:
      return {
        ...state,
        done: [...state.done, { name: action.data, price: 0 }],
      };
    default:
      return state;
  }
};

const addToProgress = (data: string) => ({
  type: ADD_TO_PROGRESS,
  data,
});

const addToDone = (data: string) => ({
  type: ADD_TO_DONE,
  data,
});

export default toDoReducer;

export {
  addToProgress,
  addToDone,
};
