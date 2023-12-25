import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

function PieChart({section,value}) {
    const bgSet1=["#EA4623","#DCD633"]
    const labelSet1=["High Priority","Low Priority"]
    const bgSet2=["#DCD633","#0C8FFD","#EA4623","#54BE1F"]
    const labelSet2=["Today","Upcoming","Pending","Completed"]
    const data = {
        labels: section==="total"?labelSet2:labelSet1,
        datasets: [
          {
            label: 'Tasks',
            data: value,
            backgroundColor: section==="total"?bgSet2:bgSet1,
            
            
          },
        ]}
  return (
    <Pie
    
    options={{
      maintainAspectRatio: false}}
    data={data}
   
  />
  )
}

export default PieChart