const express = require('express');
const app = express();
app.use(express.json());
app.use(require('cookie-parser')());
app.use(require('body-parser').urlencoded({ extended: true }));
const pageRoute = require('./routes/pageRoute');
app.use('/page', pageRoute);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listning on port ${PORT}`);
});

