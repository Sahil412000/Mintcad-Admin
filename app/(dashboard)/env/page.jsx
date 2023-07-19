import WalletsModal from "@/app/componants/Modals/WalletsModal";
import PrimaryForm from "@/app/componants/PrimaryForm";
import React from "react";

const page = () => {
  return (
    <div className='w-full h-max space-y-10 p-10'>
      <div className='flex flex-col justify-between gap-4 '>
        <h1 class='flex-grow  text-3xl font-extrabold leading-none tracking-tight text-gray-900   dark:text-white'>
          Manage Env File
        </h1>
      </div>
      <div className='space-y-5'>
        <PrimaryForm
          label='NFT Contract Address'
          name='nftAddress'
          placeholder='0xc8b1566E918f2C9bb9A385bB5dAF9F14429d6100'
        />
        <PrimaryForm
          label='Marketplace Address'
          name='marketplaceAddress'
          placeholder='0xc8b1566E918f2C9bb9A385bB5dAF9F14429d6100'
        />
        <PrimaryForm
          label='Pinata Submarine Key '
          name='pinataKey'
          placeholder='whfy86td76tev76wtf6et8wft67wetfv76twef'
        />
        <PrimaryForm
          label='Pinata Gateway'
          name='pinataGateway'
          placeholder='https://managed.mypinata.cloud/api/v1/content'
        />
        <PrimaryForm
          label='React App JWT Token'
          name='jwtToken'
          placeholder='0xc8b1566E918f2C9bb9A385bB5dAF9F14429d6100'
        />
        <PrimaryForm
          label='Blockchain Public Address'
          name='blockchainAddress'
          placeholder='0xc8b1566E918f2C9bb9A385bB5dAF9F14429d6100'
        />
        <PrimaryForm
          label='Backend URL'
          name='backendUrl'
          placeholder='https://mintcad.herokuapp.com'
        />
        <PrimaryForm
          label='Frontend URL'
          name='frontendUrl'
          placeholder='https://mintcad.com'
        />
        <PrimaryForm
          label='Transaction Commision'
          name='transactionCommision'
          placeholder='5%'
        />
        <PrimaryForm
          label='Printables Commision'
          name='printablesCommision'
          placeholder='8%'
        />
      </div>
    </div>
  );
};

export default page;
