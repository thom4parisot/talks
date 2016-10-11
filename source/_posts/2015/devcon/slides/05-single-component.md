<!-- .slide: data-state="contrasted" -->

## **Single** component

@@@

## **Immutable** build

```bash
docker build -t oncletom/devcon-nodejs-app

Step 0 : FROM node:4-slim
 ---> 81876916bca2
Step 1 : WORKDIR /app
 ---> Using cache
 ---> 44a4f0b3ef85
Step 2 : COPY package.json ./package.json
 ---> Using cache
 ---> 48cf3e569dc8
Step 3 : RUN npm install
...
```

@@@

## Run

```bash
docker run -ti oncletom/devcon-nodejs-app
```

@@@

## **Explicit** behaviour

Nothing happened unless *requested*.

@@@

## Port binding w/ *host*

```bash
# docker run -p [net-interface:host-port]:internal-port <image>
docker run -ti -p 0.0.0.0:5000:3000 oncletom/devcon-nodejs-app
```

@@@

## Port binding w/ *containers*

```bash
docker run -d --name app oncletom/devcon-nodejs-app

docker run -ti --link "app:app_alias" oncletom/devcon-nodejs-app <command>
```

~~~~

```
docker run -ti --link "app:app_alias" oncletom/devcon-nodejs-app env
docker run -ti --link "app:app_alias" oncletom/devcon-nodejs-app ping app_alias
docker run -ti --link "app:app_alias" oncletom/devcon-nodejs-app curl http://app:app_alias:3000
```


@@@

## **Runtime** configuration

```bash
docker run -e KEY_VALUE --env-file=.env-file <container>
```

```
# .env-file
NODE_ENV=test
DATABASE_URL=postgresql://host:port/db?pool=25
```

<footer>Think [Twelve-Factor](http://12factor.net/).</footer>

~~~~

```
docker run -ti --rm -p 0.0.0.0:5000:3000 -e MOTD="Hello Devcon" oncletom/devcon-nodejs-app
```

@@@

## Multiply!

```bash
docker run -d -P oncletom/devcon-nodejs-app
docker run -d -P oncletom/devcon-nodejs-app
docker run -d -P oncletom/devcon-nodejs-app
docker run -d -P oncletom/devcon-nodejs-app
docker run -d -P oncletom/devcon-nodejs-app

# …

docker ps
```

~~~~

```
docker inspect -f '{{range $p, $conf := .NetworkSettings.Ports}}{{(index $conf 0).HostPort}}{{end}}' $(docker ps -q)
```
