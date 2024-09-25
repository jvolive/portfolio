import React from "react";
import DownloadButton from "./DownloadButton";

export function Curriculum() {
  const pdfFileName = "Curriculo";

  return (
    <div>
      <DownloadButton pdfUrl={pdfFileName} />
    </div>
  );
}
