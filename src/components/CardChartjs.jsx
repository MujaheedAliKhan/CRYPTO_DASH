import { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  TimeScale,
} from "chart.js";
import "chartjs-adapter-date-fns";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  TimeScale,
);

const API_URL = import.meta.env.VITE_COIN_API_URL;

const CardChartjs = ({ coinId }) => {

    const [chartdata, setChartData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPrice = async () => {
            const res = await fetch(`${API_URL}/${coinId}/market_chart?vs_currency=usd&days=7`)
            const data = await res.json();
            console.log(data);

            const prices = data.prices.map((price) => ({
                x: price[0],
                y: price[1]
            }))

            console.log(prices);

            setChartData({
                datasets: [
                    {
                        label: 'Price (USD)',
                        data: prices,
                        fill: true,
                        borderColor: '#007bff',
                        backgroundColor: 'rgba(0 ,123, 255, 0.1)',
                        pointRadius: 0,
                        tension: 0.3
                    },
                ],
            });

            setLoading(false);
        };

        fetchPrice();
    }, [coinId]); 

    if(loading) return <p>Loading....</p>
    return <div style={{
        marginTop: '30px',
        position: 'relative',
        width: '100%',
        height: '50vh'
        }}>
 
        <Line // line chart
            data={chartdata}
            options={{
                responsive: true,
                plugins: {
                    legend: {display:false},
                    tooltip: { // the tooltip will appear when hover on near a point
                        mode: 'index',
                        intersect: false 
                    },
                },

                scales: {
                    x:{
                        type: 'time',
                        time: {
                            unit: 'day'
                        },

                        ticks:{  // if i tick on x axis it shows the data through thi obj
                            autoSkip: true, //skip the text if it is more
                            maxTicksLimit: 7
                        }
                    },
                    y:{
                       ticks:{ 
                        callback: (value) => `$${value.toLocaleString()}`  //func runs when every price changes
                       } 
                    }
                }
            }}
        />
    </div>
};

export default CardChartjs;
