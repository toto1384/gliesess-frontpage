// import { NextRequest, NextResponse } from "next/server";
// import { dbConnect, getCompanyModel } from "../../utils/db";
// import { NextApiRequest, NextApiResponse } from "next";


// // new one
// export default async function handler(req: NextApiRequest, res: NextApiResponse) {

//     if (req.method === 'GET') {
//         // Process a POST request
//         const CompanyModel = getCompanyModel(await dbConnect())

//         const query = {
//             "state.name": req.headers.state,
//             year: req.headers.year ? Number(req.headers.year) : undefined,
//             category: req.headers.category
//         }

//         res.status(200).send({
//             companies: await CompanyModel.find({}).limit(20).skip(Number(req.headers.offset ?? "0"))
//             count:
//         })
//     }

// }