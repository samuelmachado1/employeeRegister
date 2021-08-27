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
    return response.status(200).json({
      resposta: 'sucess',
      nome: employee.name,
      last_name: employee.last_name,
      role: employee.role,
    })
  }

  public async update({ response, request, params }: HttpContextContract) {
    const employeeData = request.only(['cpf', 'name', 'last_name', 'role', 'birthday', 'salary'])
    await Employee.query()
      .where('cpf', params.id)
      .update({ ...employeeData })

    const newEmployee = await Employee.query().where('cpf', params.id)

    return response.status(200).json({ resposta: 'sucess', newEmployee: newEmployee })
  }

  public async destroy({ response, params }: HttpContextContract) {
    await Employee.query().where('cpf', params.id).delete()

    return response.status(200).json({ code: 200, status: 'success' })
  }
}
