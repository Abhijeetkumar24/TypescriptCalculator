import express, { Request, Response, Router } from 'express';

const router: Router = express.Router();

router.post('/percent', (req: Request, res: Response) => {
  try {
    const { num1, num2, operator } = req.body;
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
      throw new Error('Input type error: num1 and num2 must be numbers');}
    const result: number = (Number(num1) / Number(num2)) * 100;
    res.json({ num1, operator, num2, result });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.post('/pow', (req: Request, res: Response) => {
  try {
    const { num1, num2, operator } = req.body;
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
      throw new Error('Input type error: num1 and num2 must be numbers');}
    const result: number = Math.pow(Number(num1), Number(num2));
    res.json({ num1, operator, num2, result });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default router;
