interface LayoutProps {
  title?: string;
  children: any;
}

export const Layout = ({ children, title = "App Title" }: LayoutProps) => {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
        <link
          href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
          rel="stylesheet"
        />
        <script src="https://unpkg.com/htmx.org@1.9.10"></script>
      </head>
      <body class="bg-gray-100 min-h-screen">
        <header class="bg-white shadow-sm">
          <div class="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
            <a href="/" class="font-bold text-xl text-blue-600">
              APP NAME
            </a>
            <nav class="flex gap-4">
              <a href="/" class="hover:text-blue-600">
                Home
              </a>
              <a href="/about" class="hover:text-blue-600">
                About
              </a>
              <a href="/contact" class="hover:text-blue-600">
                Contact
              </a>
            </nav>
          </div>
        </header>

        <main class="max-w-7xl mx-auto px-4 py-8">{children}</main>

        <footer class="bg-white py-6 mt-12">
          <div class="max-w-7xl mx-auto px-4 text-center text-gray-500">
            &copy; {new Date().getFullYear()} APP NAME. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
};
