import React from 'react'
import styled from 'styled-components'
import { Route, Switch } from 'react-router-dom'
import Products from '../pages/Products'
import routes from '../constants/routes.json'


const Main = () => {
  return (
    <MainWrapper>
      <Switch>
        <Route exact path={routes.PRODUCTS} component={Products} />
      </Switch>
    </MainWrapper>
  )
}

const MainWrapper = styled.main`
  max-width: ${({ theme }) => theme.widths.content};
  margin: 0 auto;
  padding: 4rem;
`

export default Main
