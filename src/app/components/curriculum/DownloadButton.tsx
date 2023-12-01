"use client";

// DownloadButton.tsx
import React, { useState } from "react";
import axios from "axios";
import "./curriculum.scss";
import { PdfIcon } from "../icons/pdf-icon";

interface DownloadButtonProps {
  pdfUrl: string;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({ pdfUrl }) => {
  const [downloaded, setDownloaded] = useState(false);

  const downloadPdf = async () => {
    try {
      const response = await axios.get(`/${pdfUrl}.pdf`, {
        responseType: "blob",
      });

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `${pdfUrl}.pdf`);
      document.body.appendChild(link);

      link.click();

      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);

      setDownloaded(true);
    } catch (error) {
      console.error("Erro ao baixar o arquivo PDF:", error);
    }
  };

  return (
    <div>
      <button
        className={`btn-curriculum ${downloaded ? "downloaded" : ""}`}
        onClick={downloadPdf}
        disabled={downloaded}
      >
        <PdfIcon />
        {downloaded ? "Obrigado" : "Baixar Currículo"}
      </button>
    </div>
  );
};

export default DownloadButton;
