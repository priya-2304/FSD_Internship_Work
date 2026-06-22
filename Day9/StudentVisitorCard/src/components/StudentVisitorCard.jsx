function Card(props) {
  return (
    <div style={{ width: "750px", margin: "50px auto", borderRadius: "20px", overflow: "hidden", backgroundColor: "#fff",  boxShadow: "0 8px 20px rgba(0,0,0,0.2)",  fontFamily: "Arial", }}>
    
   <div style={{  backgroundColor: "#07295a", color: "white", padding: "20px 25px", display: "flex", justifyContent: "space-between", alignItems: "center", }} >
        
    <div style={{ width: "50%" }}>
    <h1 style={{  margin: 0, fontSize: "42px", lineHeight: "1.1", }}>Geeta UNIVERSITY</h1>
         
     <p style={{ color: "#d4af37", marginTop: "10px", fontSize:"20px" }}>
            LEARN | GROW | ACHIEVE
          </p>
        </div>
     <div style={{width : "40%",textAlign:"right",}}>

    <h2 style={{ margin: 0,fontSize:"32px", lineHeight:"1.1",}}>
      STUDENT <br />
      VISITOR CARD</h2>
      </div>
      </div>

      <div style={{ padding: "30px",  display: "flex", gap: "40px",  }}>
      
    <div>
       <img src={props.photo} alt="Visitor" style={{ width: "300px",height: "220px",borderRadius: "12px", objectFit: "cover",border: "3px solid #07295a",  }}/>
      <h2 style={{ textAlign: "center", fontFamily: "cursive", marginTop: "20px", color :"gray", }} > {props.visitorName} </h2>
       <hr />
       <p style={{ textAlign: "center" }}>Visitor Signature</p>
       </div>

    <div style={{ fontSize: "20px", lineHeight: "2.3" ,color: "#7b8794", fontWeight: "500", }}>
        <div>
           <b>Name :</b> {props.visitorName}
        </div>

        <div>
          <b>Visitor ID :</b> {props.visitorId}
        </div>

        <div>
          <b>College :</b> {props.collegeName}
        </div>

        <div>
          <b>Purpose :</b> {props.purpose}
        </div>

        <div>
         <b>Date :</b> {props.date}
        </div>

        <div>
          <b>Time In :</b> {props.timeIn}
        </div>

        <div>
           <b>Mobile :</b> {props.mobile}
        </div></div></div>


      <div style={{ backgroundColor: "#07295a", color: "white", padding: "20px", display: "flex", justifyContent: "space-between", alignItems: "center", }}>
  <div>
      Please carry this card <br />
      and return at the time of exit.
  </div>

  <div>
     <h3>Authorized Signature</h3>
      __________________
  </div>

  <div>
    <h2 style={{ color: "#d4af37" }}>  ID NO. {props.visitorId} </h2>  VALID ONLY FOR {props.date}
    </div> </div></div>
  );
}

export default Card;