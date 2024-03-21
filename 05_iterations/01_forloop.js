/*****************************************************************for loop ************************************ */
for (let i = 0; i <=10; i++) {
    console.log(i)
    
}

/**************************************************************************************************************** */
for (let i = 0; i <=10; i++) {
    const num=i;
    console.log(num)
    
}

/****************************************************************************** nested for ************************************/

for (let i = 0; i <=10; i++) {
    // console.log(`outer for ${i}`)
    for (let j = 0; j <=10; j++) {

        // console.log(`inner for ${j} and outer for ${i}`)
        console.log(i+ '*' + j+ "="+(i*j))
        
    }
    
}

/*************************************************************************** if in for loop**************/

for (let i = 0; i <=10; i++) {
    const element = i;
    if(i==7){
        console.log('MSD has arrived')
    }
    console.log(element)
    
    
}

/**************************************************************************** array in for loop **************************/

myArry=["Superman","flash","Batman"]
console.log(myArry.length)
for (let index = 0; index < myArry.length; index++) {
    const element=myArry[index]
    console.log(element)
    
}


/************************************************************************** Keywords   ***********************************/

 
//break and continue

for (let index = 0; index <= 20; index++) {
    if(index==7){
        console.log(`detected 7`)
        break
    }
     console.log(index)    
}


/****************************************************************************************************************************** */

for (let index = 0; index <= 20; index++) {
    if(index==7){
        console.log(`detected 7`)
        continue
    }
     console.log(`Value of i ${index}`)    
}

 