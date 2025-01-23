import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"; // For dispatch and selector
import { PiMagicWand } from "react-icons/pi";
import { AI_REPORT_HEADINGS, AI_REPORT_VULNS, VULNERABILITY_OPTIONS } from "../../constants/constants";
import Modal from "../../components/Modal/Modal";
import Loader from "../../components/Loader/Loader";
import ReportModal from "../../components/Modal/ReportModal";
import { toast } from "react-toastify";

const AiGenerator = () => {
  const dispatch = useDispatch();
  const [selectedVulnerability, setSelectedVulnerability] = useState(null);
  const [activeVulnerability, setActiveVulnerability] = useState(null); // For modal
  const [optionsData, setOptionsData] = useState({}); // Store inputs
  const [selectedHeadings, setSelectedHeadings] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const [generatedReport, setGeneratedReport] = useState(""); // To store generated MD report
  const [otherDetails, setOtherDetails] = useState("");
  const [target, setTarget] = useState("");

  const { email, accessToken } = useSelector(state => state.userDetailsReducer)
  const [balanceCredits, setBalanceCredits] = useState(0)

  const handleVulnerabilitySelect = (vulnerability) => {
    setOptionsData({});
    setSelectedVulnerability(vulnerability.value);
    setActiveVulnerability(vulnerability.value);
  };

  const handleHeadingToggle = (headingValue) => {
    if (selectedHeadings.includes(headingValue)) {
      setSelectedHeadings(selectedHeadings.filter((h) => h !== headingValue));
    } else {
      setSelectedHeadings([...selectedHeadings, headingValue]);
    }
  };

  const handleOptionChange = (vulnerability, optionLabel, value) => {
    setOptionsData((prev) => ({
      ...prev,
      [vulnerability]: { ...prev[vulnerability], [optionLabel]: value },
    }));
  };

  const handleReportGeneration = () => {
    const payload = {
      data: {
        "Target":target,
        "Headings to add": selectedHeadings,
        "Metadata information": optionsData,
        "Other details": otherDetails
      },
      email,
      accessToken
    };


    setIsLoading(true);
    dispatch({
      type: 'GENERATE_REPORT_SAGA',
      payload,
    });
  };

  const handleTargetHeadingChange = (value) => {
    setTarget(value);
  }
  const handleOtherDetailsChange = (value) => {
    setOtherDetails(value);
  }

  const [hasShownToast, setHasShownToast] = useState(false);

  useEffect(() => {
    if (!hasShownToast) {
      toast.warning("Please zoom out if you feel the design is zoomed up !");
      setHasShownToast(true); 
    }
  }, [hasShownToast]); 
  const closeModal = () => setActiveVulnerability(null);

  // Selector to get the report data from redux state (once saga is done)
  const reportData = useSelector((state) => state.ReportDataReducer); // Assuming the report data is in state.reportData

  // After report is generated, update the state and stop loading
  React.useEffect(() => {
    const data = reportData.reportData;
    if (data != "") {
      setIsLoading(false);
      setGeneratedReport(data); // Set the generated MD content from the saga
    }
  }, [reportData]);

  useEffect(() => {
    async function fetchBalanceCredits() {
      let credits = await fetch(`${process.env.REACT_APP_SERVER_URL}/report/balance?email=${email}`)
      
      credits = (await credits.json());
      credits = credits.data
      setBalanceCredits(credits)
    }
    fetchBalanceCredits();
  }, [])


  return (
    <div
  className="flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 to-purple-500"
  style={{
    opacity: isLoading ? 0.5 : 1,
    minHeight: '100vh', // Ensures it takes the full height of the viewport
    width: '100%',
  }}
>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  {/* Fixed Credit Balance Box */}
  <div
    style={{
      position: 'fixed',
      left: '2%',
      top: '8%', // Adjusted to remain responsive
      background: 'white',
      padding: '1.1rem',
      borderRadius: '15px',
      fontSize: '1.2rem', // Adjusted for responsiveness
      fontWeight: 'bold',
      zIndex: 10,
      maxWidth: '90%', // Prevent overflow on smaller screens
      boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    }}
  >
    Balance Credits: {balanceCredits}
  </div>

  {/* Main Container */}
  <div
    className="bg-white p-10 rounded-lg shadow-lg"
    style={{
      maxWidth: '90%', // Adjust to fit smaller screens
      width: '100%', // Ensure it adapts
      marginTop: '10vh', // Keeps some space below the nav bar
    }}
  >
    {/* Title */}
    <div className="mb-[7%] text-center">
      <h1 className="text-2xl md:text-3xl font-bold">
        Generate Your Reports Effortlessly.
      </h1>
      <h4 className="text-[0.9rem] md:text-[1rem]">- With the power of AI</h4>
    </div>

    {/* Input Section */}
    <div className="mb-14 flex flex-col">
      <label
        htmlFor="input"
        className="block text-md md:text-lg font-medium text-gray-700"
      >
        Enter your website / (sub) domain / host / sdk name:
      </label>
      <input
        id="input"
        onChange={(event) => handleTargetHeadingChange(event.target.value)}
        style={{ border: '1px solid gray' }}
        className="mt-1 block rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-[2rem] p-4"
      ></input>
    </div>

    {/* Vulnerability Section */}
    <div className="mb-14">
      <h2 className="text-md md:text-lg font-semibold">
        Choose Vulnerability type:
      </h2>
      <div className="flex flex-wrap gap-2 justify-center">
        {AI_REPORT_VULNS.map((vulnerability) => (
          <button
            key={vulnerability.value}
            onClick={() => handleVulnerabilitySelect(vulnerability)}
            className={`border border-gray-300 rounded-md px-3 py-1 text-sm ${
              selectedVulnerability === vulnerability.value
                ? 'bg-blue-500 text-white'
                : 'hover:bg-gray-100'
            }`}
          >
            {vulnerability.label}
          </button>
        ))}
      </div>
    </div>

    {/* Headings Section */}
    <div className="mb-14">
      <h2 className="text-md md:text-lg font-semibold">Choose Headings</h2>
      <div className="flex flex-wrap gap-2 justify-center">
        {AI_REPORT_HEADINGS.map((heading) => (
          <button
            key={heading.value}
            onClick={() => handleHeadingToggle(heading.value)}
            className={`border border-gray-300 rounded-md px-3 py-1 text-sm ${
              selectedHeadings.includes(heading.value)
                ? 'bg-blue-500 text-white'
                : 'hover:bg-gray-100'
            }`}
          >
            {heading.label}
          </button>
        ))}
      </div>
    </div>

    {/* Textarea for Custom Vulnerabilities */}
    <div className="mb-4">
      <label
        htmlFor="custom-input"
        className="block text-md md:text-lg font-medium text-gray-700"
      >
        If the above options don't satisfy you, explain the vulnerability along
        with its details to generate your report:
      </label>
      <textarea
        id="custom-input"
        rows="4"
        placeholder="The reporter's name is JOHN DOE / Keep the Priority between Critical and High. / Add today's date as Date reported"
        onChange={(event) => handleOtherDetailsChange(event.target.value)}
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
      ></textarea>
    </div>

    {/* Generate Button */}
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
      onClick={handleReportGeneration}
      type="button"
    >
      <div className="flex items-center justify-center gap-2">
        Generate Report <div style={{ transform: 'scale(1.3)' }}>{<PiMagicWand />}</div>
      </div>
    </button>

    {/* Loader */}
    {isLoading && (
      <div
        className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50"
      >
        <Loader />
      </div>
    )}

    {/* Modal */}
    {activeVulnerability && (
      <Modal onClose={closeModal}>
        <h2 className="text-lg md:text-xl font-semibold">
          {activeVulnerability} Options
        </h2>
        {VULNERABILITY_OPTIONS[activeVulnerability]?.map((option, index) => (
          <div key={index} className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              {option.label}
            </label>
            {option.type === 'input' ? (
              <input
                type="text"
                onChange={(e) =>
                  handleOptionChange(activeVulnerability, option.label, e.target.value)
                }
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              />
            ) : (
              <textarea
                onChange={(e) =>
                  handleOptionChange(activeVulnerability, option.label, e.target.value)
                }
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                style={{ maxHeight: '10%', minHeight: '2rem' }}
              />
            )}
          </div>
        ))}
      </Modal>
    )}

    {/* Report Modal */}
    {generatedReport && <ReportModal report={generatedReport} />}
  </div>
</div>

  );
};

export default AiGenerator;
