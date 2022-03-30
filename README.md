# Užduotis savarankiškam darbui


1. Sukurkite klasę Point. Klasė bus skirta darbui su tašku dvimatėje erdvėje.
2. Sukurkite konstruktorių su dviem parametrais: x ir y, padarykite kad jie būtų nematomi iš išorės (privatūs)
3. Sukurkite setter‘ius ir getter‘ius šiem abiem kintamiesiems
4. Sukurkite metodą distanceFromOrigin():number kuri grąžintų atstumą nuo koordinačių pradžios taško (0,0) iki taško saugomo objekte. Jis apskaičiuojamas ištraukus šaknį iš taško koordinačių pakeltų kvadratu sumos: sqrt(x^2+y^2).
5. Ištestuokite klasę sukurdami du objektus.
6. Sukurkite papildomą metodą translate(int dx, int dy):void kuris perstumtų tašką per dx ir dy vienetus (jei taškas buvo koordinatėse 5; 3 ir iškvietėme metodą su reikšmėmis 2;1 tuomet koordinatės turėtų tapti: 7;4
7. Sukurkite metodą toString kuris grąžintų taško vietą formatu [x;y]
8. Papildykite klasę metodu double distance(Point p) kuris grąžintų atstumą iki taško p nuo esamos taško. Taškas p paduodamas kaip kintamasis.
9. Ištestuokite naujai sukurtus metodus.
