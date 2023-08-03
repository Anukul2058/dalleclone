import React, { useState } from 'react'

import Card from '../components/Card';
import Loader from '../components/Loader';


const RenderCards = ({ data, title }) => {
  if (data.length > 0) {
    return data.map((post) => {
      <Card key={post._id} {...post} />
    })
  }
  else {
    return <h2 style={{ margin: '3vw', color: 'rgb(65, 65, 252)' }}>{title}</h2>
  }

}


export default function Home() {
  const [allPosts, setAllPosts] = useState(null);
  const [searchText, setSearchText] = useState('')
  return (
    <section>
      <p className='intro'>
        <div className="intro-title">This is community showcase</div>
        <div className="intro-description">Browse through a collection of visually and imaginative stunning images generate by AI. </div>
      </p>
      <div className="search-div">
        <label htmlFor="name">Search Post</label>
        <input type="text" placeholder='Search Something..'  name='name' />
      </div>

      <div className="result">
        {searchText && (
          <div className='searchtext'>Showing result for <span>{searchText}</span></div>
        )}
      </div>

      <div className="searchResult">
        {searchText ? (
          <RenderCards
            data={[]}
            title='No search result found'
          />
        ) : (
          <RenderCards
            data={[]}
            title='No post found'
          />
        )}
      </div>



    </section>
  )
}
