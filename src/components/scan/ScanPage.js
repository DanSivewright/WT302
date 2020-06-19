import React from 'react'

export const ScanPage = (props) => {
  console.log(props.newestScan)

  React.useEffect(() => {
    setTimeout(() => {
      console.log('Go back')
      props.setNewestScan(null)
    }, 3000)
  })
  return (
    <div className={props.newestScan.status ? 'scan__page pass' : 'scan__page fail'}>
      <div className={props.newestScan.status ? 'circle__mid pass' : 'circle__mid fail'} />
      <div className={props.newestScan.status ? 'circle__front pass' : 'circle__front fail'} />

      <h2 className='scan__status'>
        {props.newestScan.status ? 'passed' : 'failed'}
      </h2>
    </div>
  )
}
