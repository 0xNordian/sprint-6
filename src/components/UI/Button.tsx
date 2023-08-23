import React from 'react';

interface UIprops {
  className?: string;
  btnType: 'btn-primary' | 'btn-secondary' | 'btn-danger' | 'btn-warning';
  msg: string;
}

const UI = (props: UIprops) => {
  const btnType = props.btnType;

  const assets = {
    'btn-primary': 'bg-cPrimary hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition duration-300 shadow-md hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black]',
    'btn-secondary': 'bg-cSecondary hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded transition duration-300 shadow-md hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black]',
    'btn-danger': 'bg-cDanger hover:bg-red-700 text-white font-semibold py-2 px-4 rounded transition duration-300 shadow-md hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black]',
    'btn-warning': 'bg-cWarning hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded transition duration-300 shadow-md hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black]',
  };

  const assetType = assets[btnType];

  return (
    <div>
      <button className={assetType}>{props.msg}</button>
    </div>
  );
};

export default UI;