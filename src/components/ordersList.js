import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { dataToken } from '../features/services/servicesSlice'
import '../assets/scss/service.scss'

const OrderList = () => {

  const token = useSelector(dataToken)

  const [dataOrderList, setDataOrderList] = useState([])

  useEffect(() => {
    fetchData()
  }, [])


  const fetchData = async () => {
    try {
      const url = 'https://api-candidate-test.workforce-develop.com/v1/orders'

      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`

      // axios.interceptors.request.use(function (config) {
      //   config.headers.Authorization = `Bearer ${token}`
      //   return config;
      // });

      const res = await axios.get(url)
      setDataOrderList(res.data)


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
              <Link to="/detail">
                <p className="text-end pr-55">บริการ</p>
              </Link>
              <p className="text-end pr-130 fw-bolder">รายการ</p>
            </div>
          </div>
        </div>
        <div className="container d-grid justify-content-center">
          <h1 className="fw-bolder text-des">รายการ</h1>
          <div className="row">
            <div className="col-lg-12 p-46-0">
              {dataOrderList.length > 0 && dataOrderList.map((elm) => {
                return (
                  <div className="card-2 mb-4 box-shadow">
                    <div className="card-body">
                      <div className="card-text d-flex justify-content-between align-items-center">
                        <h5 className="color-1">{elm.service.name ? elm.service.name : 'No Data'}</h5>
                        <div className="d-flex">
                          <h5 className="color-2">ราคา</h5>
                          <h5 className="color-3 pl-1 pr-1">฿</h5>
                          <h5 className="color-3">{elm.service.price ? elm.service.price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : 'No Data'}</h5>
                        </div>
                      </div>
                      <div className="d-flex p-16-0 ">
                        <div className="d-flex">
                          <h5 className="color-5">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar3" viewBox="0 0 16 16">
                              <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z" />
                              <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                            </svg>
                          </h5>
                          <p className="color-5 mt-035 ml-3 mr-5 text-date ">{elm.createdAt ? moment(elm.createdAt).format("DD MMMM YYYY") : 'No Data'}</p>
                        </div>
                        <div className="d-flex">
                          <h5 className="color-5">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar3" viewBox="0 0 16 16">
                              <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z" />
                              <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                            </svg>
                          </h5>
                          <p className="color-5 mt-035 ml-3 text-date">{elm.updatedAt ? moment(elm.updatedAt).format("DD MMMM YYYY") : 'No Data'}</p>
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

export default OrderList;
