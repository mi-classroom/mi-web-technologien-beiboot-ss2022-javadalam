# Docker und docker-compose als Container Tooling

* Status: akzeptiert
* Workload: 2 Stunden
* Entscheider: [Javad Alamdar](https://github.com/javadalam)
* Issue: [2](https://github.com/mi-classroom/mi-master-wt-beiboot-2022/issues/2)
* Datum: 17.09.2022

## Kontext und Problemstellung

Eine Virtualisierungs- oder Containerlösung wird benötigt, damit ich einerseits das Projekt auf meinem individuellen System (MacOS, Windows und Linux) für die Entwicklung möglichst schnell und einfach lauffähig vorfinde und andererseits das Projekt automatisch in einer Produktionsumgebung veröffentlicht werden kann.

## Betrachtete Optionen

* Docker + docker-compose

## Ergebnis der Entscheidung

Es wurde sich für Docker mit docker-compose entschieden.Ich bin ziemlich vertraut mit Docker in Projekt 2.

### Positive Konsequenzen

* Die Installation von Entwicklungskomponenten ist nicht notwendig
* Konfiguration der Container ist an einem zentralen Ort möglich
* Erweiterung neuer Komponenten ist leicht möglich

### Negative Konsequenzen

* Docker wird als Abhängigkeit benötigt und muss entsprechend auf allen Systemen installiert werden


## Links

* [docker-compose Alternativen](https://www.slant.co/options/11648/alternatives/~docker-compose-alternatives)
* [Docker](https://www.docker.com/)
* [Docker Compose](https://docs.docker.com/compose/)
