# PWA

## DOCKER COMMANDS

- **GET THE CURRENTLY INSTALLED VERSION OF DOCKER**
```powershell
> docker version
```
```
Client: Docker Engine - Community
 Version:           19.03.1
 API version:       1.40
 Go version:        go1.12.5
 Git commit:        74b1e89
 Built:             Thu Jul 25 21:17:08 2019
 OS/Arch:           windows/amd64
 Experimental:      false

Server: Docker Engine - Community
 Engine:
  Version:          19.03.1
  API version:      1.40 (minimum version 1.12)
  Go version:       go1.12.5
  Git commit:       74b1e89
  Built:            Thu Jul 25 21:17:52 2019
  OS/Arch:          linux/amd64
  Experimental:     true
 containerd:
  Version:          v1.2.6
  GitCommit:        894b81a4b802e4eb2a91d1ce216b8817763c29fb
 runc:
  Version:          1.0.0-rc8
  GitCommit:        425e105d5a03fabd737a126ad93d62a9eeede87f
 docker-init:
  Version:          0.18.0
  GitCommit:        fec3683
```

- **BUILD AN IMAGE FROM A DOCKER FILE**
```powershell
> docker build -t pwa-tb .
```
```
Sending build context to Docker daemon  901.6kB
Step 1/9 : FROM node:10-alpine
10-alpine: Pulling from library/node
aad63a933944: Pull complete                                                                                                           
17551d40f9c7: Pull complete                                                                                                           
1d4f35a66b6c: Pull complete                                                                                                           
d4192b8fc2e1: Pull complete                                                                                                           
Digest: sha256:9a88e3bc3f845b74d2fd8adcbc64608736a8be4a3e9dc7aa34fa743e3677a552
Status: Downloaded newer image for node:10-alpine
 ---> 34a10d47f150
Step 2/9 : RUN mkdir -p /usr/src/app
 ---> Running in 35dba39bd49e
Removing intermediate container 35dba39bd49e
 ---> e369a4dff74a
Step 3/9 : WORKDIR /usr/src/app
 ---> Running in de229244b192
Removing intermediate container de229244b192
 ---> 4820b4061d23
Step 4/9 : COPY package.json /usr/src/app/
 ---> 06288f068f08
Step 5/9 : RUN npm install
 ---> Running in 2ec358458037
npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN pwa-tb@1.0.0 No repository field.

added 50 packages from 37 contributors and audited 126 packages in 14.764s
found 0 vulnerabilities

Removing intermediate container 2ec358458037
 ---> e5094da9bf9b
Step 6/9 : RUN export NODE_PATH='/usr/local/lib/node_modules'
 ---> Running in d76e8a457c72
Removing intermediate container d76e8a457c72
 ---> 66f60180003c
Step 7/9 : COPY . /usr/src/app
 ---> 90c567272260
Step 8/9 : EXPOSE 8080
 ---> Running in fb4cf2b84cc2
Removing intermediate container fb4cf2b84cc2
 ---> 7f7362050fd7
Step 9/9 : CMD [ "npm", "start" ]
 ---> Running in 37de9f5c1f91
Removing intermediate container 37de9f5c1f91
 ---> 123d5f2e3a08
Successfully built 123d5f2e3a08
Successfully tagged pwa-tb:latest
SECURITY WARNING: You are building a Docker image from Windows against a non-Windows Docker host. 
All files and directories added to build context will have '-rwxr-xr-x' permissions. 
It is recommended to double check and reset permissions for sensitive files and directories.
```

- **LIST ALL THE LOCALLY STORED DOCKER IMAGES**
```powershell
> docker images
```
```
REPOSITORY          TAG                 IMAGE ID            CREATED             SIZE
pwa-tb              latest              123d5f2e3a08        22 seconds ago      87.6MB
node                10-alpine           34a10d47f150        5 days ago          83.5MB
```

- **CREATE DOCKER CONTAINER FROM AN IMAGE**
```powershell
> docker run -it -d -p 8080:8080 pwa-tb
```
```
68158d1c757ef56406190821c4005304823b4a2b63069aa624cc01cd92466622
```

- **LIST ALL THE RUNNING AND EXITED CONTAINERS**
```powershell
> docker ps -a
```
```
CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS                     PORTS                    NAMES
68158d1c757e        pwa-tb              "docker-entrypoint.s…"   58 seconds ago      Up 53 seconds              0.0.0.0:8080->8080/tcp   angry_bose
e0ac97f68a3a        pwa-tb              "docker-entrypoint.s…"   5 minutes ago       Exited (0) 2 minutes ago                            sharp_dirac
```

- **SAVE THE SPECIFIED IMAGE INTO TAR FILE**
```powershell
> docker save -o 1rz18mca11.tar pwa-tb
```

- **DELETE ALL IMAGES**
```powershell
> docker rmi $(docker images -a -q)
```

- **DELETE ALL CONTAINERS**
```powershell
> docker rm $(docker ps -a -q)
```
