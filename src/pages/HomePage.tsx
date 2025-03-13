import { Layout } from "../components/Layout";

export const HomePage = () => {
  return (
    <Layout title="Home">
      <div>
        <h1 class="text-3xl font-bold mb-6">Welcome to Your App</h1>

        <div class="bg-white p-6 rounded-lg shadow-md">
          <p class="mb-4">This is a starter template for your application.</p>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div class="border rounded-lg p-4 shadow-sm">
              <h2 class="text-xl font-semibold">Feature One</h2>
              <p class="text-gray-600 mt-2">
                Description of your first feature.
              </p>
              <a
                href="/detail/1"
                class="mt-4 inline-block bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
              >
                Learn More
              </a>
            </div>

            <div class="border rounded-lg p-4 shadow-sm">
              <h2 class="text-xl font-semibold">Feature Two</h2>
              <p class="text-gray-600 mt-2">
                Description of your second feature.
              </p>
              <a
                href="/detail/2"
                class="mt-4 inline-block bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
              >
                Learn More
              </a>
            </div>

            <div class="border rounded-lg p-4 shadow-sm">
              <h2 class="text-xl font-semibold">Feature Three</h2>
              <p class="text-gray-600 mt-2">
                Description of your third feature.
              </p>
              <a
                href="/form"
                class="mt-4 inline-block bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
              >
                Go to Form
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
