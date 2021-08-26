import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Employee from 'App/Models/Employee'
export default class EmployeesController {
  public async index({ response }: HttpContextContract) {
    const employees = await Employee.query()
    return response.status(200).json({ employees: employees })
  }
  public async store({ response, request }: HttpContextContract) {
    const bodyRequest = request.only([
      'office_id',
      'cpf',
      'name',
      'last_name',
      'role',
      'birthday',
      'salary',
    ])
    const employee = await Employee.create({ ...bodyRequest })
    return response.status(200).json({ resposta: 'sucess', employee })
  }
}
