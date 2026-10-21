// @ts-check
// Habilitamos la verificación de tipos de TypeScript en este archivo JavaScript
import { defineConfig } from 'astro/config';

// Importamos el plugin oficial de Tailwind CSS v4 para el empaquetador Vite
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
// Función principal donde se exporta la configuración de Astro
export default defineConfig({
  
  // Objeto de configuración donde se pasa la lista de plugins hacia el motor interno de Vite
  vite: {
    
    // Array de plugins que procesarán assets y estilos dentro de Vite
    plugins: [
      
      // Ejecutamos el plugin que permite compilar las directivas de Tailwind CSS v4 (como @import "tailwindcss";)
      tailwindcss()
      
    ]
  }
});