export default function Home() {
  return (
    <main style={{fontFamily:"Arial, sans-serif",background:"#f8f8f8",color:"#111"}}>

      {/* HERO */}
      <section style={{
        backgroundImage:"url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=80')",
        backgroundSize:"cover",
        backgroundPosition:"center",
        padding:"120px 20px",
        color:"white",
        textAlign:"center"
      }}>
        <div style={{background:"rgba(0,0,0,0.65)",padding:"40px",borderRadius:"14px",maxWidth:"900px",margin:"auto"}}>
          <h1 style={{fontSize:"52px",marginBottom:"20px"}}>Imperial Elite Reformas</h1>
          <p style={{fontSize:"24px",marginBottom:"30px"}}>
            Reformas integrales premium en Madrid y Toledo
          </p>
          <a href="#contacto" style={{
            background:"#d4af37",
            color:"#111",
            padding:"16px 32px",
            textDecoration:"none",
            fontWeight:"bold",
            borderRadius:"10px"
          }}>
            Solicitar presupuesto
          </a>
        </div>
      </section>

      {/* SERVICIOS */}
      <section style={{padding:"70px 20px",maxWidth:"1200px",margin:"auto"}}>
        <h2 style={{textAlign:"center",fontSize:"40px",marginBottom:"50px"}}>Nuestros Servicios</h2>

        <div style={{
          display:"grid",
          gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",
          gap:"25px"
        }}>

          {[
            ["Reformas Integrales","https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80"],
            ["Reformas de Baños","https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=800&q=80"],
            ["Reformas de Cocinas","https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=800&q=80"],
            ["Pintura Profesional","https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=800&q=80"],
            ["Humedades y Filtraciones","https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80"],
            ["Locales y Oficinas","https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=800&q=80"]
          ].map((item,i)=>(
            <div key={i} style={{
              background:"white",
              borderRadius:"14px",
              overflow:"hidden",
              boxShadow:"0 10px 25px rgba(0,0,0,0.12)"
            }}>
              <img src={item[1]} style={{width:"100%",height:"220px",objectFit:"cover"}} />
              <div style={{padding:"20px"}}>
                <h3>{item[0]}</h3>
                <p>Acabados premium, rapidez y máxima profesionalidad.</p>
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* CONFIANZA */}
      <section style={{
        background:"#111",
        color:"white",
        padding:"70px 20px",
        textAlign:"center"
      }}>
        <h2 style={{fontSize:"38px"}}>¿Por qué elegirnos?</h2>
        <p style={{maxWidth:"900px",margin:"20px auto",fontSize:"20px"}}>
          ✔ Presupuesto claro y sin compromiso <br/>
          ✔ Materiales de alta calidad <br/>
          ✔ Profesionales expertos <br/>
          ✔ Cumplimos plazos <br/>
          ✔ Atención rápida por WhatsApp
        </p>
      </section>

      {/* CONTACTO */}
      <section id="contacto" style={{padding:"70px 20px",textAlign:"center"}}>
        <h2 style={{fontSize:"38px"}}>Pide tu presupuesto hoy</h2>
        <p style={{fontSize:"20px"}}>imperial.elite.reformas@gmail.com</p>
        <p style={{fontSize:"22px",fontWeight:"bold"}}>Madrid y Toledo</p>

        <a href="mailto:imperial.elite.reformas@gmail.com" style={{
          background:"#d4af37",
          color:"#111",
          padding:"15px 28px",
          textDecoration:"none",
          borderRadius:"10px",
          fontWeight:"bold",
          display:"inline-block",
          marginTop:"20px"
        }}>
          Contactar ahora
        </a>
      </section>

    </main>
  );
}
