import ProprietarioServices from '../services/ProprietarioServices.js';

class ProprietarioRepository {
  async getProprietarios(request, response) {
    response.send(await ProprietarioServices.getProprietarios());
  }

  async getProprietario(request, response) {
    const { id } = request.params;
    response.send(await ProprietarioServices.getProprietario(id));
  }

  async insertProprietario(request, response) {
    const proprietario = request.body;

    if (!proprietario.nome || !proprietario.telefone) {
      throw new Error('Nome e Telefone são obrigatorios.');
    }
    response.send(await ProprietarioServices.insertProprietario(proprietario));
  }

  async updateProprietario(request, response) {
    const { id } = request.params;
    const proprietario = request.body;

    if (!id || !proprietario.nome || !proprietario.telefone) {
      throw new Error('id, nome e telefone são obrigatorios');
    }
    response.send(await ProprietarioServices.updateProprietario(proprietario, id));
  }

  async deleteProprietario(request, response) {
    const { id } = request.params;
    await ProprietarioServices.deleteProprietario(id);
    response.end();
  }
}

export default new ProprietarioRepository();
