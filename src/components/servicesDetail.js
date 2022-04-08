import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { dataServiceById } from '../features/services/servicesSlice'
import '../assets/scss/service.scss'

const ServicesDetail = () => {
  const history = useHistory()
  const service_id = useSelector(dataServiceById)

  const [dataServicesDetail, setDataServicesDetail] = useState([])

  useEffect(() => {
    fetchData()

  }, [])

  const fetchData = async () => {
    try {
      const url = `https://api-candidate-test.workforce-develop.com/v1/services/${service_id}`
      const res = await fetch(url)
      const servicesDetail = await res.json()
      console.log('servicesDetail', servicesDetail);
      setDataServicesDetail(servicesDetail)
    } catch (err) {
      console.log(err);
    }
  }


  // const bookIng = () => {
  //   axios.post((`https://api-candidate-test.workforce-develop.com/v1/services/${service_id}/booking`), {
  //     //No BODY
  //   }).then((res) => {
  //     console.log('res-bookIng', res);
  //     history.push('./order')
  //   })
  // }

  const token = "eyJ1c2VySWQiOiI2MjRmOGJhOTliYzg2Yzk5Y2QxYWU2YTIiLCJpYXQiOjE2NDk0MDc4OTUsImV4cCI6MTY0OTQ0Mzg5NX0.EwazCHwOjHxkwxcWI3uuVXBQqdU2o_MX_ZvdhREcbZI.EwazCHwOjHxkwxcWI3uuVXBQqdU2o_MX_ZvdhREcbZI"


  const bookIng = async () => {
    // const config = {
    //   headers: {
    //     accessToken: token
    //   },
    // };

    // const bodyParameters = {
    //   username: "Test numbertwo",
    //   password: "Test numbertwo"
    // };

    // axios.post(`https://api-candidate-test.workforce-develop.com/v1/services/${service_id}/booking`,
    //   // bodyParameters,
    //   config
    // ).then((res) => {
    //   console.log('res', res)
    // }).catch((err) => {
    //   console.log('err', err)
    // })

    try {
      const url = `https://api-candidate-test.workforce-develop.com/v1/services/${service_id}/booking`

      const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MjRmOGJhOTliYzg2Yzk5Y2QxYWU2YTIiLCJpYXQiOjE2NDk0MTcwMzUsImV4cCI6MTY0OTQ1MzAzNX0.f5FI6Tw-qItgPW6CJmv1qKlOVlceZ_QmmYxjSrFpRbo"
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`

      // axios.interceptors.request.use(function (config) {
      //   config.headers.Authorization = `Bearer ${token}`
      //   return config;
      // });

      const res = await axios.post(url)

      if (res.status === 200) {
        history.push('./order')
      }

    } catch (err) {
      console.log(err);
    }

  }
  return (
    <>
      <div className="d-grid ">
        <div className="jumbotron text-center">
          <div className="py-5 text-center container">
            <div className="d-flex justify-content-end">
              <p className="text-end pr-55 fw-bolder">บริการ</p>
              <Link to="/">
                <p className="text-end pr-130">รายการ</p>
              </Link>
            </div>
          </div>
        </div>
        <div className="container">
          <h1 className="fw-bolder text-des">{dataServicesDetail.name ? dataServicesDetail.name : 'No ID SERVICE'}</h1>
          <div className='mt-3'>
            <span className="fw-bolder pl-1 pr-1 text-price">฿</span>
            <span className="fw-bolder mt-5 text-price">{dataServicesDetail.price ? dataServicesDetail.price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : 'No ID SERVICE'}</span>
          </div>
          <div className='fw-bolder mt-15'>
            {dataServicesDetail.description ? <pre><code>{dataServicesDetail.description}</code></pre> : 'No ID SERVICE'}
          </div>
          <button type="button" className="btn btn-primary btn-custom color-4" onClick={bookIng}>จองบริการ</button>
        </div>
      </div>
    </>
  );
};

export default ServicesDetail;
