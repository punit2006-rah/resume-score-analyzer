import { useState } from "react";
import "./App.css";

function App() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const backgroundStyle = {
    backgroundImage: file
      ? "url('https://png.pngtree.com/thumb_back/fw800/back_our/20190619/ourmid/pngtree-resume-color-hexagon-background-h5-background-material-image_139314.jpg"
      : "url('https://content-management-files.canva.com/1ccab316-9628-401a-afdb-ce6a1c4e8f63/header_resumes1.jpg?resize-format=auto&resize-quality=70')",
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (!selectedFile) return;

    setLoading(true);
    setFile(null);

    setTimeout(() => {
      setFile(selectedFile);
      setLoading(false);
    }, 2000); // 2 seconds loading simulation
  };

  return (
    <div className="page" style={backgroundStyle}>
      <div className="card">
        <h1>Resume Score Analyzer</h1>
        <p className="subtitle">Upload your resume (PDF only)</p>

        <label className="upload">
          <input
            type="file"
            accept="application/pdf"
            onChange={handleFileChange}
          />
          Click to upload PDF
        </label>

        {loading && (
          <div className="loader-box">
            <div className="spinner"></div>
            <p>Analyzing resume...</p>
          </div>
        )}

        {file && !loading && (
          <>
            <p className="filename">📄 {file.name}</p>

            <div className="score-section">
              <h2>Resume Score</h2>
              <div className="bar">
                <div className="fill"></div>
              </div>
              <p className="score">75% Match</p>
            </div>

            <h3>Suggestions for Improvement</h3>
            <ul>
              <li>Add more relevant technical skills</li>
              <li>Improve project descriptions</li>
              <li>Use clear and consistent formatting</li>
              <li>Add measurable achievements</li>
            </ul>

            <p className="note">
              *This analysis is simulated for assessment purposes.
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
