import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import { ToastContainer, toast } from "react-toastify";
import remarkGfm from "remark-gfm"; // Optional for GitHub flavored markdown

const ReportModal = ({ report }) => {
  const [editableReport, setEditableReport] = useState(report);

  const handleCopy = () => {
    navigator.clipboard.writeText(editableReport);
    toast.success("Report Markdown copied to clipboard !")
  };

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-75 flex justify-center items-center">
      <div
        className="bg-gray-800 p-6 rounded-lg shadow-lg w-[90vw] h-[80vh] flex flex-row-reverse"
      >
        {/* Markdown Viewer */}
        <div className="w-1/2 h-full relative bg-gray-900 p-6 rounded-md overflow-auto">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-purple-400">Generated Report</h2>
            <div className="flex gap-[1rem]">
            <button
              onClick={handleCopy}
              className="bg-green-700 hover:bg-green-800 text-white font-semibold py-2 px-4 rounded shadow-md transition-colors"
            >
              Copy Final Report
            </button>
            <button
              onClick={() => window.location.reload()}
              className="bg-red-700 hover:bg-red-800 text-white font-semibold py-2 px-4 rounded shadow-md transition-colors"
            >
              Discard
            </button>
            </div>
          </div>
          <div className="overflow-y-auto text-white prose prose-invert h-[calc(100%-4rem)] p-4 bg-gray-950 rounded-md">
            <ReactMarkdown remarkPlugins={remarkGfm}>
              {editableReport}
            </ReactMarkdown>
          </div>
        </div>

        {/* Markdown Editor */}
        <div className="w-1/2 h-full pr-6" style={{display:'flex', flexDirection:'column', justifyContent:'flex-start'}}>
          <h2 className="text-2xl font-bold text-blue-400 mb-4" style={{width:'min-content', minWidth:'12rem'}}>Edit Markdown</h2>
          <textarea
            value={editableReport}
            onChange={(e) => setEditableReport(e.target.value)}
            className="w-full h-[calc(100%-3rem)] p-4 rounded-md bg-gray-800 text-white  shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            style={{border:'1px dotted gray'}}
          />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ReportModal;
