import { Layout } from "../components/Layout";

interface DetailPageProps {
  id: string;
}

export const DetailPage = ({ id }: DetailPageProps) => {
  return (
    <Layout title={`Detail - ${id}`}>
      <div class="max-w-4xl mx-auto">
        <h1 class="text-3xl font-bold mb-6">Detail Page</h1>

        <div class="bg-white rounded-lg shadow-md overflow-hidden">
          <div class="p-6">
            <h2 class="text-2xl font-semibold mb-4">Item #{id}</h2>
            <p class="text-gray-600 mb-4">
              This is a sample detail page for item #{id}.
            </p>

            <div class="mt-8">
              <a
                href="/"
                class="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded"
              >
                Back to Home
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
