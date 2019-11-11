import React, { useEffect } from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { formatHtml } from '../utils';
import HeadScripts from './head-scripts';
import Byline from './byline';

const Article = ({ contributor, date, headline, body, media, localImage, tokenData }) => {
    useEffect(() => {
        formatHtml(tokenData);
    }, []);

    let hasTwitter = false,
        hasInstagram = false;
    tokenData.forEach((token) => {
        if (token.subType === 'twitterEmbed') {
            hasTwitter = true;
        } else if (token.type === 'hyperLink' && token.href.match(/instagram/g)) {
            hasInstagram = true;
        }
    });
    return (
        <>
            <HeadScripts hasTwitter hasInstagram />
            <ArticleContainer>
                <Headline>{headline}</Headline>
                <ArticleMediaContainer>
                    {localImage && <Img fluid={localImage.childImageSharp.fluid} />}
                </ArticleMediaContainer>
                <Byline date={date} contributor={contributor.contributors[0]} />
                <ArticleBody id="article-body" dangerouslySetInnerHTML={{ __html: body }} />
                <Tagline>
                    {contributor.contributors[0].tagline && (
                        <div dangerouslySetInnerHTML={{ __html: contributor.contributors[0].tagline }} />
                    )}
                </Tagline>
            </ArticleContainer>
        </>
    );
};

const ArticleContainer = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Headline = styled.h1`
    font-family: 'mlb-primary';
    width: 90%;
    font-size: 2rem;
    margin: 1rem 0;
`;

const ArticleMediaContainer = styled.section`
    width: 100%;
`;
const ArticleBody = styled.section`
    width: 90%;
    max-width: 764px;
    font-size: 1rem;
`;

const Tagline = styled.section`
    width: 90%;
    max-width: 764px;
    margin-bottom: 1rem;
    font-style: italic;
`;

export default Article;
