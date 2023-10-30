// import './globals.css'
"use client";
import baseTheme from "@/chakra-ui/theme";
import Navbar from "@/components/layout/Navbar";
import { ChakraProvider } from "@chakra-ui/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../public/css/slider.css";
import "../public/css/index.css";
import "../public/css/contact.css";
import Footer from "@/components/layout/Footer";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import Contact from "@/components/contact-fixed/Contact";
import ResponsiveMenu from "@/components/layout/ResponsiveMenu";
import { ViewportProvider } from "@/hook/ViewportProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>

      </head>
      <body>
        <ViewportProvider>
        <Provider store={store}>
          <Contact />
          <ChakraProvider theme={baseTheme}>
            <Navbar />
            <ResponsiveMenu/>
            {children}
            <Footer />
          </ChakraProvider>
        </Provider>
        </ViewportProvider>
      </body>
    </html>
  );
}
