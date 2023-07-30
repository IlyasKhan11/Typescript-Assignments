function make_albums(artist_name, music_title, num_of_alnums) {
    if (num_of_alnums === void 0) { num_of_alnums = 0; }
    var obj;
    if (num_of_alnums) {
        obj = {
            artist_name: artist_name,
            music_title: music_title,
            num_of_alnums: num_of_alnums
        };
    }
    else {
        obj = {
            artist_name: artist_name,
            music_title: music_title,
        };
    }
    return obj;
}
console.log(make_albums('ketty perry', 'TOTO'));
console.log(make_albums('KKK', 'Good Music'));
console.log(make_albums('Honey SIngh', 'Indian Music', 5));
