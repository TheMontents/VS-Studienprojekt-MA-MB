# VS-Studienprojekt-MA-MB
## Thema Beschreibung
Evaluierung verschiedener Frontend Technologien für Microservices am Beispiel einer simplen Spring Boot Anwendung

# 1. Einleitung

## 1.1 Git
Git ist eine freie Software zur verteilten Versionsverwaltung von Dateien. Als erstes haben wir ein Git Repository erstellt.

## 1.2 Frameworks
In dieser Studienarbeit geht es um das Evaluierung verschiedener Frontend Technolo-gien für Microservices am Beispiel einer simplen Spring Boot Anwendung, hierfür haben wir uns für die drei am meisten verbreiteten JavaScript Frontend Frameworks entschieden. Angular, React und Vue.js. Als Backend Framework werden wir Spring-Boot verwenden. Diese Frameworks werden wir nun im Detail betrachten.

### 1.2.1 Frontend

#### 1.2.1.1 Angular
Das von Google gepflegte Framwork Angular ist eine der ältesten Webentwicklungs Frameworks. Die erste Version stammt aus dem Jahr 2010, mittlerweile steht wurde am 13. Mai 2021 die 12. Version released (Stand: 19. Juli 2021). Entsprechend ausge-reift ist das Framework. Von Haus aus gibt es kaum eine Problemstellung, die mit An-gular nicht gelöst und als Web-Applikation umgesetzt werden kann.
Das Coding erfolgt in der Programmiersprache TypeScript. Diese kann man sich vor-stellen als JavaScript, erweitert um objektorientierte Programmierelemente. Insbeson-dere statische Typisierung (also Typzuweisung zu Variablen) kann gerade bei größeren Projekten helfen, Fehler zu vermeiden gewisse Strukturen einzuhalten.

Grundlegenden Konzepte die wichtig bei Angular sind:

**Components** sind logische Kapselungen gewünschter Funktionalitäten, die sich an gewünschten Stellen wiederverwenden lassen.

**Directives** erleichtern das Coden von JavaScript, indem Grundfunktionen wie if-Abzweigungen oder for-Loops mit wenigen Schritten ohne viel Code eingefügt werden können.

**Dependency Injection** stellt einen sog. DI-Container zur Verfügung. Häufig verwen-dete Services (z. B. Datenbankabfragen) lassen sich hierüber kapseln und bei Bedarf in gewünschten Komponenten aufrufen.

**Fazit:** 
es gibt kaum eine Frontend-Herausforderung, die mit Angular nicht gelöst wer-den kann. Gerade Einsteiger der Webentwicklung sollten jedoch Zeit und Durchhalte-vermögen für den Einstieg mitbringen, dieser wird einem nicht immer leicht gemacht. Dementsprechend findet Angular gerade in großen und Enterprise-Applikationen An-wendung. Auch die Betreuung durch Teams mit einer Vielzahl an Mitwirkenden lässt sich effizient bewerkstelligen.

#### 1.2.1.1 Angular Installation

#### 1.2.1.2 React
**React** ist ein Framework entwickelt von Facebook, veröffentlicht im Jahr 2013 und geht vom Grundansatz einen anderen Weg als Angular. React ist von Haus aus schlank, klein und elementar gehalten. Es wird zunächst nur die Grundfunktionalität angeboten, z.B. Components und Properties (zum Handling von Daten). 

React ist eigentlich kein Framework, sondern eine Library handelt. Bei React verzich-tet man bewusst auf Vorgabe eines festen Workflows, um Aufgaben zu lösen und Ap-plikationen zu erstellen. Es genügt daher die Festlegung von React als einer flexibel einbindbaren Library.

React lässt sich auf zwei Arten nutzen. Man kann ein vorhandenes HTML-Projekt mit React anreichern oder man startet ein komplett neues React-Projekt, bevorzugt über die Kommandozeile des Systems.
Die Entwickler haben zum Coden die Sprache JSX erfunden. Die Idee ist vergleichbar mit einer dynamischen Erweiterung des klassischen HTML und es lässt sich schnell intuitiv damit arbeiten.

Geht man über die elementare Funktionalität von React hinaus, merkt man schnell einen entscheidenden Unterschied zu Angular. Bei React ist man weit mehr gefordert, auf Erweiterungen zu setzen, die von der Community gepflegt werden. Das führt auch dazu, dass es oft nicht den einen Weg zum Ziel gibt. Man ist herausgefordert, seinen eigenen Weg und seine bevorzugten Tools zu finden. 

**Zwischenfazit Angular vs. React:** an Funktionsumfang nehmen sich beide Frame-works kaum etwas. Beide werden von Großkonzernen betreut und behaupten sich seit vielen Jahren erfolgreich am Markt. Auch die Communities sind entsprechend etab-liert, so dass Hilfe nie weit entfernt ist. Wichtigster Unterschied ist der monolithische Ansatz von Angular (fast alles aus einer Hand und ein Weg zum Ziel) gegenüber dem Community-zentrierten Weg von React. Eine Auswahl zwischen beiden ist eine Frage des persönlichen Geschmacks und der eigenen Herangehensweise an Coding-Aufgaben.



#### 1.2.1.3 Vue.js
Ähnlich zu Angular handelt es sich hier um eine monolithische Lösung, die dem Ent-wickler alle nötigen Tools für eine umfassende Applikation anbietet. Auf Community-Tools kann zurückgegriffen werden, das ist aber nicht immer nötig (im Gegensatz zu React).

Ähnlich React lässt sich Vue.js direkt in eine vorhandene HTML-Seite oder über die Kommandozeile einbinden. Im ersten Ansatz wird die Vue.js-Bibliothek über ein script-Tag eingebunden und richtet das Objekt Vue als globale Variable im Projekt ein. Ab einer mittleren Projektgröße ist es jedoch der üblichere und ratsame Weg, Vue.js über NPM oder die CLI zu starten.

**Zusammenfassend** können wir sagen, dass mit Vue.js eine Alternative zu großen Kon-kurrenten entstanden ist, die sich gerade für kleine und mittlere Projekte lohnt. So mancher Overhead, die in Angular manchmal zu tragen sind, lassen sich mit Vue.js elegant und einfach vermeiden. Für sehr Enterprise-Anwendungen kann das Frame-work an seine Grenzen stoßen, insbesondere wenn Community-Erweiterungen und Frage-Antwort-Tabellen sind. Hier sind die Älteren im Vorteil.


### 1.2.2 Backend
#### 1.2.2.1 Spring-Boot
Spring Boot ist eine „Konvention vor Konfiguration“-Lösung für das Java-Framework Spring, die 2012 veröffentlicht wurde und die Komplexität der Konfiguration neuer Spring-Projekte reduziert. Zu diesem Zweck legt Spring Boot eine Grundkonfiguration inklusive Richtlinien für die Nutzung des Frameworks sowie aller relevanten Drittan-bieter-Bibliotheken fest und gibt damit den Weg vor, um den Einstieg in neue Projekte so mühelos wie möglich zu gestalten. Auf diese Weise lässt sich die Kreation eigen-ständiger, produktionsreifer Applikationen auf Basis von Spring erheblich vereinfa-chen, weshalb der Großteil neuer Spring-Anwendungen konsequenterweise auch auf Spring Boot aufsetzt.

Die Merkmale von Spring Boot lassen sich wie folgt zusammenfassen:

direktes Einbetten von Webserver-/Container-Anwendungen wie Apache Tomcat oder Jetty möglich, wodurch kein Einsatz von WAR-Dateien (Web Application Archive) erforderlich ist vereinfachte Maven-Konfiguration dank „Starter“-POMs (Project Ob-ject Models) automatische Spring-Konfiguration, wann immer dies möglich ist Bereit-stellung nichtfunktionaler Features wie Metriken oder ausgelagerter Konfigurationen

### 1.3	Visual Studio Code
Visual Studio Code ist ein kostenloser Quelltext-Editor von Microsoft. Visual Studio Code ist plattformübergreifend für die Betriebssysteme Windows, macOS und Linux verfügbar. Visual Studio Code haben wir verwendet um unsere Applikation zu schreiben.

### 1.4	Spring Boot Anwendung erstellt


### 1.5	Docker
Docker ist eine Open Source Software welche ursprünglich auf die Containervirtuali-sierung, zur Isolierung von Anwendungen mit Linux ausgerichtet war. Mittels be-stimmten Tools ist sie auch für Windows und MacOS anwendbar. 2 In diesem Bericht wird jedoch ausschließlich über die Verwendung von Docker in einer Linux-Umgebung berichtet.

Ein Docker Container ist eine aktive Instanz eines Docker Images. Ein Image ist ein-schreibgeschütztes, ausführbares Template, welches alle notwendigen Abhängigkei-tenbeinhaltet, um die gewünschte Applikation zu bauen und/oder auszuführen. Der Code, Bibliotheken, Konfigurationsdateien aber auch Software-Plattformen, wie .Net Core sind einige der Beispiele, die ein Image beinhalten kann. Diese Abhängigkeiten werden als Schritte, auch Layers genannt, in ein Dockerfile geschrieben, um sie dem Image hinzuzufügen.

Docker haben wir verwendet, um unsere Postgres Datenbank einzurichten:
  
docker run --name postgresdb -p 5432:5432 -e POSTGRES_PASSWORD=password -e POSTGRES_USER=marcel -e POSTGRES_DB=mydb -d postgres:latest



