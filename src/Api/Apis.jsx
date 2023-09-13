import axios from "axios";
export const callApi = async (url, requestType, body ,auth) => {
    // const history = useNavigate();
  
    let host='https://sabzikhata.000webhostapp.com/sabzimandi/User/';
    let host2='https://sabzikhata.000webhostapp.com/sabzimandi/Supplier/';
    // let host='https://sneakerkeeper.000webhostapp.com/';
  
    
    let token = localStorage.getItem("authToken");
    if (requestType === "GET") {
      try {
        if (auth){
          const data = await axios.get(host + url)
            return data;
          }
        const data = await axios.get(host + url);
        return data;
      } catch (err) {
  
        console.log(err.response.data,'Error')
        return console.error(err);
      }
    } else if (requestType === "POST") {
        if (auth){
          try {
            const data = await axios.post(host + url, body)
              return data;
          } catch (error) {
            if (error.response) {
              console.log(error.response.data);
              return error.response
            }
          }
        
        }
        else{
          try {
            const data = await axios.post(host + url, body)      
          return data;
          } catch (error) {
            if (error.response) {
              console.log(error.response.data,'Api Error REsponse');
              return error.response
            }
          }
          
        }
        
      
    } else if (requestType === "DELETE") {    
          try {
            const data = await axios.delete(host + url)
              return data;
          } catch (error) {
            if (error.response) {
              console.log(error.response.data);
              return error.response
            }
          }
        
      } 
  };



  export const callApi2 = async (url, requestType, body ,auth) => {
    // const history = useNavigate();
  
    let host='https://sabzikhata.000webhostapp.com/sabzimandi/Supplier/';
    
    // let host='https://sneakerkeeper.000webhostapp.com/';
  
    
    let token = localStorage.getItem("authToken");
    if (requestType === "GET") {
      try {
        if (auth){
          const data = await axios.get(host + url)
            return data;
          }
        const data = await axios.get(host + url);
        return data;
      } catch (err) {
  
        console.log(err.response.data,'Error')
        return console.error(err);
      }
    } else if (requestType === "POST") {
        if (auth){
          try {
            const data = await axios.post(host + url, body)
              return data;
          } catch (error) {
            if (error.response) {
              console.log(error.response.data);
              return error.response
            }
          }
        
        }
        else{
          try {
            const data = await axios.post(host + url, body)      
          return data;
          } catch (error) {
            if (error.response) {
              console.log(error.response.data,'Api Error REsponse');
              return error.response
            }
          }
          
        }
        
      
    } else if (requestType === "DELETE") {    
          try {
            const data = await axios.delete(host + url)
              return data;
          } catch (error) {
            if (error.response) {
              console.log(error.response.data);
              return error.response
            }
          }
        
      } 
  };