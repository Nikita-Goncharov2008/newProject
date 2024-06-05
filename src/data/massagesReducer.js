const SEND_MASSEGE="SEND-MASSEGE"
const RERENDER_MASSEGES="RERENDER-MASSEGES"
let obj1 = {
    newMassage:'make new',
        chatNames:[
            {name:'Ilon Mask', id:1},
            {name:'Donald Tramp', id:2},
            {name:'Bill Geyts', id:3},
        ],
        diologsNames:[
            {text:'Привет, как дела?', id:1},
            {text:'Го завтра на марс?', id:2},
            {text:'Жду мой чип', id:3}
        ]
}

let massagesReduser = (state = obj1, action)=>{
    if(action.type===SEND_MASSEGE){
        let id=4
        let newMassege={
            text:state.newMassage, id:id,
        }
        id++
        state.diologsNames.push(newMassege)
        state.newMassage=''
    }else if(action.type===RERENDER_MASSEGES){
        state.newMassage=action.text
    }
    console.log(action)
    return state


}

export let actionCreatorSendMassege = ()=>{
    return {type:SEND_MASSEGE}
}

export let actionCreatorRerenderMassege = (text)=>{
    return {type:RERENDER_MASSEGES, text:text}
}

export default massagesReduser