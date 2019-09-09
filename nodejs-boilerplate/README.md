# A Node JS App

![alt text](https://miro.medium.com/proxy/1*aeWo6e6FC8InJwBl3TmpDw.jpeg "Node JS")

## Docker up (start database, run migrations and start server)
```
docker-compose up -d
```

## Run application
```
yarn dev
or yarn prd
```

## Logs

```
docker logs nodejs-boilerplate
```

## Deploy

```
git push umbler master
```

####  just for the first time [config deploy]
```
git remote add umbler [SSH_UMBLER]
```

## Node
```
v10.15.1
```
## MySQL
```
v5.6
```

## Resources

 - Express framework
 - Router
 - Persistence module
 - Filesystem
 - Flyway migrations
 - Project configurations file. Easy access via package json
 - Mustache to decode sql files
 - Database utils
 - i18n internacionalization
 - Nodemon
 - PM2 with rotate logs
 - Mocha & chai tests
 - Moment.js
 - Eslint JS Standard pattern
 - Queue Jobs
 - Docker compose and dockerfile attached running migrations e starting database and nodejs
