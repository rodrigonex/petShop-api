import AnimalRepository from '../repositories/AnimalRepository.js';
import ProprietarioRepository from '../repositories/ProprietarioRepository.js';

class AnimalServices {
  async getAnimais() {
    return await AnimalRepository.getAnimais();
  }

  async getByProprietario(id) {
    return await AnimalRepository.getAnimalByProprietario(id);
  }

  async getAnimal(id) {
    return await AnimalRepository.getAnimal(id);
  }

  async insertAnimal({ nome, tipo, proprietario_id }) {
    const proprietarioIsValid = await ProprietarioRepository.getProprietario(proprietario_id);

    if (!proprietarioIsValid) {
      throw new Error('Proprietario não encontrado');
    }

    return await AnimalRepository.insertAnimal({ nome, tipo, proprietario_id });
  }

  async updateAnimal({ nome, tipo, proprietario_id }, id) {
    const proprietarioIdIsValid = await ProprietarioRepository.getProprietario(proprietario_id);
    if (!proprietarioIdIsValid) {
      throw new Error('proprietario_id invalido');
    }
    return await AnimalRepository.updateAnimal({ nome, tipo, proprietario_id }, id);
  }

  async deleteAnimal(id) {
    await AnimalRepository.deleteAnimal(id);
  }
}

export default new AnimalServices();
