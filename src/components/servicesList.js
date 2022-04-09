import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { serviceId, updateToken, dataToken } from '../features/services/servicesSlice';
import '../assets/scss/service.scss'

const ServicesList = () => {

  const dispatch = useDispatch();
  const [dataServicesList, setDataServicesList] = useState([])
  const token = useSelector(dataToken)
  useEffect(() => {
    signIn()
    fetchData()
  }, [])

  const signIn = () => {
    const config = {
      ACCESS_TOKEN: { Authorization: `Bearer ${token}` }
    };

    const bodyParameters = {
      username: "Test numbertwo",
      password: "Test numbertwo"
    };

    axios.post('https://api-candidate-test.workforce-develop.com/v1/auth/signin',
      bodyParameters,
      config
    ).then((res) => {
      dispatch(updateToken(res.data.accessToken))
    }).catch((err) => {
      console.log(err)
    });
  }




  const fetchData = async () => {
    try {
      const url = 'https://api-candidate-test.workforce-develop.com/v1/services'
      const res = await fetch(url)
      const services = await res.json()
      console.log('services', services);
      setDataServicesList(services)
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <div className="d-grid ">
        <div className="jumbotron text-center section-bg-img">
          <div className="py-5 text-center container">
            <div className="d-flex justify-content-end">
              <p className="text-end pr-55 fw-bolder">บริการ</p>
              <Link to="/order">
                <p className="text-end fw-bolder pr-130">รายการ</p>
              </Link>
            </div>
            <div className="row py-lg-5">
              <div className="col-lg-6 col-md-8 mx-auto d-grid justify-content-center">
                <h1 className="fw-bolder text-des color-1 pb-27">คำบรรยายต่างๆนานา</h1>
                <p className="lead color-1 text-sub-des">
                  เรามีบริการที่ครบครันครอบคลุม พร้อมที่จะช่วยเหลือคุณใน
                  ทุกๆด้านอย่างที่คุณต้องการ
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="album col-md-12">
          <div className="container">
            <div className="row">
              <div className="col-md-12 p-46-0">
                <h2 className="title">งานบริการ</h2>
              </div>
            </div>

            <div className="row">
              {dataServicesList.length > 0 && dataServicesList.map((elm) => {
                return (
                  <div className="col-md-4 col-sm-6" key={elm._id}>
                    <div className="card mb-4 box-shadow">
                      <Link to="/detail">
                        <img className="card-img-top cursor-pointer" src={elm.picture} alt={elm._id} onClick={() => dispatch(serviceId(elm._id))} />
                      </Link>
                      <div className="card-body">
                        <div className="card-text d-flex justify-content-between align-items-center">
                          <p className="color-1">{elm.name}</p>
                          <div className="d-flex">
                            <p className="color-2">เริ่มต้น</p>
                            <h5 className="color-3 pl-1 pr-1">฿</h5>
                            <h5 className="color-3">{elm.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesList;
