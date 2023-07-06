import express, { Request, Response, Router } from "express";

const router: Router = express.Router();

router.post("/multiply", (req: Request, res: Response) => {
  try {
    const { num1, num2, operator } = req.body;

    if (typeof num1 !== "number" || typeof num2 !== "number") {
      throw new Error("Invalid input. Both 'num1' and 'num2' should be numbers.");
    }

    const result: number = Number(num1) * Number(num2);
    res.json({ num1, operator, num2, result });
  } catch (error) {
    res.status(500).json({ error: "An error occurred while performing multiplication." });
  }
});

router.post("/divide", (req: Request, res: Response) => {
  try {
    const { num1, num2, operator } = req.body;

    if (typeof num1 !== "number" || typeof num2 !== "number") {
      throw new Error("Invalid input. Both 'num1' and 'num2' should be numbers.");
    }

    if (num2 === 0) {
      throw new Error("Invalid input. Cannot divide by zero.");
    }

    const result: number = Number(num1) / Number(num2);
    res.json({ num1, operator, num2, result });
  } catch (error) {
    res.status(500).json({ error: "An error occurred while performing division." });
    
  }
});

export default router;
