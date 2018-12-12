import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import styled from 'styled-components'
import gatsbyLogo from '../images/gatsby-icon.png'

const HeaderWrapper = styled.div`
  display: flex;
  background: #662e9b;
  img {
    object-fit: contain;
    margin: 0 24px 0 0;
    width: 60px;
  }
`

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  max-width: 960px;
  padding: 1rem;
`

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <HeaderContainer>
      <img 
        src={gatsbyLogo}
        alt="Gastby Logo" />
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </HeaderContainer>
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
