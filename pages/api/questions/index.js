import dbConnect from "../../../db/dbConnect";
import Question from "../../../db/models/Question";

//GET
//DELETE
//PUT

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "GET") {
    const questions = await Question.find(); // this is a mongoose collection

    const questionsArray = questions.map((question) => {
      return {
        id: question._id,
        name: question.name,
        text: question.text,
      };
    });

    res.status(200).json(questionsArray);
  }

  if (req.method === "POST") {
    const data = req.body;
    try {
      const newQuestion = await Question.create(data);

      // 201 => created
      return res.status(201).json(newQuestion);
    } catch (error) {
      res.status(400).json({ message: "error" });
    }
  }
}
