import { useQuery } from '@tanstack/react-query';
import React from 'react';
import PackageCard from '../../Shared/PackageCard/PackageCard';
import Loading from '../../Shared/Loading/Loading';

const Package = () => {
    const { data: packages = [], isLoading } = useQuery({
        queryKey: ['package'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/package')
            const data = await res.json();
            return data;
        }
    });

    if(isLoading){
        return <Loading></Loading>
    }

    return (
        <div className='m-10 mt-20'>
            <h3 className='text-xl text-center font-bold text-green-400'>PACKAGES</h3>
            <h1 className='text-5xl font-bold text-center mb-10 text-gray-600'>Awesome Packages</h1>
            <div className='grid lg:grid-cols-4 gap-4'>
                {
                    packages?.map(pack => <PackageCard
                        key={pack._id}
                        pack={pack}
                    ></PackageCard>)
                }
            </div>
        </div>
    );
};

export default Package;