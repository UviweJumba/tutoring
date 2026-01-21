export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t bg-muted/50">
      <div className="container flex flex-col items-center justify-center gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <p className="text-center text-sm leading-loose text-muted-foreground">
          © {currentYear} All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
