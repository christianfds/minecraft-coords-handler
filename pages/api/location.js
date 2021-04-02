import { connectToDatabase } from "../../util/mongodb";

async function insertLocation(req, res) {
    const { db } = await connectToDatabase();

    const data = await db
    .collection("locations")
    .insertOne(req.body);

    return res.status(200).json(data);
}

async function getLocation(req, res) {
    const { db } = await connectToDatabase();

    const data = await db
    .collection("locations")
    .find({})
    .toArray();

    return res.status(200).json(data);
}

export default async function(req, res){

    const {
        method,
    } = req;
    
    switch (method) {
        case 'GET':
            await getLocation(req, res);
            break
        case 'POST':
            await insertLocation(req, res);
            break
        default:
            res.setHeader('Allow', ['GET', 'POST'])
            res.status(405).end(`Method ${method} Not Allowed`)
    }

}