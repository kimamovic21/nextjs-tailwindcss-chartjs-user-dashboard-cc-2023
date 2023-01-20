import React from 'react';
import {data} from 'data/data.js';
import {FaShoppingBag} from 'react-icons/fa';

const RecentOrders = () => {
  return (
    <div className='w-full col-span-1 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white overflow-scroll'>

        <h1>Recent orders</h1>

        <ul>
            {data.map((order, id) => (
                <li key={id} className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 flex items-center cursor-pointer'>
                    <div className='bg-purple-200 rounded-lg p-3'>
                        <FaShoppingBag className='text-purple-800'/>
                    </div>

                    <div className='pl-4'>
                        <p className='text-gray-800 font-bold'>${order.total}</p>
                        <p className='text-gray-400 text-sm'>{order.name.first}</p>
                    </div>
                    
                    <p className='lg:flex md:hidden absolute right-6 tex-sm'>
                        {order.date}
                    </p>
                </li>
            ))}
        </ul>

    </div>
  );
};

export default RecentOrders;



// 1. importujemo data.js fajl
// 2. dodajemo h1 element
// 3. importujemo react ikonicu
// 4. stiliziramo parent div element
// 5. dodajemo ul element
// 6. dodajemo js map metodu
// 7. unutar js map metode dodajemo i stiliziramo HTML elemente
