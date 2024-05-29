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
        },NavBarPart:{
            friends:[
                {img:'../img/profileimages/profile1.png', name:'Tolya', id:1},
                {img:'../img/personIco.webp', name:'Galya', id:2},
                {img:'', name:'Kirill', id:3},
                {img:'', name:'Natashka', id:4}
            ]
        }
    },

    dispatch(action){
        if(action.type==='MAKE-POST'){
            let newPosts={
                name:'User Name ',text:this._Data.ProfilePage.newPostText
            }
            this._Data.ProfilePage.postProp.unshift(newPosts)
            this._Data.ProfilePage.newPostText=''
            this.rendering(this._Data)
            console.log(this._Data.ProfilePage.postProp)
        }else if(action.type==='INPUT-CHANGE'){
            this._Data.ProfilePage.newPostText = action.text
            this.rendering(this._Data)
        }else if(action.type==='SEND-MASSEGE'){
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
export default store


