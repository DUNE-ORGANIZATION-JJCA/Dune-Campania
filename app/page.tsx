'use client';

import Link from "next/link";
import { AnalyticsProvider } from "@/components/AnalyticsProvider";

export default function Home() {
  return (
    <AnalyticsProvider>
    <main className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-orange-900/30">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <span className="font-bold text-2xl text-orange-500">CS</span>
            <span className="font-bold text-xl">Ciudad Secreta</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm">
            <a href="#concept" className="hover:text-orange-400 transition-colors">Concepto</a>
            <a href="#ciudades" className="hover:text-orange-400 transition-colors">Ciudades</a>
            <a href="#misiones" className="hover:text-orange-400 transition-colors">Misiones</a>
            <a href="#monetizacion" className="hover:text-orange-400 transition-colors">Modelo</a>
          </div>
          <a href="#contacto" className="bg-orange-600 hover:bg-orange-500 text-white px-5 py-2 rounded transition-colors">
            Únete
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-20 bg-gradient-to-b from-black via-orange-950/20 to-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Ciudad Secreta
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl mx-auto">
            &ldquo;La ciudad que ves no es la única. Hay una capa oculta: secretos, códigos, pasajes, historias. Desbloquéala.&rdquo;
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#concept" className="bg-orange-600 hover:bg-orange-500 text-white px-8 py-4 rounded transition-colors">
              Descubrir más
            </a>
            <a href="https://github.com/DUNE-ORGANIZATION-JJCA/Dune-Campania" target="_blank" className="border border-orange-600 text-orange-500 hover:bg-orange-600/20 px-8 py-4 rounded transition-colors">
              Ver en GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Concept Section */}
      <section id="concept" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">El Concepto</h2>
            <p className="text-xl text-gray-400">Una experiencia gamificada que transforma la ciudad en un tablero de juego</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 border border-orange-900/30 rounded-lg">
              <div className="text-4xl mb-4">⚔️</div>
              <h3 className="text-xl font-bold mb-2">Misiones Diarias</h3>
              <p className="text-gray-400">Cada día a las 08:00 aparece una misión única disponible por 24 horas</p>
            </div>
            <div className="text-center p-8 border border-orange-900/30 rounded-lg">
              <div className="text-4xl mb-4">🏰</div>
              <h3 className="text-xl font-bold mb-2">Batallas entre Ciudades</h3>
              <p className="text-gray-400">Cada semana, las ciudades compiten por completar más misiones</p>
            </div>
            <div className="text-center p-8 border border-orange-900/30 rounded-lg">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-xl font-bold mb-2">Historia Global</h3>
              <p className="text-gray-400">Una narrativa que avanza cada mes. Los usuarios descifran mensajes dejados por La Red</p>
            </div>
          </div>
        </div>
      </section>

      {/* Cities Section */}
      <section id="ciudades" className="py-24 px-6 bg-orange-950/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Tres Ciudades</h2>
            <p className="text-xl text-gray-400">Tres personalidades únicas. Tres experiencias distintas.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 border border-orange-900/30 rounded-lg">
              <div className="w-14 h-14 rounded-lg bg-orange-600 flex items-center justify-center mb-4">
                <span className="font-bold text-2xl">V</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">Valencia</h3>
              <p className="text-orange-400 text-sm mb-4">&ldquo;El Sandbox Digital&rdquo;</p>
              <p className="text-gray-400">
                La ciudad gamer por excelencia. Valencia Game City con espacio PC ProGaming, VR Lab e incubadora.
              </p>
            </div>
            <div className="p-8 border border-orange-900/30 rounded-lg">
              <div className="w-14 h-14 rounded-lg bg-orange-600 flex items-center justify-center mb-4">
                <span className="font-bold text-2xl">M</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">Madrid</h3>
              <p className="text-orange-400 text-sm mb-4">&ldquo;La Rebelión Urbana&rdquo;</p>
              <p className="text-gray-400">
                La capital gamer de España. Madrid in Game con Campus del Videojuego en Casa de Campo.
              </p>
            </div>
            <div className="p-8 border border-orange-900/30 rounded-lg">
              <div className="w-14 h-14 rounded-lg bg-orange-600 flex items-center justify-center mb-4">
                <span className="font-bold text-2xl">B</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">Barcelona</h3>
              <p className="text-orange-400 text-sm mb-4">&ldquo;El Código Multicultural&rdquo;</p>
              <p className="text-gray-400">
                Street art de nivel mundial con ecosistema gaming emergente. El Raval y Gràcia como epicentros.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Missions Section */}
      <section id="misiones" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Tipos de Misión</h2>
            <p className="text-xl text-gray-400">Siete formas diferentes de explorar la ciudad</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { num: "01", title: "Misión QR Scanner", desc: "Escanea códigos QR en ubicaciones físicas reales." },
              { num: "02", title: "Photo Hunt", desc: "Toma una foto en una ubicación exacta." },
              { num: "03", title: "Logic Puzzle", desc: "Resuelve puzzles basados en pistas urbanas." },
              { num: "04", title: "Trail Blazer", desc: "Recorre una ruta física y toca puntos de control." },
              { num: "05", title: "Multi Choice Intel", desc: "Quiz sobre historia, cultura o datos urbanos." },
              { num: "06", title: "Social Push", desc: "Comparte contenido con hashtag específico." },
              { num: "07", title: "Master Hunt", desc: "Misión cronometrada multi-etapa para eventos." },
            ].map((m, i) => (
              <div key={i} className="p-6 border border-orange-900/30 rounded-lg">
                <div className="text-5xl text-orange-900/50 font-bold mb-2">{m.num}</div>
                <h3 className="text-lg font-bold mb-2">{m.title}</h3>
                <p className="text-gray-400 text-sm">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Progression Section */}
      <section className="py-24 px-6 bg-orange-950/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Sistema de Progresión</h2>
            <p className="text-xl text-gray-400">Subir de nivel te da acceso a más contenido</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="space-y-4">
                {[
                  { level: "1", name: "Ciudadano", unlock: "QR Scanner, Photo Hunt", xp: "0 XP" },
                  { level: "5", name: "Explorador", unlock: "Logic Puzzles, Mini-juegos", xp: "500 XP" },
                  { level: "10", name: "Aventurero", unlock: "Trail Blazer, Zonas Premium", xp: "1.500 XP" },
                  { level: "15", name: "Cazador", unlock: "Master Hunts, Recompensas Físicas", xp: "3.000 XP" },
                  { level: "20", name: "Veterano", unlock: "Contenido Oculto, Insignias", xp: "6.000 XP" },
                  { level: "25", name: "Leyenda", unlock: "Modo Citizen: crear pistas", xp: "10.000 XP" },
                ].map((lvl, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 border border-orange-900/30 rounded-lg">
                    <div className="w-10 h-10 rounded bg-orange-600 flex items-center justify-center font-bold">
                      {lvl.level}
                    </div>
                    <div className="flex-1">
                      <div className="font-bold">{lvl.name}</div>
                      <div className="text-xs text-gray-400">{lvl.unlock}</div>
                    </div>
                    <div className="text-sm text-orange-400">{lvl.xp}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-8 border border-orange-900/30 rounded-lg">
              <h3 className="text-2xl font-bold mb-6">Mecánicas de Retención</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold mb-2">Loop Diario</h4>
                  <p className="text-gray-400">Misiones diarias con &ldquo;Fragmento del Día&rdquo;. Rachas: 3 días (+25 XP), 7 días (+100 XP), 30 días (+500 XP)</p>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Loop Semanal</h4>
                  <p className="text-gray-400">Battle de Ciudades + Eventos temáticos (Grafiti, Código, Misterio, Vecino)</p>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Loop Narrativo</h4>
                  <p className="text-gray-400">Historia global mensual: &ldquo;El Primer Mensaje&rdquo; → &ldquo;La Señal&rdquo; → &ldquo;La Respuesta&rdquo; → &ldquo;Ciudad Secreta Revelada&rdquo;</p>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Modelo de Monetización</h2>
            <p className="text-xl text-gray-400">Cuatro vías de ingreso funcionando en paralelo</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 border border-orange-900/30 rounded-lg">
              <h3 className="text-xl font-bold mb-2">City License</h3>
              <p className="text-gray-400 mb-4">Cada ayuntamiento paga por tener su ciudad en la campaña.</p>
              <div className="text-3xl font-bold text-orange-500">€15K - €40K</div>
              <p className="text-sm text-gray-500">Por ciudad/año</p>
            </div>
            <div className="p-8 border border-orange-900/30 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Brand Sponsorship</h3>
              <p className="text-gray-400 mb-4">Misiones temáticas de marcas con recompensas.</p>
              <div className="text-3xl font-bold text-orange-500">€10K - €50K</div>
              <p className="text-sm text-gray-500">Por sponsor/campaña</p>
            </div>
            <div className="p-8 border border-orange-900/30 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Commerce Local</h3>
              <p className="text-gray-400 mb-4">Comercios pagan por aparecer en el mapa.</p>
              <div className="text-3xl font-bold text-orange-500">€50/mes</div>
              <p className="text-sm text-gray-500">Por comercio</p>
            </div>
            <div className="p-8 border border-orange-900/30 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Urban Insights</h3>
              <p className="text-gray-400 mb-4">Datos de movilidad urbanos anonimizados.</p>
              <div className="text-3xl font-bold text-orange-500">€500 - €5K</div>
              <p className="text-sm text-gray-500">Por informe/mes</p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="p-8 border border-orange-900/30 rounded-lg max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Presupuesto Recomendado</h3>
              <div className="flex justify-center gap-8 mb-4">
                <div>
                  <div className="text-3xl font-bold">€54.6K</div>
                  <div className="text-sm text-gray-400">Low</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-orange-500">€143.4K</div>
                  <div className="text-sm text-gray-400">Medium</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">€300.7K</div>
                  <div className="text-sm text-gray-400">High</div>
                </div>
              </div>
              <p className="text-gray-400">Escenario Medium genera ROI positivo del 12%</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contacto" className="py-24 px-6 bg-gradient-to-b from-black to-orange-950/20">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">¿Listo para explorar?</h2>
          <p className="text-xl text-gray-400 mb-8">
            Únete a la experiencia Ciudad Secreta. Sé el primero en descubrir la ciudad oculta.
          </p>
          
          <form className="max-w-md mx-auto space-y-4">
            <input 
              type="email" 
              placeholder="Tu email" 
              className="w-full px-6 py-4 rounded bg-gray-900 border border-orange-900/30 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500"
            />
            <button type="submit" className="w-full bg-orange-600 hover:bg-orange-500 text-white px-8 py-4 rounded transition-colors">
              Apúntate a la lista de espera
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-orange-900/30">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <span className="font-bold text-xl text-orange-500">CS</span>
            <span className="font-bold">Ciudad Secreta</span>
          </div>
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white">Política de Privacidad</a>
            <a href="#" className="hover:text-white">Términos de Uso</a>
            <a href="#" className="hover:text-white">Contacto</a>
          </div>
          <p className="text-sm text-gray-500">
            © 2024 Ciudad Secreta. Para Dune: Arrakis Dominion.
          </p>
        </div>
      </footer>
    </main>
    </AnalyticsProvider>
  );
}