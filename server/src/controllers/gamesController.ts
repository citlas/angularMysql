import {Request,Response} from 'express';

import pool from '../database';

class GamesController{
   public async list  (req:Request, res:Response) {
    //res.send('my games')
    //res.json({text:'listing games'});
    const games = await pool.query('SELECT * FROM games')
    res.json(games)
   }
   public getOne  (req:Request, res:Response) {
    res.json({text:'this is game '+req.params.id});
   }
   public async create(req:Request, res:Response): Promise<void>{
       console.log(req.body)
       await pool.query('INSERT INTO games set ?', [req.body])
        res.json({message: 'game saved'});
   }
   public delete(req:Request, res:Response){
    res.json({text: 'deleting a game '+req.params.id});
   }
   public update(req:Request, res:Response){
    res.json({text: 'updating a game '+req.params.id});
   }
}

const gamesController = new GamesController();
export default gamesController;