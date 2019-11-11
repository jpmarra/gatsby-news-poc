import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Logo from '../assets/logo.svg';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
    z-index: 1000;
    background: #041e42;
    position: fixed;
    width: 100%;
    height: 56px;
    display: flex;
    align-items: center;
    padding: 0 32px;
    box-shadow: 1px 0 5px #000000;
`;

const Header = ({ siteTitle }) => (
    <HeaderWrapper>
        <Link to="/" style={{ maxHeight: 42, minHeight: 42 }}>
            <Logo style={{ maxHeight: 40, minHeight: 40, height: '100%', width: 'auto' }} />
        </Link>
    </HeaderWrapper>
);

Header.propTypes = {
    siteTitle: PropTypes.string
};

Header.defaultProps = {
    siteTitle: ``
};

export default Header;
