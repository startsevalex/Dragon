var xp=10;
var power=1;
var dragon_xp=10;
var game=1;

console.log('Ваша цель - сокрушить дракона и найти принцессу. Как обычно.')

while (game) {
    console.log('');
    console.log('Здоровье: '+xp+'           Дракон: '+dragon_xp);
    console.log('Силы: '+power);
    console.log('');

    var user=prompt('Куда идти?');
    switch (user) {
        case '4':
            var plus_xp=Math.floor(Math.random()*5);
            xp=xp+plus_xp;
            dragon_xp=dragon_xp+Math.floor(Math.random()*5);
            console.log('Вы пошли налево и нашли элексир здоровья (+'+plus_xp+' xp)');
            break;

        case '8':
            var fight=confirm('Вы пошли прямо и встретили дракона. Сразитесь?');
            if (fight) {
                dragon_hit=Math.floor(Math.random()*10);
                console.log('Удар дракона: '+dragon_hit);
                hit=Math.floor(Math.random()*10*power);
                console.log('Ваш удар: '+hit);
                if (hit>dragon_hit) {
                    var crash=hit-dragon_hit
                    dragon_xp=dragon_xp-crash;
                    console.log('Дракон теряет '+crash+' xp');
                }
                else if (dragon_hit>hit) {
                    var crash=dragon_hit-hit;
                    xp=xp-crash;
                    console.log('Вы теряете '+crash+' xp')
                  }
                else {
                    console.log('Бой завершился ничьей. Попробуй снова.')
                }
                var power=1;
                if (dragon_xp<=0 || xp<=0) {
                    game=0;
                }
            }
            else if (fight===false) {
                console.log('Вы позорно убежали, но еще не все потеряно!')
                var power=1;
            }
            break;

        case '6':
            var plus_power=Math.random()
            power=1+plus_power;
            dragon_xp=dragon_xp+Math.floor(Math.random()*10);
            console.log('Вы пошли направо и нашли новый меч (+'+plus_power+' к силам)');
            break;

        default:
            console.log('Выход');
            game=0;

    }
}

if (xp>0 && dragon_xp<=0) {
    console.log('');
    console.log('Здоровье: '+xp+'           Дракон: '+dragon_xp);
    console.log('Силы: '+power);
    console.log('');
    console.log('Вы сокрушили дракона и спасли принцессу!')
}
else if (dragon_xp>0 && xp<=0) {
    console.log('');
    console.log('Здоровье: '+xp+'           Дракон: '+dragon_xp);
    console.log('Силы: '+power);
    console.log('');
    console.log('Вы героически погибли в схватке с драконом...')
}
else {
    console.log('...')
}
