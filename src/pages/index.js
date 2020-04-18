import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Card from "../components/Card"
import Tags from "../components/Tags"
import Profile from "../components/Profile"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1 className="text-center border border-gray-400 p-8">Hi people</h1>
    <h1 className="title text-right text-purple">Hi people</h1>
    <p className="text-left">Welcome to your new Gatsby site.</p>
    <p className="text-center">Now go build something great.</p>
    <div className="max-w-xs my-16 mx-auto border border-gray-400">
      <Image />
    </div>

    <div className="flex items-center justify-center bg-black h-20 my-8">
      <Tags />
    </div>

    <div className="divCircular my-8">
      <div className="max-w-sm m-auto">
        <Profile />
      </div>
    </div>

    <div className="divCircular mb-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card title="Titulo 1" />
        <Card title="Titulo 2" />
        <Card title="Titulo 3" />
        <Card title="Titulo 4" />
        <Card title="Titulo 5" />
        <Card title="Titulo 6" />
      </div>
    </div>
    <div className="divCircular grid grid-cols-1 sm:grid-cols-3 gap-4">
      <div className="border border-black p-8">
        <button type="button" className="button">
          Hover me
        </button>

        <button type="button" className="button button-rounded">
          Hover me
        </button>
      </div>
      <div className="border border-black p-8">
        <button type="button" className="button button-red">
          Hover me
        </button>

        <button type="button" className="button button-red button-rounded">
          Hover me
        </button>
      </div>
      <div className="border border-black p-8">
        <button type="button" className="button button-orange">
          Hover me
        </button>
      </div>
    </div>
  </Layout>
)

export default IndexPage
