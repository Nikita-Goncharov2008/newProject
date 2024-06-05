const MAKE_POST ="MAKE-POST"
const INPUT_CHANGE="INPUT-CHANGE"
let obj = {
    newPostText:'hello',
                postProp:[
                    {name:'tolya', text:'hello'},
                    {name:'glasha', text:'hello, how are you'},
                    {name:'kiril', text:'fine'}
                ],
}
function ProfileReducer(state = obj, action){
    if(action.type===MAKE_POST){
        let newPosts={
            name:'User Name ',text:state.newPostText
        }
        state.postProp.unshift(newPosts)
        state.newPostText=''
        console.log(state.postProp)
    }else if(action.type===INPUT_CHANGE){
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