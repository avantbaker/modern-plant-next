const ContentBlock = ({
  className = '',
  title = '',
  info = ''
}) => {
  return (
  <div className={`${className} content-block mb-xxl`}>
        <div className='content-block__title heading-4 mb-lg'>{title}</div>
        <p className='content-block__paragraph paragraph'>{info}</p>
    </div>
  )
};

export default ContentBlock