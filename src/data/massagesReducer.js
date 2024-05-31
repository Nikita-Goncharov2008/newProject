const SEND_MASSEGE="SEND-MASSEGE"
const RERENDER_MASSEGES="RERENDER-MASSEGES"

let massagesReduser =(state, action)=>{
    if(action.type==='SEND-MASSEGE'){
        let id=4
        let newMassage={
            text:state.newMassage, id:id,
        }
        id++
        state.diologsNames.push(newMassage)
        state.newMassage=''
    }else if(action.type==='RERENDER-MASSEGES'){
        state.newMassage=action.text
    }
}

export let actionCreatorSendMassege = ()=>{
    return {type:SEND_MASSEGE}
}

export let actionCreatorRerenderMassege = (text)=>{
    return {type:RERENDER_MASSEGES, text:text}
}

export default massagesReduser