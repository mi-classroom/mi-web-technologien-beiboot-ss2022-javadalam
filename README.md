# Web Technologien // begleitendes Projekt Sommersemester 2022

Zum Modul Web Technologien gibt es ein begleitendes Projekt. Im Rahmen dieses Projekts werden wir von Veranstaltung zu Veranstaltung ein Projekt sukzessive weiter entwickeln und uns im Rahmen der Veranstaltung den Fortschritt anschauen, Code Reviews machen und Entwicklungsschritte vorstellen und diskutieren.

Als organisatorischen Rahmen für das Projekt nutzen wir GitHub Classroom. Inhaltlich befassen wir uns mit der Entwicklung einer kleinen Web-Anwendung für die Bearbeitung von Bildern. Hierbei steht weniger ein professioneller Konzeptions-, Entwurfs- und Entwicklungsprozess im Vordergrund, sondern vielmehr die sukzessive Weiterentwicklung einer Anwendung, das Ausprobieren, Vergleichen, Refactoren und die Freude an lauffähigem Code.

## Domain 
To see the live demo simply [https://mi-classroom.github.io/mi-web-technologien-beiboot-ss2022-javadalam/](https://mi-classroom.github.io/mi-web-technologien-beiboot-ss2022-javadalam/) visit .

## Team 
[Javad Alamdar](https://github.com/javadalam) als Autor.

[Sarfaroz Khakimov](https://github.com/Sarfaroz) als Reviewer.

## Setup 
### Requirements :

- Node JS (version 16.12 , 16.16 )
- NPM (version 8.5)

OR 
- Docker

Clone the project with :
```sh
git clone https://github.com/mi-classroom/mi-web-technologien-beiboot-ss2022-javadalam.git
```
## ADD JSON 

A folder `/data` must be created in the `/frontend` folder and the cda-paintings `json` must be placed there.

``` 
  ADR's/
  frontend/
         data/
            Json.datei
         src/
```         

### Start with NODE and NPM 
Run the following commands for the Development Server :

```sh
cd frontend
npm install 
npm run dev
```

### Start with Docker 

Auf dem Gerät muss Docker-Compose installiert sein.

1- Nach geklontem Repository , zum Ordner-Frontend gehen

2- Erstellen und starten Sie den service über 
```
docker-compose up -d --build
``` 
3- Rufen Sie dann die Website auf  [localhost:5173](http://localhost:5173/)

4- Um den Container herunterzufahren, verwenden Sie 
```
docker-compose down --remove-orphans
```
lässt sich der Dienst runterfahren. `--remove-orphans` löscht dabei nicht mehr benötigte Container, die nicht als Dienst in der YAML definiert wurden.

## ADRs
[Architectural Decision Records (ADR's)](./ADR's/README.md).

## Time required

Issue 1 : 18 Stunde

Issue 2 : 5 Stunde
