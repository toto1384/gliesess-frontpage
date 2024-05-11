
import { dbConnect, getBlogModel } from "./db"
import { ProjectionType } from "./projectionType"
import { blogItemProjection, BlogObject } from "./types"


export async function getBlogItem(path: string[]) {
    const BlogModel = getBlogModel(await dbConnect())

    const result = await BlogModel.aggregate([
        { $match: { slugs: path } },
        {
            $facet: {
                blog: [],
                similarArticles: [
                    {
                        $lookup: {
                            from: "blogs",
                            as: "suggested",
                            let: { slugs: "$slugs", tags: "$tags", id: "$_id" },
                            pipeline: [
                                { $match: { $expr: { $ne: ["$_id", "$$id"] } } },
                                {
                                    $addFields: {
                                        similarityScore: {
                                            $sum: [
                                                { $cond: [{ $in: ["$slugs.0", "$$slugs"] }, 1, 0] },
                                                { $cond: [{ $in: ["$slugs.1", "$$slugs"] }, 1, 0] },
                                                { $cond: [{ $in: ["$tags.0", "$$tags"] }, 1, 0] },
                                                { $cond: [{ $in: ["$tags.1", "$$tags"] }, 1, 0] },
                                            ]
                                        }
                                    }
                                },
                                { $sort: { similarityScore: -1, _id: -1 } },
                                // { $skip: similarJobsOffset },
                                { $project: blogItemProjection },
                                { $limit: 3 }
                            ]
                        }
                    },
                    { $project: { suggested: 1 } }
                ]
            }
        }
    ])

    const [{ blog, similarArticles: [{ suggested }] }] =
        JSON.parse(JSON.stringify(result)) as [{ blog: [BlogObject], similarArticles: [{ suggested: ProjectionType<BlogObject, typeof blogItemProjection> }] }]

    console.dir(result, { depth: 100 })
    return { props: { blog: blog[0] ?? null, suggested: suggested ?? null }, }
}