import { Outlet } from "react-router-dom";
import ReportImage from "./ReportImage";

const Reports: React.FC = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default Reports;