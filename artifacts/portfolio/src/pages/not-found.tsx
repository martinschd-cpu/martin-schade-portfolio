import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
import { useDocumentHead } from "@/hooks/use-document-head";
import { useLanguage } from "@/lib/language-context";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function NotFound() {
  const { t } = useLanguage();
  const nf = t.notFound;

  useDocumentHead({
    title: nf.meta.title,
    description: nf.meta.description,
    path: "/404",
  });

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50 relative">
      <div className="absolute top-6 right-6">
        <LanguageSwitcher variant="light" />
      </div>
      <Card className="w-full max-w-md mx-4">
        <CardContent className="pt-6">
          <div className="flex mb-4 gap-2">
            <AlertCircle className="h-8 w-8 text-red-500" />
            <h1 className="text-2xl font-bold text-gray-900">{nf.heading}</h1>
          </div>

          <p className="mt-4 text-sm text-gray-600">{nf.message}</p>

          <Link href="/" className="mt-6 inline-block text-sm text-blue-600 hover:underline">
            {nf.backLink}
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
