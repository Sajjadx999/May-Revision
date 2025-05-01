const newman = require('newman');
//require('dotenv').config();
 
newman.run({
    collection:`https://api.postman.com/collections/38014443-aeef50d0-7781-42da-9f65-72aec96bd38d?access_key=${process.env.secretKey}`,
    //collection:require('./collection/May_collection.json'),
    reporters: 'htmlextra',
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: './Reports/report.html', // If not specified, the file will be written to `newman/` in the current working directory.
        }
    }
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});
