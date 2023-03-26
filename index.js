const express = require('express')
const app = express()
const fs = require('fs');
const sql = require("mssql");
const config = {

    server: "LAPTOP-LCPT1ODN",
    port: 1433,
    user: "sa",
    password: "user123",
    database: "registration",
    options: {
        enableArithAbort: true,
        trustServerCertificate: true,
        PersistSecurityInfo: true
    },
    connectionTimeout: 150000,
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    },
};

// sql.on('error', error => {
//     console.log(error.message)
// })

// async function getDBUsersAsyncFunction() {
//     try {
//         let pool = await sql.connect(config);
//         let result1 = await pool.request().query('select * from USERS1');
//         console.log(result1);
//         sql.close();
//     } catch (error) {
//         console.log(error.message);
//         sql.close();
//     }
// }

// getDBUsersAsyncFunction();

const port = 3030






app.use(express.static('public'))
// app.use('/css', express.static(__dirname + 'public/css'))
// app.use('/js', express.static(__dirname + 'public/js'))
// app.use('/img', express.static(__dirname + 'public/img'))


// app.set('layout', './layout')
app.set('views', './views')
app.set('view engine', 'ejs')

// app.set('js', './public')



app.get('', (req, res) => {
    res.render('index', { text: 'This is Wearhous APP' })
})
app.get('/login', (req, res) => {
    res.render('login', { text: 'This is Wearhous APP' })
})
app.get('/registration', (req, res) => {
    res.render('registration', { text: 'This is Wearhous APP' })
})
app.get('/products', (req, res) => {
    res.render('products', { text: 'This is Wearhous APP' })
});


// app.get('/products', (req, res) => {
//     sql.connect(config, function () {
//         var request = new sql.Request();
//         request.query('select * from USERS1', function (err, request) {
//             if (err) console.log(err);
//             res.end(JSON.stringify(request)); // Result in JSON format
//         });
//     });
//     res.render('products', { text: 'This is Wearhous APP' })

// })

app.get('/userlist', function (req, res) {
    sql.connect(config, function () {
        var request1 = new sql.Request();
        request1.query('select * from USERS1', function (err, request1) {
            if (err) console.log(err);
            res.end(JSON.stringify(request1)); // Result in JSON format
        });
    });
    //res.render('userlist', { text: 'This is Wearhous APP' })
});



app.all('*', (req, res) => {
    res.send('Not found!')
});


app.listen(port, () => {
    console.log(`App listening on: http://localhost:${port}`)
});

