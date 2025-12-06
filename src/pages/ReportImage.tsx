import { useLocation } from "react-router-dom";

const ReportImages: Record<string, string[]> = {
  "/reports/metrics": ["/images/metrics_dashboard.jpeg"],
  "/reports/brokerage/open-brokerage": ["/images/resolved_brokerage_breaks.jpeg"],
  "/reports/brokerage/resolved-brokerage": ["/images/open_brokerage_breaks.jpeg"],
  "/reports/cat-error-dashboard": ["/images/cat_error.jpeg"],
};

const ReportImage: React.FC = () => {
  const location = useLocation();
  const images = ReportImages[location.pathname] || ["/images/default.png"];

  return (
    <div style={{ 
      display: "flex", 
      flexDirection: "column", // Stack images vertically
      overflowY: "auto", // Enable vertical scrolling
      maxHeight: "85vh", // Adjust max height to allow scrolling
      gap: "10px", 
      justifyContent: "center",
      alignItems: "center",
    }}>
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt="Report Image"
          onError={(e) => (e.currentTarget.src = "/images/image_not_found.png")}
          style={{ maxWidth: "100%", height: "auto", objectFit: "contain", borderRadius: "8px" }}
        />
      ))}
    </div>
  );
};

export default ReportImage;