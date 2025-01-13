import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

const Button = ({ href, text, className }:any) => {
  return (
    <Link href={href}>
      <button
        className={`bg-green-600 hover:bg-green-700 text-white  rounded-md transition ${className}`}
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
