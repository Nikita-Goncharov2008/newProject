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

    getState(){
        return this._Data
    },

    rendering(){
        console.log('это фейк!!!')
    },

    makePost(text){
        let newPosts={
            name:'User Name ',text:text
        }
        this._Data.ProfilePage.postProp.unshift(newPosts)
        this._Data.ProfilePage.newPostText=''
        this.rendering(this._Data)
        console.log(this._Data.ProfilePage.postProp)
    },
    
    sendMassege(text){
        let id=4
        let newMassage={
            text:text, id:id,
        }
        id++
        this._Data.DioalogsPage.diologsNames.push(newMassage)
        this._Data.DioalogsPage.newMassage=''
        this.rendering(this._Data)
    },
    
    rerenderUI(text){
        this._Data.ProfilePage.newPostText = text
        this.rendering(this._Data)
    },
    
    rerenderMasseges(text){
        this._Data.DioalogsPage.newMassage=text
        this.rendering(this._Data)
    },
    
    subscribe(watcher){
        this.rendering=watcher 
    },
    

    
}
export default store


