function VoluntaryIdentification() {
  return (
    <div>
      <p className="heading">Voluntary Self-Identification</p>
      <p className="self-identification-text">
        We are committed to creating an inclusive and diverse workplace. As part
        of our efforts, we invite you to voluntarily self-identify specific
        personal characteristics. This information helps us understand our
        workforce better and aligns with our equal opportunity and affirmative
        action obligations.
      </p>
      <p className="sub-heading">Why We Ask for This Information</p>
      <p className="self-identification-text">
        We collect voluntary self-identification information to:
      </p>
      <ul>
        <li className="self-identification-text">
          <span className="identification-reuqire-reason">
            Promote Diversity and Inclusion:
          </span>
          Understanding our workforce demographics allows us to foster a more
          inclusive environment.
        </li>
        <li className="self-identification-text">
          <span className="identification-reuqire-reason">
            Comply with Regulations:
          </span>{" "}
          In certain jurisdictions, we are required to report on workforce
          diversity. Providing this information helps us meet our legal
          obligations.
        </li>
        <li className="self-identification-text">
          <span className="identification-reuqire-reason">
            Improve Our Practices:
          </span>{" "}
          Self-identification data helps us evaluate and improve our diversity
          and inclusion initiatives.
        </li>
      </ul>
      <p className="sub-heading">Your Privacy Matters</p>
      <p className="self-identification-text">
        Participation is entirely voluntary, and the information you provide
        will be kept confidential. Your decision to participate or not
        participate will not affect your employment or application status. The
        data collected will be used solely for reporting and improvement
        purposes.
      </p>
      <div>
        <p className="sub-heading">Gender</p>
        <div>
          <input
            className="radio-input"
            type="radio"
            id="male"
            name="male-radio"
            value="male"
          />
          <label className="title margin-r" htmlFor="male">
            Male
          </label>
          <input
            className="radio-input"
            type="radio"
            id="female"
            name="female-radio"
            value="female"
          />
          <label className="title margin-r" htmlFor="female">
            Female
          </label>
          <input
            className="radio-input"
            type="radio"
            id="not-disclosed"
            name="not-disclosed-radio"
            value="not-disclosed"
          />
          <label className="title margin-r" htmlFor="not-disclosed">
            I choose not to disclose
          </label>
        </div>
      </div>
    </div>
  );
}

export default VoluntaryIdentification;
