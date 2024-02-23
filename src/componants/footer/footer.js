import React from "react";
import './footer.css'  

const Footer = () =>{
    return (
        <footer className="footer" id="footer">
                Copyright &#169; 2024 Aman Dhakar. All right reserved.
                <div className="footerNavLinks">
                    <h6 onClick={()=>{
                        var pdfUrl = 'https://github.com/AMANDHAKAR191/Resume/blob/main/Aman_Dhakar_Resume_20012024.pdf';
    
                        // Create an anchor element
                        var link = document.createElement('a');
                        link.href = pdfUrl;
                        link.download = 'AmanDhaker_Resume.pdf'; // Set the desired filename for the downloaded file
                        link.click();
                    }}>Download Resume</h6>
                </div>
        </footer>
        )
    }
    
    export default Footer