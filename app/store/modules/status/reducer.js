// import nodeConsole from 'console';
export default function (state = [], action) {
  switch (action.type) {
    case "UPDATE_STATUS":
      const newArray = [...state, action.status.message] 
      return newArray.filter((item, index) => {
        return newArray.indexOf(item) === index
      })

    case "CLEAR_STATUS": 
      return [];
    case "REMOVE_PREVIEW": 
      return state.filter(item => {
        return item !== 'live!'
      })
    default: 
      return state;
  }
}