import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Office from 'App/Models/Office'
export default class OfficesController {
  public async index({ response }: HttpContextContract) {
    const offices = await Office.query()
    return response.status(200).json({ id: offices })
  }

  public async store({ response, request }: HttpContextContract) {
    const description = request.only(['description'])
    const office = await Office.create(description)
    return response.status(200).json({ resposta: 'sucess', office })
  }

  public async update({ response, request, params }: HttpContextContract) {
    const description = request.only(['description'])

    await Office.query()
      .where('id', params.id)
      .update({ ...description })

    const newOffice = await Office.query().where('id', params.id)

    return response.status(200).json({ resposta: 'sucess', newOffice })
  }
}
