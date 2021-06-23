import express from "express";
import { sum } from "./sum";
import cors from "cors";

const main = (): void => {
  const app = express();

  app.use(cors());
  app.use(express.json({}));

  app.get("/sum", (req, res) => {
    let numbers: Array<number>;
    try {
      numbers = JSON.parse(req.query.numbers as any);
    } catch (err) {
      numbers = [0];
    }

    if (
      typeof numbers === "undefined" ||
      typeof numbers !== "object" ||
      !numbers.length
    ) {
      return res.json({
        success: false,
        message: "Please provide list of numbers.",
      });
    }

    return res.json({ success: true, sum: sum(numbers) });
  });

  const port = Number(process.env.PORT) || 4000;
  app.listen(port, () => {
    console.log(`Server started at: http://localhost:${port}`);
  });
};

main();
