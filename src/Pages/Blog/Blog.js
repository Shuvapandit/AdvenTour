import React from 'react';
import './Blog.css'

const Blog = () => {
     return (
        <div className=' container mt-3 gx-2 text-justify ' >
            

    <div className=' '>
        <h4>Q1)Difference between authorization and authentication?</h4>
        <p className=''>Ans: Simply , authentication is the process of verifying who someone is, whereas authorization is the process of verifying what specific applications, files, and data a user has access to. The situation is like that of an airline that needs to determine which people can come on board.
        
       </p>

    </div>
    <div>
        <h4>Q2)Why are you using firebase? What other options do you have to implement authentication?</h4>
        <p>Ans: The Firebase Realtime Database lets you build rich, collaborative applications by allowing secure access to the database directly from client-side code. Data is persisted locally, and even while offline, realtime events continue to fire, giving the end user a responsive experience. <br></br> 
        Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.
        </p>

    </div>
    <div>
        <h4>Q3)What other services does firebase provide other than authentication?</h4>

    <p>
  Ans:  There are many services which Firebase provides, Most useful of them are: <br></br>

1.Cloud Firestore <br></br>
2.Cloud Functions <br></br>
3.Authentication <br></br>
4.Hosting <br></br>
5.Cloud Storage <br></br>
6.Google Analytics <br></br>
7.Predictions <br></br>
8.Cloud Messaging <br></br>
9.Dynamic Links <br></br>
10.Remote Config <br></br>
    </p>
    </div>
</div>
    
  


            
    
    );
};

export default Blog;