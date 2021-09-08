import ProprietarioRepository from '../repositories/ProprietarioRepository.js';

class ProprietarioServices {
  async getProprietarios() {
    return await ProprietarioRepository.getProprietarios();
  }

  async getProprietario(id) {
    return await ProprietarioRepository.getProprietario(id);
  }

  async insertProprietario(proprietario) {
    return await ProprietarioRepository.insertProprietario(proprietario);
  }

  async updateProprietario(proprietario, id) {
    return await ProprietarioRepository.updateProprietario(proprietario, id);
  }

  async deleteProprietario(id) {
    await ProprietarioRepository.deleteProprietario(id);
  }
}

export default new ProprietarioServices();
