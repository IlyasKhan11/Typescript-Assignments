const usernames:string[]=[];


if (usernames.length===0){
    console.log('we need to find more users')
}
else{
    for (const user of usernames){
        if (user ==='admin'){
            console.log('Hello admin, would you like to see a status report?');
        }
        else{
            console.log(`Hello ${user}, thank you for logging in again.`);
            
        }
    }
}


