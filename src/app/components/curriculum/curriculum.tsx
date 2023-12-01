import React from "react";
import DownloadButton from "./DownloadButton";

export function Curriculum() {
  const pdfFileName = "curriculo"; // Nome do arquivo PDF sem extensão

  return (
    <div>
      <DownloadButton pdfUrl={pdfFileName} />
    </div>
  );
}
