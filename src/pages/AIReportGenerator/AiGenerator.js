import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"; // For dispatch and selector
import { PiMagicWand } from "react-icons/pi";
import { AI_REPORT_HEADINGS, AI_REPORT_VULNS, VULNERABILITY_OPTIONS } from "../../constants/constants";
import Modal from "../../components/Modal/Modal";
import Loader from "../../components/Loader/Loader";
import ReportModal from "../../components/Modal/ReportModal";
import { toast } from "react-toastify";
import './aiGenerator.css'

const AiGenerator = () => {
  const dispatch = useDispatch();
  const [selectedVulnerability, setSelectedVulnerability] = useState(null);
  const [activeVulnerability, setActiveVulnerability] = useState(null); // For modal
  const [optionsData, setOptionsData] = useState({}); // Store inputs
  const [selectedHeadings, setSelectedHeadings] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const [generatedReport, setGeneratedReport] = useState(""); // To store generated MD report
  const [otherDetails, setOtherDetails] = useState("");
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
    <div className="flex flex-col justify-center items-center h-[94vh] bg-gradient-to-br from-gray-900 to-black" style={isLoading ? { opacity: 0.5 } : { opacity: 1 }}>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" /> 
      <div style={{ position: 'fixed', left: '2vh', top: '8vh', background:'white', padding:'1.1rem', borderRadius:'15px', fontSize:'1.5rem', fontWeight:'bold', }}>Balance Credits : {balanceCredits}
      </div>
      <div className="shadows" style={{ maxWidth: "75vw"}}>
        <div className="mb-[7rem]">
          <h1 className="text-3xl font-bold">Generate Your Reports Effortlessly.</h1>
          <h4 className="text-[1rem]">- With the power of AI</h4>
        </div>

           


        <div className="mb-14 flex flex-col" style={{ justifyContent: 'flex-start' }}>
          <label htmlFor="input" className="block text-lg font-semibold font-medium">
            Enter your website / (sub) domain / host / sdk name:
          </label>
          <input
            id="input"
            rows="4"
            onChange={(event) => handleOtherDetailsChange(event.target.value)}
            style={{ border: '1px solid gray' }}
            className="mt-1 block rounded-md  sm:text-sm h-[2rem] p-4 bg-gradient-to-br from-gray-900 to-black text-white"
          ></input>
        </div>
        <div className="mb-14">
          <h2 className="text-lg font-semibold">Choose Vulnerability type :</h2>
          <div className="flex flex-wrap gap-2" style={{ justifyContent: "center" }}>
            {AI_REPORT_VULNS.map((vulnerability) => (
              <button
                key={vulnerability.value}
                onClick={() => handleVulnerabilitySelect(vulnerability)}
                className={`item ${selectedVulnerability === vulnerability.value ? 'selected' : ''}
                  }`}
              >
                {vulnerability.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-14">
          <h2 className="text-lg font-semibold">Choose Headings</h2>
          <div className="flex flex-wrap gap-2" style={{ justifyContent: "center" }}>
            {AI_REPORT_HEADINGS.map((heading) => (
              <button
                key={heading.value}
                onClick={() => handleHeadingToggle(heading.value)}
                // className={`border border-gray-300 rounded-md px-3 py-1 text-sm ${selectedHeadings.includes(heading.value) ? "bg-blue-500 text-white" : "hover:bg-gray-100"}`}
                className={`item ${selectedHeadings.includes(heading.value)? 'selected' : ''}
                  }`}
              >
                {heading.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="input" className="block text-lg font-semibold font-medium ">
            If the above options doesn't satisfy you, explain the vulnerability , along with it's details to generate your report :
          </label>
          <textarea
            id="input"
            rows="4"
            onChange={(event) => handleOtherDetailsChange(event.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm  bg-gradient-to-br from-gray-900 to-black text-white"
          ></textarea>
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleReportGeneration}
          type="button"
        >
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            Generate Report <div style={{ scale: "1.3" }}><PiMagicWand /></div>
          </div>
        </button>

        {/* Show Loading Spinner */}
        {isLoading && <div style={{ top: 0, left: 0, height: '100vh', width: '100vw', position: 'fixed' }}><div style={{ top: '50vh', left: '50vw', position: 'fixed' }}><Loader /></div></div>}

        {/* Show Modal */}
        {activeVulnerability && (
          <Modal onClose={closeModal}>
            <h2 className="text-xl font-semibold">{activeVulnerability} Options</h2>
            {VULNERABILITY_OPTIONS[activeVulnerability]?.map((option, index) => (
              <div key={index} className="mb-4">
                <label className="block text-sm font-medium text-gray-700">{option.label}</label>
                {option.type === "input" ? (
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
                    style={{ maxHeight: "10vh", minHeight: "2rem" }}
                  />
                )}
              </div>
            ))}
          </Modal>
        )}

        {/* Show Report Modal after report is generated */}
        {generatedReport && <ReportModal report={generatedReport} />}
      </div>
    </div>
  );
};

export default AiGenerator;
