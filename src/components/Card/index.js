import React from "react"

function Card({ title }) {
  return (
    <div className="border border-solid border-gray-200 md:max-w-sm p-4">
      <div className="text-gray-900 text-2xl border-b p-2">{title}</div>
      <div className="mt-4 px-4 sm:px-2 text-gray-700">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>
          Quisque sed cursus ante. Pellentesque mauris lectus, sodales sed
          lacinia rutrum, ultricies non velit.
        </p>
      </div>
      <div className="border-t py-4 mt-4">
        <button type="button" className="button hidden sm:block w-full">
          Clique aqui
        </button>
      </div>
    </div>
  )
}

export default Card
