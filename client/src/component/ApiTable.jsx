/**
 * @maintainer: Zahirrrr
 * @license MIT
 * @project WPU-Open-Api
 */


 import React from 'react';
 import { Table, Button } from 'react-bootstrap';
 import { useSelector } from 'react-redux';
 import { useHistory } from 'react-router-dom';
 
 const ApiTable = () => {
   const { userInfo } = useSelector(state => state.userLogin);
 
   const memberId = userInfo && userInfo._id;
   const history = useHistory();
   
   const gempahandler = () => {
     history.push(`/member/apigempa`);
   };
 
   return (
     <Table responsive hover bordered striped className="table-centered">
       <thead>
         <tr>
           <th>API NAME</th>
           <th>INFORMATION</th>
           <th>PARAMETER</th>
           <th>ACTION</th>
         </tr>
       </thead>
       <tbody>
               <td>Info Gempa API</td>
               <td>Menampilkan Data Gempa Terkini Dari Web BMKG</td>
               <td>Tidak Ada</td>
                 <>
               <td>
                 <div className="buttons">
             <a href={"https://wpu-open-api.herokuapp.com/api/json/infogempa"} className="btn btn-primary">Click Me</a>
           </div>
                </td>
                 </>
                 <tr>
                 <td>Film Bioskop Comingsoon API</td>
               <td>Menampilkan film bioskop yg akan datang dari web jadwalnonton.com</td>
               <td>Tidak Ada</td>
                 <>
               <td>
                 <div className="buttons">
             <a href={"https://wpu-open-api.herokuapp.com/api/json/bioskopcomingsoon"} className="btn btn-primary">Click Me</a>
           </div>
                </td>
                 </>
                 </tr>
                 <tr>
                 <td>Wallpaper API</td>
               <td>Mencari gambar wallpaper sesuai kategori dan page dari web wallpaperflare.com</td>
               <td>search && page</td>
                 <>
               <td>
                 <div className="buttons">
             <a href={"https://wpu-open-api.herokuapp.com/api/json/wallpaper?search=anime"} className="btn btn-primary">Click Me</a>
           </div>
                </td>
                 </>
                 </tr>
                 <tr>
                 <td>Kbbi API</td>
               <td>Mencari kata yg terdapat di KBBI web Kemdikbud</td>
               <td>kata</td>
                 <>
               <td>
                 <div className="buttons">
             <a href={"https://wpu-open-api.herokuapp.com/api/json/kbbi?kata=mobil"} className="btn btn-primary">Click Me</a>
           </div>
                </td>
                 </>
                 </tr>
                 <tr>
                 <td>DataMasjid API</td>
               <td>Menampilkan data masjid di seluruh Indonesia dari Web www.dream.co.id (NOTE : untuk melihat list provinsi, silakan gunakan api/json/listkota)</td>
               <td>provinsi && pages</td>
                 <>
               <td>
                 <div className="buttons">
             <a href={"https://wpu-open-api.herokuapp.com/api/json/datamasjid?provinsi=dki-jakarta&page=2"} className="btn btn-primary">Click Me</a>
           </div>
                </td>
                 </>
                 </tr>
       </tbody>
     </Table>
     
     )}
 
 
 export default ApiTable;
