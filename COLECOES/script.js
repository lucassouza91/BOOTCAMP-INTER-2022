function getAdmins(map){
    let admins = [];
    for([key, value] of map) {
        if(value ==='Admin'){
            admins.push(key);
        }
    }
return admins;
}
const usuarios = new Map();

usuarios.set('Lucas','Admin');
usuarios.set('Joao','Admin');
usuarios.set('Pedro','Admin');
usuarios.set('Alan','User');

console.log(getAdmins(usuarios));