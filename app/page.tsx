'use client';

import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-card rounded-none border-t-0 border-l-0 border-r-0">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-arena-500 to-spice-500 flex items-center justify-center">
              <span className="font-display font-bold text-midnight-900 text-lg">CS</span>
            </div>
            <span className="font-display font-bold text-xl text-gradient">Ciudad Secreta</span>
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#concept" className="text-gray-300 hover:text-arena-400 transition-colors font-body font-medium">Concepto</a>
            <a href="#ciudades" className="text-gray-300 hover:text-arena-400 transition-colors font-body font-medium">Ciudades</a>
            <a href="#misiones" className="text-gray-300 hover:text-arena-400 transition-colors font-body font-medium">Misiones</a>
            <a href="#monetizacion" className="text-gray-300 hover:text-arena-400 transition-colors font-body font-medium">Modelo</a>
          </div>
          <a href="#contacto" className="bg-arena-600 hover:bg-arena-500 text-white px-6 py-2 rounded-lg font-display font-semibold transition-all animate-pulse-glow">
            Únete
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-midnight-900/50 to-midnight-900 pointer-events-none"></div>
        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            <span className="text-sm font-body text-gray-300">Para Dune: Arrakis Dominion</span>
          </div>
          
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight">
            <span className="text-gradient">Ciudad</span> <br />
            <span className="text-white">Secreta</span>
          </h1>
          
          <p className="font-body text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            &ldquo;La ciudad que ves no es la única. Hay una capa oculta: secretos, códigos, pasajes, historias. Desbloquéala.&rdquo;
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#concept" className="group bg-arena-600 hover:bg-arena-500 text-white px-8 py-4 rounded-xl font-display font-bold text-lg transition-all hover:scale-105 flex items-center gap-3">
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
              Descubrir más
            </a>
            <a href="https://github.com/DUNE-ORGANIZATION-JJCA/Dune-Campania" target="_blank" className="glass-card hover:bg-midnight-800/50 text-white px-8 py-4 rounded-xl font-display font-bold text-lg transition-all hover:scale-105 flex items-center gap-3">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              Ver en GitHub
            </a>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            <div className="glass-card p-4 text-center">
              <div className="font-display text-3xl font-bold text-arena-400">3</div>
              <div className="font-body text-gray-400 text-sm">Ciudades</div>
            </div>
            <div className="glass-card p-4 text-center">
              <div className="font-display text-3xl font-bold text-arena-400">7</div>
              <div className="font-body text-gray-400 text-sm">Tipos de Misión</div>
            </div>
            <div className="glass-card p-4 text-center">
              <div className="font-display text-3xl font-bold text-arena-400">25</div>
              <div className="font-body text-gray-400 text-sm">Niveles</div>
            </div>
            <div className="glass-card p-4 text-center">
              <div className="font-display text-3xl font-bold text-arena-400">4</div>
              <div className="font-body text-gray-400 text-sm">Vías de Ingreso</div>
            </div>
          </div>
        </div>
      </section>

      {/* Concept Section */}
      <section id="concept" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">El Concepto</span>
            </h2>
            <p className="font-body text-xl text-gray-400 max-w-2xl mx-auto">
              Una experiencia gamificada que transforma la ciudad en un tablero de juego
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="glass-card p-8 glow-orange">
              <h3 className="font-display text-2xl font-bold text-arena-400 mb-4">¿Qué es Ciudad Secreta?</h3>
              <p className="font-body text-lg text-gray-300 leading-relaxed mb-6">
                Es una experiencia gamificada híbrido-física que revela la &ldquo;capa oculta&rdquo; de las ciudades mediante misiones, códigos QR, puzzles y un sistema de progresión tipo RPG.
              </p>
              <p className="font-body text-lg text-gray-300 leading-relaxed">
                Los usuarios, llamados <span className="text-arena-400 font-semibold">Desveladores</span>, exploran, descubren y compiten. Cada misión completada genera XP, fragmentos coleccionables y progreso hacia nuevos niveles.
              </p>
            </div>
            <div className="space-y-4">
              <div className="glass-card p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-arena-600/30 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-arena-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" /></svg>
                </div>
                <div>
                  <h4 className="font-display font-bold text-lg text-white mb-1">Misiones Diarias</h4>
                  <p className="font-body text-gray-400">Cada día a las 08:00 aparece una misión única disponible por 24 horas</p>
                </div>
              </div>
              <div className="glass-card p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-arena-600/30 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-arena-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                </div>
                <div>
                  <h4 className="font-display font-bold text-lg text-white mb-1">Batallas entre Ciudades</h4>
                  <p className="font-body text-gray-400">Cada semana, las ciudades compiten por completar más misiones</p>
                </div>
              </div>
              <div className="glass-card p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-arena-600/30 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-arena-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
                </div>
                <div>
                  <h4 className="font-display font-bold text-lg text-white mb-1">Historia Global</h4>
                  <p className="font-body text-gray-400">Una narrativa que avanza cada mes. Los usuarios descifran mensajes dejados por La Red</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cities Section */}
      <section id="ciudades" className="py-24 px-6 bg-midnight-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">Tres Ciudades</span>
            </h2>
            <p className="font-body text-xl text-gray-400 max-w-2xl mx-auto">
              Tres personalidades únicas. Tres experiencias distintas.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Valencia */}
            <div className="glass-card p-8 hover:border-arena-500 transition-all group">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-arena-500 to-spice-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="font-display font-bold text-2xl text-white">V</span>
              </div>
              <h3 className="font-display text-2xl font-bold text-arena-400 mb-2">Valencia</h3>
              <p className="font-display text-sm text-gray-400 mb-4">&ldquo;El Sandbox Digital&rdquo;</p>
              <p className="font-body text-gray-300 mb-6">
                La ciudad gamer por excelencia. Valencia Game City integra espacio PC ProGaming, VR Lab e incubadora. Las Municipal eSports mueven a 500+ jóvenes.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm font-body text-gray-400">
                  <span className="w-2 h-2 rounded-full bg-arena-400"></span>
                  El Carmen (prioridad máxima)
                </div>
                <div className="flex items-center gap-2 text-sm font-body text-gray-400">
                  <span className="w-2 h-2 rounded-full bg-arena-400"></span>
                  Ruzafa (creativo/digital)
                </div>
                <div className="flex items-center gap-2 text-sm font-body text-gray-400">
                  <span className="w-2 h-2 rounded-full bg-arena-400"></span>
                  Extramurs (hub esports)
                </div>
              </div>
            </div>

            {/* Madrid */}
            <div className="glass-card p-8 hover:border-arena-500 transition-all group">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-arena-500 to-spice-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="font-display font-bold text-2xl text-white">M</span>
              </div>
              <h3 className="font-display text-2xl font-bold text-arena-400 mb-2">Madrid</h3>
              <p className="font-display text-sm text-gray-400 mb-4">&ldquo;La Rebelión Urbana&rdquo;</p>
              <p className="font-body text-gray-300 mb-6">
                La capital gamer de España. Madrid in Game con Campus del Videojuego en Casa de Campo. GAMERGY (15 ediciones), LEC Summer Finals.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm font-body text-gray-400">
                  <span className="w-2 h-2 rounded-full bg-arena-400"></span>
                  Malasaña (alternativo/nocturno)
                </div>
                <div className="flex items-center gap-2 text-sm font-body text-gray-400">
                  <span className="w-2 h-2 rounded-full bg-arena-400"></span>
                  Chueca (urbano/diversidad)
                </div>
                <div className="flex items-center gap-2 text-sm font-body text-gray-400">
                  <span className="w-2 h-2 rounded-full bg-arena-400"></span>
                  Lavapiés (multicultural)
                </div>
              </div>
            </div>

            {/* Barcelona */}
            <div className="glass-card p-8 hover:border-arena-500 transition-all group">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-arena-500 to-spice-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="font-display font-bold text-2xl text-white">B</span>
              </div>
              <h3 className="font-display text-2xl font-bold text-arena-400 mb-2">Barcelona</h3>
              <p className="font-display text-sm text-gray-400 mb-4">&ldquo;El Código Multicultural&rdquo;</p>
              <p className="font-body text-gray-300 mb-6">
                Street art de nivel mundial con ecosistema gaming emergente. El Raval y Gràcia son epicentros del arte urbano. El Templo Esports como referente local.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm font-body text-gray-400">
                  <span className="w-2 h-2 rounded-full bg-arena-400"></span>
                  El Raval (multicultural)
                </div>
                <div className="flex items-center gap-2 text-sm font-body text-gray-400">
                  <span className="w-2 h-2 rounded-full bg-arena-400"></span>
                  Gràcia (comunitario)
                </div>
                <div className="flex items-center gap-2 text-sm font-body text-gray-400">
                  <span className="w-2 h-2 rounded-full bg-arena-400"></span>
                  Poblenou (tech/22@)
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Missions Section */}
      <section id="misiones" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">Tipos de Misión</span>
            </h2>
            <p className="font-body text-xl text-gray-400 max-w-2xl mx-auto">
              Siete formas diferentes de explorar la ciudad
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "📱", title: "Misión QR Scanner", desc: "Escanea códigos QR en ubicaciones físicas reales. Cada token caduca en 24h para evitar fraude.", xp: "50 XP + 1 Fragmento", difficulty: "Muy Baja" },
              { icon: "📸", title: "Photo Hunt", desc: "Toma una foto en una ubicación exacta, replicando un ángulo o elemento específico con verificación por geolocalización.", xp: "75 XP + 2 Fragmentos", difficulty: "Baja-Media" },
              { icon: "🧩", title: "Logic Puzzle", desc: "Resuelve puzzles basados en pistas urbanas: fachadas, inscripciones, secuencias numéricas, símbolos.", xp: "100 XP + 3 Fragmentos", difficulty: "Media-Alta" },
              { icon: "🗺️", title: "Trail Blazer", desc: "Recorre una ruta física y toca puntos de control mediante geofencing. Mínimo 2 checkpoints.", xp: "150 XP + 4 Fragmentos", difficulty: "Baja" },
              { icon: "❓", title: "Multi Choice Intel", desc: "Quiz sobre historia, cultura o datos urbanos. Responde desde cualquier punto.", xp: "60 XP", difficulty: "Baja" },
              { icon: "📢", title: "Social Push", desc: "Comparte contenido con hashtag específico para desbloquear zonas premium.", xp: "200 XP + Zona Exclusiva", difficulty: "Muy Baja" },
              { icon: "🏆", title: "Master Hunt", desc: "Misión cronometrada multi-etapa para eventos especiales. Cadena de misiones en 48h.", xp: "500 XP + Insignia Única", difficulty: "Muy Alta" },
            ].map((mission, i) => (
              <div key={i} className="glass-card p-6 hover:bg-midnight-800/40 transition-all">
                <div className="text-4xl mb-4">{mission.icon}</div>
                <h3 className="font-display font-bold text-lg text-white mb-2">{mission.title}</h3>
                <p className="font-body text-gray-400 text-sm mb-4">{mission.desc}</p>
                <div className="flex justify-between items-center">
                  <span className="font-body text-arena-400 font-semibold text-sm">{mission.xp}</span>
                  <span className={`font-body text-xs px-3 py-1 rounded-full ${
                    mission.difficulty === 'Muy Baja' || mission.difficulty === 'Baja' ? 'bg-green-500/20 text-green-400' :
                    mission.difficulty === 'Baja-Media' || mission.difficulty === 'Media-Alta' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-red-500/20 text-red-400'
                  }`}>{mission.difficulty}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Progression Section */}
      <section className="py-24 px-6 bg-midnight-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">Sistema de Progresión</span>
            </h2>
            <p className="font-body text-xl text-gray-400 max-w-2xl mx-auto">
              Subir de nivel te da acceso a más contenido
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                {[
                  { level: "1", name: "Ciudadano", unlock: "QR Scanner, Photo Hunt", xp: "0" },
                  { level: "5", name: "Explorador", unlock: "Logic Puzzles, Mini-juegos", xp: "500" },
                  { level: "10", name: "Aventurero", unlock: "Trail Blazer, Zonas Premium", xp: "1.500" },
                  { level: "15", name: "Cazador", unlock: "Master Hunts, Recompensas Físicas", xp: "3.000" },
                  { level: "20", name: "Veterano", unlock: "Contenido Oculto, Insignias Especiales", xp: "6.000" },
                  { level: "25", name: "Leyenda", unlock: "Modo Citizen: crear pistas para otros", xp: "10.000" },
                ].map((lvl, i) => (
                  <div key={i} className="glass-card p-4 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-arena-600/30 flex items-center justify-center">
                      <span className="font-display font-bold text-arena-400">{lvl.level}</span>
                    </div>
                    <div className="flex-1">
                      <div className="font-display font-bold text-white">{lvl.name}</div>
                      <div className="font-body text-xs text-gray-400">{lvl.unlock}</div>
                    </div>
                    <div className="font-body text-sm text-arena-400">{lvl.xp} XP</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="glass-card p-8 glow-cyan">
              <h3 className="font-display text-2xl font-bold text-cyan-400 mb-6">Mecánicas de Retención</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-display font-bold text-white mb-2">Loop Diario</h4>
                  <p className="font-body text-gray-400">Misiones diarias con &ldquo;Fragmento del Día&rdquo;. Rachas: 3 días (+25 XP), 7 días (+100 XP + Dorado), 14 días (+300 XP + Skin), 30 días (+500 XP + Título)</p>
                </div>
                <div>
                  <h4 className="font-display font-bold text-white mb-2">Loop Semanal</h4>
                  <p className="font-body text-gray-400">Battle de Ciudades + Eventos temáticos cada 2 semanas (Grafiti, Código, Misterio, Vecino)</p>
                </div>
                <div>
                  <h4 className="font-display font-bold text-white mb-2">Loop Narrativo</h4>
                  <p className="font-body text-gray-400">Historia global que avanza mensualmente: &ldquo;El Primer Mensaje&rdquo; → &ldquo;La Señal&rdquo; → &ldquo;La Respuesta&rdquo; → &ldquo;Ciudad Secreta Revelada&rdquo;</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Monetization Section */}
      <section id="monetizacion" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">Modelo de Monetización</span>
            </h2>
            <p className="font-body text-xl text-gray-400 max-w-2xl mx-auto">
              Cuatro vías de ingreso funcionando en paralelo
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-card p-8">
              <div className="w-14 h-14 rounded-xl bg-arena-600/30 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-arena-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
              </div>
              <h3 className="font-display text-2xl font-bold text-arena-400 mb-2">City License</h3>
              <p className="font-body text-gray-400 mb-4">Cada ayuntamiento paga por tener su ciudad en la campaña.</p>
              <div className="font-display text-3xl font-bold text-white mb-2">€15K - €40K</div>
              <p className="font-body text-sm text-gray-500">Por ciudad/año</p>
            </div>

            <div className="glass-card p-8">
              <div className="w-14 h-14 rounded-xl bg-arena-600/30 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-arena-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" /></svg>
              </div>
              <h3 className="font-display text-2xl font-bold text-arena-400 mb-2">Brand Sponsorship</h3>
              <p className="font-body text-gray-400 mb-4">Misiones temáticas de marcas con recompensas.</p>
              <div className="font-display text-3xl font-bold text-white mb-2">€10K - €50K</div>
              <p className="font-body text-sm text-gray-500">Por sponsor/campaña</p>
            </div>

            <div className="glass-card p-8">
              <div className="w-14 h-14 rounded-xl bg-arena-600/30 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-arena-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
              </div>
              <h3 className="font-display text-2xl font-bold text-arena-400 mb-2">Commerce Local</h3>
              <p className="font-body text-gray-400 mb-4">Comercios pagan por aparecer en el mapa y proponer misiones.</p>
              <div className="font-display text-3xl font-bold text-white mb-2">€50/mes</div>
              <p className="font-body text-sm text-gray-500">Por comercio</p>
            </div>

            <div className="glass-card p-8">
              <div className="w-14 h-14 rounded-xl bg-arena-600/30 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-arena-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
              </div>
              <h3 className="font-display text-2xl font-bold text-arena-400 mb-2">Urban Insights</h3>
              <p className="font-body text-gray-400 mb-4">Datos de movilidad urbanos anonimizados vendidos a terceros.</p>
              <div className="font-display text-3xl font-bold text-white mb-2">€500 - €5K</div>
              <p className="font-body text-sm text-gray-500">Por informe/mes</p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="glass-card p-8 max-w-2xl mx-auto">
              <h3 className="font-display text-2xl font-bold text-white mb-4">Presupuesto Recomendado</h3>
              <div className="flex justify-center gap-8 mb-6">
                <div>
                  <div className="font-display text-3xl font-bold text-arena-400">€54.6K</div>
                  <div className="font-body text-sm text-gray-400">Low</div>
                </div>
                <div>
                  <div className="font-display text-4xl font-bold text-gradient">€143.4K</div>
                  <div className="font-body text-sm text-gray-400">Medium</div>
                </div>
                <div>
                  <div className="font-display text-3xl font-bold text-arena-400">€300.7K</div>
                  <div className="font-body text-sm text-gray-400">High</div>
                </div>
              </div>
              <p className="font-body text-gray-400">Escenario Medium genera ROI positivo del 12%</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contacto" className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">¿Listo para explorar?</span>
          </h2>
          <p className="font-body text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Únete a la experiencia Ciudad Secreta. Sé el primero en descubrir la ciudad oculta.
          </p>
          
          <form className="max-w-md mx-auto space-y-4">
            <input 
              type="email" 
              placeholder="Tu email" 
              className="w-full px-6 py-4 rounded-xl bg-midnight-800/50 border border-arena-600/30 text-white font-body placeholder-gray-500 focus:outline-none focus:border-arena-500"
            />
            <button type="submit" className="w-full bg-arena-600 hover:bg-arena-500 text-white px-8 py-4 rounded-xl font-display font-bold text-lg transition-all hover:scale-105 animate-pulse-glow">
              Apúntate a la lista de espera
            </button>
          </form>

          <div className="mt-12 flex justify-center gap-6">
            <a href="https://github.com/DUNE-ORGANIZATION-JJCA/Dune-Campania" target="_blank" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors font-body">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-arena-600/20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-arena-500 to-spice-500 flex items-center justify-center">
              <span className="font-display font-bold text-midnight-900 text-sm">CS</span>
            </div>
            <span className="font-display font-bold text-white">Ciudad Secreta</span>
          </div>
          <p className="font-body text-sm text-gray-500">
            © 2024 Ciudad Secreta. Para Dune: Arrakis Dominion.
          </p>
        </div>
      </footer>
    </main>
  );
}