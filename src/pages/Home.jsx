import '../index.css'

export default function Home() {
  return (
    <>
      <h1 className="headline">Startseite</h1>
      <p className="info-text">
        Dieses kleine React-Projekt demonstriert die grundlegende Anwendung des
        Routing-Systems mit <strong>react-router-dom</strong>. Es wurde
        erstellt, um das Navigieren zwischen verschiedenen Seiten (wie Info und
        About) mit React besser zu verstehen und zu üben.
      </p>
      <p className="info-text">
        Das Projekt wurde mit dem <strong>Vite</strong>-Build-Tool erstellt, das
        eine schnelle Entwicklungsumgebung für moderne Webanwendungen bietet.
      </p>
    </>
  );
}
