// index.js

const app = require('./app');

// Start the Express app
const PORT = process.env.RUNNING_PORT || 5500;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
