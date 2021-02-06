const ADD_TO_PROGRESS = "ADD_TO_PROGRESS";
const ADD_TO_DONE = "ADD_TO_DONE";

const initialState = {
  toDo: [
    {
      title: "Build a house",
    },
    {
      title: "Plant a tree",
    },
  ],
  inProgress: [
    {
      title: "Go to grocery",
      time: new Date(),
    },
  ],
  done: [
    {
      title: "Take out the trash",
      price: 5.15,
    },
    {
      title: "Walk the dog",
      price: 11.87,
    },
  ],
};

const toDoReducer = (state = initialState, action: { type: string, data: string }) => {
  switch (action.type) {
    case ADD_TO_PROGRESS:
      return {
        ...state,
        inProgress: [...state.inProgress, { title: action.data, time: new Date() }],
      };
    case ADD_TO_DONE:
      return {
        ...state,
        done: [...state.done, { title: action.data, price: 0 }],
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
