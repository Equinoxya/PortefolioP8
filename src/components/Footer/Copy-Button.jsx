import React, { useState } from 'react';
import copy from 'copy-to-clipboard';
import { FaEnvelopeSquare, FaClipboardCheck } from 'react-icons/fa';
import './Footer.css';

function CopyButton({ value, className = '', leftIcon, ...rest }) {
  const [copied, setCopied] = useState(false);

  function copyValueToClipboard() {
    copy(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  }

  const icon = copied ? <FaClipboardCheck size={28} /> : <FaEnvelopeSquare size={28} />;

  return (
    <button
      className={`copy-button ${copied ? 'copied' : ''} ${className}`.trim()}
      onClick={copyValueToClipboard}
      type="button"
    >
      <div className="flex valign">
        {leftIcon && leftIcon}
        {icon}
      </div>
    </button>
  );
}

export default CopyButton;