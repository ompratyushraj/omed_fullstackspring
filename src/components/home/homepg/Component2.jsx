import React from "react";
import { CheckCircle, ShoppingCart, ShieldCheck, User } from "lucide-react";

const features = [
  {
    icon: <CheckCircle className="text-green-500 w-12 h-12" />,
    title: "QUALITY",
    description: "Every product delivered to you is of optimum quality."
  },
  {
    icon: <User className="text-green-500 w-12 h-12" />,
    title: "CUSTOMER'S TRUST",
    description: "Customer satisfaction is specified with generous interaction."
  },
  {
    icon: <ShieldCheck className="text-green-500 w-12 h-12" />,
    title: "PRODUCT SECURITY",
    description: "Product breakage is attentively verified."
  },
  {
    icon: <ShieldCheck className="text-green-500 w-12 h-12" />,
    title: "PRODUCT SECURITY",
    description: "Product breakage is attentively verified."
  },
  {
    icon: <ShoppingCart className="text-green-500 w-12 h-12" />,
    title: "AFFORDABLE PRICING",
    description: "Products are available at genuine discount."
  }
];

const Component2 = () => {
  return (
    <div className="bg-black min-h-screen flex flex-col justify-center items-center text-white p-8">
      <p className="text-center text-white fw-bold fs-1 mb-8 my-4">WHAT WE ENSURE</p>
      <div className="flex flex-wrap justify-center gap-8 w-full max-w-6xl my-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-gray-900 shadow-md text-center m-3 rounded-full w-72 h-72 p-4 flex flex-col items-center justify-center"
          >
            <div className="flex items-center justify-center mb-4">{feature.icon}</div>
            <h3 className="text-xl font-bold text-green-500">{feature.title}</h3>
            <p className="text-sm fw-bold text-gray-400 mt-2">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Component2;
