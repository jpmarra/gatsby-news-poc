import React from "react";
import styled from "styled-components";
// import Share from '@base/mlb-react-patterns/dist/components/Share';

const Byline = ({ contributor, date, headline }) => {
  return (
    <BylineContainer>
      <Info>
        {contributor.name && <div>By {contributor.name}</div>}
        <time>{date}</time>
      </Info>
      {/* <ShareContainer>
                <Share
                    content={{
                        headline: 'headline',
                        url: `https://www.mlb.com`,
                        facebookQuote: headline,
                        twitterHandle: 'mlb',
                        twitterTitle: headline
                    }}
                    networks={{
                        facebook: true,
                        twitter: true,
                        email: true,
                        copy: true
                    }}
                    size="md"
                />
            </ShareContainer> */}
    </BylineContainer>
  );
};

const BylineContainer = styled.section`
  width: 90%;
  max-width: 764px;
  margin: 1rem 0;
  display: flex;
  justify-content: space-between;
  font-family: "mlb-primary";
`;

const Info = styled.div`
  time {
    color: #999;
  }
`;

const ShareContainer = styled.div`
  color: #999;
  * {
    fill: currentColor;
  }
`;

export default Byline;
