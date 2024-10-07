import React from 'react';

type LogViewerProps = {
  logs: Array<{
    date: string;
    name: string;
    description: string;
  }>;
  selectedLog?: string;
  onSelectLog: (logName: string) => void;
};

const LogViewer: React.FC<LogViewerProps> = ({ logs, selectedLog, onSelectLog }) => {
  return (
    <div className="flex">
      {/* Sidebar for log list */}
      <div className="w-1/4 p-2 border-r border-gray-300">
        <ul className="space-y-2">
          {logs.map((log) => (
            <li
              key={log.name}
              className={`cursor-pointer p-2 rounded ${
                selectedLog === log.name ? 'bg-blue-200' : 'hover:bg-gray-100'
              }`}
              onClick={() => onSelectLog(log.name)}
            >
              <div className="font-bold">{log.date}</div>
              <div>{log.name}</div>
            </li>
          ))}
        </ul>
      </div>
      
      {/* Log details display */}
      <div className="w-3/4 p-4">
        {selectedLog ? (
          <div className="whitespace-pre-wrap p-2 border border-gray-300 rounded bg-white shadow">
            {
              logs.find((log) => log.name === selectedLog)?.description || 
              'No log details available.'
            }
          </div>
        ) : (
          <div>Select a log to view details</div>
        )}
      </div>
    </div>
  );
};

export default LogViewer;
```