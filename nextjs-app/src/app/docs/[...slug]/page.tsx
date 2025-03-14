import React from 'react'

const DocsChildPage = async ({params}:{slug: Promise<string[]>}) => {
    const {slug} = await params;

    if(slug?.length === 2) {
        return (
            <div>
              <h2>Docs for feature {slug[0]} and example {slug[1]}</h2>
            </div>
          )
    } else if (slug?.length === 1) {
        return (
            <div>
              <h2>Docs for feature {slug[0]}</h2>
            </div>
          )
    } else {
        return (
            <div>
              <h2>Docs for feature</h2>
            </div>
          )
    }

}

export default DocsChildPage
