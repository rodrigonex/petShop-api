import AnimalServices from '../services/AnimalServices.js';

class AnimalController {
  async getAnimais(request, response) {
    response.send(await AnimalServices.getAnimais());
  }

  async getAnimal(request, response) {
    const { id } = request.params;
    response.send(await AnimalServices.getAnimal(id));
  }

  async insertAnimal(request, response) {
    const { nome, tipo, proprietario_id } = request.body;
    if (!nome || !tipo || !proprietario_id) {
      throw new Error('nome, tipo e proprietario_id são obrigatorios');
    }
    response.send(await AnimalServices.insertAnimal({ nome, tipo, proprietario_id }));
  }
}

export default new AnimalController();
