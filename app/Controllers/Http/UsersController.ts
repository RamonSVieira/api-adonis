import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UsersController {
  // Retorna uma lista de itens
  public async index({}: HttpContextContract) {}

  // Exibir o formulário de criação
  // Nao usaremos pois quem vai fazer isso é o front
  // public async create({}: HttpContextContract) {}

  // Processar a criação de um novo com base nos dados do form
  public async store({}: HttpContextContract) {}

  // Exibir detalhes de um item específico
  public async show({}: HttpContextContract) {}

  // Exibe o form de edição de um item existente
  // Nao usaremos pois quem vai fazer isso é o front
  // public async edit({}: HttpContextContract) {}

  // Processa os dados do form de edição
  public async update({}: HttpContextContract) {}

  // Exclui um item existente
  public async destroy({}: HttpContextContract) {}
}
