import React from 'react';
import Story from './Story';
import Button from './Button';
import './Stories.css';

const Stories = (props) => {
  return (
    <div className='Stories'>
      <div className='  stories-header'>
        <h3>{props.storiesTitle}</h3>
        <Button buttonType='light'
                buttonText='See More' />
      </div>
      <div className='stories-grid'>
        {
          props.stories.map( (story, index) => {
            return (
              <Story img={story.img} title={story.title} desc={story.desc} author={story.authName} authImg={story.authImg} estTime={story.estTime} />
              )
          })
        }
      </div>
    </div>
  )
}

export default Stories;
