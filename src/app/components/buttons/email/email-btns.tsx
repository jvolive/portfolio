"use client";

import React, { useState } from "react";
import { BiCopy } from "react-icons/bi";
import { BsCheck2All } from "react-icons/bs";
import { EmailIcon } from "../../icons/email-icon";
import "./email-btns.scss";

export function EmailBtns() {
  const [copied, setCopied] = useState("");
  const [isCopied, setIsCopied] = useState(false);

  const staticText = "contato.jvolive@gmail.com"; // Altere o valor para o email desejado

  const handleCopy = () => {
    if (staticText) {
      navigator.clipboard.writeText(staticText).then(() => {
        setCopied(staticText);
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 2000);
      });
    }
  };

  return (
    <div>
      {isCopied ? (
        <div className="notification">
          <BsCheck2All />
          Email copiado
        </div>
      ) : (
        <div className="btn-email" onClick={handleCopy}>
          <EmailIcon />
          <span>{staticText}</span>
          <span>
            <BiCopy />
          </span>
        </div>
      )}
    </div>
  );
}
