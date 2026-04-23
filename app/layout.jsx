export const metadata = {
  title: "Imperial Elite Reformas",
  description: "Reformas integrales y servicios en Madrid y Toledo."
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
