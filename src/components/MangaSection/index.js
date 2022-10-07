import React from 'react'
import { Container } from 'react-bootstrap'
import MangaCard from '../MangaCard'

function MangaSection({Data}) {
  return (
    <Container>
        {Data.map((manga,index) => {
            return (
                <MangaCard 
                    key={index}
                    name={manga.name}
                    image={manga.image}
                    tags={manga.categories}
                />
            )
        })}
    </Container>
  )
}

export default MangaSection