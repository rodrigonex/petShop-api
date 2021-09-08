import AnimalRepository from '../repositories/AnimalRepository.js';
import ProprietarioRepository from '../repositories/ProprietarioRepository.js';

class AnimalServices {
  async getAnimais() {
    return await AnimalRepository.getAnimais();
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
}

export default new AnimalServices();
