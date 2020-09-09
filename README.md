# eBay Product Page Clone

> Inherited Microservice legacy code with the goal of making it scale for real world usage and data. 10,000,000 product records and 1000 RPS.

## Related Projects
Other Microsevice and Proxy Repos:
  - https://github.com/rpt16-sdc-thecyclone/alexSDC
  - https://github.com/rpt16-sdc-thecyclone/albert-sdc
  - https://github.com/rpt16-sdc-thecyclone/troy-proxy

## Table of Contents

1. [General Information](#general_information)
1. [Technologies](#technologies)
1. [Requirements](#requirements)
1. [Development](#development)
1. [Installing Dependencies and Usage](#installing_dependencies_and_usage)

## General Information

Scaled legacy server code to include all basic CRUD operations. I chose to refactor with async/await promises, for readability and performance reasons. Build a data generation script to generate the 1 to 1 data for product names, and many to 1 data for images. Total dummy data size is about 12.2 GB covering 60 million rows in 2 tables in PostgreSQL. Data generation writes all data to CSV files in about 3 min. Seeding script populates tables from CSV files. Current seeding times are 13 min.

Deployed service on AWS with goal of scaling for high use with a large data set. Optimized db lookups with indexes. Scaled system to 3 ec2 micro instances behind a load balancer, and replicated Postgres database on 2 ec2 micros. System was able to handle 2500 RPS looking in last 80% of data, average response time of 75ms.

## Technologies
Application was created with:
* Javascript
* Nodejs
* React
* Styled Components
* Webpack
* Grunt
* Express
* MySQL
* Knex

Additional Databases:
* PostgreSQL
* CassandraDB

Deployment on AWS:
* AWS EC2
* AWS Load balancer
* AWS S3 bucket for images
* Docker

System Testing:
* laoder.io
* New Relic
* JMeter

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- Local install of PostgreSQL

## Development
> Minor things that I would like to come back and work on:
* Issue with using Postgres COPY command in knex seed files
* Find a way to get seeding times under 10 min

> Major things that I would like to come back and work on:
* Finish server refactor for Cassandra: Remove knex and use Cassandra driver, refactor Models for new database
* Work on test suite for server

### Installing Dependencies

From within the root directory:

```sh
npm install
```
#Seed the Postgress Database:
```
npm run seedDB
npm run dataProd
npm run dataImg
npm run seed
```
#Build webpack bundle
```
npm run build
```
#Start the server
```
npm start
```

Add the query parameter prod_id set to an product number (prod_id=1), in the URL to get app to render

