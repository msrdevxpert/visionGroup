import Footer from "@/components/home2/Footer";


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
