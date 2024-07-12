//loops 
//types of loops
// for loop
// for of loop
// for in loop
// while loop
// do while loop

// let num = 0
// for (let i = 0 ; i <= 10 ; i++){
//     num++
//     console.log(num);
// }


// for (let a = 0 ; a < array.length ; a++){
//        console.log(array[a].trim());
//

// let array1:Array<string> = ["Mango","Banana","Orange","Grapes","Pear","Peach"]

// let value = true 
// while(value){
//     if (array1.includes("Grapes")){
//         console.log("I like Grapes");
//     }else{
//         console.log("I dont like Peach");
//     }
//     value = false
// }

// for (let a in array1){
//     console.log(`I like to eat ${array1[a]}`);
    
// }

// for (let a in array1){
//     console.log(a);
    
// }

// let array:Array<number>= [34,67,98,56,23,67]
// let statement = true

// while(statement){
//     array.map((item)=>{
//        if (item > 40) 
//     {
//     console.log("passed");
    
// }else{
//     console.log("failed");
//     statement = false
// }})}


// let numb:number[] = [5,4,3,1,4,6,7,9,8,14]
// let reminder = true
// while(reminder){
//         numb.map((item)=>{
//     if (item % 2 === 0){
//         console.log("Its a even number");
        
//     }else{
//         console.log("Its a odd number");
//     }
//     reminder = false
//         })}


        function evenodd(num:number[]){
            let result = true
            while(result){
                let even = 0
                for (let item = 0 ; item <= num.length; item++){
                    if(item % 2 === 0){
                        console.log("Its a even number");
                        
                    }else{
                        console.log("Its a odd number");
                        
                    }
                    even = num[item]
                }
                result = false
            }
        }

        evenodd([3,2,6,0,9,3,7,8,2,18])

        function check(num:number[]) {
            for(let i = 0 ; i <= num.length ; i++){
                if (num[i] > 40){
                    console.log("Passed");
                }else{
                    console.log("Failed");
                }
            }
        }

    check([34,89,78,35,76,54,46,90,12,56,87])
    let statement = true
    function lisence(age:number[]) {
        do{
         
            for (let i = 0 ; i <= age.length ; i++)
            if (age[i] > 18){
                console.log("Give lisence")
            }else{
                console.log("Under age");
            }
        }
        while(statement = false)
    }

    lisence([56,34,12,90,14,6,15,98,16,68])