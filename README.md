# Live Code & Syntax (delete me)
https://www.markdownguide.org/basic-syntax/
https://markdownlivepreview.com/

# Entwickler
* Alexander (Weltkarte für Institutionsbeziehungen)
* Joel Heuer (Choroplethen-Deutschlandkarte + Radar-Diagramm)

# Allgemeines
Diese Visualisierung umfasst zwei Teilvisualisierungen. 

1. Globale Karte zur Visualisierung von Institutionsbeziehungen
2. Choroplethen eines Staates und einem dazugehörigen Radar-Diagramm zur Visualisierung der Forschungssituation in diesem Staat und seiner Bundesländer (aufgrund von Zeitmangel wurde nur Deutschland technisch umgesetzt) 

Sollten entsprechende Datensätze vorliegen (u. a. BIP von Staaten und deren Bundesländer, ähnliche Daten wie GEPRIS-Datensatz), skaliert die Visualisierung  entsprechend. 

### Screencast
Um die Visualisierung und deren Funktionsumfang besser zu verstehen, wurde ein Screencast bereitgestellt. Damit sollen der schnellere Einstieg in die Bedienung der Visualisierung unterstützt werden.

### Quellen
  * Visualisierung für Institutionsbeziehungen
  * Teilvisualisierung für Staatenansicht (Deutschland)
    * CSV-Dateien: 
        * [Geo-JSON-Repository](https://github.com/isellsoap/deutschlandGeoJSON) bzw. [Geo-JSON-File](https://raw.githubusercontent.com/isellsoap/deutschlandGeoJSON/master/2_bundeslaender/3_mittel.geojson)
        * [Bruttoinlandsprodukt von Deutschland](https://www.govdata.de/web/guest/suchen/-/details/vgr-der-lander-entstehungsrechnung-bruttoinlandsproduktzu-marktpreisen-nominal-bundeslander-jah) bzw. [hier](https://www.govdata.de/web/guest/suchen/-/searchresult/q/Bruttoinlandsprodukt+Bundesl%C3%A4nder/s/relevance_desc), bzw. [hier](https://www.govdata.de/web/guest/suchen/) 

        * [Postleitzahlen und deutsche Kreise, die einem Bundesland zugeordnet werden](https://www.datendieter.de/item/Postleitzahlen_Liste_Deutschland)
    * D3-Projekte: 
         * [Deutschlandkarte](http://bl.ocks.org/oscar6echo/4423770)
         * [Radar-Diagramm](https://gist.github.com/nbremer/21746a9668ffdf6d8242#file-radarchart-js)

# Zweck
* Mithilfe der Weltkarte soll die Visualisierung einen interaktiven Überblick zu globalen Institutionsbeziehungen geben. Fragen wie "Mit welchen in- und ausländischen Instituten hat Institut XY zusammengearbeitet?" können beantwortet werden.

* Mithilfe der Choroplethenkarte für Deutschland und dem dazugehörigen Radar-Diagramm erhält man nähere Informationen zu diesem Staat und seinen Bundesländern, z. B. Bruttoinlandsprodukt (BIP), #Projekte oder #Institute. Viele dieser Kategorien sind nach review-boards filterbar. Diese Visualisierung kann unabhängig von der Visualisierung für Institutionsbeziehungen Fragen wie "Was ist das Bundesland, welches am meisten Informatikprojekte finanziert hat?" beantworten.

* Beide Teilvisualisierungen ergänzen sich. In Kombination bieten sie eine ideale Hilfestellung zur Hypothesenbildung durch Analyse der globalen und lokalen Forschungssituation. 
Zum Beispiel ist es Nutzern der Visualisierung möglich, Hypothesen aufstellen, welche Kriterien für eine ausgewählte Institution relevant sein können (z. B. hohes BIP, hohe #Forscher im Staat/Bundesland), um eine Kooperation mit in- oder ausländischen Institutionen einzugehen.


# Designprinzipien (nach Munzner)
Im Folgenden werden die *four nested levels of visualization design* von Tamara Munzner auf die von uns bereitgestellte Visualisierung bezogen.

Unsere (Gesamt-)Visualisierung besteht aus zwei unabhängigen, sich aber ergänzenden Teilvisualisierungen. Somit kann man alle vier Level von Munzner jeweils auf die

1. **Gesamtvisualisierung** 
2. **Teilvisualisierung für Instutiuonsbeziehungen**
3. **Teilvisualisierung für Staatenansicht (Deutschland)**

beziehen.

### Level 1 - Domain Situation
1. **Gesamtvisualisierung** 
  * Forscher und Studenten ... 
    * die sich für die möglichen Faktoren von Kooperationen zwischen Institutionen interessieren, um damit Forschung zu betreiben. Fragen wie "Erhöht ein hohes BIP eines Staates die Chance auf ausländische Forschungskooperation?" können beantwortet werden.
    * die sich für die Forschungssituation in einem bestimmten Staat interessieren (bislang nur Deutschland). Fragen unabhängig von den Institutionsbeziehungen können beantwortet werden.

  * Institutionen ...
    * die ihre internationale und lokale Zusammenarbeit mit anderen Institutionen visualisiert haben möchten. Diese könnten sich fragen, ob sie mehr Forschung mit aus- oder inländischen Partnern zusammenarbeiten.
    * die, bevor sie Kooperationen mit ausländischen Institutionen eingehen, die Forschungs- und Wirtschaftssituation der jeweiligen Staaten/Bundesländer prüfen wollen. Somit können sich Institutionen und Sponsore vergewissern, ob der Kandidat zur Kooperation gute Bedingungen für die Zusammenarbeit erfüllt.
  * Staaten und Bundesländer ...
    * die ihren eigenen Stand in der internationalen und lokalen Forschungssituation analysieren möchten. Anhand der Erkenntnisse könnten diese Staaten den Behörden auf neue Zielsetzungen hinweisen, z. B. verstärkte inländische Zusammenarbeit oder Ausbau von bestimmten review-boards.


2. **Teilvisualisierung für Instutiuonsbeziehungen**
3. **Teilvisualisierung für Staatenansicht (Deutschland)**
  * Studenten und Forscher, die ...
    * eine wissenschaftliche Karriere anstreben und überprüfen wollen in welchem Bundesland viele Institute für ihre Fachrichtungen/Spezialisierung existieren (z. B. „Welches ist das Bundesland mit dem höchsten Auftreten von Instituten bei Linguistik-Projekten?“). 
    * die durchschnittliche Finanzierungsdauer von Projekten in ausgewählten review-boards vergleichen möchten, um die Visualisierung als unterstützende Funktion bei der Auswahl von Universitäten zu nutzen.     
    * die Forschungssituation in Deutschland analysieren wollen und dabei Faktoren wie das BIP berücksichtigen, um z. B. damit weitere Forschung betreiben zu wollen.

  * Sponsoren und Staatliche Behörden (Universitäten), die ...
    * aufgrund des geringen Auftretens von Projekten in einem Fachbereich, Finanzierungen bereitstellen, damit dieser Mangel behoben wird (z.B. keine Theologie-Projekte in Schleswig-Holstein).
    * aufgrund der hohen Nachfrage spezieller review-boards eine stärkende Finanzierung vornehmen und den Ausbau an Studienplätzen in diesem Fachbereichen erhöhen. 

### Level 2 - Abstraction

##### Task Abstraction
1. **Gesamtvisualisierung** 
  * High-Level - Analyze
    * **Konsumieren (Discover)**
        * Nutzer der Visualisierung können durch die diversen Interaktions- und Filtermöglichkeiten beider Teilvisualisierungen Informationen gewinnen, miteinander in Verbindung setzen und daraus z. B. Hypothesen bilden.

  * Mid-Level - Search
    * **Look-Up**
        * Per Dropdown-Auswahl oder Eingabe kann eine spezifische Institution ausgewählt werden. Nähere Informationen werden hierzu angezeigt (kooperierte Institutionen, Adresse, ...)
        * In der Nahansicht von Staaten (bisher nur Deutschland) kann per Klick ein bestimmtes Bundesland ausgewählt werden. Dazu werden nähere Informationen im Radar-Diagramm und der nebenstehenden Tabelle für absolute Daten angezeigt. 

 
2. **Teilvisualisierung für Instutiuonsbeziehungen**
3. **Teilvisualisierung für Staatenansicht (Deutschland)**

  * High Level - Analyze
    * **Konsumieren (Discover)**: Zusammenhänge zwischen Kategorien (z. B. BIP und #Projekte) in Bundesländern und ganz Deutschland erkennen.
        * Durch verschiedene Filterung und die Färbung in der Choropleth-Map kann man die Eigenschaften der Bundesländer neu entdecken. Somit erfährt man z. B. umgehend welches Bundesland in Deutschland für Informatikprojekte die meisten Institute ausweist oder welches Bundesland die höchste durchschnittliche Finanzierungsdauer für Theologieprojekte bereitstellt. Neben dieser Information bietet die Tabelle für absolute Daten noch genauere Informationen zu jenem Bundesland und allen Kategorien an.

    * **Präsentieren**: Erkenntnisse zu Bundesländern/Deutschland/review-boards Dritten vorstellen
        * (Un)gefilterte Daten können Dritten je nach Schwerpunkt vorgestellt werden, z. B. Vergleich zwischen Bundesländern, Kategorien oder Filterungen. Die Interaktivität im Interface bietet in Kombinationen mit den Visualisierungen und Tabellen genügend Spielraum. Animationen tragen zum Verständnis bei.

  * Mid-Level - Search
    * **Look-Up**: Informationen zu einem ausgewählten/angeklickten Bundesland erhalten
        * Choroplethen-Deutschlandkarte ist anklickbar. Klickt man auf ein Bundesland, wird an dieses herangezoomt. Das Radar-Diagramm und die Tabelle für absolute Daten reagieren auf das Klickevent* Radar-Diagramm visualisiert die Level des Bundeslands in verschiedenen Kategorien im Vergleich zu anderen Bundesländern an. 
        * Tabelle zeigt die absoluten Daten des ausgewählten Bundeslands an.

    * **Locate**: Finden eines Bundeslands das in einer Kategorie und/oder Filterung im Vergleich zu anderen Bundesländern am besten abschneidet
        * Mithilfe von Filterung und der Farblegende der Choroplethenkarte besteht die Möglichkeit auf Anhieb das am geringsten/stärksten betroffene Bundesland bezüglich der Häufigkeit einer Kategorie (BIP, #Projekte, ..) zu lokalisieren.

  *  Low-Level - Query 
    * **Vergleich**: Bundesländer, Kategorien (BIP, #Institute, …) und review-boards können verglichen werden
        * Durch den Filter im Interface betrachtet der Algorithmus gezielt nur das wünschenswerte review-board (Informatik, Mathematik, Alle, …). Dadurch sind Filterungen wie „Anzahl von Informatik im review-board Informatik in Berlin“ möglich.
        * Anhand eines ausgewählten Bundeslandes können Kategorien auf dem Radar-Diagramm schnell verglichen werden. 
        * Anhand einer ausgewählten Kategorie können Bundesländer auf der Choropleth-Map schnell verglichen werden. 



##### Data Abstraction
1. **Gesamtvisualisierung**  
  An dieser Stelle wird zum Abschnitt *Data Abstraction* der beiden Teilvisualisierung verlinkt.

2. **Teilvisualisierung für Instutiuonsbeziehungen**
3. **Teilvisualisierung für Staatenansicht (Deutschland)**

  * Datentypen:
    * GEPRIS-Datenquelle: Bis auf die zwei numerischen Daten (ratio) funding_start_year und funding_end_year sind alle Daten nominaler Natur, z. B. Namen und Adressen.
    * Externe Datenquellen zum BIP (Deutschland)
        * Bundeslandnamen: nominal (kategorisch)
        * Jahreszahlen und BIP: intervall (numerisch) 
        * Anzahlen von Projekten/Instituten: ratio (numerisch)

    * Externe Datenquelle zu Postleitzahlen und Kreisen in allen Bundesländern: 
        * Bundesland- und Kreisnamen: nominal (kategorisch)
        * Postleitzahlen: numerisch (ratio)
  * Data-Set-Types
    * Tabellen
        * Auswahl des Bundeslandes per Buttons: Ein Name eines Bundeslandes, der zugehörige Radiobutton für die Fokussierung des Bundeslandes auf der Deutschlandkarte und eine Checkbox als Vergleichswert im Radar-Diagramm bilden eine Zeile in der Tabelle. Somit sind zwei Filter (Radiobutton & Checkbox) kompakt zusammengefasst und man kann das Bundesland zuordnen.
        * Absolute Daten für ein Bundesland werden tabellarisch angeordnet, sodass man jene Werte mit den Vergleichswerten (Maximum) verständlich nebeneinander hat. 

    * Geometrie
        * Die gesamte Deutschlandkarte ist durch die Formen der einzelnen Bundesländer ein Objekt. Wir entschieden uns für eine Karte, um unserer Zielgruppe das Verständnis zu erleichtern und so Tasks wie LookUp zu vereinfachen. 

##### Aggregation and filtering of data
1. **Gesamtvisualisierung** 

 An dieser Stelle wird zum Abschnitt *Aggregation of data* der beiden Teilvisualisierung verlinkt.

2. **Teilvisualisierung für Instutiuonsbeziehungen**
3. **Teilvisualisierung für Staatenansicht (Deutschland)**

 Unten aufgelistete CSV- und externe Dateien wurden sowohl zusammengefasst als auch gefiltert, um komprimierte CSV-Dateien zu erstellen. Die erste Filterung sortierte alle Daten mit einer Adresse aus, die sich nicht in Deutschland befindet. Ausgehend von den übrigen Daten wurde weiter gefiltert: Alle Projekte, die keinen Informatik-, Psychologie-, Sprachwissenschaften-, Mathematik- oder Theologiebezug aufwiesen, wurden entfernt. 
  * genutzte CSV-Dateien aus GEPRIS-Datensatz
    * extracted institution data.csv   
    * projects listed on institution detail pages.csv
    * extracted project data.csv
    * project ids to subject areas.csv
    * subject areas.csv

  * externen CSV-Dateien
    * Bruttoinlandsprodukt für deutsche Bundesländer 
    * Postleitzahlen und deutsche Kreise, die einem Bundesland zugeordnet werden

  * daraus erstellte CSV-Dateien
    * EXPORT D3 all.csv 
    * EXPORT D3 compressed percentage.csv

    Allen voran *EXPORT D3 compressed percentage.csv* wird für die Visualisierungen genutzt. Diese Datei enthält 16 Bundesländer x 5 review-boards Zeilen. Jede Zeile speichert neben dem Bundesland und der review-board auch relative und absolute numerische Daten für z. B. Projekte, Institute, durchschnittliche Finanzierungsdauer. Genau jener Aufbau der CSV-Datei erspart dem JavaScript-Algorithmus viel Rechenarbeit. Dieser kann nämlich auf Interaktionen in den Visualisierungen mit Indexverschiebungen reagieren und die gewünschten Werte preisgeben.


### Level 3 - Idiom 
1. **Gesamtvisualisierung** 
  
 An dieser Stelle wird zum Abschnitt *Idiom* der beiden Teilvisualisierungen verlinkt. 
  * In der Teilvisualisierung für Institutionsbeziehungen wurde unter der Weltkarte eine Information zum Doppelklick-Event eingefügt. Diese soll die Visualisierungsnutzer darauf hinweisen, dass in der Visualisierung **overview-detail** angewandt wird. Somit können Nutzer von der Übersicht (Weltkarte) beim Doppelklick auf einen Staat in das Detail wechseln (Choroplethenkarte). Bislang wurde allerdings nur Deutschland als Detailansicht integriert.

2. **Teilvisualisierung für Instutiuonsbeziehungen**
3. **Teilvisualisierung für Staatenansicht (Deutschland)**

 Die ganze Teilvisualisierung wurde als ein **Dashboard** umgesetzt, sodass alle Komponenten (Filter, Karte, Radar, Tabellen) auf einen Blick erfassbar sind. Das ist insofern sinnvoll, weil sich durch die Interaktionen viele Komponenten auf mehreren visuellen Kanälen und auch inhaltlich ändern. Durch das kompakte Layout müssen Anwender nicht scrollen und können die Veränderungen besser nachvollziehen.

  * **Interaktionstypen** 
     * Filter - Nutzer können nach Kategorie (BIP, Projekte, Institute, Finanzierungsdauer, Forscher) und review-board (Informatik, Mathematik, ...) filtern.

     *Warum?*

     * Radiobuttons und Checkboxen
     
     *Warum?*

     * **Choropleth-Map**
 
     *Warum?*

 

  * **Choropleth-Map** 
    * Marks: Die Bundesländer können als Flächen (2D mark) betrachtet werden.
    * Visuelle Kanäle

        * **Farbe**:  Codiert Dichte/Anzahl von ausgewählter Kategorie Die Farblegende mit Anzeige des Standes gibt Nutzer genaue Angabe wie gering/hoch die Dichte/Anzahl ist.
         
        *Warum?* Wir haben uns für eine Farbcodierung entschieden, um die Bundesländer untereinander zu vergleichen. 

        * **Größe**: Codiert die geografische Größe des Bundeslandes im Verhältnis zu anderen Bundesländern.

        *Warum?* Wir wollten eine Karte, die unserer Zielgruppe bekannt ist. Jeder, der die deutsche Forschungssituation untersuchen möchte, kennt höchstwahrscheinlich auch die gängige Deutschlandkarte. Durch die Verwendung von dieser wird das Verständnis erleichtert.

        * **Bewegung**: Codiert den Fokus auf das aktuelle Bundesland. 

        *Warum?* Durch das Herzan- und Wegzoomen, wenn ein Bundesland angeklickt wird, sollen Anwender schneller verstehen, welches Bundesland aktuell im Fokus der Betrachtung steht. 

  * **Radar-Diagramm**
    * Marks: Flächen (2D mark)
    * Visuelle Kanäle
        * **Farbe**: Codiert, ob ein Bundesland im Fokus (rot) oder nur ein Vergleichs-Bundesland (schwarz) ist.

        *Warum?* Durch die farbliche Unterscheidung wird eine Verbindung zur Auswahl in der interaktiven Deutschlandkarte aufgebaut. Nur eine Fläche im Radar kann zu einem Zeitpunkt rot markiert sein. Gleiches gilt für die Auswahl eines Bundeslandes in der Karte. Außerdem eine Spalte der Tabelle für absolute Daten rot markiert. Durch die Dopplung der Farbe soll untermalen werden, dass diese Daten zusammengehören.

        * **Größe**: Codiert einerseits wie gut das fokussierte Bundesland im Vergleich zu den anderen Bundesländern in verschiedenen Kategorien abschneidet und andererseits wie verschiedene Kategorien im fokussierten Bundesland  zueinander im Verhältnis stehen.

        *Warum?*  Die einzelnen Kategorien können schnell verglichen werden und es bietet eine einfache Art Korrelationen zu erkennen (z. B. Großer Ausschlag bei BIP → großer Ausschlag bei #Projekte). 


        * **Form**: Jedes Bundesland hat im Radar durch die verschiedenen Daten ein einzigartiges Aussehen. 
 
        *Warum?*  Durch die Individualität lassen sich Bundesländer besser mit anderen im Radar vergleichen. 

### Level 4 - Algorithm
1. **Gesamtvisualisierung** 

  An dieser Stelle wird zum Abschnitt *Algorithm* der beiden Teilvisualisierungen verwiesen.
  * Wird die Visualisierung aufgerufen, wird zuerst der Algorithmus von der *Teilvisualisierung für Instutiuonsbeziehungen* ausgeführt. Doppelklickt man ausgehend von der Weltkarte auf einen Staat (Deutschland), wird anschließend der Algorithmus *Teilvisualisierung für Staatenansicht* ausgeführt. 

2. **Teilvisualisierung für Instutiuonsbeziehungen**
3. **Teilvisualisierung für Staatenansicht (Deutschland)**
  * Durch den zusammengefassten Aufbau der genutzten CSV-Datei ist der Algorithmus sehr schnell. Die CSV-Datei muss nur einmal beim Aufruf der Visualisierung/HTML-Page geladen und in ein JSON algorithmisch umgewandelt werden. 
Interagieren Nutzer danach mit der Visualisierung, werden im JSON nur Indizes verschoben, welche sich alle schnell berechnen lassen.
Das einzige Problem, das sich daraus ergibt, ist, die Daten zu erweitern. Würde man Daten aus zukünftigen Jahren mit in die Visualisierung einfließen lassen, müsste man den Datengenerierungs-Code in Python geringfügig anpassen und eine neue CSV-Datei erstellen, welche das JavaScript-Script anschließend laden kann.

# Validation (nach Munzner)
Da sich unsere Zielgruppe auf Forscher, Staaten, Bundesländer, Institutionen und Studenten beschränkt ist, ist es uns nur möglich Studenten die Visualisierung auszutesten.

... in Arbeit