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
#### note: For MySQL Database, you will only need to create a database, and it will automatically create a table for you.
eg:
```bash
MYSQL_HOST='localhost' // Your MYSQL Host
MYSQL_USER='root' // Your MYSQL User
MYSQL_PASSWORD='password' // Your MYSQL Password
MYSQL_DB='user_api' // Your MYSQL Database name
MYSQL_DIALECT='mysql' // 'mysql'
```

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
