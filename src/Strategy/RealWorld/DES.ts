import { IEncryptionAlgorithm } from "./@interfaces/EncryptionAlgorithm";

export default class DES implements IEncryptionAlgorithm {
  send(message: string): void {
      console.log('Using DES algorithm...');
  }
}