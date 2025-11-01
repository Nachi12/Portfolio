import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveTab } from '../store/slices/tabSlice';

const Sidebar = () => {
  const dispatch = useDispatch();
  const activeTab = useSelector((state) => state.tab.activeTab);

  const handleTabClick = (tabId) => {
    dispatch(setActiveTab(tabId));
  };

 return (
  <div>
    <div className="fixed top-0 left-0 h-screen w-20 bg-gray-900 flex flex-col items-center py-6 space-y-6 shadow-lg border-r border-gray-700">
      {[
        { id: 'home', src: 'https://img.icons8.com/?size=100&id=PmkXCJ6t2lBA&format=png&color=FFFFFF', title: 'Home' },
        { id: 'about', src: 'https://img.icons8.com/?size=100&id=Pq3ux42zaZVT&format=png&color=FFFFFF', title: 'About' },
        { id: 'projects', src: 'https://img.icons8.com/?size=100&id=o5TPK01kK9ba&format=png&color=FFFFFF', title: 'Projects' },
        { id: 'certificates', src: 'https://img.icons8.com/?size=100&id=dJCeFvDDx12A&format=png&color=FFFFFF', title: 'Certificates' },
        { id: 'resume', src: 'https://img.icons8.com/?size=100&id=SGNSoxEHzdUB&format=png&color=FFFFFF', title: 'Resume' },
        { id: 'contact', src: 'https://img.icons8.com/?size=100&id=rsjakOsn77By&format=png&color=FFFFFF', title: 'Contact' },
      ].map((icon) => (
        <img
          key={icon.id}
          id={`icon-${icon.id}`}
          src={icon.src}
          title={icon.title}
          alt={icon.title}
          onClick={() => handleTabClick(icon.id)}
          className={`w-10 h-10 cursor-pointer transition-all duration-300 hover:scale-110 hover:brightness-125 ${
            activeTab === icon.id
              ? 'brightness-125 drop-shadow-[0_0_8px_#22c55e]'
              : 'opacity-70 hover:opacity-100'
          }`}
        />
      ))}
    </div>
  </div>
);

};

export default Sidebar;
