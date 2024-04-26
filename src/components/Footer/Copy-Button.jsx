import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import copy from 'copy-to-clipboard';
import { FaEnvelopeSquare, FaClipboardCheck } from 'react-icons/fa';
import './Footer.css';

function CopyButton({ value, className, leftIcon, ...rest }) {
  const { t } = useTranslation();
  const [copied, setCopied] = useState(false);

  function copyValueToClipboard() {
    copy(value);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1000);
  }

  return (
    <a
      {...rest}
      className={`copy-button ${copied ? 'copied' : ''} ${className}`}
      onClick={copyValueToClipboard}
    >
      {leftIcon && (
        <div className="flex valign">
          {leftIcon}
          <p>{copied ? t('Email copié') : value}</p>
        </div>
      )}

      {!copied && <FaEnvelopeSquare size={28} />}
      {copied && <FaClipboardCheck size={28} />}

      {copied && <span>{t('Email copié')}</span>}
    </a>
  );
}

export default CopyButton;
