import React from 'react'
import { Row, Col } from 'antd'
import { db } from '../../firebase'
import { ScanPage } from '../scan/ScanPage'

export const DashPage = () => {
  const [totalScans, setTotalScans] = React.useState(0)
  const [passedScans, setPassedScans] = React.useState(0)
  const [failedScans, setFailedScans] = React.useState(0)
  const [scans, setScans] = React.useState([])
  const [newestScan, setNewestScan] = React.useState(null)

  React.useEffect(() => {
    db
      .firestore()
      .collection('scans')
      .orderBy('scannedAt')
      .onSnapshot(snap => {
        let scanLength = 0
        let passedScansCount = 0
        const newScans = []
        snap.forEach(doc => {
          // if ()
          scanLength++
          newScans.push(doc.data())
          if (doc.data().status) {
            passedScansCount++
          }

          if (totalScans > 0 && scanLength > totalScans) {
            console.log('New scan added')
          }
        })
        const latest = newScans.length - 1
        setNewestScan(newScans[latest])
        setScans(newScans)
        setFailedScans(scanLength - passedScansCount)
        setPassedScans(passedScansCount)
        setTotalScans(scanLength)
      })
      console.log(scans)
      // eslint-disable-next-line
  }, [])
  return (
    <div>
      {newestScan ? (
        <div>
          <ScanPage newestScan={newestScan} setNewestScan={setNewestScan} />
        </div>
      ) : (
        <Row className='dash__page'>
          <Col className='dash__wrapper'>
            <h2>Dashboard</h2>

            <Row className='card green'>
              <Col span={10} className='card__stats'>
                <p>Total Scans</p>
                <h2>{totalScans}</h2>
              </Col>
              <Col span={14}>
                {/* <p>Total Scans</p> */}
              </Col>
            </Row>

            <Row className='card blue'>
              <Col span={10} className='card__stats'>
                <p>Passed Scans</p>
                <h2>{passedScans}</h2>
              </Col>
              <Col span={14}>
                {/* <p>Total Scans</p> */}
              </Col>
            </Row>

            <Row className='card red'>
              <Col span={10} className='card__stats'>
                <p>Failed Scans</p>
                <h2>{failedScans}</h2>
              </Col>
              <Col span={14}>
                {/* <p>Total Scans</p> */}
              </Col>
            </Row>

          </Col>
        </Row>
      )}
    </div>
  )
}
