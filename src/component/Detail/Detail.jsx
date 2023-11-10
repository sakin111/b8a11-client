

import { useContext, useEffect } from 'react';

import { AuthContext } from '../AuthProvider/AuthProvider';

const HomeDetails = ({id}) => {


   const { filteredItem, filterDataById }= useContext(AuthContext)

    // const idInt = parseInt(_id);
    // const detail = details.find((detail) => detail.id === idInt);

    useEffect(() => {
        filterDataById(id);
      }, [id, filterDataById]);

    return (
        <div>
        {filteredItem ? (
          <div key={filteredItem.id}>
            <img src={filteredItem.serviceImage} alt={filteredItem.serviceName} />
            <h3>{filteredItem.serviceDescription}</h3>
            <p>{filteredItem.ViewDetails}</p>
          </div>
        ) : (
          <div>No item found</div>
        )}
      </div>
    );
};

export default HomeDetails;


{/* <div className="mt-16">
<div className="">
    <img src={detail.serviceImage} alt="" className="w-[80%] mx-auto h-[500px] rounded-md relative" />
    <div className="max-w-[1083px] h-36 bg-[#0B0B0B80] mx-auto -translate-y-36 "></div>
</div>
<div className="max-w-5xl mx-auto mt-6">
    <h3 className="text-3xl font-bold">{detail.serviceName}</h3>
    <p className="font-serif font-medium mt-6 text-gray-600">{detail.viewDetail}</p>
</div>
</div> */}