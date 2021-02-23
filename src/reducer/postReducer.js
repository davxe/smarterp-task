const postInitialState=[]
const postReducer=(state=postInitialState,action)=>{
    switch(action.type){
        case 'ADD_POST_DATA':{
            return [...state,action.payload]
        }
        default:{
            return [...state]
        }
    }
}
export default postReducer