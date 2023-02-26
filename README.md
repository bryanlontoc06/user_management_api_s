# Getting Started with User Management API

## Installation

To install the application, follow these steps:

1. Clone the repository:
```bash
git clone https://github.com/bryanlontoc06/user_management_api_s.git
```

2. Go to the root folder:
```bash
cd user_management_api_s
```

3. Create a .env file on the root folder, then add the following:
```bash
MYSQL_HOST='localhost' // your localhost
MYSQL_USER='root' //  your username
MYSQL_PASSWORD='password'  // your database password
MYSQL_DB='user_api'  // your Database name
MYSQL_DIALECT='mysql' // 'mysql'
```
#### note: For databases, you will only need to create a database, and it will automatically create a table for you.
eg:

![image](https://user-images.githubusercontent.com/85468571/221435482-01c90df9-9366-4b7b-858f-604dfa974c4f.png)


4. To install the dependencies used, run:
```bash
npm install
```

5. Run the application:
```bash
npm run dev
```
or
```bash
node server.js
```

After running the server, you can test the api here:
```bash
http://localhost:8080/api-docs/
```

API Endpoints:

Postman:

https://documenter.getpostman.com/view/13152753/2s93CPrD1S
