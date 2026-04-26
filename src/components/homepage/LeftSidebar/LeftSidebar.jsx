import Link from 'next/link';
import React from 'react';

const LeftSidebar = ({categories,activeId}) => {
    // console.log('categories',categories.category_id)
    return (
        <div>
            <ul className="flex flex-col space-y-2">
          {categories.map((category) => (
            <li
              className={`${activeId===category.category_id && 'btn btn-sm bg-purple-500 text-white'}  p-1 rounded-sm`}
              key={category.category_id}
            >
              <Link className='block' href={`/category/${category.category_id}`}>{category.category_name}</Link>
            </li>
          ))}
        </ul>
        </div>
    );
};

export default LeftSidebar;