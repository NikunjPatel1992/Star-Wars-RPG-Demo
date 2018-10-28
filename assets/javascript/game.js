$(document).ready(function () {
    // alert("javascript")

    var obi = {
        nickName: 'obiwan',
        name: 'obi Wan',
        health: 100,
        attack: 8,
        image: '<img src="assets/image/one.jpg" class="image">'
    };
    var luke = {
        nickName: 'luke',
        name: 'Luke',
        health: 140,
        attack: 11,
        image: '<img src="assets/image/two.jpg" class="image">'
    };
    var darth = {
        nickName: 'darth',
        name: 'Darth',
        health: 160,
        attack: 4,
        image: '<img src="assets/image/thr.jpg" class="image">'
    };
    var maul = {
        nickName: 'maul',
        name: 'Darth Maul',
        health: 70,
        attack: 7,
        image: '<img src="assets/image/for.jpg" class="image">'
    };

    //array of character
    var charobj = [obi, luke, darth, maul]
    var characters = [];

    var $yourCharacter;
    var yourHealth;
    var yourAttack;
    var $currentEnemy;

    var currentEnemyHealth = 0;
    var currentEnemyAttack = 0;
    
    var isThereOpponent = false;

    //===========================================
    //function call
    function startgame() {
        createchar(charobj);
        pickYourCharacter();
        pickYourOpponent();
    }

    //function create character
    function createchar(arg) {

        if (arg.length === 4) {

            for (var i = 0; i < arg.length; i++) {

                //add value in html
                var $character = $('<div id=' + arg[i].nickName + '>');
                $character.append('<div class="characterName">' + arg[i].name);
                $character.append(arg[i].image);
                $character.append('<div class="characterHealth">' + arg[i].health);
                $character.attr('data_nickName', arg[i].nickName);
                $character.attr("data_name", arg[i].name);
                $character.attr('data_attack', arg[i].attack);
                $character.attr('data_health', arg[i].health);
                $character.attr('class', 'character col-md-3');

                //create an array
                characters.push(arg[i].nickName);
                //out put append 
                $('#character').append($character);
            }
        }
        else if (arg.length <= 3) {
            $('#remaining').empty()
            characters = [];

            $('#remaining').append('<h4 class="title">Remaining Enemies</h4>')
            for (var i = 0; i < arg.length; i++) {
                //add value in html
                var $character = $('<div id=' + arg[i].nickName + '>');
                $character.append('<div class="characterName">' + arg[i].name);
                $character.append(arg[i].image);
                $character.append('<div class="characterHealth">' + arg[i].health);

                $character.attr('data_nickName', arg[i].nickName);
                $character.attr("data_name", arg[i].name);
                $character.attr('data_attack', arg[i].attack);
                $character.attr('data_health', arg[i].health);
                $character.attr('class', 'enemy character col-md-3 ');

                //create an array
                characters.push(arg[i].nickName);

                //out put append 
                $('#remaining').append($character);
            }
        }

    }

    function pickYourCharacter() {

        // on click event
        $('.character').on('click', function () {
            //html in class value empty 
            $('#character').empty();
            //title your character
            $('#character').append('<h4>Your Character</h4>')

            //which character click 
            $yourCharacter = $(this);

            $yourCharacter.addClass('yourCharacter');
            $yourCharacter.removeClass('col-md-12 character');

            yourHealth = parseInt($yourCharacter.attr('style="text-align: center" data_health'));
            yourAttack = parseInt($yourCharacter.attr('data_attack'));

            $('#character').append($yourCharacter);

            $('#remaining').append('<div class="title">Pick Your Enemy</div>');

            // remove the chosen character and then run the createCharacters function again to recreate the 'enemies'
            var indexRemove = characters.indexOf($yourCharacter.attr('data_nickName'))
            charobj.splice(indexRemove, 1);

            // call createCharacters function again, but this time there are only 3
            createchar(charobj);

        });
    };

    startgame();
});
