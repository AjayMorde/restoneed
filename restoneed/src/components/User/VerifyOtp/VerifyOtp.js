import { useLocation, useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import api from "../../../services/api";

export default function VerifyOtp() {

  const { state } = useLocation();
  const email = state?.email;

  const navigate = useNavigate();
  const [otp,setOtp] = useState(["","","","","",""]);
  const [error,setError] = useState("");
  const [loading,setLoading] = useState(false);

  const inputs = useRef([]);

  const handleChange = (val,i)=>{
    if(isNaN(val)) return;
    let arr=[...otp];
    arr[i]=val;
    setOtp(arr);
    if(val && i<5) inputs.current[i+1].focus();
  };

  const handleVerify = async()=>{
    const code = otp.join("");
    if(code.length !== 6){
      setError("Enter valid OTP");
      return;
    }

    try{
      setLoading(true);

      await api.post("/auth/verify-otp",{
        email,
        otp:code
      });

      navigate("/login");

    }catch(err){
      setError(err.response?.data?.message || "Invalid OTP");
    }finally{
      setLoading(false);
    }
  };

  return(
    <div className="otp-box">
      <h2>Email Verification</h2>
      <p>OTP sent to {email}</p>

      {error && <p style={{color:"red"}}>{error}</p>}

      <div className="otp-inputs">
        {otp.map((v,i)=>(
          <input
            key={i}
            maxLength="1"
            value={v}
            ref={el=>inputs.current[i]=el}
            onChange={e=>handleChange(e.target.value,i)}
          />
        ))}
      </div>

      <button onClick={handleVerify} disabled={loading}>
        {loading ? "Verifying..." : "Verify"}
      </button>
    </div>
  );
}
