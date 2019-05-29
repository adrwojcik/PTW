﻿var zdjecia = Array(
	Array('desktop/1.jpg', 'Miniaturki/2.jpg', '', ''),
	Array('desktop/2.jpg', 'Miniaturki/1.jpg', '', ''),
	Array('desktop/3.jpg', 'Miniaturki/3.jpg', '', ''),
	Array('desktop/4.jpg', 'Miniaturki/4.jpg', '', ''),
	Array('desktop/5.jpg', 'Miniaturki/5.jpg', '', ''),
	Array('desktop/6.jpg', 'Miniaturki/6.jpg', '', ''),
	Array('desktop/7.jpg', 'Miniaturki/7.jpg', '', ''),
	Array('desktop/8.jpg', 'Miniaturki/8.jpg', '', '')
);

var max_width = 845;

function laduj() {
    for (var i = 0; i < zdjecia.length; i++)
        document.getElementById('miniaturki').innerHTML += '<img src="' + zdjecia[i][1] + '" onclick="zmien(' + i + ')" />';
    //+= operator przypisania. x+=y znaczy x=x+y.
    //onClick - zdarzenie kliknięcia elementu. Dotyczy modelu DOM.
    //DOM zawiera zdarzenia. Występują one kiedy zachodzi interakcja ze stroną. np. onLoad, onClick.
    zmien(0); //innerHTML ustawia lub pobiera zbiór znaczników w elemencie
}

function zmien(id) {
    document.getElementById('zdjecie').innerHTML += '<div id="ladowanie"></div>';
    var custom = '';
    var preload = new Image(); //preload należy do DOM, preload powoduje rozpoczęcie ładowania danego pliku z obrazkiem.
    //onload występuję po załadowaniu elementu
    preload.onload = function () {
        if (preload.width > max_width)
            custom = ' style="height: ' + (Math.floor(max_width / (preload.width / preload.height))) + 'px;width:' + max_width + 'px;"';
        //zwraca największą liczbę całkowitą mniejszą od lub równą danej (), math zawiera stałe matematyczne (include)
        document.getElementById('zdjecie').innerHTML = '<img src="' + zdjecia[id][0] + '"' + custom + ' />';
    }
    preload.src = zdjecia[id][0];
}

window.onload = laduj; //wykonanie funkcji ładuj po załadowaniu okna ze stroną