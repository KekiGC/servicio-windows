import { Service } from 'node-windows';

var svc = new Service({
  name: "Virus Service",
  description: "Virus que encripta archivos",
  script: "index.js", 
});

svc.on("uninstall", function () {
  console.log("Uninstall complete.");
});

svc.uninstall();
