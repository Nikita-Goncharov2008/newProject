let Data={
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
}
export let makePost = (text)=>{
    let newPosts={
        name:'User Name ',text:text
    }
    Data.ProfilePage.postProp.unshift(newPosts)
    Data.ProfilePage.newPostText=''
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
    Data.DioalogsPage.newMassage=''
    rendering(Data)
}

export let rerenderUI=(text)=>{
    Data.ProfilePage.newPostText = text
    rendering(Data)
}

export let rerenderMasseges = (text) =>{
    Data.DioalogsPage.newMassage=text
    rendering(Data)
}

export let subscribe=(watcher)=>{
    rendering=watcher 
}

export let rendering= ()=>{
    console.log('это фейк!!!')
}

export default Data