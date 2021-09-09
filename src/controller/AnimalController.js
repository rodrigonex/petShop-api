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

  async updateAnimal(request, response) {
    const { nome, tipo, proprietario_id } = request.body;
    const { id } = request.params;

    if (!nome || !tipo || !proprietario_id || !id) {
      throw new Error('nome, tipo e proprietario_id e id são obrigatorios');
    }
    response.send(await AnimalServices.updateAnimal({ nome, tipo, proprietario_id }, id));
  }

  async getAnimalByProprietario(request, response) {
    const { id } = request.params;
    if (!id) {
      throw new Error('proprietarioId is required');
    }
    response.send(await AnimalServices.getByProprietario(id));
  }

  async deleteAnimal(request, response) {
    const { id } = request.params;
    if (!id) {
      throw new Error('proprietarioId is required');
    }
    await AnimalServices.deleteAnimal(id);
    response.end();
  }
}

export default new AnimalController();
