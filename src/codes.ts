const codeCSV = `6CHI2;Recent vervangen houd ik ons huisje schoon. Ik woon achter een scharnierende klep
MXRRF;Tussen boven en beneden is een overloper soms de oplossing. Met grijs gezicht zag ik hoe mijn onderbuurman ooit een ledemaat verloor
D63QG;Niet alleen de echte wereld bevat antwoorden. Het wachtwoord van de desktop op een handheld. Een naam van 5 letters
Amren|Hulda|Lucia|Lydia|Dagny|Gerda|Ahlam|Athis|Njada|Skjor|Tilma;Niet met de wereld aan mijn voeten, maar aan de voet van de wereld lig ik.
FGMKB;Wat brengt je altijd vreugde, als zebra of pompoen?
1FQIZ;Ik heb opeens ongelofelijk zin in een bakje koffie...
TYP04;Achter een vliegende stad
W5CHJ;Aan jou gegeven bracht ik muziek in je leven
PMDJ1;Als je voor het eerst in Dunwall aankomt, van elk de eerste letter met wie je moet praten
GECSHJ|GECSJ|GESCHJ|GESCJ;Een ambachtelijke toevoeging van afgelopen jaar. In een donkere la wacht ik.
GVKTE;Ik verstop mij samen met een kromme schaar
WJ2YJ;Ik wacht trillend tot je komt
TD30K;Rood wit blauw beschermde Mees zijn hoofd
WX3NW;Een vies slot soms onder je billen beschermt mij
3L8LJ;Hier kusten wij voor het eerst (LAT,LONG, 3 cijfers achter de komma)
52.157,4.483;De kleinste van de drie word ik bijna nooit gebruikt. Maar ik voed je net zo graag als de rest
9E6CI;Het gereedschap van een prinses is varierend van een dolk tot een flintlock
3B6GK;Diep in de Dari woestijn begraven, onder lagen zand
IXRA3;Ik droeg je gewicht al tijdens het eerste kado
AAZYG;Een blije kers op het internet, wat een *concept*...
F2549;welke datum (dd-mm) is deze foto genomen?;hb.jpg
0F6XI;Op de noordpool is het koud plassen, maar worden bijna nooit spullen weggegooid
D2B7X;Van de noordpool naar de bron van alle warmte
D34NU;Een beroemde driehoek waar alles in kwijt raakt
7LNVU;Ik vertel je wat je niet wilt weten en vul deze formule van Newton aan: F = ? x a
Q7OC3;Hoe heet de plek waar deze foto is gemaakt?;sb1.jpg|sb2.jpg|sb3.jpg|sb4.jpg
WANNETAL;Ik krijg bijna een nicotineverslaving hier...
CD45A;Alle stroom komt samen op een bewegend oppervlak. Daar rust ik als laatste van de vijf
VXG7U;Met 5 van ons bijeen zet ons achter elkaar en ontvang je laatste kado
34BNA;In de dekenkist ligt je laatste kado <3
`;

export type PuzzleData = {
  code: RegExp;
  hint: string;
  urls: string[];
};

const lineToPuzzleData = (line: string) => {
  const parts = line.split(";");
  const regex = new RegExp(parts[0], "i");
  return {
    code: regex,
    hint: parts[1],
    urls: parts.length > 2 ? parts[2].split("|") : [],
  } as PuzzleData;
};

const lines = codeCSV.split("\n").filter((line) => line.length > 0);

export const puzzles = lines.map(lineToPuzzleData);
