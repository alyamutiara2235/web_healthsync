import React from "react";
import LandingFeatureCard from "./LandingFeatureCard";
import { landingFeatureData } from "../data/landingFeature";

function LandingFeature() {
  return (
    <section id="features" className="bg-slate-50 py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-3">
            Fitur Unggulan Kami
          </h2>
          <p className="text-slate-600 max-w-lg mx-auto text-sm md:text-base">
            Eksplorasi berbagai alat simulasi kesehatan yang dirancang khusus untuk mempermudah pola hidup sehat Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {landingFeatureData.map((item) => (
            <LandingFeatureCard
              key={item.id}
              title={item.title}
              description={item.description}
              linkTo={item.linkTo}
              linkText={item.linkText}
              icon={item.icon}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default LandingFeature;