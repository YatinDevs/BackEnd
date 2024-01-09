# Docker

- Local Machine

- Node
- redis
- mongodb
- react

# Docker Desktop :

- Graphical User Interface Consists :
  Important things :
  - Containers
  - Images
  - Volumes

# Lets get into Images:

- Images are nothing these are just like CD/DVD's .
  Disk Images which has lot of files and information in it and
  we can just run them.

# Download and fetch Image.

- docker pull postgres
- Images CLI reference DOCs:
- https://docs.docker.com/engine/reference/commandline/image/

# List of images and container on local and hub(remote).

- docker image ls -> lists of images
- docker ps -> lists all containers
- docker container ls -> lists all containers running
- docker container ls -a -> lists all containers running/not running.

# start a container.

- docker run
- docker run postgres (if latest version)
- docker run postgres:3.2-alpine (to get specific version)

- https://hub.docker.com/_/postgres - docs to guide postgres

- Lets destructure below cmd
- e - for enviornment variable ahead
- d - for detach mode want cmd line terminal free to use

- docker run --name some-postgres -e POSTGRES_PASSWORD=mysecretpassword -d postgres

# stop a container.

- docker stop 5de446144011
- docker run --name some-postgres -e POSTGRES_PASSWORD=mysecretpassword -d postgres
- Throws an error running second time name Conflict
- docker stop some-postgres

# lets try more images version of postgres :

- https://hub.docker.com/_/postgres

- when we dont give any version or info by default it gets latest version :
- docker run --name my-postgres-latest -e POSTGRES_PASSWORD=mysecretpassword -d postgres

- when you want specific version :
- docker run --name my-postgres-old -e POSTGRES_PASSWORD=mysecretpassword -d postgres:14.10
- checks for local first if image exists if no downloads it

- when we run two different versions of postgres in same default port
- there may be conflict
- docker ps - 5432/tcp - default port for postgres

# container:

- whenever we start container of specific Image it has specific port.
- this port we can connect it through local machine by have unique port
  for each container.

# VM vs Docker

- It is Running Entire Os on top of the OS.

- Docker run application on Top of the OS it doesnt include entire Kernel.

# How to Remove / stop all the container :

- docket container prune (rm all the stopped containers).

# look in list of volume :

- docker volume ls

# Mongo in Docker :

- pulls the Image of mongodb in docker
- docker pull mongo

- check image recently pulled
- docker image ls

- to run the pulled docker image of mongo in detached mode with named :
- docker run --name my-mongo-one -d mongo

- check container now
- docker container ls
- it has port default as 27017/tcp

# port mapping or a specific mapping of a Container:

- run the docker image in specific container:
- i.e container port mapping -p tag
- docker run --name my-mongodb -p 4000:27017 mongo
- Running Multiple Container for same Image mongo on different Port
- docker run --name my-mongodb-two -d -p 4000:27017 mongo
- docker run --name my-mongodb-three -p 5000:27017 -d mongo

# docker logs : Fetch the logs of a container

- most used and retrieve logs until a specific point in time
- docker ps
- docker log container-name or
- docker log container-id

# docker stop : Stop one or more running containers

- docker stop container-name

# docker prune : Remove all stopped containers

- docker container prune

# docker Network

- docker network connect [OPTIONS] NETWORK CONTAINER
- docker network create [OPTIONS] NETWORK

# Working with Mongodb in docker:

- Get Mongo Image:
- docker pull mongo

- docker run -p 27017:27017 -e ME_CONFIG_MONGODB_ADMINUSERNAME=admin -e ME_CONFIG_MONGODB_ADMINPASSWORD=password --name mongodb --net mongo-network -d mongo

- -p -> port
- -e -> enviornment variable config
- --name -> provide name to container
- --net -> gives simple network mongo-network
- -d -> detached mode to free cmd

- here it was tedious job of creating a mongo container with all specifications
