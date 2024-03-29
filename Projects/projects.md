# Projects related to DOM

# Project 1
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

# Project 2
## BMI Calculator

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BMI Calculator</title>
    <link rel="stylesheet" href="./p2.css">
</head>
<body>
    <div>
        <form action="">
            <p><label for="Height">Height in CM:</label>
            <input type="text" id="Height"></p>
            <p><label for="Weight">Weight in KG:</label>
            <input type="text" id="Weight"></p>
            <button>Calculate</button>
            <div id="result"></div>
            <div id='Guide'></div>
            <div>
                <h3>BMI weight Guide</h3>
                <p>Under Weight =Less than 18.6</p>
                <p>Normal Weight = 19 - 24</p>
                <p>Over Weight = above 25</p>
            </div>
        </form>
    </div>
</body>
<script src="./pro2.js"></script>
</html>
```
```javascript
const form = document.querySelector('form')


form.addEventListener('submit',function(e){
    console.log(e)
    e.preventDefault();

    const Height = parseInt(document.querySelector('#Height').value);
    const Weight = parseInt(document.querySelector('#Weight').value);
    const result = document.querySelector('#result')

    if(Height === '' || Height <=0 || isNaN(Height)){
        result.innerHTML=`Please enter a valid Height ${Height}`
    }
    else if(Weight===''||Weight<=0||isNaN(Weight)){
        result.innerHTML=`Please enter a valid Weight ${Weight}`

    }
    else {
        const bmi =(Weight/(Height*Height)*10000).toFixed(2)
        result.innerHTML=`<span>${bmi}</span>`;
    }

})

```



# Project 3
##