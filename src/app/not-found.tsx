import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center p-4">
      <h1 className="text-4xl font-bold mb-4">404 - الصفحة غير موجودة</h1>
      <p className="text-muted-foreground mb-6">عذراً، لم نتمكن من العثور على الصفحة التي تبحث عنها.</p>
      <Button asChild>
        <Link href="/">العودة إلى الصفحة الرئيسية</Link>
      </Button>
    </div>
  );
}
