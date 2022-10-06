import { Request, Response } from "express";
import { subjectRepository } from "../repositories/subjectRepository";

export class SubjectController {
    async create(req: Request, res: Response){
        // criar disciplina
        const { name } = req.body

        // caso não passou/recebeu ou nome
        if(!name) {
            return res.status(400).json({message: 'O nome é obrigatório'})
        }
        // caso passou o nome
        try {
            const newSubject = subjectRepository.create({ name })

            await subjectRepository.save(newSubject)

            return res.status(201).json(newSubject)
        } catch (error) {
            console.log(error)
            return res.status(500).json({message: 'Erro interno do servidor'})
        }
    }
}