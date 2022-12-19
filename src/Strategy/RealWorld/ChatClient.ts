import { IEncryptionAlgorithm } from "./@interfaces/EncryptionAlgorithm";

export default class ChatClient {
  private encryptionAlgorithmStrategy: IEncryptionAlgorithm;

  constructor(encryptionAlgorithmStrategy: IEncryptionAlgorithm) {
    this.encryptionAlgorithmStrategy = encryptionAlgorithmStrategy;
  }

  send(message: string): void {
    this.encryptionAlgorithmStrategy.send(message);

    console.log("Sending the encrypted message...");
  }
}
