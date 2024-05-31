const MAKE_POST ="MAKE-POST"
const INPUT_CHANGE="INPUT-CHANGE"

function ProfileReducer(state, action){
    if(action.type==='MAKE-POST'){
        let newPosts={
            name:'User Name ',text:state.newPostText
        }
        state.postProp.unshift(newPosts)
        state.newPostText=''
        console.log(state.postProp)
    }else if(action.type==='INPUT-CHANGE'){
        state.newPostText = action.text
    }

    return state
}

export let actionCreator = ()=>{
    return{type:MAKE_POST}
}

export let actionCreatorRerender = (text)=>{
    return {type:INPUT_CHANGE, text:text}
}

export default ProfileReducer