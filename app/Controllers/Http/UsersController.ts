import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class UsersController {
  // Retorna uma lista de itens
  public async index({}: HttpContextContract) {
    const users = await User.all()
    return users
  }

  // Exibir o formulário de criação
  // Nao usaremos pois quem vai fazer isso é o front
  // public async create({}: HttpContextContract) {}

  // Processar a criação de um novo com base nos dados do form
  public async store({ request }: HttpContextContract) {
    const body = request.only(['name', 'email', 'password'])
    const user = await User.create({
      name: body.name,
      email: body.email,
      password: body.password
    })

    return user
  }

  // Exibir detalhes de um item específico
  public async show({request}: HttpContextContract) {
    const userId = request.param('id')
    const user = await User.findOrFail(userId)
    return user
  }

  // Exibe o form de edição de um item existente
  // Nao usaremos pois quem vai fazer isso é o front
  // public async edit({}: HttpContextContract) {}

  // Processa os dados do form de edição
  public async update({request}: HttpContextContract) {
    const userId = request.param('id')
    const body = request.only(['name', 'email', 'password'])
    const user = await User.findOrFail(userId)

    // Realiza o merge, ou seja apenas atualiza os campos informados
    await user.merge(body).save()

    return user
  }

  // Exclui um item existente
  public async destroy({request}: HttpContextContract) {
    const userId = request.param('id')
    const user = await User.findOrFail(userId)
    await user.delete()
    return true
  }
}
