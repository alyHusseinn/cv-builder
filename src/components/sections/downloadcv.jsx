import html2pdf from "html2pdf.js";

function DownloadCv({ name }) {
  function downLoadCv(cvName) {
    const cv = document.querySelector(".preview");
    cvName = cvName.replaceAll(" ", "_");

    const options = {
      margin: 0.5,
      filename: `${cvName}.pdf`,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };
    cv.style.width = "100%";

    html2pdf()
      .set(options)
      .from(cv)
      .save()
      .then(() => {
        cv.style.width = "800px";
      });
  }

  return (
    <div className="downlaod-sec">
      <h1>Done</h1>
      <button onClick={() => downLoadCv(name)}>Download</button>
    </div>
  );
}

export default DownloadCv;
