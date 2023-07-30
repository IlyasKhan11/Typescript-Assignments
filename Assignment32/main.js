var current_users = ['Ali', 'Mohsin', 'admin', 'Khatija', 'Ayesha', 'Musa'];
var new_users = ['Ahmed', 'Hassan', 'Ali', 'MUSA', 'Mehmet'];
var current_users_lowerCased = current_users.map(function (user) {
    return user.toLowerCase();
});
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var user = new_users_1[_i];
    if (current_users_lowerCased.includes(user.toLowerCase())) {
        console.log('Username already in use, you will have to type a new username');
    }
    else {
        console.log('username is available');
    }
}
