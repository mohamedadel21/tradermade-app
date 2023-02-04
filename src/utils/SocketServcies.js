import io from "socket.io-client";
import { socket_api_key } from "../utils";

const SOCKET_URL = "https://marketdata.tradermade.com";

class WSService {
  initializeSocket = async () => {
    try {
      var socket = io(SOCKET_URL, {
        transports: ["websocket"],
      });

      socket.on("connect", function () {
        console.log(
          "Connected! Please CTRL+C and restart if you see this messsage more than twice"
        );
        console.log("disconnecting and reconnecting can take upto a minute");
        console.log(".......");
        socket.emit("login", { userKey: socket_api_key });
      });

      socket.on("disconnect", function (msg) {
        console.log(msg);
      });

      socket.on("handshake", function (msg) {
        socket.emit("symbolSub", { symbol: "USDJPY" });
        socket.emit("symbolSub", { symbol: "GBPUSD" });
        socket.emit("symbolSub", { symbol: "EURUSD" });
        socket.emit("symbolSub", { symbol: "USDEUR" });
      });

      socket.on("subResponse", function (msg) {
        console.log(msg);
      });

      socket.on("message", function (msg) {
        console.log(msg);
      });

    
    } catch (error) {
      console.log("scoket is not inialized", error);
    }
  };
}

const socketServcies = new WSService();

export default socketServcies;
