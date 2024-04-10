const month=3
switch (month) {                        // We can use Switch to compare one value with number if different values.
    case 1:
        console.log('January')
        break;
    case 2:
        console.log('Feb')
        break;
    case 3:
        console.log('March')
        break;
    case 4:
        console.log('April')
        break;

    default:
        console.log('default case match')
        break;
}

/*    With using function                */


function knowMonth(num=4){        //num=4 default value
switch (num) {
    case 1:
        console.log("Jan")
        break;
    case 2:
        console.log("Feb")
        break;
    case 3:
        console.log("Mar")
        break;
    case 4:
        console.log("Apr")
        break;


    default:
        console.log("none of the above")
        break;
}
}
knowMonth(5)                         // output is none of the above.
