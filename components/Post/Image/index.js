import {useState} from 'react'

import {loading} from './styles'

import Lazy from '../../Lazy'

const Image = ({image, className, ...props}) => {
  const {src, srcSet='', size: {width=1000, height=0}={}} = image

  const [loaded, setLoaded] = useState(!process.browser)

  return (
    <Lazy>
      {({_ref, inView}) => (
        <img
          ref={_ref}

          onLoad={() => setLoaded(true)}

          src={inView ? src : ''}
          srcSet={inView ? srcSet : ''}

          width={width}
          height={height}
          className={loaded ? className : [loading, className].join(' ')}
          loading="lazy"
          {...props}
        />
      )}
    </Lazy>
  )
}

export default Image