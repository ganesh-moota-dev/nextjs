import React from 'react'

const Docs = async ({params}: {slug: Promise<String[]>} | any) => {
  const {slug} = await params;

  if(slug?.length === 1) {
    return (
      <div>
        <h2>Docs {slug[0]}</h2>
      </div>
    )
  } else {
    return (
      <div>
        docs page
      </div>
    )
  }
}

export default Docs
