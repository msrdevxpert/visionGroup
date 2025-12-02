import Footer from "@/components/home3/Footer";


export default function CommonLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* <Navbar /> */}
      {children}
      <Footer />
    </>
  );
}
