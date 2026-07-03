import { Link } from "wouter";
import { useDocumentHead } from "@/hooks/use-document-head";
import { useLanguage } from "@/lib/language-context";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function Datenschutz() {
  const { t } = useLanguage();
  const d = t.datenschutz;

  useDocumentHead({
    title: d.meta.title,
    description: d.meta.description,
    path: "/datenschutz",
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

        <h1 className="text-4xl font-bold mb-12 text-white">{d.heading}</h1>

        <section className="space-y-10 text-[#B8C2D4] leading-relaxed">
          <div>
            <h2 className="text-lg font-semibold text-white mb-2">{d.s1.heading}</h2>
            <h3 className="font-semibold text-[#E8EDF5] mt-4 mb-1">{d.s1.h1}</h3>
            <p>{d.s1.p1}</p>

            <h3 className="font-semibold text-[#E8EDF5] mt-4 mb-1">{d.s1.h2}</h3>
            <p><strong className="text-[#E8EDF5]">{d.s1.q1}</strong><br />
            {d.s1.a1}</p>

            <p className="mt-2"><strong className="text-[#E8EDF5]">{d.s1.q2}</strong><br />
            {d.s1.a2}</p>

            <p className="mt-2"><strong className="text-[#E8EDF5]">{d.s1.q3}</strong><br />
            {d.s1.a3}</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white mb-2">{d.s2.heading}</h2>
            <p>{d.s2.p1}</p>
            <p className="mt-2">{d.s2.p2}</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white mb-2">{d.s3.heading}</h2>
            <h3 className="font-semibold text-[#E8EDF5] mt-4 mb-1">{d.s3.h1}</h3>
            <p>{d.s3.p1}</p>

            <h3 className="font-semibold text-[#E8EDF5] mt-4 mb-1">{d.s3.h2}</h3>
            <p>{d.s3.p2Prefix}<br /><br />
            Martin Schade<br />
            {d.s3.emailLabel}: <a href="mailto:ms@martin-schade.de" className="text-[#60A5FA] hover:underline">ms@martin-schade.de</a><br />
            {d.s3.phoneLabel}: <a href="tel:+491629161676" className="text-[#60A5FA] hover:underline">+49 162 9161676</a></p>

            <h3 className="font-semibold text-[#E8EDF5] mt-4 mb-1">{d.s3.h3}</h3>
            <p>{d.s3.p3}</p>

            <h3 className="font-semibold text-[#E8EDF5] mt-4 mb-1">{d.s3.h4}</h3>
            <p>{d.s3.p4}</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white mb-2">{d.s4.heading}</h2>
            <p>{d.s4.p1}</p>
            <p className="mt-2">{d.s4.p2}</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white mb-2">{d.s5.heading}</h2>
            <p>{d.s5.p1}</p>
            <p className="mt-2">{d.s5.p2}</p>
            <p className="mt-2">{d.s5.p3}</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white mb-2">{d.s6.heading}</h2>
            <p>{d.s6.p1}</p>
          </div>
        </section>
      </div>
    </div>
  );
}
