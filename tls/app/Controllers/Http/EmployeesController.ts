import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Database from '@ioc:Adonis/Lucid/Database'
import Employee from 'App/Models/Employee'
export default class EmployeesController {

    public async index({response}: HttpContextContract){
        const employees =  await Employee.query()
        return response.status(200).json({employees: employees})
    }

    public async store  ({ response, request }: HttpContextContract){
        
        const  description = request.only(["description"])        
        const office = await Employee.create(description)

        return response.status(200).json({'resposta': 'sucess', office})
    }

}
