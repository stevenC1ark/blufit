import { fonts } from "./fonts";
import { Providers } from "./providers";

export const metadata = {
  title: "Blufit",
  description: "Blufit ecommerce shop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={fonts.poppins.variable}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
