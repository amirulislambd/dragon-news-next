import React from 'react';
import Marquee from 'react-fast-marquee';

const BreakingNews = () => {

   const news=[
        {
          id: 1,
          title: "Middle East tensions rise as Israel strikes Lebanon despite ceasefire"
        },
        {
          id: 2,
          title: "Palestinians hold first elections since Gaza war amid low turnout"
        },
        {
          id: 3,
          title: "Global energy supply disrupted due to Strait of Hormuz crisis"
        },
        {
          id: 4,
          title: "Indonesia mourns UN peacekeeper killed in Lebanon conflict"
        },
        {
          id: 5,
          title: "Global economy faces slowdown due to Middle East war impact"
        },
        {
          id: 6,
          title: "US and Iran indirect talks continue amid rising regional tensions"
        }
      ]

    return (
        <div className='flex items-center gap-2 border border-zinc-100  p-4 my-5 container mx-auto'>
            <button className='btn btn-error text-white'>Latest News</button>
            <Marquee pauseOnHover={true}>
                {
                    news.map(n=> <span className='mx-4' key={n.id}>{n.title}</span> )
                }
            </Marquee>
        </div>
    );
};

export default BreakingNews;