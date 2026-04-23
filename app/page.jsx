export const metadata = {
  title: 'Imperial Elite Reformas | Reformas integrales en Madrid y Toledo',
  description: 'Empresa de reformas integrales, baños, cocinas, pintura, humedades y mantenimiento en Madrid y Toledo. Presupuesto sin compromiso.',
};

const gold = '#D4AF37';
const dark = '#0B0B0B';
const soft = '#F7F4EC';
const text = '#1A1A1A';

const inputStyle = {
  width: '100%',
  padding: '15px 16px',
  borderRadius: 12,
  border: '1px solid #2f2f2f',
  fontSize: 15,
  boxSizing: 'border-box',
  background: '#121212',
  color: '#ffffff',
  outline: 'none',
};

const cardShadow = '0 16px 40px rgba(0,0,0,0.08)';

export default function Home() {
  const services = [
    {
      title: 'Reformas integrales',
      text: 'Viviendas, locales y oficinas con planificación, acabados premium y una ejecución cuidada.',
      image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
    },
    {
      title: 'Reformas de baños',
      text: 'Baños modernos, funcionales y elegantes con materiales actuales y una imagen impecable.',
      image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1200&q=80',
    },
    {
      title: 'Reformas de cocinas',
      text: 'Diseño, aprovechamiento del espacio y soluciones prácticas para una cocina de nivel.',
      image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1200&q=80',
    },
    {
      title: 'Pintura y acabados',
      text: 'Terminaciones limpias y profesionales para elevar la imagen del inmueble.',
      image: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=1200&q=80',
    },
    {
      title: 'Humedades y filtraciones',
      text: 'Actuamos sobre condensación, moho y filtraciones con soluciones eficaces.',
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80',
    },
    {
      title: 'Mantenimiento y reparaciones',
      text: 'Mejoras, arreglos y trabajos de mantenimiento para viviendas, comunidades y negocios.',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
    },
  ];

  const gallery = [
    'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1400&q=80',
    'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1400&q=80',
    'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1400&q=80',
    'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80',
  ];

  const trust = [
    'Presupuesto sin compromiso',
    'Atención rápida por WhatsApp',
    'Servicio en Madrid y Toledo',
    'Imagen profesional y acabados cuidados',
    'Trato serio y cercano',
    'Enfoque claro desde el primer contacto',
  ];

  const process = [
    { n: '01', t: 'Cuéntanos tu proyecto', d: 'Llámanos o escríbenos y explícanos qué necesitas. También puedes mandarnos fotos.' },
    { n: '02', t: 'Valoramos y orientamos', d: 'Revisamos tu caso y te proponemos una solución realista según el trabajo.' },
    { n: '03', t: 'Presupuesto claro', d: 'Recibes una propuesta sencilla de entender, sin complicaciones ni rodeos.' },
    { n: '04', t: 'Ejecución profesional', d: 'Nos ponemos en marcha con orden, seguimiento y atención cuidada.' },
  ];

  const faqs = [
    ['¿Trabajáis en Madrid y Toledo?', 'Sí. Prestamos servicio en Madrid, Toledo y zonas cercanas según el proyecto.'],
    ['¿Dais presupuesto sin compromiso?', 'Sí. Estudiamos tu caso y te orientamos con una propuesta adaptada a lo que necesitas.'],
    ['¿Puedo enviar fotos por WhatsApp?', 'Sí. Es una de las formas más rápidas para valorar una reforma, avería o problema de humedad.'],
    ['¿Hacéis solo reformas grandes?', 'No. También hacemos baños, cocinas, pintura, reparaciones y mantenimiento.'],
  ];

  return (
    <main style={{ fontFamily: 'Arial, sans-serif', background: '#fff', color: text }}>
      <section style={{ background: '#111', color: '#fff', borderBottom: '1px solid #222' }}>
        <div style={{ maxWidth: 1240, margin: '0 auto', padding: '10px 20px', display: 'flex', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap', fontSize: 14 }}>
          <div>Madrid y Toledo · Presupuesto sin compromiso</div>
          <div style={{ color: gold, fontWeight: 700 }}>624 208 226 · imperial.elite.reformas@gmail.com</div>
        </div>
      </section>

      <header style={{ position: 'sticky', top: 0, zIndex: 30, background: 'rgba(11,11,11,0.96)', backdropFilter: 'blur(8px)', borderBottom: '1px solid #1f1f1f' }}>
        <div style={{ maxWidth: 1240, margin: '0 auto', padding: '18px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
          <div>
            <div style={{ color: gold, fontSize: 28, fontWeight: 700, letterSpacing: 0.3 }}>Imperial Elite Reformas</div>
            <div style={{ color: '#d1d5db', fontSize: 14 }}>Reformas integrales y servicios</div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap' }}>
            <a href="#servicios" style={navLink}>Servicios</a>
            <a href="#trabajos" style={navLink}>Trabajos</a>
            <a href="#confianza" style={navLink}>Confianza</a>
            <a href="#contacto" style={{ ...btnGold, textDecoration: 'none' }}>Pide presupuesto</a>
          </div>
        </div>
      </header>

      <section style={{ background: dark }}>
        <div style={{ maxWidth: 1240, margin: '0 auto', padding: '0 20px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))', alignItems: 'stretch' }}>
            <div style={{ padding: '90px 0', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ display: 'inline-block', width: 'fit-content', background: 'rgba(212,175,55,0.12)', color: gold, border: '1px solid rgba(212,175,55,0.25)', padding: '10px 16px', borderRadius: 999, fontWeight: 700, marginBottom: 20 }}>
                Imagen premium · confianza real
              </div>
              <h1 style={{ fontSize: 60, lineHeight: 1.02, margin: '0 0 18px', color: '#fff', maxWidth: 720 }}>
                Reformas con presencia profesional y resultados que inspiran confianza
              </h1>
              <p style={{ fontSize: 21, lineHeight: 1.8, color: '#d1d5db', margin: 0, maxWidth: 660 }}>
                Baños, cocinas, pintura, humedades, mantenimiento y reformas integrales en Madrid y Toledo con una imagen mucho más seria, elegante y preparada para captar clientes.
              </p>
              <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginTop: 28 }}>
                <a href="#contacto" style={{ ...btnGold, textDecoration: 'none' }}>Solicitar presupuesto</a>
                <a href="https://wa.me/34624208226?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20una%20reforma" style={{ ...btnOutline, textDecoration: 'none' }}>WhatsApp directo</a>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 12, marginTop: 28, maxWidth: 760 }}>
                {['Presupuesto claro', 'Atención rápida', 'Imagen premium', 'Servicio Madrid y Toledo'].map((item) => (
                  <div key={item} style={{ background: 'rgba(255,255,255,0.04)', color: '#f3f4f6', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 16, padding: '14px 16px' }}>
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div style={{ minHeight: 680, backgroundImage: 'url(https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
          </div>
        </div>
      </section>

      <section style={{ marginTop: -70, position: 'relative', zIndex: 2 }}>
        <div style={{ maxWidth: 1240, margin: '0 auto', padding: '0 20px' }}>
          <div style={{ background: '#111', border: '1px solid #252525', borderRadius: 24, boxShadow: '0 26px 70px rgba(0,0,0,0.24)', padding: 28 }}>
            <div style={{ fontSize: 30, color: '#fff', fontWeight: 700, marginBottom: 8 }}>Pide tu presupuesto</div>
            <div style={{ color: '#d1d5db', marginBottom: 22 }}>Déjanos tus datos y te responderemos lo antes posible.</div>
            <form action="https://formsubmit.co/imperial.elite.reformas@gmail.com" method="POST" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 14 }}>
              <input name="nombre" placeholder="Nombre" style={inputStyle} />
              <input name="telefono" placeholder="Teléfono" style={inputStyle} />
              <input name="zona" placeholder="Zona" style={inputStyle} />
              <select name="servicio" style={inputStyle}>
                <option>Tipo de trabajo</option>
                <option>Reforma integral</option>
                <option>Baño</option>
                <option>Cocina</option>
                <option>Pintura</option>
                <option>Humedades</option>
                <option>Reparación</option>
              </select>
              <textarea name="mensaje" rows={4} placeholder="Cuéntanos brevemente qué necesitas" style={{ ...inputStyle, gridColumn: '1 / -1', resize: 'vertical' }} />
              <button type="submit" style={{ ...btnGold, border: 'none', cursor: 'pointer', width: 'fit-content' }}>Quiero mi presupuesto</button>
            </form>
          </div>
        </div>
      </section>

      <section id="servicios" style={{ maxWidth: 1240, margin: '0 auto', padding: '90px 20px 70px' }}>
        <SectionHead eyebrow="Servicios" title="Todo lo que necesitas para reformar, mejorar o reparar tu espacio" text="La web ahora transmite mucho más nivel y confianza, con imágenes amplias, mejor composición y una sensación más premium desde la primera pantalla." />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))', gap: 24, marginTop: 36 }}>
          {services.map((service) => (
            <div key={service.title} style={{ background: '#fff', borderRadius: 24, overflow: 'hidden', boxShadow: cardShadow, border: '1px solid #ececec' }}>
              <div style={{ height: 230, backgroundImage: `url(${service.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
              <div style={{ padding: 24 }}>
                <h3 style={{ margin: '0 0 10px', fontSize: 26 }}>{service.title}</h3>
                <p style={{ margin: 0, color: '#4b5563', lineHeight: 1.8 }}>{service.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="trabajos" style={{ background: '#111', padding: '85px 20px' }}>
        <div style={{ maxWidth: 1240, margin: '0 auto' }}>
          <SectionHead eyebrow="Trabajos" title="Una imagen mucho más visual y más profesional" text="Las imágenes ayudan a que el cliente perciba calidad, orden y una empresa real detrás de la web." dark />
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 18, marginTop: 36 }}>
            <div style={{ minHeight: 470, borderRadius: 26, backgroundImage: `url(${gallery[0]})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
            <div style={{ display: 'grid', gap: 18 }}>
              <div style={{ minHeight: 226, borderRadius: 26, backgroundImage: `url(${gallery[1]})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
              <div style={{ minHeight: 226, borderRadius: 26, backgroundImage: `url(${gallery[2]})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
            </div>
          </div>
          <div style={{ marginTop: 18, minHeight: 280, borderRadius: 26, backgroundImage: `url(${gallery[3]})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
        </div>
      </section>

      <section id="confianza" style={{ maxWidth: 1240, margin: '0 auto', padding: '90px 20px 70px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 28, alignItems: 'start' }}>
          <div>
            <SectionHead eyebrow="Confianza" title="Una empresa de reformas tiene que transmitir seguridad en segundos" text="No basta con decir que trabajas bien. La web tiene que parecer seria, cuidada y preparada para convertir visitas en presupuestos." />
          </div>
          <div style={{ display: 'grid', gap: 14 }}>
            {trust.map((item) => (
              <div key={item} style={{ background: soft, border: '1px solid #ead8a2', borderRadius: 18, padding: '18px 20px', fontWeight: 700 }}>{item}</div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: soft, padding: '85px 20px' }}>
        <div style={{ maxWidth: 1240, margin: '0 auto' }}>
          <SectionHead eyebrow="Proceso" title="Un recorrido claro para que el cliente se sienta acompañado" text="La claridad vende más que una web confusa. Por eso todo está planteado en pasos simples y directos." />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(250px,1fr))', gap: 22, marginTop: 36 }}>
            {process.map((item) => (
              <div key={item.n} style={{ background: '#fff', borderRadius: 22, padding: 24, boxShadow: cardShadow, border: '1px solid #ead8a2' }}>
                <div style={{ color: '#B28A1A', fontWeight: 700, marginBottom: 10 }}>{item.n}</div>
                <h3 style={{ margin: '0 0 10px', fontSize: 24 }}>{item.t}</h3>
                <p style={{ margin: 0, color: '#4b5563', lineHeight: 1.8 }}>{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ maxWidth: 1240, margin: '0 auto', padding: '90px 20px 70px' }}>
        <SectionHead eyebrow="Opiniones" title="Textos de confianza para cuando tengas reseñas reales" text="De momento puedes mantener esta sección como base. Más adelante se sustituye por reseñas reales de clientes y fotos tuyas." />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 22, marginTop: 34 }}>
          {[
            ['Laura G.', 'Muy buena atención desde el primer contacto. La sensación fue de empresa seria y organizada.'],
            ['Carlos M.', 'Respuesta rápida y trato profesional. Nos gustó la claridad con la que explicaron todo.'],
            ['Marta R.', 'La web ya transmite mucha más confianza. Tiene imagen de empresa real y bien presentada.'],
          ].map((item) => (
            <div key={item[0]} style={{ background: '#fff', borderRadius: 22, padding: 24, boxShadow: cardShadow, border: '1px solid #ececec' }}>
              <p style={{ color: '#4b5563', lineHeight: 1.8, marginTop: 0 }}>“{item[1]}”</p>
              <div style={{ fontWeight: 700 }}>{item[0]}</div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ background: '#111', color: '#fff', padding: '90px 20px' }}>
        <div style={{ maxWidth: 980, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: 50, lineHeight: 1.06, margin: '0 0 16px' }}>¿Necesitas una reforma con imagen profesional y trato serio?</h2>
          <p style={{ fontSize: 20, color: '#d1d5db', lineHeight: 1.8, margin: '0 auto', maxWidth: 760 }}>
            Llámanos o escríbenos por WhatsApp. Te ayudamos con una valoración rápida y un presupuesto sin compromiso.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 14, marginTop: 28, flexWrap: 'wrap' }}>
            <a href="tel:624208226" style={{ ...btnGold, textDecoration: 'none' }}>Llamar ahora</a>
            <a href="https://wa.me/34624208226?text=Hola%2C%20quiero%20presupuesto%20para%20una%20reforma" style={{ ...btnOutline, textDecoration: 'none' }}>Escribir por WhatsApp</a>
          </div>
        </div>
      </section>

      <section style={{ maxWidth: 980, margin: '0 auto', padding: '90px 20px 70px' }}>
        <SectionHead eyebrow="Preguntas frecuentes" title="Resolvemos las dudas más habituales" text="Una buena web también reduce objeciones. Aquí puedes aclarar lo importante desde el primer momento." />
        <div style={{ display: 'grid', gap: 16, marginTop: 28 }}>
          {faqs.map((faq) => (
            <div key={faq[0]} style={{ background: '#fff', borderRadius: 20, padding: 22, boxShadow: cardShadow, border: '1px solid #ececec' }}>
              <h3 style={{ margin: '0 0 8px' }}>{faq[0]}</h3>
              <p style={{ margin: 0, color: '#4b5563', lineHeight: 1.8 }}>{faq[1]}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contacto" style={{ background: soft, padding: '90px 20px' }}>
        <div style={{ maxWidth: 1240, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))', gap: 28 }}>
          <div>
            <SectionHead eyebrow="Contacto" title="Pide presupuesto para tu reforma o reparación" text="La web ya tiene estructura premium, imágenes, jerarquía visual y llamadas a la acción más potentes. El siguiente salto será añadir tus fotos reales y un dominio propio." />
            <div style={{ display: 'grid', gap: 12, marginTop: 20, fontSize: 18 }}>
              <div><strong>Teléfono:</strong> 624 208 226</div>
              <div><strong>WhatsApp:</strong> 624 208 226</div>
              <div><strong>Email:</strong> imperial.elite.reformas@gmail.com</div>
              <div><strong>Zonas:</strong> Madrid y Toledo</div>
            </div>
          </div>
          <div style={{ background: '#111', borderRadius: 24, padding: 28, border: '1px solid #252525', boxShadow: '0 18px 42px rgba(0,0,0,0.16)' }}>
            <form action="https://formsubmit.co/imperial.elite.reformas@gmail.com" method="POST" style={{ display: 'grid', gap: 14 }}>
              <input name="nombre" placeholder="Nombre y apellidos" style={inputStyle} />
              <input name="telefono" placeholder="Teléfono" style={inputStyle} />
              <input name="email" placeholder="Correo electrónico" style={inputStyle} />
              <textarea name="mensaje" rows={6} placeholder="Describe tu reforma, avería o trabajo de mejora" style={{ ...inputStyle, resize: 'vertical' }} />
              <button type="submit" style={{ ...btnGold, border: 'none', cursor: 'pointer' }}>Enviar solicitud</button>
            </form>
          </div>
        </div>
      </section>

      <a href="https://wa.me/34624208226?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20una%20reforma" style={{ position: 'fixed', right: 18, bottom: 18, background: gold, color: '#111', textDecoration: 'none', padding: '15px 18px', borderRadius: 999, fontWeight: 700, boxShadow: '0 10px 28px rgba(0,0,0,0.18)', zIndex: 60 }}>
        WhatsApp
      </a>

      <footer style={{ background: '#0B0B0B', borderTop: '1px solid #1f1f1f' }}>
        <div style={{ maxWidth: 1240, margin: '0 auto', padding: '28px 20px', display: 'flex', justifyContent: 'space-between', gap: 20, flexWrap: 'wrap' }}>
          <div>
            <div style={{ color: gold, fontSize: 24, fontWeight: 700 }}>Imperial Elite Reformas</div>
            <div style={{ color: '#d1d5db', fontSize: 14 }}>Reformas integrales y servicios en Madrid y Toledo</div>
          </div>
          <div style={{ color: '#d1d5db', fontSize: 14 }}>© 2026 Imperial Elite Reformas. Todos los derechos reservados.</div>
        </div>
      </footer>
    </main>
  );
}

function SectionHead({ eyebrow, title, text, dark = false }) {
  return (
    <div style={{ maxWidth: 760 }}>
      <div style={{ color: dark ? '#D4AF37' : '#B28A1A', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1 }}>{eyebrow}</div>
      <h2 style={{ fontSize: 44, lineHeight: 1.08, margin: '12px 0 16px', color: dark ? '#ffffff' : '#111111' }}>{title}</h2>
      <p style={{ fontSize: 19, lineHeight: 1.8, color: dark ? '#d1d5db' : '#4b5563', margin: 0 }}>{text}</p>
    </div>
  );
}

const navLink = {
  textDecoration: 'none',
  color: '#ffffff',
  fontWeight: 700,
};

const btnGold = {
  background: gold,
  color: '#111111',
  padding: '15px 22px',
  borderRadius: 14,
  fontWeight: 700,
};

const btnOutline = {
  background: 'transparent',
  color: '#ffffff',
  padding: '15px 22px',
  borderRadius: 14,
  fontWeight: 700,
  border: '1px solid #D4AF37',
};
