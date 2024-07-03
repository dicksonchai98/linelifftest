import './style.css';
import liff from '@line/liff';
import axios from 'axios';

// liff
//   .init({
//     liffId: import.meta.env.VITE_LIFF_ID
//   }).then(() => {
//     if (!liff.isLoggedIn()) {
//      alert("用戶未登入");
//      liff.login();
//     } else {
//      alert("用戶已登入");
//      liff.getProfile()
//      .then(profile => {
//       const name = profile.displayName
//       document.querySelector('#app').innerHTML = `
//       <p><code>${profile}<code></p>
//       <button class='click'>獲取api</button>
//       `
//      })
//      .catch((err) => {
//       console.log('error', err);
//      });
//     }
//   }
//   ).catch((err) => {
//    console.log('初始化失敗')
//   });

// liff.init({ liffId: import.meta.env.VITE_LIFF_ID }).then(() => {
//   if (liff.isInClient()) {
//     alert('請用LINE App打開');
//   } else {
//     document.querySelector('#app').innerHTML = '<button class="click-btn">獲取API</button>';
//     const button = document.querySelector('.click-btn');
//     button.addEventListener('click', getApiData());
//   }
// });

// async function getApiData() {
//   try {
//     const response = await axios.get('https://dogapi.dog/api/v2/breeds', {
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     });
//     console.log(response.data);
//     document.querySelector('#app').innerHTML = '<p class="click-btn">${response.data}</p>';

//     // Handle response data as needed
//   } catch (error) {
//     console.error('Error fetching API data:', error);
//     // Handle errors
//   }
// }

liff.init({ liffId: import.meta.env.VITE_LIFF_ID }).then(() => {
  if (liff.isInClient()) {
    alert('請用LINE App打開');
  } if(!liff.isLoggedIn){
    liff.login()
  }
  else {
    liff.getProfile().then((profile)=>{
      document.querySelector('#app').innerHTML = '<p>`my profile name:${profile}`</p><br/><button class="click-btn">獲取API</button>';
      const button = document.querySelector('.click-btn');
      button.addEventListener('click', getApiData); // Remove the parentheses from getApiData
    })

  }
});

const button = document.querySelector('.click-btn');
button.addEventListener('click', getApiData); // Remove the parentheses from getApiData

async function getApiData() {
  try {
    const response = await axios.get('https://dogapi.dog/api/v2/breeds', {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    
    // Logging each breed name to the console
    let data = []

    for (let i = 0; i < response.data.data.length; i++) {
      console.log(response.data.data[i].id);
      data.push(response.data.data[i].id)
    }
    document.querySelector('#app').innerHTML = `<p class="api-response">${JSON.stringify(data)}</p>`;

    // Displaying the entire API response as JSON in a paragraph

    // Handle response data as needed
  } catch (error) {
    console.error('Error fetching API data:', error);
    // Handle errors
  }
}




// const BASE_URL = 'https://jsonplaceholder.typicode.com/todos/1';

// const getTodoItems = async () => {
//   try {
//     const response = await axios.get(BASE_URL,{headers: {
//       'Access-Control-Allow-Origin': true,
//     }});

//     const todoItems = response.data;

//     console.log(`GET: Here's the list of todos`, todoItems);

//     return todoItems;
//   } catch (errors) {
//     console.error(errors);
//   }
// };



// }


// function getUserAccount() {
//   return axios.get('/https://www.travel.taipei/open-api/zh-en/Attractions/All?page=1');
// }

// const data = await getUserAccount()
// console.log
// axios.get('/https://www.travel.taipei/open-api/zh-tw/Attractions/All?page=1')
// .then((response) => {
//   return response // 不需要再使用 JSON.parse，因為 Axios 會自動處理 JSON 格式
// })
// .then((data) => {
//   console.log('成功', data);
// })
// .catch((error) => {
//   console.log('錯誤', error);
// });


  // .then(() => {
  //   document.querySelector('#app').innerHTML = `
  //   <h1>my-liff-app-Id</h1>
  //   <p>LIFF init succeeded.</p>
  //   <a href="https://developers.line.biz/ja/docs/liff/" target="_blank" rel="noreferrer">
  //     LIFF Documentation
  //   </a>
  // `;
  // })
  // .catch((error) => {
  //   document.querySelector('#app').innerHTML = `
  //   <h1>create-liff-app</h1>
  //   <p>LIFF init failed.</p>
  //   <p><code>${error}</code></p>
  //   <a href="https://developers.line.biz/ja/docs/liff/" target="_blank" rel="noreferrer">
  //     LIFF Documentation
  //   </a>
  // `;
  // });

  // liff
  // .getProfile()
  // .then((profile) => {
  //   document.querySelector('#app').innerHTML=`
  //   <p>${profile.displayName}</p>`
  //   const name = profile.displayName;
  // })
  // .catch((err) => {
  //   console.log("error", err);
  // });

