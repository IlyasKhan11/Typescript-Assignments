const current_users:string[]=['Ali','Mohsin','admin','Khatija','Ayesha','Musa'];
const new_users:string[]=['Ahmed','Hassan','Ali','MUSA','Mehmet']


let current_users_lowerCased=current_users.map((user)=>{
    return user.toLowerCase()
})


for (const user of new_users){
    if (current_users_lowerCased.includes(user.toLowerCase())){
        console.log('Username already in use, you will have to type a new username');
    }
    else{
        console.log('username is available');
    }
}