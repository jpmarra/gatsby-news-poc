/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Header from './header';
import './layout.css';
const MainWrapper = styled.div`
    padding-top: 56px;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
`;

const MainContainer = styled.main`
    max-width: 1284px;
    width: 100%;
    min-height: 100vh;
    height: 100%;
    background-color: #ffffff;
`;

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <MainWrapper>
                <MainContainer>{children}</MainContainer>
            </MainWrapper>
        </>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired
};

export default Layout;
