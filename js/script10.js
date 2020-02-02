// Задание 10

let month,
    season,
    seasonName;

month = 1;

if(month == 12 || month <=2){
    season = 1;
} else if(month>2 && month<=5){
    season = 2;
} else if(month>5 && month<=8){
    season = 3;
}else{
    season = 4;
}

switch(season){
    case 1:
        seasonName = 'Зима';
    break;
    case 2:
        seasonName = 'Весна';
    break;
    case 3:
        seasonName = 'Лето';
    break;
    default:
        seasonName = 'Осень';
    break;
    
}
document.write(seasonName);
