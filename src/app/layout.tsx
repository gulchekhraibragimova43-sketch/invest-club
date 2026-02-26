import "@/css/globals.css";
import type { LayoutProps } from "@/types/layout.type";
import { FontConfig } from "@/configs/font.config";
import { Container } from "@/components/ui/container";
import { Navigation } from "@/layouts/navigation";
import { Footer } from "@/layouts/footer";

const AppLayout = ({ children }: LayoutProps) => {
    return <html lang="ru" translate="no" className={FontConfig.className}>
        <body className="min-h-screen flex flex-col justify-between scroll-smooth">
            <header className="fixed top-5 left-0 right-0 z-50">
                <Container>
                    <Navigation />
                </Container>
            </header>

            <main className="flex-1">
                {children}
            </main>

            <footer>
                <Footer />
            </footer>
        </body>
    </html>
}

export default AppLayout;