import dbConnect from "../../../db/dbConnect";
import Question from "../../../db/models/Question";

export default async function handler(req, res) {
  await dbConnect();

  const id = req.query.id;

  const question = await Question.findById(id);

  if (question) {
    res.status(200).json(question);
  } else {
    res.status(404).json({ message: "not found, try again" });
  }

  if (req.method === "DELETE") {
    const result = await Question.findByIdAndDelete(id);

    if (result) {
      res.status(200).json({ message: "question deleted" });
    } else {
      res.status(404).json({ message: "not found" });
    }
  }

  if (request.method === "PUT") {
    const updatedDocument = await Question.findByIdAndUpdate(
      id,
      {
        text: req.body.text,
        name: req.body.name,
      },
      { returnDocument: "after" }
    );

    //!null
    if (updatedDocument) {
      return res.status(200).json(updatedDocument);
    } else {
      return res.status(404).json({ message: "not found" });
    }
  }
}
