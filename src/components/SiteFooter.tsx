export default function SiteFooter() {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="text-sm text-gray-600">
          <p className="font-medium text-gray-900">Broadmead Boutique B&B</p>
          <p>Tenby, Pembrokeshire</p>
          <p className="mt-4 text-xs text-gray-500">
            © {new Date().getFullYear()} Broadmead. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
