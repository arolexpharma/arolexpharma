import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

const Button = ({ href, text, className }:any) => {
  return (
    <Link href={href}>
      <button
        className={`bg-green-600 hover:bg-green-700 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg transition ${className}`}
      >
        {text}
      </button>
    </Link>
  );
};

Button.propTypes = {
  href: PropTypes.string.isRequired, 
  text: PropTypes.string.isRequired, 
  className: PropTypes.string, 
};

Button.defaultProps = {
  className: '', 
};

export default Button;
