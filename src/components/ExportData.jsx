// src/components/ExportData.jsx
import { useState } from "react";

export default function ExportData() {
  const [exportData, setExportData] = useState(null);
  const [isExporting, setIsExporting] = useState(false);

  const generateExportData = () => {
    setIsExporting(true);
    
    const exportObj = {
      exportDate: new Date().toISOString(),
      habits: {},
      journalEntries: {}
    };

    // Get all habit data
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const value = localStorage.getItem(key);
      
      if (key && key.startsWith('habit_day_')) {
        const habitName = decodeURIComponent(key.replace('habit_day_', ''));
        exportObj.habits[habitName] = {
          currentDay: parseInt(value) || 0,
          progress: Math.min(100, ((parseInt(value) || 0) / 21) * 100)
        };
      }
      
      if (key && key.startsWith('journal_')) {
        const date = key.replace('journal_', '');
        exportObj.journalEntries[date] = value;
      }
    }

    setExportData(exportObj);
    setIsExporting(false);
  };

  const downloadData = () => {
    if (!exportData) return;
    
    const dataStr = JSON.stringify(exportData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    
    const link = document.createElement('a');
    link.href = URL.createObjectURL(dataBlob);
    link.download = `habit-tracker-export-${new Date().toISOString().split('T')[0]}.json`;
    link.click();
  };

  const copyToClipboard = () => {
    if (!exportData) return;
    
    const dataStr = JSON.stringify(exportData, null, 2);
    navigator.clipboard.writeText(dataStr);
    alert('Data copied to clipboard!');
  };

  return (
    <div className="bg-white border rounded-xl p-4 mt-4">
      <h3 className="font-semibold mb-3">📤 Export Your Data</h3>
      
      {!exportData ? (
        <div>
          <p className="text-sm text-gray-600 mb-3">
            Export all your habit progress and journal entries as a JSON file.
          </p>
          <button
            onClick={generateExportData}
            disabled={isExporting}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
          >
            {isExporting ? 'Generating...' : 'Generate Export Data'}
          </button>
        </div>
      ) : (
        <div>
          <div className="bg-gray-50 p-3 rounded mb-3 text-sm">
            <p><strong>Habits tracked:</strong> {Object.keys(exportData.habits).length}</p>
            <p><strong>Journal entries:</strong> {Object.keys(exportData.journalEntries).length}</p>
            <p><strong>Export date:</strong> {new Date(exportData.exportDate).toLocaleString()}</p>
          </div>
          
          <div className="flex gap-2">
            <button
              onClick={downloadData}
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition flex-1"
            >
              💾 Download JSON
            </button>
            <button
              onClick={copyToClipboard}
              className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition flex-1"
            >
              📋 Copy
            </button>
            <button
              onClick={() => setExportData(null)}
              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}