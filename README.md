# Cycling & Running logs / API
This API is an open-source project for your clean and conventional sports insights. Besides that it is also a kickstarter for educational purposes.

### How?
- 2 tables in a firebase database, 
    1. For a lists of your sport avtivities
    2. And a relational user / person (You)

- A lot of testing

- CI & CD *Continuous Integration & Continuous Delivery*, for automated task conserning the deployment or development services

- Docker, for streamlined project contribution process
### Install guide

```cmd
cd api
docker build -t storyline_api . 
docker tag storyline_api:latest crshlab/storyline_api:0.1.0
docker push crshlab/storyline_api:0.1.0
```
