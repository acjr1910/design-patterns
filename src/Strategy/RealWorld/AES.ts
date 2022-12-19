import { IEncryptionAlgorithm } from "./@interfaces/EncryptionAlgorithm";

export default class AES implements IEncryptionAlgorithm {
  send(message: string): void {
      console.log('Using AES algorithm...');
  }
}