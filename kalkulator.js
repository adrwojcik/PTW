function licz() {
    var a = parseInt(document.getElementById("a").value); //zamienia łańcuch znaków na liczbę całkowitą
    var b = parseInt(document.getElementById("b").value);
    var dzialanie = document.getElementById("dzialanie").value; //value zdarzenie DOM, zbiór wartości
    var wynik;

    switch (dzialanie) {
        case '+': wynik = a + b; break;
        case '-': wynik = a - b; break;
        case '*': wynik = a * b; break;
        case '/': wynik = a / b; break;
    }
    document.getElementById("wynik").innerHTML = wynik; //innerHTML przechowuje zawartość html tworzący dany element 
}