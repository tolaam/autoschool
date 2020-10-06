function welcomeToSchool(name, years){
    const MIN_YEARS = 18;
    const TEACHER_NAME = 'А. С. Иванов';
    const SCHOOL_ADDRESS = 'Санкт-Петербург, ул. Пушкина, дом 23';

name;
    while(!(name  = prompt('Как вас зовут?')))
        alert('Вы не указали имя!');


years;
    while(!(years  = parseInt(prompt('Укажите ваш возраст'))))
            alert('Вы не указали возраст!');

if(years < MIN_YEARS){
    alert('Вам запрещено водить авто, вам должно быть '
    +MIN_YEARS+ ' лет или больше')
}

if(years >= MIN_YEARS){
alert('Добро пожаловать в автошколу, '+ name+
    '\n\nВаш преподаватель: ' +TEACHER_NAME +
    '\n\nЖдём вас по адресу: '+ SCHOOL_ADDRESS)
}
}

// Test run:
// welcomeToSchool('Александр');
// welcomeToSchool('', 15);
// welcomeToSchool();
// welcomeToSchool('Александр', 18);