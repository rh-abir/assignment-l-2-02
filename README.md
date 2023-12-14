<h1>TypeScript Mongoose Express CRUD Backend-Project</h1>

<li>This project is a comprehensive backend repository that enables building a user management system with order management capabilities. It uses the Express framework and TypeScript for type safety, and Mongoose for interacting with a MongoDB database. The modular structure of this repository makes it easy to customize as per the user's requirements.
</li>
<li>
The project is implemented using several tools like Mongoose, Express, TypeScript, Joi for validation, bcrypt for password hashing, cors for cross-origin resource sharing, dotenv for environment variables, ts-node-dev for running TypeScript in development, ESLint for code linting, and prettier for code formatting.</li>

<h1>Key Features:</h1>

<li>User registration with joi validation</li>
<li>User login with password hashing by bcrypt </li>
<li>Get all users, get user by ID</li>
<li>Update a user details</li>
<li>Delete a user</li>
<li>Add product object to A user orders</li>
<li>Get all orders of a user</li>
<li>Get the total price of a user's orders using Mongoose aggregate</li>

<h1>Usage : </h1>

<li>POST /api/users: Create a new user.<li>
<li>GET /api/users: Get all users. </li>
<li>GET /api/users: Get a users with userId. </li>
<li>PUT /api/users/:userId: Update user details. </li>
<li>DELETE /api/users/:userId: Delete user with help of userId. </li>
<li>PUT /api/users/:userId/orders: Add a product object to the orders array for the user. </li>
<li>GET /api/users/:userId/orders: Get all orders of a user. </li>
<li>GET /api/users/:userId/orders/total-price: Get the total price of a user's orders. </li>
<li> </li>
