import Footer from "@/components/common/footer";
import Header from "@/components/common/header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen flex-col">
      <Header />
      <main className="wrapper">{children}</main>
      <Footer />
    </div>
  );
}
