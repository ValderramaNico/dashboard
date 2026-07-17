import React from 'react';
import { Calendar, BrainCircuit, CheckCircle2, Presentation } from 'lucide-react';

const InteligenciaArtificial = () => {
  return (
    <div className="w-full flex-col gap-6">
      <h2 className="text-2xl font-bold mb-4 font-serif">Inteligencia Artificial</h2>
      <p className="text-muted mb-6">Comunidad GenAI, IA Sessions y herramientas desarrolladas con IA.</p>
      
      <div className="glass-card mb-6 flex-col gap-6">
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-semibold text-xl">Eventos y Herramientas Presentadas</h3>
          <div className="pill-tag" style={{ background: 'rgba(0, 114, 188, 0.15)', color: 'var(--brand-blue)', borderColor: 'rgba(0, 114, 188, 0.3)' }}>
            <span>Hitos Recientes</span>
          </div>
        </div>

        {/* VS Code Extension Card */}
        <div className="p-6 rounded-3xl" style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid var(--glass-border)' }}>
          <div className="flex gap-6 items-start" style={{ flexWrap: 'wrap-reverse' }}>
            
            {/* Text details */}
            <div className="flex-col" style={{ flex: '2 1 400px' }}>
              <div className="flex items-center gap-2 mb-2 text-sm text-cyan font-semibold">
                <BrainCircuit size={20} />
                <span>Herramientas de Productividad IA</span>
              </div>
              
              <h4 className="font-serif font-bold text-2xl text-white mb-2">Extensión VS Code: Ejecutor de Automatización Mobile</h4>
              
              <div className="flex items-center gap-2 text-sm text-muted mb-4">
                <Calendar size={16} />
                <span>Presentado el Viernes 17 de Julio de 2026</span>
              </div>

              <p className="text-sm text-muted mb-4 leading-relaxed">
                Nueva extensión de Visual Studio Code desarrollada para facilitar la ejecución y visualización de test cases de automatización mobile de manera integrada, eliminando la necesidad de cambiar de contexto.
              </p>

              <div className="flex-col gap-2 mb-4">
                <div className="flex items-center gap-2 text-sm text-white">
                  <CheckCircle2 size={16} className="text-cyan" />
                  <span>Herramienta co-creada con IA mediante Axet Plugin utilizando el modelo Claude 3.5 Sonnet.</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-white mt-1">
                  <CheckCircle2 size={16} className="text-cyan" />
                  <span>Permite ejecutar pruebas mobile localmente o en la nube a través de BrowserStack y consultar reportes.</span>
                </div>
              </div>
            </div>

            {/* Extension Screenshot */}
            <div className="flex-col items-center" style={{ flex: '1 1 250px', minWidth: '220px' }}>
              <div className="rounded-2xl overflow-hidden border" style={{ borderColor: 'var(--glass-border)', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)' }}>
                <img 
                  src="/vscode_mobile_extension.jpg" 
                  alt="VS Code Mobile Automation Extension" 
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                  style={{ display: 'block' }}
                />
              </div>
              <p className="text-xs text-muted text-center mt-2 font-serif italic">Extensión para la ejecución y visualización del Test Dashboard</p>
            </div>

          </div>
        </div>



      </div>
      
    </div>
  );
};

export default InteligenciaArtificial;
