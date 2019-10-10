
const pg = require('pg');
const shareObj={}
shareObj.getPgConnection=function(response1,cab){
const config = {
    'host':'localhost',
            'user':'user001',
            'password':'mysecretpassword',
            'database':'users1',
            'port' :5432
};

const client = new pg.Client(config);

client.connect(err => {
    if (err) throw err;
    else {
       cab(client)
    }
});
}
module.exports=shareObj;

