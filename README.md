# Projektname
Analysetool für mögliche Gründe der Zusammenarbeit zwischen Institutionen

# Kurzbeschreibung
Die Programm soll mithilfe von zwei Teilvisualisierungen (overview & detail) zur Hypothesenbildung bezüglich der Zusammenarbeit zwischen Institutionen beitragen.

# Gliederung
1. [Entwickler](#entwickler)
2. [Allgemeines](#allgemeines)
   - [Screencast](#screencast)
   - [Quellen](#Quellen)
   - [Installation](#installation)

3. [Zweck](#zweck)
4. [Designprinzipien](#designprinzipien)
   * [Domain Situation](#design-level1)
   * [Abstraction](#design-level2)
   * [Idiom](#design-level3)
   * [Algorithm](#design-level4)

5. [Validierung](#validation)
   * [Domain Situation](#validation-level1)
   * [Abstraction](#validation-level2)
   * [Idiom](#validation-level3)

6. [Verbesserung und Gelerntes](#verbesserungen)
7. [Data Copyright](#copyright)

<a name="entwickler"/>

# Entwickler
* [Alexander Rademann](https://github.com/arademann) (Weltkarte für Institutionsbeziehungen)
* [Joel Heuer](https://github.com/JoelHeuer) (Choroplethen-Deutschlandkarte + Radar-Diagramm)

<a name="allgemeines"/>

# Allgemeines
Diese Visualisierung umfasst zwei Teilvisualisierungen. 

1. Globale Karte zur Visualisierung von Institutionsbeziehungen
2. Choroplethen eines Staates und einem dazugehörigen Radar-Diagramm zur Visualisierung der Forschungssituation in diesem Staat und seiner Bundesländer (aufgrund von Zeitmangel wurde nur Deutschland technisch umgesetzt) 

Sollten entsprechende Datensätze vorliegen (u. a. BIP von Staaten und deren Bundesländer, ähnliche Daten wie GEPRIS-Datensatz), skaliert die Visualisierung  entsprechend. 

<a name="screencast"/>

### Screencast
Um die Visualisierung und deren Funktionsumfang besser zu verstehen, wurde ein Screencast bereitgestellt. Damit soll der schnellere Einstieg in die Bedienung der Visualisierung unterstützt werden.

<a name="quellen"/>

### Quellen
  * Visualisierung für Institutionsbeziehungen
    * [GeoJSON Weltkarte](https://geojson-maps.ash.ms/)
    * [Geocoding-API](https://locationiq.com/)
    * [Visualisierung mit D3](https://www.d3indepth.com/geographic/)
  * Teilvisualisierung für Staatenansicht (Deutschland)
    * CSV-Dateien: 
        * [Geo-JSON-Repository](https://github.com/isellsoap/deutschlandGeoJSON) bzw. [Geo-JSON-File](https://raw.githubusercontent.com/isellsoap/deutschlandGeoJSON/master/2_bundeslaender/3_mittel.geojson)
        * [Bruttoinlandsprodukt von Deutschland](https://www.govdata.de/web/guest/suchen/-/details/vgr-der-lander-entstehungsrechnung-bruttoinlandsproduktzu-marktpreisen-nominal-bundeslander-jah) bzw. [hier](https://www.govdata.de/web/guest/suchen/-/searchresult/q/Bruttoinlandsprodukt+Bundesl%C3%A4nder/s/relevance_desc), bzw. [hier](https://www.govdata.de/web/guest/suchen/) 
        * [Postleitzahlen und deutsche Kreise, die einem Bundesland zugeordnet werden](https://www.datendieter.de/item/Postleitzahlen_Liste_Deutschland)
    * D3-Projekte: 
         * [Deutschlandkarte](http://bl.ocks.org/oscar6echo/4423770)
         * [Radar-Diagramm](https://gist.github.com/nbremer/21746a9668ffdf6d8242#file-radarchart-js)

<a name="installation"/>

### Installation
Um das Projekt lokal zu starten, müssen folgende Befehle in einer Shell ausgeführt werden:

```shell script
git clone --recursive https://github.com/arademann/datavis19-3.git
cd datavis19-3/web/
npm install
npm start
```

Eine Liveversion des Projekts ist online als [Github-Page](https://arademann.github.io/datavis19-3/) verfügbar.

<a name="Zweck"/>

# Zweck
* Mit Hilfe der Weltkarte soll die Visualisierung einen interaktiven Überblick zu globalen Institutionsbeziehungen geben. Fragen wie "Mit welchen in- und ausländischen Instituten hat Institut XY zusammengearbeitet?" können beantwortet werden.

* Mit Hilfe der Choroplethenkarte für Deutschland und dem dazugehörigen Radar-Diagramm erhält man nähere Informationen zu diesem Staat und seinen Bundesländern, z. B. Bruttoinlandsprodukt (BIP), #Projekte oder #Institute. Viele dieser Kategorien sind nach Review-Boards filterbar. Diese Visualisierung kann unabhängig von der Visualisierung für Institutionsbeziehungen Fragen wie "Was ist das Bundesland, welches am meisten Informatikprojekte finanziert hat?" beantworten.

* Beide Teilvisualisierungen ergänzen sich. In Kombination bieten sie eine ideale Hilfestellung zur Hypothesenbildung durch Analyse der globalen und lokalen Forschungssituation. 
Zum Beispiel ist es Nutzern der Visualisierung möglich, Hypothesen aufstellen, welche Kriterien für eine ausgewählte Institution relevant sein können (z. B. hohes BIP, hohe #Forschende im Staat/Bundesland), um eine Kooperation mit in- oder ausländischen Institutionen einzugehen.



<a name="designprinzipien"/>

# Designprinzipien (nach Munzner)
Im Folgenden werden die *four nested levels of visualization design* von Tamara Munzner auf die von uns bereitgestellte Visualisierung bezogen.

Unsere (Gesamt-)Visualisierung besteht aus zwei unabhängigen, sich aber ergänzenden Teilvisualisierungen. Somit kann man alle vier Level von Munzner jeweils auf die

1. **Gesamtvisualisierung** 
2. **Teilvisualisierung für Instutiuonsbeziehungen**
3. **Teilvisualisierung für Staatenansicht (Deutschland)**

beziehen.

<a name="design-level1"/>

### Level 1 - Domain Situation
**1. Gesamtvisualisierung** 
  * Forschende und Studierende, ... 
    * die sich für die möglichen Faktoren von Kooperationen zwischen Institutionen interessieren, um damit Forschung zu betreiben. Fragen wie "Erhöht ein hohes BIP eines Staates die Chance auf ausländische Forschungskooperation?" können beantwortet werden.
    * die sich für die Forschungssituation in einem bestimmten Staat interessieren (bislang nur Deutschland). Fragen unabhängig von den Institutionsbeziehungen können beantwortet werden.
  * Institutionen, ...
    * die, bevor sie Kooperationen mit ausländischen Institutionen eingehen, die Forschungs- und Wirtschaftssituation der jeweiligen Staaten/Bundesländer prüfen wollen. Somit können sich Institutionen und Sponsoren vergewissern, ob Institutionen vorgegebene Bedingungen für die Zusammenarbeit erfüllen.
  * Staaten und Bundesländer, ...
    * die ihren eigenen Stand in der internationalen und lokalen Forschungssituation analysieren möchten. Anhand der Erkenntnisse könnten diese Staaten den Behörden auf neue Zielsetzungen hinweisen, z. B. verstärkte inländische Zusammenarbeit oder Ausbau von bestimmten Review-Boards.
    
**2. Teilvisualisierung für Instutiuonsbeziehungen**
  * Institutionen, ...
    * die ihre internationale und lokale Zusammenarbeit mit anderen Institutionen visualisieren möchten. Diese können sehen, ob sie bei Forschungsprojekten mit aus- oder inländischen Partnern zusammenarbeiten.
    * die Informationen über Institutionen, mit denen gemeinsame Projekte geführt werden, tabellarisch darstellen wollen.
    
**3. Teilvisualisierung für Staatenansicht (Deutschland)**
  * Forschende und Studierende, ... 
    * eine wissenschaftliche Karriere anstreben und überprüfen wollen in welchem Bundesland viele Institute für ihre Fachrichtungen/Spezialisierung existieren (z. B. „Welches ist das Bundesland mit dem höchsten Auftreten von Instituten bei Linguistik-Projekten?“). 
    * die durchschnittliche Finanzierungsdauer von Projekten in ausgewählten review-boards vergleichen möchten, um die Visualisierung als unterstützende Funktion bei der Auswahl von Universitäten zu nutzen.     
    * die Forschungssituation in Deutschland analysieren wollen und dabei Faktoren wie das BIP berücksichtigen, um z. B. damit weitere Forschung betreiben zu wollen.

  * Sponsoren und Staatliche Behörden (Universitäten), die ...
    * aufgrund des geringen Auftretens von Projekten in einem Fachbereich, Finanzierungen bereitstellen, damit dieser Mangel behoben wird (z.B. keine Theologie-Projekte in Schleswig-Holstein).
    * aufgrund der hohen Nachfrage spezieller review-boards eine stärkende Finanzierung vornehmen und den Ausbau an Studienplätzen in diesem Fachbereichen erhöhen. 


<a name="design-level2"/>

### Level 2 - Abstraction

<a name="design-level2-1"/>

##### Task Abstraction
  * High-Level - Analyze
    * **Konsumieren (Discover)**
        * Nutzer der Visualisierung können durch die diversen Interaktions- und Filtermöglichkeiten beider Teilvisualisierungen Informationen gewinnen, miteinander in Verbindung setzen und daraus z. B. Hypothesen bilden.

  * Mid-Level - Search
    * **Look-Up**
        * Per Dropdown-Auswahl oder Eingabe kann eine spezifische Institution ausgewählt werden. Nähere Informationen werden hierzu angezeigt (kooperierte Institutionen, Adresse, ...)
        * In der Nahansicht von Staaten (bisher nur Deutschland) kann per Klick ein bestimmtes Bundesland ausgewählt werden. Dazu werden nähere Informationen im Radar-Diagramm und der nebenstehenden Tabelle für absolute Daten angezeigt. 

  * High Level - Analyze
    * **Konsumieren (Discover)**: Zusammenhänge zwischen Kategorien (z. B. BIP und #Projekte) in Bundesländern und ganz Deutschland erkennen.
        * Durch verschiedene Filterung und die Färbung in der Choropleth-Map kann man die Eigenschaften der Bundesländer neu entdecken. Somit erfährt man z. B. umgehend welches Bundesland in Deutschland für Informatikprojekte die meisten Institute ausweist oder welches Bundesland die höchste durchschnittliche Finanzierungsdauer für Theologieprojekte bereitstellt. Neben dieser Information bietet die Tabelle für absolute Daten noch genauere Informationen zu jenem Bundesland und allen Kategorien an.

    * **Präsentieren**: Erkenntnisse zu Bundesländern/Deutschland/Review-Boards Dritten vorstellen
        * (Un)gefilterte Daten können Dritten je nach Schwerpunkt vorgestellt werden, z. B. Vergleich zwischen Bundesländern, Kategorien oder Filterungen. Die Interaktivität im Interface bietet in Kombinationen mit den Visualisierungen und Tabellen genügend Spielraum. Animationen tragen zum Verständnis bei.

  * Mid-Level - Search
    * **Look-Up**: Informationen zu einem ausgewählten/angeklickten Bundesland erhalten
        * Choroplethen-Deutschlandkarte ist anklickbar. Klickt man auf ein Bundesland, wird an dieses herangezoomt. Das Radar-Diagramm und die Tabelle für absolute Daten reagieren auf das Klickevent* Radar-Diagramm visualisiert die Level des Bundeslands in verschiedenen Kategorien im Vergleich zu anderen Bundesländern an. 
        * Tabelle zeigt die absoluten Daten des ausgewählten Bundeslands an.

    * **Locate**: Finden eines Bundeslands das in einer Kategorie und/oder Filterung im Vergleich zu anderen Bundesländern am besten abschneidet
        * Mithilfe von Filterung und der Farblegende der Choroplethenkarte besteht die Möglichkeit auf Anhieb das am geringsten/stärksten betroffene Bundesland bezüglich der Häufigkeit einer Kategorie (BIP, #Projekte, ..) zu lokalisieren.

  * Low-Level - Query
    * **Vergleich**: Bundesländer, Kategorien (BIP, #Institute, …) und Review-Boards können verglichen werden
        * Durch den Filter im Interface betrachtet der Algorithmus gezielt nur das wünschenswerte review-board (Informatik, Mathematik, Alle, …). Dadurch sind Filterungen wie „Anzahl von Informatik im review-board Informatik in Berlin“ möglich.
        * Anhand eines ausgewählten Bundeslandes können Kategorien auf dem Radar-Diagramm schnell verglichen werden. 
        * Anhand einer ausgewählten Kategorie können Bundesländer auf der Choropleth-Map schnell verglichen werden. 


<a name="design-level2-2"/>

##### Data Abstraction
  
    An dieser Stelle wird zum Abschnitt *Data Abstraction* der beiden Teilvisualisierung verlinkt.

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

<a name="design-level2-3"/>

##### Aggregation and filtering of data
**1. Gesamtvisualisierung** 

    An dieser Stelle wird zum Abschnitt *Aggregation of data* der beiden Teilvisualisierung verlinkt.

**2. Teilvisualisierung für Instutiuonsbeziehungen**

    Die unten genutzten Dateien aus dem GEPRIS-Datensatz wurden gefiltert und in JSON umgewandelt. Für alle Institutionen wurden Geocode-Lookups durchgeführt und die jeweiligen Antworten als <Instiutions-ID>.json gespeichert und anschließend in eine Datei zusammengefasset. Die Berechnung der Institutiosnbeziehungen erfolgte über die Betrachtung gemeinsamer Projekte.    

  * genutzte CSV-Dateien aus GEPRIS-Datensatz
    * extracted_institution_data.csv
    * project_institution_relations.csv   
    
  * externe Dateien
    * world_low.geo.json

**3. Teilvisualisierung für Staatenansicht (Deutschland)**

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

       Allen voran *EXPORT D3 compressed percentage.csv* wird für die Visualisierungen genutzt. Diese Datei enthält 16 Bundesländer x 5 Review-Boards Zeilen. Jede Zeile speichert neben dem Bundesland und der review-board auch relative und absolute numerische Daten für z. B. Projekte, Institute, durchschnittliche Finanzierungsdauer. Genau jener Aufbau der CSV-Datei erspart dem JavaScript-Algorithmus viel Rechenarbeit. Dieser kann nämlich auf Interaktionen in den Visualisierungen mit Indexverschiebungen reagieren und die gewünschten Werte preisgeben.

<a name="design-level3"/>

### Level 3 - Idiom 
**1. Gesamtvisualisierung** 
  
     An dieser Stelle wird zum Abschnitt *Idiom* der beiden Teilvisualisierungen verlinkt. 
  * In der Teilvisualisierung für Institutionsbeziehungen wurde unter der Weltkarte eine Information zum Doppelklick-Event eingefügt. Diese soll die Visualisierungsnutzer darauf hinweisen, dass in der Visualisierung **overview-detail** angewandt wird. Somit können Nutzer von der Übersicht (Weltkarte) beim Doppelklick auf einen Staat in das Detail wechseln (Choroplethenkarte). Bislang wurde allerdings nur Deutschland als Detailansicht integriert.

**2. Teilvisualisierung für Instutiuonsbeziehungen**

  * **Institutions-Suche**
  
    * Durch das Suchfeld, das bei einem Klick eine alphabetisch sortierte Auflistung der Institutionen anzeigt und mit einer Autovervollständigung ausgestattet ist, lässt sich ein Überblick über alle Institutionen gewinnen und die gewünschte Institution selektieren. 
    
  * **Weltkarte**
  
    * Die Karte zeichnet alle Länder mit ihren Grenzen und bietet als Navigation Zooming und Panning. Sie zeichnet die Verbindungen zwischen Institutionen graphisch als Verbindungslinien, damit Nutzer ein Gefühl für die globalen Beziehungen erhalten. 
    
    * Visuelle Kanäle
      * **Farbe der Karte**: Für die Farbe der Karte wurde sich für Weiß/Schwarz/Grautönen entschieden (*"Get it right in black and white"*). 
      
      * **Farbe der Beziehungen**: Um die Beziehungen von dem Rest der Karte abzuheben, sie jedoch gleichzeitig nicht zu verdecken, wurde ein durchsichtiger Rotton gewählt.
      
      * **Füllung der Beziehungen**: Für die Unterscheidung zwischen der ausgewählten Institution und den Institutionen, zu denen sie Verbindungen hat.
    
  * **Institutions-Tabellen**
  
    * Für die Auflistung aller Informationen über die selektierte und die verbundenen Institutionen.
    
       *Warum?* Hierdurch lassen sich Informationen über die Institutionen, wie zum Beispiel die genaue Adresse oder die Kontaktdaten, auf übersichtliche Weise darstellen.
       Zudem soll auf diese Weise das Problem gelöst werden, dass nicht für alle Institutionen Geodaten vorliegen, weswegen sie nicht auf der Karte eingezeichnet werden können. 

**3. Teilvisualisierung für Staatenansicht (Deutschland)**

Die ganze Teilvisualisierung wurde als ein **Dashboard** umgesetzt, sodass alle Komponenten (Filter, Karte, Radar, Tabellen) auf einen Blick erfassbar sind. Das ist insofern sinnvoll, weil sich durch die Interaktionen viele Komponenten auf mehreren visuellen Kanälen und auch inhaltlich ändern. Durch das kompakte Layout müssen Anwender nicht scrollen und können die Veränderungen besser nachvollziehen.

  * **Interaktionstypen** 
     * Filter - Nutzer können nach Kategorie (BIP, Projekte, Institute, Finanzierungsdauer, Froschende) und review-board (Informatik, Mathematik, ...) filtern.

        *Warum?* Hierdurch können Nutzer gezielter nach relevanten Informationen suchen. Eventuell interessieren Nutzern nur Informatikprojekte und besonders die durchschnittliche Finanzierungsdauer von diesem. Solche Abfragen sind durch die Filter möglich und bieten mit Möglichkeiten in der Visualisierung. 

     * Radiobuttons und Checkboxen
     
        *Warum?* Radiobuttons wurden eingefügt, falls Nutzer nicht auf die Karte klicken wollen, z. B. weil sie die Lage eines bestimmten Bundeslandes nicht kennen, sondern nur dessen Name. Checkboxen dagegen sind ein elementares Element, um die Vergleichs-Bundesländer im Radardiagramm zu aktivieren und fördern somit Query (Vergleich). 

     * Choropleth-Map
 
        *Warum?* Durch ein Klickevent auf ein Bundesland wird an dieses herangezoomt. Das erleichtert die Auswahl und fördert Look-Up. 

 

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
    * Marks: Die Ausschläge auf den einzelnen Axen im Radar-Digramm können als Flächen (2D mark) betrachtet werden

    * Visuelle Kanäle
        * **Farbe**: Codiert, ob ein Bundesland im Fokus (rot) oder nur ein Vergleichs-Bundesland (schwarz) ist.

          *Warum?* Durch die farbliche Unterscheidung wird eine Verbindung zur Auswahl in der interaktiven Deutschlandkarte aufgebaut. Nur eine Fläche im Radar kann zu einem Zeitpunkt rot markiert sein. Gleiches gilt für die Auswahl eines Bundeslandes in der Karte. Außerdem eine Spalte der Tabelle für absolute Daten rot markiert. Durch die Dopplung der Farbe soll untermalen werden, dass diese Daten zusammengehören.

        * **Größe**: Codiert einerseits wie gut das fokussierte Bundesland im Vergleich zu den anderen Bundesländern in verschiedenen Kategorien abschneidet und andererseits wie verschiedene Kategorien im fokussierten Bundesland  zueinander im Verhältnis stehen.

          *Warum?*  Die einzelnen Kategorien können schnell verglichen werden und es bietet eine einfache Art Korrelationen zu erkennen (z. B. Großer Ausschlag bei BIP → großer Ausschlag bei #Projekte). 

        * **Form**: Jedes Bundesland hat im Radar durch die verschiedenen Daten ein einzigartiges Aussehen. 
 
          *Warum?*  Durch die Individualität lassen sich Bundesländer besser mit anderen im Radar vergleichen. 


<a name="design-level4"/>

### Level 4 - Algorithm
**1. Gesamtvisualisierung** 

     An dieser Stelle wird zum Abschnitt *Algorithm* der beiden Teilvisualisierungen verwiesen.
  * Wird die Visualisierung aufgerufen, wird zuerst der Algorithmus von der *Teilvisualisierung für Instutiuonsbeziehungen* ausgeführt. Doppelklickt man ausgehend von der Weltkarte auf einen Staat (Deutschland), wird anschließend der Algorithmus *Teilvisualisierung für Staatenansicht* ausgeführt. 

**2. Teilvisualisierung für Instutiuonsbeziehungen**
  * Auf eine Berechnung der Institutionsbeziehungen zur Laufzeit wird verzichtet, da sich diese Berechnung spürbar auf die Geschwindigkeit und das Reaktionsverhalten der Anwendung ausgewirkt hat.
  * Der Großteil der Daten wurde soweit präpariert, dass zur Laufzeit ein Lookup mit Hilfe der Institutions-ID ausreicht, um an die notwendigen Informationen zu gelangen. Mit diesem Vorgehen konnte unter anderem die Berechnung der Beziehungen zur Laufzeit eingespart werden.
  * Durch die Nutzung von React werden unnötige Render vermieden. Insbesondere muss dadurch der Großteil der Karte nicht bei jeder Aktualisierung neugezeichnet werden.
  
**3. Teilvisualisierung für Staatenansicht (Deutschland)**
  * Durch den zusammengefassten Aufbau der genutzten CSV-Datei ist der Algorithmus sehr schnell. Die CSV-Datei muss nur einmal beim Aufruf der Visualisierung/HTML-Page geladen und in ein JSON algorithmisch umgewandelt werden. 
Interagieren Nutzer danach mit der Visualisierung, werden im JSON nur Indizes verschoben, welche sich alle schnell berechnen lassen.
Das einzige Problem, das sich daraus ergibt, ist, die Daten zu erweitern. Würde man Daten aus zukünftigen Jahren mit in die Visualisierung einfließen lassen, müsste man den Datengenerierungs-Code in Python geringfügig anpassen und eine neue CSV-Datei erstellen, welche das JavaScript-Script anschließend laden kann.



<a name="validation"/>

# Validation (nach Munzner)
Da sich unsere Zielgruppe auf Forschende, Staaten, Bundesländer, Institutionen und Studierende beschränkt, ist es uns nur möglich, Studierende die Visualisierung testen und bewerten zu lassen.


<a name="validation-level1"/>

### Level 1 - Domain Validation

##### immediate form of validation
Nutzer wurden während des Gebrauchs der Visualisierung befragt und beobachtet. Sie sollten herausfinden, welchen Zweck die Visualisierung erfüllt. 

Bei der Befragung ergab sich, dass die Studierenden den Zweck der einzelnen Teilvisualisierungen gut erfassen konnten. Schwierigkeiten stellten sich jedoch, sobald nach der Verbindung beider Visualisierungen gefragt wurde. Auf Anhieb war dies den Testern nicht ersichtlich. Mithilfe der Überschrift über der Weltkarte konnten Nutzer allerdings zutreffende Vermutungen zum Sinn der Visualisierung aufstellen. 

*Verbesserungen und Gelerntes*

Die Verbindung zwischen beiden Teilvisualisierungen sollte mehr verdeutlicht werden. Beispielweise kann dies umgesetzt werden, indem in der Teilvisualisierung für Staatenansicht noch ein Bezug zum zuletzt angeklickten Institut bereitgestellt wird. Gelernt haben wir vor allem wie viel  Orientierung ein Titel den Nutzern geben kann. Weiter mit Text das Verständnis zu erhöhen wollen wir allerdings nicht. Unser zukünftiges Ziel ist  noch selbsterklärendere Visualisierungen zu entwickeln. 

##### downstream form of validation

*Welche Tools wurden genutzt?*

1. Teilvisualisierung für Institutionsbeziehungen
  *  **Dropdown**  zur Auswahl von Instituten wurde bei allen Testern mit als erstes genutzt
  *  **Texteingabe** im Dropdown als Mittel zur Suche 
  * **Hovern** über Institutionen (visualisiert als Kreise auf der Weltkarte), sodass die Namen dieser angezeigt werden. 
  
2. Teilvisualisierung für Staatenansicht
  * Die **Detailansicht** für Staaten scheint Nutzern zu gefallen. Sie versuchten neben Deutschland auch andere Staaten per Doppelklick anzusprechen, um somit die Ansicht auch dort auszulösen. 
  * Beide **Filter** (Kategorie und review-board) wurden ausgiebig benutzt. Dabei wurden vor allem Veränderungen in der Choroplethenkarte und im Radar-Diagramm wahrgenommen, zweitrangig in der Tabelle für absolute Daten.


*Welche Tools wurden weniger bis gar nicht genutzt?*

1. Teilvisualisierung für Institutionsbeziehungen
  * **Tabellarisch angeordnete Informationen** zur ausgewählten Institution und seinen Kooperationspartern unter der Weltkarte


2. Teilvisualisierung für Staatenansicht
  * **Radiobuttons und Checkboxen** wurden kaum beachtet. Die Funktionalität im Radardiagramm mehrere Bundesländer zu vergleichen wurde selten wahrgenommen
  * **Tabelle für absolute Daten** wurde im Vergleich zu den restlichen Komponenten der Visualisierung weniger beachtet. 

*Verbesserungen und Gelerntes*

In Zukunft wollen wir unsere Visualisierungen mit weniger Elementen füllen, sondern kompakter halten. Für alle textbasierten Komponenten wie z. B. Tabellen sollten verstärkte Gestaltungen angewandt werden, um den Bezug zu Visualisierungen herzustellen (linking). 


<a name="validation-level2"/>

### Level 2 - Abstraction Validation 

Es soll herausgefunden werden, ob die Visualisierung samt seinem Funktionsumfang der eigentlich Zielsetzung (Hypothesenbildung) gerecht wird.

##### immediate form of validation
Bei der Testung durch Studierende wurden glücklicherweise Hypothesen aufgestellt, warum manche Institutionen mit anderen zusammenarbeiten. Da die aktuelle Version der Visualisierung  die Detailsansicht nur für Deutschland bereitstellt, wurden dementsprechend auch nur deutsche Institutionen betrachtet. 

##### downstream form of validation
Aufgrund von Komplexität nicht durchgeführt.


<a name="validation-level3"/>

### Level 3 - Idiom Validation
Manche Designentscheidungen haben zur optimalen Wissensvermittlung beigetragen, andere wiederum nicht. 

##### immediate form of validation

*Designentscheidungen, die der Vermittlung dienlich waren*

1. Teilvisualisierung für Institutionsbeziehungen
 
  * **Weltkarte** wurde von Nutzern als perfektes Mittel für die Visualisierung zwischen Institutionen bezeichnet, ein z. B. ein Network keine Informationen über die geografische Lage verraten hätte. Nutzer waren allerdings sehr interessiert an der Lage in der Weltkarte.
 *  **Farbkanal** um Beziehungen zwischen Institutionen mithilfe von Linien anzuzeigen war besonders effektiv. Nutzer verschoben die Position in der Weltkarte je nach Linie, die sie verfolgten. 
 *  **Farbkanal** für Institutionen, die als Kreise dargestellt wurden, war verständlich. Nutzer verstanden, dass komplett schwarz ausgemalte Kreise die ausgewählte Institution und nicht ausgemalte Kreise die Institutionen darstellen, mit dem das ausgewählte zusammengearbeitet hat. 
 
2. Teilvisualisierung für Staatenansicht

  * **Dashboard-Ansicht** wurde nutzerfreundlich wahrgenommen, weil dadurch *"nerviges Scrollen"* (Zitat) vermieden wird und Nutzer alle Veränderungen mitverfolgen können.  
  * **Farbkanal** der Choroplethenkarte in Verbindung mit der Farblegende und der Anzeige für das Bundesland in welchem Bereich sich das ausgewählte Bundesland in der Farblegende befindet, wurde auf Anhieb von Studierenden verstanden.
  *  **Bewegungskanal** in der Choroplethenkarte hat den Nutzern Orientierung gegeben. Laut Testern wurde dadurch die Interaktivität visuell verfolgbar, ähnlich wie bei einer Animation. Außerdem erinnerte es sie nach einer gewissen Zeit für die Analyse der restlichen Veränderungen in der Visualisierung welches Bundesland sie fokussiert hatten. 
  *  **Farbkanal** im Radar-Diagramm erwies sich als nützlich, um das fokussierte Bundesland von den Vergleichsbundesländern abzugrenzen
  *  **Größenkanal** im Radar-Diagramm war nach Angaben der Tester besonders unterstützend, um einen konkreten Vergleich zwischen dem aktuell und den später fokussierten Bundesländern ziehen zu können.

*Designentscheidungen, die überarbeitet werden sollten*

1. Teilvisualisierung für Institutionsbeziehungen
  
  * **Kein Bewegungskanal** Sobald Nutzer eine Institution über das Dropdown auswählten, waren sie für kurze Zeit verwirrt, weil auf der Weltkarte teilweise keine offensichtliche Veränderung stattgefunden hat. Optimaler wäre es gewesen, wenn wir nach der Auswahl an den Staat/das Land der Institution herangezoomt hätten.  

2. Teilvisualisierung für Staatenansicht

 * **Radiobuttons und Checkboxen** haben keinen zusätzlichen Mehrwert zu Visualisierung beigetragen und sollten entweder entfernt oder überarbeitet werden.
 * **Farbkanal** mancher Tabellenzeilen und Filter haben Nutzer verwirrt, wobei diese anzeigen sollten, worauf sich die Visualisierungskomponente bezieht (z. B. rot für das fokussierte Bundesland) 

##### downstream form of validation 

Aufgrund von Komplexität nicht durchgeführt.

<a name="verbesserungen"/>

# Verbesserungen und Gelerntes

Durch die Validierung haben wir einige neue Eindrücke über unsere Visualisierung gewonnen. Die ein oder andere Gefahr auf den verschiedenen Leveln (Munzner) konnten wir gut abwenden, andere nicht. Während des Schreibens dieser Dokumentation wurde uns immer klarer, dass alle Ebenen miteinander verbunden sind: Wird ein visueller Kanal von Nutzern gut aufgenommen (Idiom) erhöht das die Verständlichkeit, wodurch Nutzer den Zweck der Visualisierung schneller begreifen können (Domain). 
Insgesamt haben wir die Macht von visuellen Kanälen aus verschiedenen Perspektiven kennengelernt. Sie können den Nutzer eine enorme Hilfe sein oder eine Gefahr darstellen und zur Verwirrung führen. Bei Interaktionsmöglichkeiten sollte die Visualisierung immer den Schritt der Veränderung verständlich illustrieren. Außerdem muss zu jeder Zeit verständlich sein, worauf der aktuelle Fokus liegt. Größtenteils reagierten Nutzer allerdings sehr positiv und waren auch von der schnellen Antwort des Algorithmus fasziniert. Der Übergang von Overview zu Detail wurde besonders gemocht. Nichtsdestotrotz kann man die Visualisierung ausbessern, wobei hier mehr Zeit für das Projekt und Wissen über D3 notwendig gewesen wäre. 

<a name="copyright"/>

# Data Copyright
Data derived from original data provided by [https://gepris.dfg.de](https://gepris.dfg.de) (c) Deutsche Forschungsgemeinschaft
