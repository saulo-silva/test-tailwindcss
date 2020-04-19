import React from "react";
import { Link } from 'gatsby';
import Layout from "../components/layout";
import SEO from "../components/seo";

function FormsPage() {

  return (
    <Layout>
      <SEO title="Home" />

      <div className="flex items-center border rounded-full max-w-xl border-teal-500 py-1 m-auto">
        <input
          className="appearance-none bg-transparent border-none w-full text-gray-700  py-1 px-2 leading-tight focus:outline-none"
          type="text" placeholder="Jane Doe" aria-label="Full name" />
          <button
            className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-3 rounded-full"
            type="button">
            Pesquisar
          </button>
          <button
            className="flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 text-sm py-1 px-2 mr-2 rounded"
            type="button">
            Cancel
          </button>
      </div>
    </Layout>
  )
}

export default FormsPage