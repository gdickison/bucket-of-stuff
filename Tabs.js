// Generic tab component for use in React/Next projects
'use client'
import { useState } from "react"

export default function Tabs ({ children }) {
  const [activeTab, setActiveTab] = useState(children[0].props.label);

  const handleClick = (e, newActiveTab) => {
    e.preventDefault();
    setActiveTab(newActiveTab);
  };

  return (
    <div className="w-full max-w-[1800px] mx-auto">
      <div className="flex flex-col md:flex-row border-b border-gray-300 text-gray-500">
        {children.map(child => (
          <button
            key={child.props.label}
            className={`${
              activeTab === child.props.label ? 'border-b-2 text-gray-900 text-lg py-4 px-4 text-center bg-[#c2d7b7]' : 'lg:hover:bg-bg-light text-gray-500 hover:text-gray-700 hover:bg-[#e6eede] bg-[#fafdf6] py-4 px-4 text-center text-lg font-medium'
            } flex-1 font-medium py-2`}
            onClick={e => handleClick(e, child.props.label)}
          >
            {child.props.label}
          </button>
        ))}
      </div>
      <div className="py-4">
        {children.map(child => {
          if (child.props.label === activeTab) {
            return <div key={child.props.label}>{child.props.children}</div>;
          }
          return null;
        })}
      </div>
    </div>
  )
}

const Tab = ({ label, children }) => {

  return (
    <div label={label} className="hidden">
      {children} {/* Tab content goes here */}
    </div>
  );
};

export { Tabs, Tab };
