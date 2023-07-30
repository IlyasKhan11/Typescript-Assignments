const Animals:string[]=['Lion','Tiger','Cat']

for (const animal of Animals){
    let randomNum=Math.round(Math.random()*2)

    if (randomNum===0){
        console.log(`${animal} is located in Africa and India`);
    }

    if (randomNum===1){
        console.log(`${animal} is very dangerous`);
    }

    if (randomNum===2){
        console.log(`${animal} is under threat of extinction`)
    }
}

console.log('all of these Animals are Carnivours');
