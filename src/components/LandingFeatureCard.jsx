import React from "react";
import { Link } from "react-router-dom";

function LandingFeatureCard({ title, description, linkTo, linkText, icon }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300 flex flex-col justify-between">
      <div>
        <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
        <p className="text-slate-600 text-sm leading-relaxed mb-4">
          {description}
        </p>
      </div>
      <Link 
        to={linkTo} 
        className="text-emerald-600 font-medium text-sm hover:text-emerald-700 flex items-center gap-1 mt-2"
      >
        {linkText} &rarr;
      </Link>
    </div>
  );
}

export default LandingFeatureCard;