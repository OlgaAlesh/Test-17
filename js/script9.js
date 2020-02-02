// Задание 9

let name = prompt("Ваше имя","Alex"),
    login = prompt("Введите логин",""),
    pass = prompt("Ваш пароль","");

if(login == 'admin' && pass == 'nimda'){
alert("Добро пожаловать, " + name + "! Вы успешно вошли на сайт.");
} else {
alert(name + ", вы неверно ввели логин или пароль!");
}