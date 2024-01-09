# Working with Mongodb in docker:

# create Network :

- 1st way:

  > docker network create mongo-network

# Get Mongo Image:

> docker pull mongo

# Create Mongo Container with all specifications :

> docker run -p 27017:27017 -e ME_CONFIG_MONGODB_ADMINUSERNAME=admin -e ME_CONFIG_MONGODB_ADMINPASSWORD=password --name mongodb --net mongo-network -d mongo

# specifications :

- -p -> port
- -e -> enviornment variable config
- --name -> provide name to container
- --net -> gives simple network mongo-network
- -d -> detached mode to free cmd

- here it was tedious job of creating a mongo container with all specifications

- 2nd way:
