import React from 'react';
import PropTypes from 'prop-types';
import { StaticImage } from 'gatsby-plugin-image';
import { useIntl } from 'gatsby-plugin-intl';

import { container, swap, leftBox, iconWrapper, imageWrapper } from './cover.module.scss';

const Cover = ({ isSwapped = false }) => {
  const Intl = useIntl();

  return (
    <div className={`${container} ${isSwapped && swap}`}>
      <div className={leftBox}>
        <div className={iconWrapper}>
          <StaticImage
            quality={96}
            width={48}
            height={57}
            src="../../../../images/verifiedShield.svg"
          />
        </div>
        <h4>{Intl.formatMessage({ id: 'pages.miscellaneous.trustedThousands' })}</h4>
      </div>
      <StaticImage
        className={imageWrapper}
        width={746}
        height={400}
        quality={96}
        placeholder="none"
        src="../../../../images/trusted-img@2x.png"
      />
    </div>
  );
};

Cover.propTypes = {
  isSwapped: PropTypes.bool,
};

export default Cover;
