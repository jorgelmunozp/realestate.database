import './App.scss';

const charts = [
  {
    key: 'properties',
    title: 'Colección Propiedades',
    desc: 'Métricas y listado de inmuebles',
    src: 'https://charts.mongodb.com/charts-project-0-jjupfxn/embed/charts?id=8de8c654-4bc0-468c-8951-78ef334b9e94&maxDataAge=14400&theme=light&autoRefresh=true'
  },
  {
    key: 'owners',
    title: 'Colección Propietarios',
    desc: 'Registro de dueños vinculados',
    src: 'https://charts.mongodb.com/charts-project-0-jjupfxn/embed/charts?id=c0410648-828d-4aea-aea9-7c4d22d45db9&maxDataAge=14400&theme=light&autoRefresh=true'
  },
  {
    key: 'images',
    title: 'Colección Imágenes',
    desc: 'Assets por propiedad',
    src: 'https://charts.mongodb.com/charts-project-0-jjupfxn/embed/charts?id=769c3f85-fcfb-440e-9b43-2d5042e250ad&maxDataAge=14400&theme=light&autoRefresh=true'
  },
  {
    key: 'traces',
    title: 'Colección Historial',
    desc: 'PropertyTrace: movimientos y cambios',
    src: 'https://charts.mongodb.com/charts-project-0-jjupfxn/embed/charts?id=fbb3b44f-0a2e-44cf-a682-7f7aa0ce6d87&maxDataAge=14400&theme=light&autoRefresh=true'
  },
  {
    key: 'users',
    title: 'Colección Usuarios',
    desc: 'Usuarios del sistema y roles',
    src: 'https://charts.mongodb.com/charts-project-0-jjupfxn/embed/charts?id=ca70dbce-6cc3-4bef-8360-252dbe333797&maxDataAge=14400&theme=light&autoRefresh=true',
    wide: true
  }
];

function App() {
  const year = new Date().getFullYear();

  return (
    <div className="app-shell">
      <header className="app-header">
        <div className="brand">
          <div className="brand-icon">RE</div>
          <div className="brand-text">
            <h1 className="title">RealEstate</h1>
            <p className="subtitle">Visualización MongoDB (Atlas Charts)</p>
          </div>
        </div>
        <div className="header-actions">
          <span className="badge badge-success">Online</span>
          <span className="env">env: <strong>production</strong></span>
        </div>
      </header>

      <main className="content">
        <section className="section-head">
          <div>
            <h2 className="section-title">Colecciones monitoreadas</h2>
            <p className="section-desc">Datos expuestos desde MongoDB Atlas para el proyecto RealEstate.</p>
          </div>
          <div className="chips">
            <span className="chip">Propiedades</span>
            <span className="chip">Propietarios</span>
            <span className="chip">Imágenes</span>
            <span className="chip">Historial</span>
            <span className="chip">Usuarios</span>
          </div>
        </section>

        <section className="charts-grid">
          {charts.map(chart => (
            <article key={chart.key} className={`chart-card ${chart.wide ? 'chart-card-wide' : ''}`}>
              <header className="chart-card-header">
                <h3>{chart.title}</h3>
                <p>{chart.desc}</p>
              </header>
              <div className="chart-frame">
                <iframe src={chart.src} title={chart.title} loading="lazy"></iframe>
              </div>
            </article>
          ))}
        </section>
      </main>

      <footer className="app-footer">
        <p>RealEstate • Dashboard MongoDB</p>
      </footer>
    </div>
  );
}

export default App;
