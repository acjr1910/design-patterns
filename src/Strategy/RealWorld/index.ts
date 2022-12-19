import ChatClient from "./ChatClient";
import AES from "./AES";
import DES from "./DES";


var chat = new ChatClient(new DES());
chat.send('hello world!');