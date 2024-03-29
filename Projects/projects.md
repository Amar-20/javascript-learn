# Projects related to DOM

## Project 1
## Color Changer Switch

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Color Changer</title>
    <link rel="stylesheet" href="./p1.css">
</head>
<body>
    <div class="canvas">
        <nav>
            <a href="#">Home</a>
            <a href="https://www.youtube.com/@chaiaurcode" target="_blank">YouTube</a>
        </nav>
        <h1>Color changer switch</h1>

        <span class="button" id="grey"></span>
        <span class="button" id="white"></span>
        <span class="button" id="green"></span>
        <span class="button" id="blue"></span>
        <h2>Try clicking on the colors above to <span>the background of the page!</span></h2>
    </div>
    <script src ="./pro1.js"></script>
    
</body>
</html>

```
```CSS
nav{
    border-bottom: 2px solid black;
    padding-bottom: 10px;
    gap: 3px;
    display: flex;
    flex-wrap: wrap;
    justify-content:center;
    align-items:center;
    background-color: blanchedalmond;
}
nav a{
    border: 2px solid black;
    border-radius: 5px;
    padding: 5px;
    color: #212121;
    width:9rem;
    text-align: center;
    
}
.button{
    display: inline-block;
    border: 2px solid black;
    width: 100px;
    height: 100px;
    
}
.canvas{
    margin:auto;
    text-align: center;

}
#grey{
    background-color: grey;
}
#white{
    background-color: white;
}
#green{
    background-color: green;
}
#blue{
    background-color: blue;
}
```

```javascript
const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach(function(button){
    console.log(button)
    button.addEventListener('click',function(e){
        console.log(e)
        console.log(e.target)
        if(e.target.id==='grey'){
            body.style.backgroundColor=e.target.id
        }
        if(e.target.id==='white'){
            body.style.backgroundColor=e.target.id
        }
        if(e.target.id==='green'){
            body.style.backgroundColor=e.target.id
        }
        if(e.target.id==='blue'){
            body.style.backgroundColor=e.target.id

        }
        
    })
})
```