import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const ServicesMenu = () => {
  return (
    <div className="w-64 p-4 bg-white shadow-md">
      <h2 className="mb-4 text-xl font-bold">Our Services</h2>
      <ul>
        <li className="mb-2">
          <Link to="/japanese-language" className="flex items-center justify-between block p-3 bg-gray-100 rounded hover:bg-red-600">
            Japanese Language
            <FontAwesomeIcon icon={faChevronRight} />
          </Link>
        </li>
        <li className="mb-2">
          <Link to="/student-visa" className="flex items-center justify-between block p-3 bg-gray-100 rounded hover:bg-red-600">
            Student Visa
            <FontAwesomeIcon icon={faChevronRight} />
          </Link>
        </li>
        <li className="mb-2">
          <Link to="/ssw" className="flex items-center justify-between block p-3 bg-gray-100 rounded hover:bg-red-600">
            SSW
            <FontAwesomeIcon icon={faChevronRight} />
          </Link>
        </li>
        <li className="mb-2">
          <Link to="/training-visa" className="flex items-center justify-between block p-3 bg-gray-100 rounded hover:bg-red-600">
            Training Visa
            <FontAwesomeIcon icon={faChevronRight} />
          </Link>
        </li>
        <li className="mb-2">
          <Link to="/business-visa" className="flex items-center justify-between block p-3 bg-gray-100 rounded hover:bg-red-600">
            Business Visa (Long-Term)
            <FontAwesomeIcon icon={faChevronRight} />
          </Link>
        </li>
        <li className="mb-2">
          <Link to="/visit-visa" className="flex items-center justify-between block p-3 bg-gray-100 rounded hover:bg-red-600">
            Visit Visa
            <FontAwesomeIcon icon={faChevronRight} />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default ServicesMenu;
