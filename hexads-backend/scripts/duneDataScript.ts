import connect from "../config/db";
import TargetKeywordModel from "../config/db/models/TargetKeywordModel";
import UserPreferencesModel from "../config/db/models/UserPreferencesModel";

connect();

export const fetchDatafromDune=async () =>{
    try{
  
      //Send to cognito the renew token request.
      let result = await requestDataFromDune();
      console.log(result.state);
      if(result.state == "QUERY_STATE_PENDING"){
        let result2=await checkStatusFromDune(result.execution_id);
        if(result2.state == "QUERY_STATE_COMPLETED"){
          let result3=await getResultFromDune(result.execution_id);
          let rowval=result3.result.rows;
          rowval.forEach(element => {
            
            var str = element.trader; 
  
            var re = "\\x"; 
  
    // Use of String replace() Method
            var address = str.replace(re, "0x"); 
            UserPreferencesModel.findOne({
              address:address
            }).then((document)=>{
              if(!document){
                console.log(document);

                const arr: number[] = [];
                const id=updateKeywordID("Top Traders on Uniswap");
                id.then((doc)=>{
                  arr.push(doc)
                  console.log(arr)
                })
                
                // const preferencemodel=new UserPreferencesModel({
                //   address:address,
                //   targetsOf:arr
                // });

                // preferencemodel.save().then((g)=>{
                //   console.log(g);
                // }).catch((err)=>{
                //   console.log(err);
                // });

              }else{
                const arr: number[] = document.targetsOf;
                const id=updateKeywordID("Top Traders on Uniswap");
                if(!arr.includes(id)){

                  arr.push(id);

                }
                new UserPreferencesModel({
                  address:address,
                  targetsOf:arr
                }).save().then((g)=>{
                  console.log(g);
                }).catch((err)=>{
                  console.log(err);
                });
                


                
             
              }
            });
       
          });


        }

      }
      // let {val}=result;
      // if(val.state =='QUERY_STATE_PENDING'){
  
      // }
  
      // res.status(200).json({"result":result});
  
    } catch(err){
      console.log(err);
      // res.status(400).json({"error":err});
    }
  
  }


  const updateKeywordID:any = async (keyword) => {

    await TargetKeywordModel.findOne({
        keyword: keyword
      })
      .then((document) => {
        if (!document) {
          const dataPatient = new TargetKeywordModel({
            keyword: keyword,
            id: getRandomInt(0,100)
          });
          dataPatient.save().then((g) => {
            console.log(g);
            var x=g.id;
            var y: number = +x;
            return y;
          }).catch((err) => {
            console.log(err);
          });
        } else {
          var x=document.id;
          var y: number = +x;
            return y;
        }
  
      })
      .catch((error) => {
        console.log(error);

      });
  };
  
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

  const requestDataFromDune:any = ()=>{
  
    return new Promise((resolve,reject)=>{
  
  
      var axios = require('axios');
  
  var config = {
    method: 'post',
    url: 'https://api.dune.com/api/v1/query/1698156/execute',
    headers: { 
      'x-dune-api-key': 'N5PgtwO0liJMcing2Fo744jbDCxmE7NQ'
    }
  };
  
  axios(config)
  .then(function (response) {
    resolve(response.data);
  })
  .catch(function (error) {
    reject(error);
  });
  
  
  
    });
  
  }

  const checkStatusFromDune:any=(execution_id)=>{
    return new Promise((resolve,reject)=>{

      var axios = require('axios');

var config = {
  method: 'get',
  url: `https://api.dune.com/api/v1/execution/${execution_id}/status`,
  headers: { 
    'x-dune-api-key': 'N5PgtwO0liJMcing2Fo744jbDCxmE7NQ'
  }
};

axios(config)
  .then(function (response) {
    resolve(response.data);
  })
  .catch(function (error) {
    reject(error);
  });

    });

  }

  const getResultFromDune:any=(execution_id)=>{
    return new Promise((resolve,reject)=>{

      var axios = require('axios');

var config = {
  method: 'get',
  url: `https://api.dune.com/api/v1/execution/${execution_id}/results`,
  headers: { 
    'x-dune-api-key': 'N5PgtwO0liJMcing2Fo744jbDCxmE7NQ'
  }
};

axios(config)
  .then(function (response) {
    resolve(response.data);
  })
  .catch(function (error) {
    reject(error);
  });

    });

  }

  fetchDatafromDune();
  
  