import React from 'react'
import { Container } from '../../components/Container'
import { ContentsList } from '../../components/ContentsList'
import { Navigation } from '../../components/Navigation'

const Contents = () => {
  return (
    <div>
      <Navigation />
      <Container>
        <ContentsList />
      </Container>
    </div>
  )
}

export default Contents
