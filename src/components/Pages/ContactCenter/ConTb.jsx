import { Check, CheckBox, CheckBoxOutlineBlank, Image, Sort, SortByAlpha, SportsCricketOutlined } from '@mui/icons-material'
import React from 'react'
// import '../components/Pages/ContactCenter/ConTb.css'
import '../../Pages/ContactCenter/ConTb.css'
import sort from "../../../Images/Bearish/sort.svg";

const ConTb = () => {
    return (
        <div>
            <table className="Layout UI">
                <thead className="">
                    <tr className="">
                        <th className="">
                            <CheckBox />
                        </th>
                        <th className="LayoutHeader"> Name </th>
                        <th className="LayoutHeader">Email </th>
                        <th className="LayoutHeader">Company</th>
                        <th className="LayoutHeader">Phone Number</th>
                        <th className="LayoutHeader">Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="Row">
                        <td><CheckBox /></td>
                        <td>Vishal </td>
                        <td>v@gmail.com</td>
                        <td>Bvm Infotech</td>
                        <td>9632587415</td>
                        <td><Check /></td>
                    </tr>
                    <tr className="Row2">
                        <td><CheckBoxOutlineBlank /></td>
                        <td>Ganesh</td>
                        <td>g@gmail.com</td>
                        <td>Pvm Infotech</td>
                        <td>3256874195</td>
                        <td><Check /></td>
                    </tr>
                    <tr className="Row3">
                        <td><CheckBoxOutlineBlank /></td>
                        <td>Paresh</td>
                        <td>p@gmail.com</td>
                        <td>Lvm Infotech</td>
                        <td>1245986374</td>
                        <td><Check /></td>
                    </tr>
                    <tr className="Row1">
                        <td><CheckBoxOutlineBlank /></td>
                        <td>Paresh</td>
                        <td>p@gmail.com</td>
                        <td>Lvm Infotech</td>
                        <td>1245986374</td>
                        <td><Check /></td>
                    </tr>
                    <tr className="Row1">
                    <td><CheckBoxOutlineBlank /></td>
                        <td>.</td>
                        <td>.</td>
                        <td>.</td>
                        <td>.</td>
                        <td>.</td>
                    </tr>
                    <tr className="Row1">
                    <td><CheckBoxOutlineBlank /></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr className="Row1">
                        <td><CheckBoxOutlineBlank /></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ConTb

// import React, { useState } from "react";

// const ConTb = ({ data }) => {
//   const [filteredData, setFilteredData] = useState(data);

//   const handleFilter = (e) => {
//     const filterValue = e.target.value;
//     setFilteredData(
//       data.filter((item) =>
//         item.name.toLowerCase().includes(filterValue.toLowerCase())
//       )
//     );
//   };

//   return (
//     <div>
//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Age</th>
//             <th>Location</th>
//           </tr>
//         </thead>
//         <tbody>
//             <tr>
//               <td>vatsal</td>
//               <td>21</td>
//               <td>Surat</td>
//             </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default ConTb;