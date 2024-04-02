// Generate random color

const RandomColor=function(){
    const hex= '123456789ABCDEF'
    let color='#'
    for(i=0;i<6;i++){
        color+=hex[Math.floor(Math.random()*16)]
    }
    return color;
};

console.log(RandomColor())
 
let intervalID;                            // Variable reference is taken outside the scope.(intervalID) 
let changeBgcolor = function(){document.querySelector('div').style.backgroundColor=RandomColor()}
const startChanging =function(){
    
    intervalID = setInterval(changeBgcolor,1000)      // Here variable is decleared
    console.log('start')

    
}
const stopChanging =function(){
    clearInterval(intervalID)
    intervalID=null;
    console.log('stop')
}
document.querySelector('#start').addEventListener('click',startChanging)


document.querySelector('#stop').addEventListener('click',stopChanging)