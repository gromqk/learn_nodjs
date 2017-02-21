function User(name) {
    this.name = name;
}

User.prototype.hello = function (who) {
    console.log("Приветvf, " + who.name);
}

var vasia = new User("Вася");
var petya = new User("Петя");

vasia.hello(petya);