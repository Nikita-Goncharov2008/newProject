import {rendering} from '../render'
let Data={
    ProfilePage:{
        postProp:[
            {name:'tolya', text:'hello'},
            {name:'glasha', text:'hello, how are you'},
            {name:'kiril', text:'fine'}
        ],
    },DioalogsPage:{
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
    },
}
export let makePost = (text)=>{
    let newPosts={
        name:'User Name ',text:text
    }
    Data.ProfilePage.postProp.unshift(newPosts)
    rendering(Data)
    console.log(Data.ProfilePage.postProp)
}

export let sendMassege = (text)=>{
    let id=4
    let newMassage={
        text:text, id:id,
    }
    id++
    Data.DioalogsPage.diologsNames.push(newMassage)
    rendering(Data)
}

export default Data