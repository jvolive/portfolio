import React from "react";
import DownloadButton from "./DownloadButton";

export function Curriculum() {
  const pdfFileName = "curriculo";

  return (
    <div>
      <DownloadButton pdfUrl={pdfFileName} />
    </div>
  );
}
