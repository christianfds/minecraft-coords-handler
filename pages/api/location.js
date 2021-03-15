import { MongoClient } from 'mongodb';

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ojots.mongodb.net/`;
const mongo_client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

function insertLocation(req, res) {
    mongo_client.connect(err => {
        if (err) {
            res.status(500).json(err);
            return;
        }
        const db = mongo_client.db(process.env.DB_NAME);

        db.collection("locations").insertOne({
            'nome': 'oie',
            'coordinates': {
                'x': 100,
                'y': 200,
                'z': 300,
            }
        }, (err) => {
            if (err) {
                res.status(500).json(err);
                return;
            }
            res.status(200).json({ 'result': 'success' });
        })
    });
    mongo_client.close();
}

function getLocation(req, res) {
    mongo_client.connect(err => {
        if (err) {
            res.status(500).json(err);
            return;
        }
        const db = mongo_client.db(process.env.DB_NAME);

        db.collection("locations").find({}).toArray((err, docs) => {
            if (err) {
                res.status(500).json(err);
                return;
            }
            res.status(200).json(docs);
        })
    });
    mongo_client.close();
}

export default (req, res) => {

    const {
        method,
    } = req;
    
    switch (method) {
        case 'GET':
            getLocation(req, res);
            break
        case 'POST':
            insertLocation(req, res);
            break
        default:
            res.setHeader('Allow', ['GET', 'POST'])
            res.status(405).end(`Method ${method} Not Allowed`)
    }

}