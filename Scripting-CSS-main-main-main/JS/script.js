// let myEmail = "6000144@sae.edu.za";
// let password = "Gocheckthecode1234";
// let x = String(360 / 8);
// let num1 = 4;
// let num2 = 2;
// let quotient = num1 / num2;
// let quotientString = quotient.toString();

// const tempText = `Insert email/username and password: ${myEmail}, ${password}`;
// const gtaProtag = ["Michael","Trevor","Franklin"];

// gtaProtag.push("Lester","Lemar");

// console.log(tempText);
// console.log(gtaProtag);
// console.log(x);
// console.log(quotientString);

// function concatenateStrings(string1,string2)
// {
//     return string1 + string2;
// }

// const result = concatenateStrings('Crazy ', 'Frenzy')
// console.log(result);


//Activity 1

// function createGreeting2 (name) 
// {
//     return `Hello , ${name} !` ;
// }

// console.log(createGreeting2("Lucas")) ;

// // Activity 2

// number1  = 1;
// number2 = 2;

// function addAndPrint(number1 , number2 )
// {
//     let sum = number1 + number2;
//     console.log("The sum of" , number1, "and" , number2 , "is", sum) 
// }
// addAndPrint(5 , 10);

// //Activity 3

// multiplyFunction = (num3 , num4) => num3 * num4;
// console.log(multiplyFunction(3,4));

//act 1

// function modifyDiv()
// {
// const div = document.querySelector("div");
// div.style.height = "600px";
// div.style.backgroundColor = "pink";
// div.style.borderWidth = "50px"
// div.style.borderStyle = "dashed";
// div.style.borderColor = "#DFFF00"
// }

// modifyDiv();


// $( "#Press" ).on( "click", function() {
//     $( "#Press" ).trigger( "click" );
//   } );

  $( ".container" ).on( "click", function() {
    $('#dog').animate({
      left: "+=500px",
      height: "1000px",
      width: "1000px"
    }, 2000, function() {
    });
  });