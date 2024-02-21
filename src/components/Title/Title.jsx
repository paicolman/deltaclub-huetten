import './Title.css'

export default function Title({ titleClass, mainTitle, subTitle, picFooter }) {
  return (
    <div className={`title-bar ${titleClass}`}>
      <h1>{mainTitle}</h1>
      <h2>{subTitle}</h2>
      <div className='picfooter'>{picFooter}</div>
    </div>
  )
}
