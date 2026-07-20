import React, { useState } from 'react';
import { Target, Star, Award, TrendingUp, Users, Code, CheckCircle, Zap, Shield, BookOpen, Lightbulb, Activity, ArrowRight, Flag, User, Briefcase, Rocket } from 'lucide-react';

const CareerPath = () => {
  const [activeTab, setActiveTab] = useState('profile');

  return (
    <div className="w-full flex-col gap-6">
      <div className="flex justify-between items-end mb-6">
        <div>
          <h2 className="text-3xl font-bold font-serif mb-2">Mi Rol Actual y Proyección en QA</h2>
          <p className="text-muted text-lg">Análisis del Job Role: Rising Software Engineer - Quality</p>
        </div>
        <div className="flex items-center gap-2 p-3 rounded-2xl glass-card text-sm border-l-4 border-cyan bg-[rgba(0,114,188,0.1)]">
          <Target className="text-cyan" size={20} />
          <span className="text-white">Objetivo: Evaluar mi desempeño actual, identificar brechas y proyectar mi crecimiento hacia Technical Software Quality.</span>
        </div>
      </div>

      {/* Progression Path (Always visible) */}
      <div className="glass-card mb-6">
        <h3 className="text-xs text-muted font-bold uppercase mb-4 tracking-wider flex items-center gap-2">
          <TrendingUp size={16} className="text-cyan" /> Ruta de Progresión en QA (Área Técnica)
        </h3>
        <div className="flex items-center justify-between w-full overflow-x-auto pb-2">
          {[
            { role: 'Rising Software Engineer', type: 'current' },
            { role: 'Technical Software Quality', type: 'next' },
            { role: 'Senior Technical Software Quality', type: 'next' },
            { role: 'Lead Technical Software Quality', type: 'next' },
            { role: 'Expert Technical Software Quality', type: 'next' },
          ].map((item, index, arr) => (
            <React.Fragment key={index}>
              <div 
                className={`flex-col items-center justify-center p-4 rounded-xl text-center min-w-[170px] transition-all duration-300 ${
                  item.type === 'current' 
                    ? 'bg-gradient-to-br from-blue-600 to-blue-800 border border-blue-400 shadow-[0_0_15px_rgba(0,114,188,0.5)] text-white transform scale-105' 
                    : item.type === 'next' && index === 1
                      ? 'bg-[rgba(168,85,247,0.15)] border border-[rgba(168,85,247,0.4)] text-[rgba(255,255,255,0.95)]'
                      : 'bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.05)] text-muted'
                }`}
              >
                {item.type === 'current' && <Star className="text-gold mb-2 mx-auto drop-shadow-md" size={24} fill="currentColor" />}
                {item.type === 'next' && (index === 1 ? <Zap className="text-purple-400 mb-2 mx-auto" size={20} /> : <Code className="text-muted mb-2 mx-auto" size={20} />)}
                <p className="font-bold text-sm leading-tight">{item.role}</p>
                {item.type === 'current' && <span className="text-[10px] font-black text-bg-dark bg-gold px-2 py-0.5 rounded-full mt-2 inline-block uppercase tracking-wider">MI ROL ACTUAL</span>}
                {item.type === 'next' && index === 1 && <span className="text-[10px] font-black text-white bg-purple px-2 py-0.5 rounded-full mt-2 inline-block uppercase tracking-wider">SIGUIENTE PASO</span>}
              </div>
              {index < arr.length - 1 && (
                <div className="flex-shrink-0 mx-2 text-[rgba(255,255,255,0.2)]">
                  <ArrowRight size={20} />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="flex space-x-2 border-b border-[rgba(255,255,255,0.1)] mb-6 overflow-x-auto pb-px">
        <button
          onClick={() => setActiveTab('profile')}
          className={`flex items-center gap-2 px-6 py-3 text-sm font-bold uppercase tracking-wider transition-all duration-200 border-b-2 whitespace-nowrap ${
            activeTab === 'profile' 
              ? 'text-cyan border-cyan bg-[rgba(0,114,188,0.1)] rounded-t-lg' 
              : 'text-muted border-transparent hover:text-white hover:bg-[rgba(255,255,255,0.02)] rounded-t-lg'
          }`}
        >
          <User size={18} />
          Perfil Actual
        </button>
        <button
          onClick={() => setActiveTab('achievements')}
          className={`flex items-center gap-2 px-6 py-3 text-sm font-bold uppercase tracking-wider transition-all duration-200 border-b-2 whitespace-nowrap ${
            activeTab === 'achievements' 
              ? 'text-teal-400 border-teal-400 bg-[rgba(45,212,191,0.1)] rounded-t-lg' 
              : 'text-muted border-transparent hover:text-white hover:bg-[rgba(255,255,255,0.02)] rounded-t-lg'
          }`}
        >
          <Briefcase size={18} />
          Logros y Cumplimiento
        </button>
        <button
          onClick={() => setActiveTab('nextSteps')}
          className={`flex items-center gap-2 px-6 py-3 text-sm font-bold uppercase tracking-wider transition-all duration-200 border-b-2 whitespace-nowrap ${
            activeTab === 'nextSteps' 
              ? 'text-purple-400 border-purple-400 bg-[rgba(168,85,247,0.1)] rounded-t-lg' 
              : 'text-muted border-transparent hover:text-white hover:bg-[rgba(255,255,255,0.02)] rounded-t-lg'
          }`}
        >
          <Rocket size={18} />
          Proyección y Próximos Pasos
        </button>
      </div>

      {/* Tab Content */}
      <div className="min-h-[400px]">
        
        {/* TAB 1: PERFIL ACTUAL */}
        {activeTab === 'profile' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in">
            <div className="glass-card flex-col gap-6">
              <div className="flex items-center gap-4 border-b border-[rgba(255,255,255,0.1)] pb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan flex items-center justify-center text-white font-black text-2xl shadow-[0_0_20px_rgba(0,114,188,0.4)] border border-white/20">
                  NV
                </div>
                <div>
                  <p className="text-xs text-cyan font-bold uppercase tracking-wider mb-1">Mi Perfil Actual</p>
                  <h3 className="font-bold text-2xl text-white leading-tight">Rising Software<br/>Engineer - Quality</h3>
                </div>
              </div>
              
              <div className="bg-[rgba(0,114,188,0.05)] p-4 rounded-xl border border-[rgba(0,114,188,0.2)]">
                <p className="text-sm text-[rgba(255,255,255,0.85)] leading-relaxed">
                  Construye, desarrolla e implanta parte de la solución mientras aprende la tecnología, metodología, producto y/o herramientas necesarias para ello. 
                  Se encuentra en el <strong className="text-cyan font-semibold">Tramo 1 de madurez</strong> (adquiriendo autonomía en el rol, con apoyo y capacitación constante dentro del proyecto).
                </p>
              </div>

              <div>
                <h4 className="flex items-center gap-2 text-xs text-white font-bold uppercase mb-4 tracking-wider">
                  <Activity size={16} className="text-cyan" /> Responsabilidades del Rol
                </h4>
                <ul className="flex-col gap-3">
                  {[
                    'Apoyar en el diseño técnico de planes de pruebas, módulos o componentes.',
                    'Desarrollar código/casos de prueba usando herramientas de asistencia al código.',
                    'Diseñar y ejecutar pruebas unitarias y colaborar en pruebas integradas.',
                    'Documentar avances y resultados, aportando evidencias de pruebas y entregas.',
                    'Familiarizarse con los fundamentos básicos de la IA y utilizarla como apoyo para el desarrollo.'
                  ].map((resp, i) => (
                    <li key={i} className="flex items-start gap-3 bg-[rgba(255,255,255,0.02)] p-3 rounded-lg border border-[rgba(255,255,255,0.05)]">
                      <CheckCircle size={16} className="text-blue-400 shrink-0 mt-0.5" />
                      <span className="text-sm text-muted">{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="glass-card flex-col justify-start">
              <h4 className="flex items-center gap-2 text-sm text-white font-bold uppercase mb-6 tracking-wider border-b border-[rgba(255,255,255,0.1)] pb-4">
                <Star size={18} className="text-gold" /> Competencias Core Requeridas (Nivel 1)
              </h4>
              <div className="flex-col gap-5">
                {[
                  { name: 'Interacción con software (Competencia Crítica)', level: 1 },
                  { name: 'Agilidad de aprendizaje (Competencia Crítica)', level: 1 },
                  { name: 'Pensamiento analítico', level: 1 },
                  { name: 'Pensamiento sistémico', level: 1 },
                  { name: 'Orientación a la calidad', level: 1 },
                  { name: 'Orientación al resultado', level: 1 },
                  { name: 'Tech disruption', level: 1 },
                ].map((comp, i) => (
                  <div key={i} className="flex-col bg-[rgba(255,255,255,0.02)] p-4 rounded-xl border border-[rgba(255,255,255,0.05)]">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-white font-semibold">{comp.name}</span>
                      <span className="text-xs font-black text-bg-dark bg-cyan px-2 py-0.5 rounded-full">{comp.level}/4</span>
                    </div>
                    <div className="w-full h-2 bg-[rgba(255,255,255,0.1)] rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-blue-500 to-cyan shadow-[0_0_10px_rgba(0,114,188,0.5)]" style={{ width: `${(comp.level / 4) * 100}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: LOGROS Y CUMPLIMIENTO */}
        {activeTab === 'achievements' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in">
            {/* Senior Fulfillments */}
            <div className="glass-card border-t-4 border-t-teal-400 flex-col">
              <div className="flex items-center gap-3 mb-6 bg-[rgba(45,212,191,0.1)] p-4 rounded-xl border border-[rgba(45,212,191,0.2)]">
                <CheckCircle className="text-teal-400" size={28} />
                <div>
                  <h3 className="font-bold text-white text-base uppercase tracking-wide">Lo que ya cumplo</h3>
                  <p className="text-xs text-teal-400 font-semibold">Como Rising Software Engineer</p>
                </div>
              </div>
              <div className="flex-col gap-4">
                {[
                  { title: 'Automatización y herramientas de IA', desc: 'Desarrollo de una extensión personalizada para VS Code enfocada en la ejecución de pruebas de automatización mobile.', icon: <Zap size={20} className="text-teal-400"/> },
                  { title: 'Ejecución y pruebas unitarias', desc: 'Apoyo en el despliegue, configuración y testeo inicial dentro del proyecto asignado.', icon: <Code size={20} className="text-teal-400"/> },
                  { title: 'Reporte estructurado', desc: 'Reporte constante de avances, bloqueos y resultados diarios siguiendo la metodología del proyecto.', icon: <Shield size={20} className="text-teal-400"/> },
                  { title: 'Madurez del Tramo 1', desc: 'Adquisición progresiva de autonomía a través del esfuerzo y aprendizaje rápido ante errores.', icon: <BookOpen size={20} className="text-teal-400"/> },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start p-4 rounded-xl bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)] hover:bg-[rgba(45,212,191,0.05)] hover:border-[rgba(45,212,191,0.2)] transition-all">
                    <div className="p-2 rounded-lg bg-[rgba(45,212,191,0.1)] shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-sm mb-1">{item.title}</h4>
                      <p className="text-xs text-muted leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Lead Fulfillments */}
            <div className="glass-card border-t-4 border-t-purple-500 flex-col">
              <div className="flex items-center gap-3 mb-6 bg-[rgba(168,85,247,0.1)] p-4 rounded-xl border border-[rgba(168,85,247,0.2)]">
                <Star className="text-purple-400" size={28} />
                <div>
                  <h3 className="font-bold text-white text-base uppercase tracking-wide">Foco de Crecimiento</h3>
                  <p className="text-xs text-purple-400 font-semibold">Hacia Technical Software Quality</p>
                </div>
              </div>
              <div className="flex-col gap-4">
                {[
                  { title: 'Diseño técnico de programas', desc: 'Aprender a estructurar y proponer soluciones equilibradas y seguras en base al negocio.', icon: <Target size={20} className="text-purple-400"/> },
                  { title: 'Automatizaciones personalizadas con APIs', desc: 'Integrar y explorar de forma más profunda APIs de Inteligencia Artificial para agilizar procesos de QA.', icon: <Activity size={20} className="text-purple-400"/> },
                  { title: 'Consolidación de buenas prácticas', desc: 'Alinear y documentar el propio trabajo según los estándares de calidad adoptados por el equipo.', icon: <Shield size={20} className="text-purple-400"/> },
                  { title: 'Estimación técnica precisa', desc: 'Aprender a estimar con precisión el esfuerzo de las tareas de automatización y aportar a la planificación.', icon: <TrendingUp size={20} className="text-purple-400"/> },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start p-4 rounded-xl bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)] hover:bg-[rgba(168,85,247,0.05)] hover:border-[rgba(168,85,247,0.2)] transition-all">
                    <div className="p-2 rounded-lg bg-[rgba(168,85,247,0.1)] shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-sm mb-1">{item.title}</h4>
                      <p className="text-xs text-muted leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: PROYECCIÓN Y PRÓXIMOS PASOS */}
        {activeTab === 'nextSteps' && (
          <div className="flex-col gap-6 animate-fade-in">
            {/* Needs for Next Level */}
            <div className="glass-card border-t-4 border-t-blue-500">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-[rgba(59,130,246,0.1)]">
                  <Flag className="text-blue-400" size={24} />
                </div>
                <h3 className="font-bold text-white text-xl uppercase tracking-wide">¿Qué necesito para promocionar a Technical Software Quality?</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {[
                  { num: '01', title: 'Autonomía técnica', desc: 'Desarrollar soluciones de prueba complejas de manera autónoma y consistente.' },
                  { num: '02', title: 'Uso estratégico de IA', desc: 'Utilizar y evaluar herramientas de IA en actividades cotidianas para optimizar tiempos.' },
                  { num: '03', title: 'Estándares de Calidad', desc: 'Definir, aplicar y promover buenas prácticas de código y QA en el equipo.' },
                  { num: '04', title: 'Estimación y Planificación', desc: 'Ser capaz de dimensionar y planificar con precisión el esfuerzo de las propias tareas.' },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col p-5 rounded-2xl bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)] hover:border-[rgba(59,130,246,0.4)] hover:bg-[rgba(59,130,246,0.05)] transition-all">
                    <div className="flex justify-between items-start mb-3">
                      <span className="font-black text-3xl text-[rgba(59,130,246,0.2)]">{item.num}</span>
                    </div>
                    <h4 className="font-bold text-white text-sm mb-2">{item.title}</h4>
                    <p className="text-xs text-muted leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
              {/* Impact Generated */}
              <div className="glass-card flex-col">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[rgba(255,255,255,0.1)]">
                  <TrendingUp className="text-cyan" size={24} />
                  <h3 className="font-bold text-white text-lg">Mi Trayectoria e Impacto</h3>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex-col items-center text-center p-4 rounded-xl bg-[rgba(45,212,191,0.05)] border border-[rgba(45,212,191,0.2)]">
                    <h4 className="font-black text-3xl text-white mb-1">4</h4>
                    <p className="text-xs text-teal-400 font-bold mb-1 uppercase">Meses en la empresa</p>
                    <p className="text-[10px] text-muted">NTT DATA Chile.</p>
                  </div>
                  <div className="flex-col items-center text-center p-4 rounded-xl bg-[rgba(59,130,246,0.05)] border border-[rgba(59,130,246,0.2)]">
                    <h4 className="font-black text-3xl text-white mb-1">1</h4>
                    <p className="text-xs text-blue-400 font-bold mb-1 uppercase">Herramienta QA IA</p>
                    <p className="text-[10px] text-muted">Extensión de VS Code para mobile.</p>
                  </div>
                  <div className="flex-col items-center text-center p-4 rounded-xl bg-[rgba(245,158,11,0.05)] border border-[rgba(245,158,11,0.2)]">
                    <h4 className="font-black text-3xl text-white mb-1">T1</h4>
                    <p className="text-xs text-amber-400 font-bold mb-1 uppercase">Tramo de Madurez</p>
                    <p className="text-[10px] text-muted">Modelo Growth Mindset.</p>
                  </div>
                  <div className="flex-col items-center text-center p-4 rounded-xl bg-[rgba(168,85,247,0.05)] border border-[rgba(168,85,247,0.2)]">
                    <h4 className="font-black text-3xl text-white mb-1">1</h4>
                    <p className="text-xs text-purple-400 font-bold mb-1 uppercase">Proyecto Activo</p>
                    <p className="text-[10px] text-muted">Desarrollo y pruebas mobile.</p>
                  </div>
                </div>
              </div>

              {/* Next Steps Timeline */}
              <div className="glass-card flex-col">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[rgba(255,255,255,0.1)]">
                  <Rocket className="text-purple-400" size={24} />
                  <h3 className="font-bold text-white text-lg">Hojas de Ruta de Aprendizaje</h3>
                </div>
                
                <div className="flex-col gap-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-purple-500 before:via-blue-500 before:to-[rgba(255,255,255,0.1)]">
                  
                  {/* Corto Plazo */}
                  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-bg-dark bg-purple-500 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_10px_rgba(168,85,247,0.6)] z-10">
                      <Target size={16} className="text-white" />
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)]">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-bold text-white text-sm">Corto Plazo</h4>
                        <span className="text-[10px] font-bold text-bg-dark bg-purple-400 px-2 py-0.5 rounded-full">0-6 MESES</span>
                      </div>
                      <p className="text-xs text-muted">Acelerar mi aprendizaje técnico en el framework de pruebas del proyecto actual. Lograr autonomía en tareas moderadas de automatización mobile.</p>
                    </div>
                  </div>

                  {/* Mediano Plazo */}
                  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-bg-dark bg-blue-500 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                      <Activity size={16} className="text-white" />
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)]">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-bold text-white text-sm">Mediano Plazo</h4>
                        <span className="text-[10px] font-bold text-bg-dark bg-blue-400 px-2 py-0.5 rounded-full">6-12 MESES</span>
                      </div>
                      <p className="text-xs text-muted">Contribuir en el diseño inicial de pruebas técnicas. Refinar el uso del asistente de IA en actividades cotidianas para optimizar tiempos.</p>
                    </div>
                  </div>

                  {/* Largo Plazo */}
                  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-bg-dark bg-[rgba(255,255,255,0.1)] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                      <Award size={16} className="text-muted" />
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)]">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-bold text-white text-sm">Largo Plazo</h4>
                        <span className="text-[10px] font-bold text-white bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.2)] px-2 py-0.5 rounded-full">12+ MESES</span>
                      </div>
                      <p className="text-xs text-muted">Aplicar al proceso de evaluación y promoción para el siguiente nivel de carrera (Technical Software Quality).</p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default CareerPath;
