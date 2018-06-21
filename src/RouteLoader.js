// @flow

import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { Loading } from 'carbon-components-react'
import PolymathAuth, { NETWORK_KOVAN } from 'polymath-auth'
import { MetamaskPage } from 'polymath-ui'

import Root from './app/Root'
import SplashPage from './app/SplashPage'
import TermsOfUsePage from './app/terms/TOUPage'
import PrivacyPage from './app/terms/PrivacyPage'
import routes from './routes'

type Props = {
  location: {
    pathname: string,
    [any]: any
  }
}

class RouteLoader extends Component<Props> {
  render () {
    if (this.props.location.pathname === '/') {
      // noinspection RequiredAttributes
      return (
        <Root>
          <SplashPage />
        </Root>
      )
    } else if (this.props.location.pathname === '/privacypolicy') {
      return (
        <Root>
          <PrivacyPage />
        </Root>
      )
    } else if (this.props.location.pathname === '/termsofuse') {
      return (
        <Root>
          <TermsOfUsePage />
        </Root>
      )
    }
    const networks = [
      NETWORK_KOVAN,
    ]
    return (
      <PolymathAuth loading={<Loading />} guide={<MetamaskPage networks='Kovan' />} networks={networks}>
        {renderRoutes(routes)}
      </PolymathAuth>
    )
  }
}

export default withRouter(RouteLoader)
