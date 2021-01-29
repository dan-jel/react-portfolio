# - React Portfolio Website -

Diese Website wurde im Zuge eines React Tutorials gebaut. Sie macht von den Libarys "framer-motion" und "styled-components" Gebrauch und nutzt React-Router für das interne Routing auf der Website.
Das Ganze ist mit einem nginx Webserver dockerized und mit wenigen Befehlen für den Deploy bereit.

---

1. node modules installieren:

```bash
npm install
```

2. React-Development-Server starten (localhost:3000):

```bash
npm start
```

---

Um den Docker-Container zu bauen muss selbstverständlich die Docker-Engine installiert sein.

1. Den Docker Container bauen:

```bash
docker build -f Dockerfile.prod -t portfolio .
```

2. Den Docker Container ausführen und auf Port 80 exposen:

```bash
docker run -d -p 80:80 --rm portfolio
```
