import { getYear } from "../../utils/DateModifications";

const EducationDetails = ({ education }) => {
  return (
    <div className="cvb-personal-info">
      <h2>Education</h2>
      <ul>
        {education.map((edu, index) => (
          <li key={index}>
            <h3>{edu.degree}</h3>
            <p>{edu.institution}</p>
            <p>{getYear(edu.startDate)} - {getYear(edu.endDate)}</p>
            <p>{edu.description}</p>
          </li>
        ))} 
      </ul>
    </div>
  );
};





export default EducationDetails;