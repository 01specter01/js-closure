/*Schreibe eine Closure, mit der es möglich ist, Zahlen auf eine bestimmte Anzahl an Nachkommastellen zu runden.
Die Anzahl soll über die outer function festgelegt werden können.
Die Zahl, die an die inner function übergeben wird, soll dann entsprechend gerundet werden.
Beispiele:
Funktion rundet auf 2 Nachkommastellen:
5.492858 => 5.49
12.7491313 => 12.75
Funktion rundet auf 4 Nachkommastellen:
5.492858 => 5.4929
12.7491313 => 12.7491
Aufgabe 2:
Schreibe eine Closure, die anhand eines Parameters entscheidet, welche Suchmaschine genutzt wird.
Beim Aufruf der inner function soll dann die passende URL zum Suchbegriff und der zuvor festgelegten Suchmaschine ausgegeben werden.
Verwende für die Wahl der Suchmaschine den Namen.
Beispiele für URLs:
Google: https://www.google.com/search?q=closures
DuckDuckGo: https://duckduckgo.com/?q=closures
Bing: https://www.bing.com/search?q=closures
*/
console.log("Aufgabe 1:");
const outerfunction = (num) => {
    const innerfunction = (numChange) => {
        console.log(`${numChange.toFixed(num)}`);
    };
    return innerfunction;
};
//Erste Aufgabe
let round2 = outerfunction(2);
round2(6237632.237323);
//Zweite Aufgabe
let round4 = outerfunction(4);
round4(6237632.237323);

console.log("-------------");
console.log("Aufgabe 2:");
const parentfunction = (urls) => {
    const childfunction = (urlDefault) => {
        console.log(urls + urlDefault);
    };
    return childfunction;
};
let googleSerch = parentfunction(`https://www.google.com/search?q=`);
let duckSerch = parentfunction(`https://duckduckgo.com/?q=`);
let bingSerch = parentfunction(`https://www.bing.com/search?q=`);

googleSerch(`closures`);
duckSerch(`closures`);
bingSerch(`closures`);
