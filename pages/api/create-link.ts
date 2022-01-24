import { NextApiRequest, NextApiResponse } from "next";
import connectToDatabase from "../../mongodb";
import { customAlphabet } from "nanoid";
import { COLLECTION_NAMES } from "../../types";

const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
const getHash = customAlphabet(characters, 4);

export default async function CreateLink(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const { link } = request.body;

  if (!link) {
    response.status(400).send({
      type: "Error",
      code: 400,
      message: "Expected {link: string}",
    });
    return;
  }
  try {
    const database = await connectToDatabase();
    const urlInfoCollection = database.collection(COLLECTION_NAMES["url-info"]);
    const hash = getHash();
    const linkExists = await urlInfoCollection.findOne({
      link,
    });
    const shortUrl = `${process.env.HOST}/${hash}`;
    if (!linkExists) {
      await urlInfoCollection.insertOne({
        link,
        uid: hash,
        shortUrl: shortUrl,
        createdAt: new Date(),
      });
    }
    response.status(201);
    response.send({
      type: "success",
      code: 201,
      data: {
        shortUrl: linkExists?.shortUrl || shortUrl,
        link,
      },
    });
  } catch (e: any) {
    response.status(500);
    response.send({
      code: 500,
      type: "error",
      message: e.message,
    });
  }
}
