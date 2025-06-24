import Image from "next/image";
import "./globals.css";

export default function HomePage() {
  return (
    <section id="home" className="home section dark-background" style={{ position: "relative" }}>
      <Image
        src="/assets/img/photo.jpg"
        alt="Drashti Rathod"
        width={300}
        height={300}
      />
      <div className="container">
        <h2>Drashti Rathod</h2>
        <p>
          <span className="typing-text">
            I am Full Stack Developer <br/>and CyberSecurity Enthusiast
          </span>
        </p>
      </div>
      

      {/* Download Resume Button fixed at top right */}
      {/* <a
        href="/assets/myresume.pdf"
        download
        style={{
          position: "fixed",
          top: "20px",
          right: "20px",
          backgroundColor: "#000",
          color: "#fff",
          padding: "12px 24px",
          borderRadius: "30px",
          textDecoration: "none",
          fontWeight: "600",
          boxShadow: "0 4px 6px rgba(0,0,0,0.3)",
          transition: "background-color 0.3s ease",
          zIndex: 1000,
        }}
       
      >
        Download Resume
      </a> */}
      <a
  href="/assets/myresume.pdf"
  download
  className="resume-btn"
>
  Download Resume
</a>

    </section>
  );
}
