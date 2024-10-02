import { NextRequest, NextResponse } from "next/server";
import { dbConnect, getCompanyModel, getKWSModel } from "../../utils/db";
import { NextApiRequest, NextApiResponse } from "next";


// new one
export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    if (req.method === 'POST') {
        // Process a POST request
        const KWSModel = getKWSModel(await dbConnect())

        const key = JSON.parse(req.body).response

        if (!key) {
            return console.log('no key', key)
        }

        const kws = await KWSModel.findOne({ key: key })

        if (!kws) {
            const newKws = await KWSModel.create({ key: key, value: 1 },)
            return res.status(200).send({ newKws })
        }
        const response = await KWSModel.updateOne({ key: key }, { $inc: { value: 1 as any } })

        res.status(200).send({ response })
    }

}