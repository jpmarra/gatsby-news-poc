import React from 'react';
import Helmet from 'react-helmet';

const HeadScripts = ({ hasInstagram, hasTwitter }) => {
    return (
        <Helmet>
            {hasInstagram && <script async defer src="//www.instagram.com/embed.js"></script>}
            {hasTwitter && <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>}
        </Helmet>
    );
};

export default HeadScripts;
