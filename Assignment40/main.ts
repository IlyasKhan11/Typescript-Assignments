function make_albums(artist_name:string,music_title:string,num_of_alnums:number=0):{artist_name:string,music_title:string}{
    let obj;
    
    if (num_of_alnums){
        obj={
            artist_name,
            music_title,
            num_of_alnums
        }    
    }
    else{
        obj={
            artist_name,
            music_title,
        }
    }
    

    return obj
}


console.log(make_albums('ketty perry','TOTO'));
console.log(make_albums('KKK','Good Music'))
console.log(make_albums('Honey SIngh','Indian Music',5));
