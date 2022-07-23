// import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Tables from './Tables/Tables'
import UNavbar from '../UNavbar'
import { UserData } from '../../Data'
import BarChart from '../BarChart'
import LineChart from '../LineChart'
const Dashboard = () => {
    // const [name, setName] = useState('John')
    // const [title, setTitle] = useState('CEO')
    // const [status, setStatus] = useState('Active')
    // const [data, setData] = useState([])
    // console.log(data)
    // useEffect(() => {
    //     axios.get('http://localhost:8000/insurance', {
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }
    //     }).then(res => {
    //         console.log(typeof res.data)
    //         setData(res.data)
    //     }
    //     ).catch(err => {
    //         console.log(err)
    //     }
    //     )
    // }, []);
    const [userData, setUserData] = useState({
        labels: UserData.map((data) => data.year),
        datasets: [
            {
                label: "Revenue gained",
                data: UserData.map((data) => data.userGain),
                backgroundColor: [
                    "rgba(75,192,192,1)",
                    "#ecf0f1",
                    "#50AF95",
                    "#f3ba2f",
                    "#2a71d0",
                ],
                borderColor: "black",
                borderWidth: 2,
            },
        ],
    });
    return (
        <>
            <UNavbar />
            <div>
                <div class="flex flex-col mx-10">
                    <h1 className='text-2xl mt-8 mb-10'>Transaction History</h1>
                </div>
                <div class="flex flex-col">
                    <div class="-my-2 overflow-x-auto mx-10">
                        <div class="py-2 align-middle inline-block w-3/4 mx-auto">
                            <div class="shadow overflow-hidden border-b border-pur sm:rounded-lg">
                                <table class="min-w-full divide-y divide-pur">
                                    <thead class="bg-black">
                                        <tr>
                                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">S.No</th>
                                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">From</th>
                                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Amount</th>
                                        </tr>
                                    </thead>
                                    <tbody class="bg-white divide-y divide-gray-200">

                                        {/* {data.map(item => {
                    
                    return (
                      <Tables  />
                    )
                  })} */}

                                        <Tables />
                                        <Tables />
                                        <Tables />
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col mx-10">
                        <h1 className='text-2xl mt-8 mb-10'>Revenue</h1>
                    </div>
                    <div className="mx-10 flex">
                        <div style={{ width: 700 }}>
                            <BarChart chartData={userData} />
                        </div>
                        <div style={{ width: 700 }} className='mx-20'>
                            <LineChart chartData={userData} />
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Dashboard; 