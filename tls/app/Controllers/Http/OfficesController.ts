import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import Office from 'App/Models/Office'


export default class OfficesController {
    public async index({response}: HttpContextContract){
        const offices =  await Office.query()
        return response.status(200).json({id: offices})
    }

    public async store  ({ response, request }: HttpContextContract){
        const  description = request.only(["description"])
        // console.log("Ö QUE VEM --->", request.requestBody)
        const office = await Office.create(description)
        return response.status(200).json({'resposta': 'sucess', office})
    }

}
