import { Link } from "wouter";

export default function Impressum() {
  return (
    <div className="min-h-screen bg-[#0D1930] text-[#E8EDF5]">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <Link href="/" className="font-mono text-sm text-[#60A5FA] hover:underline mb-8 inline-block tracking-widest uppercase">
          ← Zurück
        </Link>

        <h1 className="text-4xl font-bold mb-12 text-white">Impressum</h1>

        <section className="space-y-8 text-[#B8C2D4] leading-relaxed">
          <div>
            <h2 className="text-lg font-semibold text-white mb-2">Angaben gemäß § 5 TMG</h2>
            <p>Martin Schade<br />
            Freiberuflicher Product Manager<br />
            Eckhardstrasse 40<br />
            90461 Nürnberg<br />
            Deutschland</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white mb-2">Kontakt</h2>
            <p>
              E-Mail: <a href="mailto:martin.schd@gmail.com" className="text-[#60A5FA] hover:underline">martin.schd@gmail.com</a><br />
              Telefon: <a href="tel:+491629161676" className="text-[#60A5FA] hover:underline">+49 162 9161676</a>
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white mb-2">Berufsbezeichnung und berufsrechtliche Regelungen</h2>
            <p>Berufsbezeichnung: Freiberuflicher Product Manager / Interim Head of Product<br />
            Zuständige Aufsichtsbehörde: keine (freier Beruf)</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white mb-2">Haftung für Inhalte</h2>
            <p>Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.</p>
            <p className="mt-2">Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white mb-2">Haftung für Links</h2>
            <p>Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white mb-2">Urheberrecht</h2>
            <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.</p>
          </div>
        </section>
      </div>
    </div>
  );
}
