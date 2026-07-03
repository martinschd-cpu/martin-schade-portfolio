import { Link } from "wouter";
import { useDocumentHead } from "@/hooks/use-document-head";
import { useLanguage } from "@/lib/language-context";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function Impressum() {
  const { t } = useLanguage();
  const i = t.impressum;

  useDocumentHead({
    title: i.meta.title,
    description: i.meta.description,
    path: "/impressum",
  });

  return (
    <div className="min-h-screen bg-[#0D1930] text-[#E8EDF5]">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <div className="flex items-center justify-between mb-8">
          <Link href="/" className="font-mono text-sm text-[#60A5FA] hover:underline inline-block tracking-widest uppercase">
            {t.common.back}
          </Link>
          <LanguageSwitcher variant="dark" />
        </div>

        <h1 className="text-4xl font-bold mb-12 text-white">{i.heading}</h1>

        <section className="space-y-8 text-[#B8C2D4] leading-relaxed">
          <div>
            <h2 className="text-lg font-semibold text-white mb-2">{i.angabenHeading}</h2>
            <p>
              {i.addressLines.map((line, idx) => (
                <span key={idx}>
                  {line}
                  {idx < i.addressLines.length - 1 && <br />}
                </span>
              ))}
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white mb-2">{i.kontaktHeading}</h2>
            <p>
              {i.emailLabel}: <a href="mailto:ms@martin-schade.de" className="text-[#60A5FA] hover:underline">ms@martin-schade.de</a><br />
              {i.phoneLabel}: <a href="tel:+491629161676" className="text-[#60A5FA] hover:underline">+49 162 9161676</a>
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white mb-2">{i.berufHeading}</h2>
            <p>{i.berufText1}<br />
            {i.berufText2}</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white mb-2">{i.haftungInhalteHeading}</h2>
            <p>{i.haftungInhalteText1}</p>
            <p className="mt-2">{i.haftungInhalteText2}</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white mb-2">{i.haftungLinksHeading}</h2>
            <p>{i.haftungLinksText}</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white mb-2">{i.urheberrechtHeading}</h2>
            <p>{i.urheberrechtText}</p>
          </div>
        </section>
      </div>
    </div>
  );
}
