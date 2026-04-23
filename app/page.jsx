export const metadata = { title: 'Imperial Elite Reformas', description: 'Reformas integrales y servicios en Madrid y Toledo. Cocinas, baños, humedades, pintura y mantenimiento.' };

export default function ImperialEliteReformas() {
  const services = [
    {
      title: "Reformas integrales",
      desc: "Transformamos viviendas, locales y oficinas con una ejecución cuidada, plazos claros y acabados de alta calidad.",
    },
    {
      title: "Reformas de baños",
      desc: "Renovamos baños completos con soluciones funcionales, modernas y adaptadas a cada espacio.",
    },
    {
      title: "Reformas de cocinas",
      desc: "Diseñamos y reformamos cocinas para ganar comodidad, estilo y valor en tu vivienda.",
    },
    {
      title: "Humedades y filtraciones",
      desc: "Actuamos sobre condensación, moho, filtraciones y daños derivados de la humedad con soluciones eficaces.",
    },
    {
      title: "Pintura y acabados",
      desc: "Pintura interior y exterior, alisado, reparación de paredes y acabados que elevan la imagen del inmueble.",
    },
    {
      title: "Mantenimiento y reparaciones",
      desc: "Atendemos averías, pequeñas reparaciones y trabajos de mejora para viviendas, comunidades y negocios.",
    },
  ];

  const benefits = [
    "Presupuesto claro y sin compromiso",
    "Atención en Madrid y Toledo",
    "Asesoramiento personalizado",
    "Acabados limpios y profesionales",
    "Cumplimiento de plazos pactados",
    "Comunicación rápida por WhatsApp",
  ];

  const steps = [
    {
      title: "Cuéntanos tu proyecto",
      desc: "Escríbenos por WhatsApp o mediante el formulario y explícanos qué necesitas.",
    },
    {
      title: "Valoración y visita",
      desc: "Revisamos el trabajo, resolvemos dudas y te orientamos con la mejor solución.",
    },
    {
      title: "Presupuesto detallado",
      desc: "Recibes una propuesta clara, adaptada a tu reforma, reparación o mejora.",
    },
    {
      title: "Ejecución profesional",
      desc: "Nos ponemos en marcha con seguimiento cercano, orden y resultados de nivel.",
    },
  ];

  const faqs = [
    {
      q: "¿Trabajáis solo reformas grandes?",
      a: "No. Realizamos tanto reformas integrales como baños, cocinas, reparaciones, humedades, pintura y trabajos de mejora.",
    },
    {
      q: "¿En qué zonas trabajáis?",
      a: "Prestamos servicio principalmente en Madrid y Toledo, estudiando también trabajos cercanos según el proyecto.",
    },
    {
      q: "¿Ofrecéis presupuesto sin compromiso?",
      a: "Sí. Analizamos cada caso y te enviamos una propuesta ajustada a tus necesidades.",
    },
    {
      q: "¿Puedo enviar fotos por WhatsApp?",
      a: "Sí. De hecho, es la forma más rápida de valorar una incidencia o una idea de reforma.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <div className="text-xl font-bold tracking-tight">Imperial Elite Reformas</div>
            <div className="text-sm text-slate-500">Reformas integrales y servicios</div>
          </div>
          <div className="hidden items-center gap-6 md:flex">
            <a href="#servicios" className="text-sm font-medium hover:text-slate-600">Servicios</a>
            <a href="#zonas" className="text-sm font-medium hover:text-slate-600">Zonas</a>
            <a href="#proceso" className="text-sm font-medium hover:text-slate-600">Proceso</a>
            <a href="#contacto" className="rounded-2xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:opacity-90">Pide presupuesto</a>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
          <div className="flex flex-col justify-center">
            <div className="mb-4 inline-flex w-fit rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm">
              Madrid y Toledo
            </div>
            <h1 className="max-w-2xl text-4xl font-extrabold tracking-tight text-slate-950 md:text-6xl">
              Reformas con nivel superior para viviendas, negocios y comunidades
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              En Imperial Elite Reformas realizamos reformas integrales, cocinas, baños, trabajos de pintura,
              solución de humedades, reparaciones y mejoras con una atención rápida, cuidada y profesional.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://wa.me/34624208226?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20una%20reforma"
                className="rounded-2xl bg-slate-900 px-6 py-4 text-center text-base font-semibold text-white shadow-lg hover:opacity-90"
              >
                Hablar por WhatsApp
              </a>
              <a
                href="#contacto"
                className="rounded-2xl border border-slate-300 bg-white px-6 py-4 text-center text-base font-semibold text-slate-900 shadow-sm hover:bg-slate-50"
              >
                Solicitar presupuesto
              </a>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {benefits.map((item) => (
                <div key={item} className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center">
            <div className="w-full rounded-[2rem] border border-slate-200 bg-white p-8 shadow-2xl">
              <div className="mb-6 text-2xl font-bold">Pide tu presupuesto</div>
              <form className="space-y-4" action="https://formsubmit.co/contacto@imperialelitereformas.es" method="POST">
                <input
                  type="text"
                  placeholder="Nombre"
                  className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-900"
                />
                <input
                  type="tel"
                  placeholder="Teléfono"
                  className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-900"
                />
                <input
                  type="text"
                  placeholder="Zona (Madrid, Toledo... )"
                  className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-900"
                />
                <select className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-900">
                  <option>Tipo de trabajo</option>
                  <option>Reforma integral</option>
                  <option>Reforma de baño</option>
                  <option>Reforma de cocina</option>
                  <option>Humedades y filtraciones</option>
                  <option>Pintura</option>
                  <option>Reparación o mantenimiento</option>
                </select>
                <textarea
                  rows={5}
                  placeholder="Cuéntanos brevemente qué necesitas"
                  className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-900"
                />
                <button
                  type="submit"
                  className="w-full rounded-2xl bg-slate-900 px-5 py-4 text-base font-semibold text-white shadow-lg hover:opacity-90"
                >
                  Quiero mi presupuesto
                </button>
              </form>
              <p className="mt-4 text-sm text-slate-500">
                También puedes enviarnos fotos y detalles por WhatsApp para una atención más rápida.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="servicios" className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-2xl">
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Servicios</div>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">Soluciones completas para reformar, reparar y mejorar tu espacio</h2>
          <p className="mt-4 text-lg text-slate-600">
            Trabajamos con enfoque práctico y acabados de calidad para particulares, inversores, locales y comunidades.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <h3 className="text-xl font-bold">{service.title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="zonas" className="bg-slate-950 py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-2">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Cobertura</div>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">Trabajamos en Madrid y Toledo</h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-300">
              Atendemos proyectos de reforma, reparación, humedades, pintura y mantenimiento en viviendas, negocios y comunidades.
              Estudiamos cada trabajo de forma personalizada para ofrecer una solución seria, rápida y bien ejecutada.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Reformas de pisos y chalets",
              "Cocinas y baños",
              "Locales y oficinas",
              "Comunidades de propietarios",
              "Daños por humedad",
              "Trabajos de mejora y actualización",
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-5 text-slate-100 backdrop-blur-sm">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="proceso" className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-2xl">
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Cómo trabajamos</div>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">Un proceso claro para que tengas control y confianza</h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step.title} className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <div className="mb-4 text-sm font-bold text-slate-500">0{index + 1}</div>
              <h3 className="text-xl font-bold">{step.title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Por qué elegirnos</div>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">Detalle, comunicación y resultados que generan confianza</h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Atención rápida",
                desc: "Respondemos con agilidad para valorar tu caso y ayudarte a avanzar sin perder tiempo.",
              },
              {
                title: "Imagen profesional",
                desc: "Cuidamos el trato, la limpieza, la comunicación y el acabado final del trabajo.",
              },
              {
                title: "Visión práctica",
                desc: "Buscamos soluciones realistas, funcionales y adaptadas al presupuesto del cliente.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-2xl">
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Opiniones</div>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">Confianza que se construye con hechos</h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            {
              name: "Laura G.",
              text: "Muy buena atención desde el primer contacto. Reformaron el baño y el resultado quedó limpio, moderno y muy bien rematado.",
            },
            {
              name: "Carlos M.",
              text: "Nos ayudaron con un problema de humedad y después hicimos varias mejoras en casa. Trato serio y comunicación rápida.",
            },
            {
              name: "Marta R.",
              text: "Pedimos presupuesto para una reforma parcial y nos gustó mucho la claridad y el enfoque profesional. Recomendables.",
            },
          ].map((item) => (
            <div key={item.name} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
              <p className="leading-7 text-slate-600">“{item.text}”</p>
              <div className="mt-4 font-semibold text-slate-900">{item.name}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-950 py-20 text-white">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-5xl">Tu hogar merece una reforma a la altura</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            Escríbenos hoy mismo y cuéntanos qué necesitas. Te ayudamos con una valoración rápida y una propuesta clara.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="https://wa.me/34624208226?text=Hola%2C%20quiero%20presupuesto%20para%20una%20reforma"
              className="rounded-2xl bg-white px-6 py-4 text-base font-semibold text-slate-950 shadow-lg hover:opacity-90"
            >
              Escribir por WhatsApp
            </a>
            <a
              href="#contacto"
              className="rounded-2xl border border-white/20 bg-white/5 px-6 py-4 text-base font-semibold text-white hover:bg-white/10"
            >
              Pedir presupuesto
            </a>
          </div>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-5xl px-6 py-20">
        <div className="max-w-2xl">
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Preguntas frecuentes</div>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">Resolvemos tus dudas antes de empezar</h2>
        </div>
        <div className="mt-10 space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-bold">{faq.q}</h3>
              <p className="mt-3 leading-7 text-slate-600">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contacto" className="bg-slate-50 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-2">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Contacto</div>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">Pide presupuesto para tu reforma o reparación</h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
              Cuéntanos qué necesitas y te responderemos lo antes posible. También puedes enviar fotos por WhatsApp para agilizar la valoración.
            </p>
            <div className="mt-8 space-y-4 text-slate-700">
              <div><span className="font-semibold">Teléfono:</span> 624 208 226</div>
              <div><span className="font-semibold">WhatsApp:</span> 624 208 226</div>
              <div><span className="font-semibold">Email:</span> contacto@imperialelitereformas.es</div>
              <div><span className="font-semibold">Zonas:</span> Madrid y Toledo</div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-lg">
            <form className="space-y-4" action="https://formsubmit.co/contacto@imperialelitereformas.es" method="POST">
              <input
                type="text"
                placeholder="Nombre y apellidos"
                className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-900"
              />
              <input
                type="tel"
                placeholder="Teléfono"
                className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-900"
              />
              <input
                type="email"
                placeholder="Correo electrónico"
                className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-900"
              />
              <textarea
                rows={6}
                placeholder="Describe tu reforma, avería o trabajo de mejora"
                className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-900"
              />
              <button
                type="submit"
                className="w-full rounded-2xl bg-slate-900 px-5 py-4 text-base font-semibold text-white shadow-lg hover:opacity-90"
              >
                Enviar solicitud
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-10 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="text-lg font-bold">Imperial Elite Reformas</div>
            <div className="text-sm text-slate-500">Reformas integrales y servicios en Madrid y Toledo</div>
          </div>
          <div className="text-sm text-slate-500">© 2026 Imperial Elite Reformas. Todos los derechos reservados.</div>
        </div>
      </footer>
    </div>
  );
}
