import CVModal from "../../components/CVModal";
import CVPreview from "../../components/CVPreview";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

const CVDetails = ({ cvData }) => {
  const token = Cookies.get("jwtToken");
  const userId = token ? jwtDecode(token).id : null;
  return (
    <div className="cvb-cv-details">
      <CVModal userId={userId} />
      <CVPreview cvData={cvData} selectedTemplate={"cv"}/>
    </div>
  );
};

export default CVDetails;
