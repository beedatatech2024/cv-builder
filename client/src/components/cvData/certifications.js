import { getYear } from "../../utils/DateModifications"

const Certifications = ({certifications}) => {
    return (
        <div className="cvb-personal-info">
            <h2>Certifications</h2>
            <ul>
                {certifications.map((cert, index) => (
                    <li key={index}>
                        <p><strong>{cert.course_name}</strong> at <strong>{cert.issuing_organization} in {getYear(cert.date_of_completion)}</strong></p>
                        <a href={cert.certificate_link}>Open Link</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Certifications