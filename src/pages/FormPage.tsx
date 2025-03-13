import { Layout } from "../components/Layout";

export const FormPage = () => {
  return (
    <Layout title="Form">
      <div class="max-w-md mx-auto">
        <h1 class="text-3xl font-bold mb-6">Sample Form</h1>

        <div class="bg-white p-6 rounded-lg shadow-md">
          <form hx-post="/api/submit-form" hx-redirect="/">
            <div class="mb-4">
              <label class="block text-gray-700 mb-1">Name</label>
              <input
                type="text"
                name="name"
                required
                class="w-full px-3 py-2 border rounded"
              />
            </div>

            <div class="mb-4">
              <label class="block text-gray-700 mb-1">Email</label>
              <input
                type="email"
                name="email"
                required
                class="w-full px-3 py-2 border rounded"
              />
            </div>

            <div class="mb-4">
              <label class="block text-gray-700 mb-1">Message</label>
              <textarea
                name="message"
                rows="4"
                class="w-full px-3 py-2 border rounded"
              ></textarea>
            </div>

            <div class="flex justify-between">
              <a
                href="/"
                class="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded"
              >
                Cancel
              </a>
              <button
                type="submit"
                class="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};
