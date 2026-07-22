import React, { useState } from 'react';
import { Target, Star, Award, TrendingUp, Code, CheckCircle, Zap, Shield, BookOpen, Activity, ArrowRight, User, Briefcase, Rocket } from 'lucide-react';

const progressionSteps = [
  { role: 'Rising Software Engineer', type: 'current' },
  { role: 'Technical Software Quality', type: 'highlight' },
  { role: 'Senior Technical Software Quality', type: 'next' },
  { role: 'Lead Technical Software Quality', type: 'next' },
  { role: 'Expert Technical Software Quality', type: 'next' },
];

const responsibilities = [
  'Apoyar en el diseño técnico de planes de pruebas, módulos o componentes.',
  'Desarrollar código/casos de prueba usando herramientas de asistencia al código.',
  'Diseñar y ejecutar pruebas unitarias y colaborar en pruebas integradas.',
  'Documentar avances y resultados, aportando evidencias de pruebas y entregas.',
  'Familiarizarse con los fundamentos básicos de la IA y utilizarla como apoyo para el desarrollo.',
];

const competencies = [
  { name: 'Interacción con software (Competencia Crítica)', level: 1 },
  { name: 'Agilidad de aprendizaje (Competencia Crítica)', level: 1 },
  { name: 'Pensamiento analítico', level: 1 },
  { name: 'Pensamiento sistémico', level: 1 },
  { name: 'Orientación a la calidad', level: 1 },
  { name: 'Orientación al resultado', level: 1 },
  { name: 'Tech disruption', level: 1 },
];

const currentFulfillments = [
  { title: 'Automatización y herramientas de IA', desc: 'Desarrollo de una extensión personalizada para VS Code enfocada en la ejecución de pruebas de automatización mobile.', icon: Zap },
  { title: 'Ejecución y pruebas unitarias', desc: 'Apoyo en el despliegue, configuración y testeo inicial dentro del proyecto asignado.', icon: Code },
  { title: 'Reporte estructurado', desc: 'Reporte constante de avances, bloqueos y resultados diarios siguiendo la metodología del proyecto.', icon: Shield },
  { title: 'Madurez del Tramo 1', desc: 'Adquisición progresiva de autonomía a través del esfuerzo y aprendizaje rápido ante errores.', icon: BookOpen },
];

const growthFocus = [
  { title: 'Diseño técnico de programas', desc: 'Aprender a estructurar y proponer soluciones equilibradas y seguras en base al negocio.', icon: Target },
  { title: 'Automatizaciones personalizadas con APIs', desc: 'Integrar y explorar de forma más profunda APIs de Inteligencia Artificial para agilizar procesos de QA.', icon: Activity },
  { title: 'Consolidación de buenas prácticas', desc: 'Alinear y documentar el propio trabajo según los estándares de calidad adoptados por el equipo.', icon: Shield },
  { title: 'Estimación técnica precisa', desc: 'Aprender a estimar con precisión el esfuerzo de las tareas de automatización y aportar a la planificación.', icon: TrendingUp },
];

const promotionNeeds = [
  { num: '01', title: 'Autonomía técnica', desc: 'Desarrollar soluciones de prueba complejas de manera autónoma y consistente.' },
  { num: '02', title: 'Uso estratégico de IA', desc: 'Utilizar y evaluar herramientas de IA en actividades cotidianas para optimizar tiempos.' },
  { num: '03', title: 'Estándares de Calidad', desc: 'Definir, aplicar y promover buenas prácticas de código y QA en el equipo.' },
  { num: '04', title: 'Estimación y Planificación', desc: 'Ser capaz de dimensionar y planificar con precisión el esfuerzo de las propias tareas.' },
];

const impactStats = [
  { value: '4', label: 'Meses en la empresa', sub: 'NTT DATA Chile.' },
  { value: '1', label: 'Herramienta QA IA', sub: 'Extensión de VS Code para mobile.' },
  { value: 'T1', label: 'Tramo de Madurez', sub: 'Modelo Growth Mindset.' },
  { value: '1', label: 'Proyecto Activo', sub: 'Desarrollo y pruebas mobile.' },
];

const roadmap = [
  { label: 'Corto Plazo', range: '0-6 MESES', desc: 'Acelerar mi aprendizaje técnico en el framework de pruebas del proyecto actual. Lograr autonomía en tareas moderadas de automatización mobile.', icon: Target },
  { label: 'Mediano Plazo', range: '6-12 MESES', desc: 'Contribuir en el diseño inicial de pruebas técnicas. Refinar el uso del asistente de IA en actividades cotidianas para optimizar tiempos.', icon: Activity },
  { label: 'Largo Plazo', range: '12+ MESES', desc: 'Aplicar al proceso de evaluación y promoción para el siguiente nivel de carrera (Technical Software Quality).', icon: Award },
];

const tabs = [
  { id: 'profile', label: 'Perfil Actual', icon: User },
  { id: 'achievements', label: 'Logros y Cumplimiento', icon: Briefcase },
  { id: 'nextSteps', label: 'Proyección y Próximos Pasos', icon: Rocket },
];

const PageHeader = () => (
  <div className="flex justify-between items-end mb-6" style={{ flexWrap: 'wrap', gap: '1rem' }}>
    <div>
      <h2 className="text-2xl font-bold font-serif mb-2">Mi Rol Actual y Proyección en QA</h2>
      <p className="text-muted text-lg">Análisis del Job Role: Rising Software Engineer - Quality</p>
    </div>
    <div className="glass-card flex items-center gap-2 p-3 text-sm" style={{ background: 'rgba(0,114,188,0.1)' }}>
      <Target className="text-cyan" size={20} />
      <span className="text-white">Objetivo: evaluar mi desempeño actual, identificar brechas y proyectar mi crecimiento hacia Technical Software Quality.</span>
    </div>
  </div>
);

const ProgressionPath = () => (
  <div className="glass-card mb-6">
    <h3 className="flex items-center gap-2 text-xs text-muted font-bold uppercase mb-4" style={{ letterSpacing: '0.08em' }}>
      <TrendingUp size={16} className="text-cyan" /> Ruta de Progresión en QA (Área Técnica)
    </h3>
    <div className="flex items-center justify-between w-full" style={{ overflowX: 'auto', paddingBottom: '0.5rem' }}>
      {progressionSteps.map((item, index, arr) => {
        const isCurrent = item.type === 'current';
        const isHighlight = item.type === 'highlight';
        const cardStyle = isCurrent
          ? { background: 'var(--brand-blue)', border: '1px solid var(--brand-blue-light)', color: '#fff' }
          : isHighlight
            ? { background: 'rgba(230,182,0,0.12)', border: '1px solid rgba(230,182,0,0.35)', color: 'rgba(255,255,255,0.95)' }
            : { background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', color: 'var(--text-muted)' };
        return (
          <React.Fragment key={index}>
            <div className="flex-col items-center justify-center text-center" style={{ ...cardStyle, padding: '1rem', borderRadius: '0.75rem', minWidth: '170px' }}>
              {isCurrent && <Star size={24} fill="currentColor" style={{ margin: '0 auto 0.5rem', color: 'var(--brand-gold)' }} />}
              {isHighlight && <Zap size={20} style={{ margin: '0 auto 0.5rem', color: 'var(--brand-gold)' }} />}
              {!isCurrent && !isHighlight && <Code size={20} style={{ margin: '0 auto 0.5rem', color: 'var(--text-muted)' }} />}
              <p className="font-bold text-sm" style={{ lineHeight: 1.25 }}>{item.role}</p>
              {isCurrent && (
                <span className="text-xs font-bold uppercase" style={{ color: 'var(--bg-dark)', background: 'var(--brand-gold)', padding: '0.15rem 0.5rem', borderRadius: '9999px', marginTop: '0.5rem', display: 'inline-block', letterSpacing: '0.05em' }}>
                  MI ROL ACTUAL
                </span>
              )}
              {isHighlight && (
                <span className="text-xs font-bold uppercase" style={{ color: '#fff', background: 'rgba(230,182,0,0.5)', padding: '0.15rem 0.5rem', borderRadius: '9999px', marginTop: '0.5rem', display: 'inline-block', letterSpacing: '0.05em' }}>
                  SIGUIENTE PASO
                </span>
              )}
            </div>
            {index < arr.length - 1 && (
              <div className="flex-shrink-0" style={{ margin: '0 0.5rem', color: 'rgba(255,255,255,0.2)' }}>
                <ArrowRight size={20} />
              </div>
            )}
          </React.Fragment>
        );
      })}
    </div>
  </div>
);

const TabNav = ({ activeTab, setActiveTab }) => (
  <div className="tab-list mb-6" role="tablist" aria-label="Secciones de proyección de carrera" style={{ width: 'fit-content', overflowX: 'auto' }}>
    {tabs.map(({ id, label, icon: Icon }) => (
      <button
        key={id}
        role="tab"
        aria-selected={activeTab === id}
        onClick={() => setActiveTab(id)}
        className="tab-button flex items-center gap-2"
        style={{
          background: activeTab === id ? 'var(--brand-blue)' : 'transparent',
          color: activeTab === id ? '#fff' : 'var(--text-muted)',
        }}
      >
        <Icon size={16} />
        {label}
      </button>
    ))}
  </div>
);

const CompetencyBar = ({ name, level }) => (
  <div className="flex-col p-4 rounded-xl" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
    <div className="flex justify-between items-center mb-2">
      <span className="text-sm text-white font-semibold">{name}</span>
      <span className="text-xs font-bold" style={{ color: '#fff', background: 'var(--brand-blue)', padding: '0.1rem 0.5rem', borderRadius: '9999px' }}>{level}/4</span>
    </div>
    <div className="w-full h-2 rounded-full" style={{ background: 'rgba(255,255,255,0.08)', overflow: 'hidden' }}>
      <div className="h-full rounded-full" style={{ width: `${(level / 4) * 100}%`, background: 'var(--brand-blue)' }} />
    </div>
  </div>
);

const ProfileTab = () => (
  <div className="grid grid-cols-2">
    <div className="glass-card flex-col gap-6">
      <div className="flex items-center gap-4" style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1.5rem' }}>
        <div className="flex items-center justify-center font-black text-lg" style={{ width: '4rem', height: '4rem', borderRadius: '1rem', background: 'var(--brand-blue)', color: '#fff', border: '1px solid rgba(255,255,255,0.2)' }}>
          NV
        </div>
        <div>
          <p className="text-xs text-cyan font-bold uppercase mb-1" style={{ letterSpacing: '0.06em' }}>Mi Perfil Actual</p>
          <h3 className="font-bold text-xl text-white" style={{ lineHeight: 1.2 }}>Rising Software Engineer - Quality</h3>
        </div>
      </div>

      <div className="p-4 rounded-xl" style={{ background: 'rgba(0,114,188,0.05)', border: '1px solid rgba(0,114,188,0.2)' }}>
        <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.85)' }}>
          Construye, desarrolla e implanta parte de la solución mientras aprende la tecnología, metodología, producto y/o herramientas necesarias para ello.
          Se encuentra en el <strong className="text-cyan font-semibold">Tramo 1 de madurez</strong> (adquiriendo autonomía en el rol, con apoyo y capacitación constante dentro del proyecto).
        </p>
      </div>

      <div>
        <h4 className="flex items-center gap-2 text-xs text-white font-bold uppercase mb-4" style={{ letterSpacing: '0.06em' }}>
          <Activity size={16} className="text-cyan" /> Responsabilidades del Rol
        </h4>
        <ul className="flex-col gap-3">
          {responsibilities.map((resp, i) => (
            <li key={i} className="flex items-start gap-3 p-3 rounded-xl" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
              <CheckCircle size={16} className="text-cyan" style={{ flexShrink: 0, marginTop: '0.15rem' }} />
              <span className="text-sm text-muted">{resp}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>

    <div className="glass-card flex-col">
      <h4 className="flex items-center gap-2 text-sm text-white font-bold uppercase mb-6" style={{ letterSpacing: '0.06em', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem' }}>
        <Star size={18} className="text-purple" /> Competencias Core Requeridas (Nivel 1)
      </h4>
      <div className="flex-col gap-5">
        {competencies.map((comp, i) => (
          <CompetencyBar key={i} name={comp.name} level={comp.level} />
        ))}
      </div>
    </div>
  </div>
);

const FulfillmentList = ({ items, accentColor, accentBg }) => (
  <div className="flex-col gap-4">
    {items.map((item, i) => {
      const Icon = item.icon;
      return (
        <div key={i} className="flex gap-4 items-start p-4 rounded-xl" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="p-2 rounded-lg flex-shrink-0" style={{ background: accentBg }}>
            <Icon size={20} style={{ color: accentColor }} />
          </div>
          <div>
            <h4 className="font-bold text-white text-sm mb-1">{item.title}</h4>
            <p className="text-xs text-muted leading-relaxed">{item.desc}</p>
          </div>
        </div>
      );
    })}
  </div>
);

const AchievementsTab = () => (
  <div className="grid grid-cols-2">
    <div className="glass-card flex-col">
      <div className="flex items-center gap-3 mb-6 p-4 rounded-xl" style={{ background: 'rgba(0,114,188,0.08)', border: '1px solid rgba(0,114,188,0.2)' }}>
        <CheckCircle className="text-cyan" size={28} />
        <div>
          <h3 className="font-bold text-white text-base uppercase" style={{ letterSpacing: '0.04em' }}>Lo que ya cumplo</h3>
          <p className="text-xs text-cyan font-semibold">Como Rising Software Engineer</p>
        </div>
      </div>
      <FulfillmentList items={currentFulfillments} accentColor="var(--brand-blue-light)" accentBg="rgba(0,114,188,0.1)" />
    </div>

    <div className="glass-card flex-col">
      <div className="flex items-center gap-3 mb-6 p-4 rounded-xl" style={{ background: 'rgba(230,182,0,0.08)', border: '1px solid rgba(230,182,0,0.25)' }}>
        <Star className="text-purple" size={28} />
        <div>
          <h3 className="font-bold text-white text-base uppercase" style={{ letterSpacing: '0.04em' }}>Foco de Crecimiento</h3>
          <p className="text-xs text-purple font-semibold">Hacia Technical Software Quality</p>
        </div>
      </div>
      <FulfillmentList items={growthFocus} accentColor="var(--brand-gold)" accentBg="rgba(230,182,0,0.1)" />
    </div>
  </div>
);

const PromotionNeedCard = ({ num, title, desc }) => (
  <div className="flex-col p-5 rounded-xl" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
    <span className="font-black text-2xl" style={{ color: 'rgba(0,114,188,0.35)' }}>{num}</span>
    <h4 className="font-bold text-white text-sm mb-2 mt-2">{title}</h4>
    <p className="text-xs text-muted leading-relaxed">{desc}</p>
  </div>
);

const ImpactStatCard = ({ value, label, sub }) => (
  <div className="flex-col items-center text-center p-4 rounded-xl" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
    <h4 className="font-black text-2xl text-white mb-1">{value}</h4>
    <p className="text-xs font-bold mb-1 uppercase text-cyan">{label}</p>
    <p className="text-xs text-muted">{sub}</p>
  </div>
);

const RoadmapItem = ({ label, range, desc, icon: Icon }) => (
  <div className="flex gap-4 items-start p-4 rounded-xl" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
    <div className="p-2 rounded-lg flex-shrink-0" style={{ background: 'rgba(0,114,188,0.1)' }}>
      <Icon size={18} className="text-cyan" />
    </div>
    <div className="flex-col" style={{ flex: 1 }}>
      <div className="flex items-center justify-between mb-1">
        <h4 className="font-bold text-white text-sm">{label}</h4>
        <span className="text-xs font-bold" style={{ color: '#fff', background: 'var(--brand-blue)', padding: '0.1rem 0.5rem', borderRadius: '9999px' }}>{range}</span>
      </div>
      <p className="text-xs text-muted leading-relaxed">{desc}</p>
    </div>
  </div>
);

const NextStepsTab = () => (
  <div className="flex-col gap-6">
    <div className="glass-card">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded-lg" style={{ background: 'rgba(0,114,188,0.1)' }}>
          <Rocket className="text-cyan" size={22} />
        </div>
        <h3 className="font-bold text-white text-lg" style={{ textTransform: 'uppercase', letterSpacing: '0.03em' }}>¿Qué necesito para promocionar a Technical Software Quality?</h3>
      </div>
      <div className="grid grid-cols-4">
        {promotionNeeds.map((item, i) => (
          <PromotionNeedCard key={i} {...item} />
        ))}
      </div>
    </div>

    <div className="grid grid-cols-2">
      <div className="glass-card flex-col">
        <div className="flex items-center gap-3 mb-6" style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem' }}>
          <TrendingUp className="text-cyan" size={22} />
          <h3 className="font-bold text-white text-lg">Mi Trayectoria e Impacto</h3>
        </div>
        <div className="grid grid-cols-2">
          {impactStats.map((stat, i) => (
            <ImpactStatCard key={i} {...stat} />
          ))}
        </div>
      </div>

      <div className="glass-card flex-col">
        <div className="flex items-center gap-3 mb-6" style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem' }}>
          <Rocket className="text-purple" size={22} />
          <h3 className="font-bold text-white text-lg">Hoja de Ruta de Aprendizaje</h3>
        </div>
        <div className="flex-col gap-3">
          {roadmap.map((item, i) => (
            <RoadmapItem key={i} {...item} />
          ))}
        </div>
      </div>
    </div>
  </div>
);

const CareerPath = () => {
  const [activeTab, setActiveTab] = useState('profile');

  return (
    <div className="w-full flex-col gap-6">
      <PageHeader />
      <ProgressionPath />
      <TabNav activeTab={activeTab} setActiveTab={setActiveTab} />
      <div style={{ minHeight: '400px' }}>
        {activeTab === 'profile' && <ProfileTab />}
        {activeTab === 'achievements' && <AchievementsTab />}
        {activeTab === 'nextSteps' && <NextStepsTab />}
      </div>
    </div>
  );
};

export default CareerPath;
