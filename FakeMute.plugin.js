//META{"name":"ExampleLibraryPlugin", "authorId":"538712957870276614", "invite":"wXRWTQEc7p", "website":"https://www.facebook.com/KimWoramet555/"}*//
//import {DiscordModules as Modules} from "modules";
class ExampleLibraryPlugin {
    
    getName() {return "Fake Deafen 🤡";}
    getDescription() {return "เข้าห้อง, ปิดไมค์ปิดหู, เปิดและปิดปล๊กอิน, เปิดไมค์และสามารถพูดได้100% , วิธีออกปิดดิสเปิดใหม่";}
    getVersion() {return "0.0.0.9999";}
    getAuthor() {return "KimWoramet";}
    



    start() {
        if (!global.ZeresPluginLibrary) return window.BdApi.alert("Library Missing",`The library plugin needed for ${this.getName()} is missing.<br /><br /> <a href="https://raw.githubusercontent.com/KimWoramet/FakeMute-Discord-Plugins/main/LibraryFakeMute.plugin.js" target="_blank">Click here to download the library!</a>`);
        ZLibrary.PluginUpdater.checkForUpdate(this.getName(), this.getVersion(), "LINK_TO_RAW_CODE");
        
        var text = new TextDecoder("utf-8");

WebSocket.prototype.original = WebSocket.prototype.send;
WebSocket.prototype.send = function(data) {
    if (Object.prototype.toString.call(data) === "[object ArrayBuffer]") {
        if (text.decode(data).includes("self_deaf")) {
            console.log("found mute/deafen");
            data = data.replace('"self_mute":false', 'NiceOneDiscord');
            console.log("Active");
        }
    }
    WebSocket.prototype.original.apply(this, [data]);
}
window.BdApi.alert("สำเร็จ",`แอบฟังให้สนุกพวกหน้าหี`);

    }



    stop() {

    }
}
