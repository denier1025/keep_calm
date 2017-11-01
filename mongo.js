const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017/test';

let user = {firstName: 'Ivan', lastName: 'Ivanov', age: 30};
let persons = [
    {
        name:'Sergey',
        age:25,
        position:'Junior JavaScript Developer',
        salary: 800
    },
    {
        name:'Andrew',
        age:27,
        position:'JavaScript Developer',
        salary: 1000
    },
    {
        name:'Ivan',
        age:26,
        position:'FullStack Developer',
        salary: 1100
    }
];

MongoClient.connect(url, (err, db) => {
    if(err) throw err;
    console.log('Connection established!');

    const collection = db.collection('users');

    //POST
    // collection.insertOne(user, (err, result) => {
    //    if(err) {
    //        console.log(err);
    //    } else {
    //        console.log(result.ops);
    //    }
    // });
    // collection.insertMany(persons, (err, results) => {
    //     if(err) {
    //         console.log(err);
    //     } else {
    //         console.log('Data added!');
    //         console.log('********* Result **********');
    //         console.log(results);
    //         console.log('***************************');
    //     }
    // });

    //GET
    // let cursor = collection.find();
    // cursor.toArray((err, res) => {
    //     if(err) {
    //         console.log(err);
    //         return;
    //     }
    //
    //     console.log('******** All Data *********');
    //     console.log(res);
    //     console.log('***************************');
    //
    //     collection.find({name:'Sergey'}).toArray((err, res) => {
    //         if(err) {
    //             console.log(err);
    //             return;
    //         }
    //
    //         console.log('******** Employees with name Sergey *********');
    //         console.log(res);
    //         console.log('*********************************************');
    //
    //         collection.findOne({age:{$lt:30}}).then((value) => {
    //             console.log('******** Employee with age less than 30 *********');
    //             console.log(value);
    //             console.log('*************************************************');
    //         });
    //     });
    // });

    //DELETE
    // collection.find().toArray((err, res) => {
    //     if(err) {
    //         console.log(err);
    //         return;
    //     }
    //     console.log(res);
    // });
    // collection.deleteOne({name: 'Sergey', age: 37}, (err, result) => {
    //     if(err) {
    //         console.log(err);
    //         return;
    //     }
    //     console.log(result);
    //
    //     collection.find().toArray((err, res) => {
    //         if(err) {
    //             console.log(err);
    //             return;
    //         }
    //         console.log(res);
    //     });
    // });
    // collection.deleteMany({name: 'Ivan'}, (err, result) => {
    //     if(err) {
    //         console.log(err);
    //         return;
    //     }
    //     console.log(result);
    // });

    //UPDATE
    collection.insertMany(persons, (err, result) => {
        if(err) {
            console.log(err);
            return;
        }
        collection.findOneAndUpdate(
            {age:30},
            {$set:{age:35}},
            {returnOriginal: false},
            (err, result) => {
                if(err) {
                    console.log(err);
                    return;
                }
                console.log(result);
            }
        );
    });

    db.close;
});