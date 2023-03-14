const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');

const routes = require('./controllers');
const helper = require('./utils/helper'); // date_format

const sequelize = require('./config/connection');
// const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

// const sess = {
//     secret: 'Super secret secret',
//     cookie: {
//       maxAge: 24 * 60 * 60 * 1000, // 1 day
//       httpOnly: true,
//       secure: false,
//       sameSite: 'strict',
//     },
//     resave: false,
//     saveUninitialized: true,
//     store: new SequelizeStore({
//       db: sequelize
//     })
//   };

// app.use(session(sess));

const hbs = exphbs.create({helper});

// set up hbs engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// connect to api routes
// app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`App running on port ${PORT}`));
});
