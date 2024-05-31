import ProfileReducer from "./profileReducer"

const MAKE_POST ="MAKE-POST"
const INPUT_CHANGE="INPUT-CHANGE"
const SEND_MASSEGE="SEND-MASSEGE"
const RERENDER_MASSEGES="RERENDER-MASSEGES"
let store={
        _Data:{
            ProfilePage:{
                newPostText:'hello',
                postProp:[
                    {name:'tolya', text:'hello'},
                    {name:'glasha', text:'hello, how are you'},
                    {name:'kiril', text:'fine'}
                ],
            },DioalogsPage:{
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
            },
            // NavBarPart:{
            //     friends:[
            //         {img:'../img/profileimages/profile1.png', name:'Tolya', id:1},
            //         {img:'../img/personIco.webp', name:'Galya', id:2},
            //         {img:'', name:'Kirill', id:3},
            //         {img:'', name:'Natashka', id:4}
            //     ]
            // }
    },

    dispatch(action){
        this._Data.ProfilePage=ProfileReducer(this._Data.ProfilePage, action)
        this.rendering(this._Data)
        if(action.type==='SEND-MASSEGE'){
            let id=4
            let newMassage={
                text:this._Data.DioalogsPage.newMassage, id:id,
            }
            id++
            this._Data.DioalogsPage.diologsNames.push(newMassage)
            this._Data.DioalogsPage.newMassage=''
            this.rendering(this._Data)
        }else if(action.type==='RERENDER-MASSEGES'){
            this._Data.DioalogsPage.newMassage=action.text
            this.rendering(this._Data)
        }
    },

    getState(){
        return this._Data
    },

    rendering(){
        console.log('это фейк!!!')
    },
    
    subscribe(watcher){
        this.rendering=watcher 
    },
    
}

export let actionCreator = ()=>{
    return{type:MAKE_POST}
}

export let actionCreatorRerender = (text)=>{
    return {type:INPUT_CHANGE, text:text}
}

export let actionCreatorSendMassege = ()=>{
    return {type:SEND_MASSEGE}
}

export let actionCreatorRerenderMassege = (text)=>{
    return {type:RERENDER_MASSEGES, text:text}
}
export default store


