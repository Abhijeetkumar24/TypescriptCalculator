import express, { Request, Response, Router } from 'express';

const router: Router = express.Router();

router.post('/add', (req: Request, res: Response) => {
  try {
    const { num1, num2, operator } = req.body;
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
      throw new Error('Invalid input types');
    }
    const result = Number(num1) + Number(num2);
    res.json({ num1, operator, num2, result });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred.' });
  }
});

router.post('/sub', (req: Request, res: Response) => {
  try {
    const { num1, num2, operator } = req.body;
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
      throw new Error('Invalid input types');
    }
    const result = Number(num1) - Number(num2);
    res.json({ num1, operator, num2, result });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred.' });
  }
});

export default router;
